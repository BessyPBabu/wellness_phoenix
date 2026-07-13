// components/Contact.jsx

import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ClinicMap from "./ClinicMap";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      details: [
        "0498 43181848 - Clinic Landline",
        "+91 9778365105 - Clinic Mobile",
        "+91 9446065105 - Sunny P M",
      ],
      bg: "bg-emerald-100 text-emerald-700",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      details: [
        "phoenixinternational1959@gmail.com",
        "pmsunny1959@gmail.com",
      ],
      bg: "bg-blue-100 text-blue-700",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Address",
      details: [
        "Phoenix Ancient Wisdom Ayurveda & Wellness Clinic",
        "Opp. Bharat Petroleum Pump",
        "Vallikattu Road",
        "Kundannur, Maradu P.O",
        "Ernakulam",
      ],
      bg: "bg-purple-100 text-purple-700",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Working Hours",
      details: ["Available 24 / 7"],
      bg: "bg-orange-100 text-orange-700",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-emerald-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
            Contact Us
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Get In Touch
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for appointments,
            consultations, or any questions about our wellness programs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              Contact Information
            </h3>

            <div className="space-y-5">

              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-5 rounded-2xl bg-emerald-50 hover:bg-white hover:shadow-lg transition duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bg}`}
                  >
                    {item.icon}
                  </div>

                  <div>

                    <h4 className="font-semibold text-slate-900 mb-2">
                      {item.title}
                    </h4>

                    {item.details.map((detail, idx) => {

                      if (item.title === "Phone") {
                        const phone = detail.match(/\+?\d[\d\s]+/)?.[0].replace(/\s/g,"");

                        return (
                          <a
                            key={idx}
                            href={`tel:${phone}`}
                            className="block text-slate-600 hover:text-emerald-600 transition"
                          >
                            {detail}
                          </a>
                        );
                      }

                      if (item.title === "Email") {
                        return (
                          <a
                            key={idx}
                            href={`mailto:${detail}`}
                            className="block text-slate-600 hover:text-emerald-600 transition break-all"
                          >
                            {detail}
                          </a>
                        );
                      }

                      return (
                        <p
                          key={idx}
                          className="text-slate-600 leading-7"
                        >
                          {detail}
                        </p>
                      );
                    })}

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

            <ClinicMap />

            <div className="p-6 space-y-5">

              {/* Main Clinic */}
              <div className="flex items-center justify-between border rounded-xl p-5">

                <div className="flex items-start gap-3">

                  <MapPin className="w-5 h-5 text-emerald-600 mt-1" />

                  <div>

                    <h4 className="font-semibold text-slate-900">
                      Phoenix Ancient Wisdom Ayurveda & Wellness Clinic
                    </h4>

                    <p className="text-sm text-slate-600 mt-1">
                      Opp. Bharat Petroleum Pump,
                      Vallikattu Road,
                      Kundannur,
                      Ernakulam
                    </p>

                  </div>

                </div>

                <a
                  href="https://maps.app.goo.gl/ppPXVjJEtcJP1ns3A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg transition"
                >
                  Directions
                </a>

              </div>

              {/* Branch Clinic */}
              <div className="flex items-center justify-between border rounded-xl p-5">

                <div className="flex items-start gap-3">

                  <MapPin className="w-5 h-5 text-emerald-600 mt-1" />

                  <div>

                    <h4 className="font-semibold text-slate-900">
                      Phoenix Ayurveda and Wellness Center
                    </h4>

                    <p className="text-sm text-slate-600 mt-1">
                      Backside of Indian Oil Pump, Convent Road, 
                      Maradu
                    </p>

                  </div>

                </div>

                <a
                  href="https://maps.app.goo.gl/6sfnYEkhSLRqXMSB9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg transition"
                >
                  Directions
                </a>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;