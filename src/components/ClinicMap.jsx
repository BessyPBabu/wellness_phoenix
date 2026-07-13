// components/ClinicMap.jsx

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "450px",
};

// HOW TO FILL THIS IN PROPERLY:
// 1. Open https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
// 2. Search each clinic by address (not by an old business name that may still be attached to the building)
// 3. Click the correct pin, copy the "Place ID" (starts with "ChIJ...")
// 4. Paste it into placeId below. That's what makes the marker snap to Google's actual
//    building record instead of a hand-guessed lat/lng.
//
// `position` below is kept ONLY as a fallback in case geocoding fails (offline, quota, bad key) —
// it is not the source of truth anymore.
const locations = [
  {
    id: 1,
    name: "Clinic",
    address: "Opp. Bharat Petroleum Pump, Kundannur",
    placeId: "", // <-- paste real Place ID here
    position: {
      lat: 9.93838389483182,
      lng: 76.32165961757538,
    },
    url: "https://maps.app.goo.gl/ppPXVjJEtcJP1ns3A",
  },
  {
    id: 2,
    name: "Wellness Center",
    address: "Backside of Indian Oil Pump, Maradu",
    placeId: "", // <-- paste real Place ID here (search by address, not "Sydney Montessori" — that business no longer occupies the building)
    position: {
      lat: 9.938293932244187,
      lng: 76.32504805915853,
    },
    url: "https://maps.app.goo.gl/6sfnYEkhSLRqXMSB9",
  },
];

// Custom pin so it matches the site's emerald branding instead of Google's default red
const markerIcon = {
  path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z",
  fillColor: "#059669", // emerald-600
  fillOpacity: 1,
  strokeColor: "#ffffff",
  strokeWeight: 1.5,
  scale: 1.6,
  anchor: typeof window !== "undefined" && window.google ? new window.google.maps.Point(12, 22) : undefined,
};

const mapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
  fullscreenControl: false,
  streetViewControl: false,
  mapTypeControl: false,
  clickableIcons: false,
  styles: [
    // subtle desaturation so the emerald pins pop, optional — remove if you want default Google styling
    { featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] },
  ],
};

const ClinicMap = () => {
  const [selected, setSelected] = useState(null);
  const [map, setMap] = useState(null);
  // Starts as the hardcoded fallback positions, then gets overwritten once geocoding resolves
  const [resolvedLocations, setResolvedLocations] = useState(locations);

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script", // shared id prevents duplicate-load warnings even if this loader is used elsewhere on the page
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const center = useMemo(
    () => ({
      lat: 9.93834,
      lng: 76.32335,
    }),
    []
  );

  // Once the script is loaded, ask Google to resolve each clinic's real building-level
  // coordinates — by Place ID if we have one, otherwise by address text. Either is far
  // more reliable than a manually copied lat/lng, and self-corrects if Google's data changes.
  useEffect(() => {
    if (!isLoaded) return;

    const geocoder = new window.google.maps.Geocoder();

    const resolveOne = (loc) =>
      new Promise((resolve) => {
        const request = loc.placeId ? { placeId: loc.placeId } : { address: loc.address };

        geocoder.geocode(request, (results, status) => {
          if (status === "OK" && results?.[0]) {
            const { lat, lng } = results[0].geometry.location;
            resolve({
              ...loc,
              position: { lat: lat(), lng: lng() },
              resolvedAddress: results[0].formatted_address,
            });
          } else {
            // Geocoding failed (missing/invalid placeId, no network, quota) — keep the fallback pin
            console.warn(`Geocoding failed for "${loc.name}" (${status}); using fallback position.`);
            resolve(loc);
          }
        });
      });

    Promise.all(locations.map(resolveOne)).then(setResolvedLocations);
  }, [isLoaded]);

  // Fit both markers in view automatically instead of relying on a hardcoded zoom level
  const onLoad = useCallback(
    (mapInstance) => {
      const bounds = new window.google.maps.LatLngBounds();
      resolvedLocations.forEach((loc) => bounds.extend(loc.position));
      mapInstance.fitBounds(bounds, 60); // 60px padding so pins aren't flush against the edge
      setMap(mapInstance);
    },
    [resolvedLocations]
  );

  // Re-fit bounds if geocoding resolves positions after the map has already mounted
  useEffect(() => {
    if (!map) return;
    const bounds = new window.google.maps.LatLngBounds();
    resolvedLocations.forEach((loc) => bounds.extend(loc.position));
    map.fitBounds(bounds, 60);
  }, [map, resolvedLocations]);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  if (loadError) {
    return (
      <div
        style={containerStyle}
        className="flex items-center justify-center bg-slate-100 text-slate-500 text-sm px-6 text-center"
      >
        Couldn't load the map. Please check your connection, or view us directly on{" "}
        <a
          href={locations[0].url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 underline ml-1"
        >
          Google Maps
        </a>
        .
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div
        style={containerStyle}
        className="flex items-center justify-center bg-slate-100 text-slate-400 text-sm animate-pulse"
      >
        Loading map…
      </div>
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={16}
      options={mapOptions}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {resolvedLocations.map((clinic) => (
        <Marker
          key={clinic.id}
          position={clinic.position}
          icon={markerIcon}
          title={clinic.name}
          onClick={() => setSelected(clinic)}
        />
      ))}

      {selected && (
        <InfoWindow position={selected.position} onCloseClick={() => setSelected(null)}>
          <div className="p-2 max-w-xs">
            <h3 className="font-bold text-emerald-700 text-base">{selected.name}</h3>

            <p className="text-sm mt-1 text-gray-600">{selected.address}</p>

            <a
              href={selected.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm"
            >
              Get Directions
            </a>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default ClinicMap;