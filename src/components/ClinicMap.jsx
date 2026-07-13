// components/ClinicMap.jsx

import React, { useCallback, useState, useMemo } from "react";
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from "@react-google-maps/api";
import { GOOGLE_MAPS_KEY } from "../config";
const containerStyle = {
  width: "100%",
  height: "450px",
};

// Hardcoded coordinates (no need for geocoding requests)
const locations = [
  {
    id: 1,
    name: "Clinic",
    address: "Opp. Bharat Petroleum Pump, Kundannur",
    position: { lat: 9.93838389483182, lng: 76.32165961757538 },
    url: "https://maps.app.goo.gl/your-clinic-link-1",
  },
  {
    id: 2,
    name: "Wellness Center",
    address: "Phoenix Ayurvedic & Wellness Center, Backside of Indian Oil Pump, Maradu",
    position: { lat: 9.938597785041788, lng: 76.32558531970903 },
    url: "https://maps.app.goo.gl/your-wellness-center-link-2",
  },
];

const markerIcon = {
  path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z",
  fillColor: "#059669",
  fillOpacity: 1,
  strokeColor: "#ffffff",
  strokeWeight: 1.5,
  scale: 1.6,
  anchor: { x: 12, y: 22 },
};

const mapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
  fullscreenControl: false,
  streetViewControl: false,
  mapTypeControl: false,
  clickableIcons: false,
  styles: [{ featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] }],
};

const ClinicMap = () => {
  const [selected, setSelected] = useState(null);
  const [map, setMap] = useState(null);

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    
    googleMapsApiKey: GOOGLE_MAPS_KEY, 
  });

  const center = useMemo(() => ({ lat: 9.93834, lng: 76.32335 }), []);

  const onLoad = useCallback((mapInstance) => {
    const bounds = new window.google.maps.LatLngBounds();
    locations.forEach((loc) => bounds.extend(loc.position));
    mapInstance.fitBounds(bounds, 60);
    setMap(mapInstance);
  }, []);

  if (loadError) {
    return (
      <div style={containerStyle} className="flex items-center justify-center bg-slate-100 text-slate-500 text-sm px-6 text-center">
        Couldn't load the map.
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div style={containerStyle} className="flex items-center justify-center bg-slate-100 text-slate-400 text-sm animate-pulse">
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
    >
      {locations.map((clinic) => (
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