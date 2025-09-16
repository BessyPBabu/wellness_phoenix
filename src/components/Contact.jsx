// components/Contact.jsx
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      details: ["+91 9446065105"],
      bg: "bg-emerald-100 text-emerald-700"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      details: ["pmsunny1959@gmail.com"],
      bg: "bg-blue-100 text-blue-700"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      details: ["Roma Villa", "Panangad, Ernakulam"],
      bg: "bg-purple-100 text-purple-700"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Hours",
      details: ["Available 24/7"],
      bg: "bg-orange-100 text-orange-700"
    }
  ];

  return (
    <section id="contact" className="py-16 lg:py-20 bg-emerald-50 flex justify-center">
      <div className="max-w-3xl w-full bg-white p-8 rounded-3xl shadow-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
            Contact Us
          </span>
          <h2 className="text-2xl lg:text-4xl font-bold text-emerald-900 mt-2 mb-2">
            Get In Touch
          </h2>
          <p className="text-sm text-emerald-700">
            Ready to start your wellness journey? Reach out and let’s talk about your goals.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-4 rounded-xl bg-emerald-50 hover:bg-white transition-shadow shadow-sm hover:shadow-md cursor-pointer"
            >
              <div className={`p-3 rounded-lg ${info.bg}`}>
                {info.icon}
              </div>
              <div>
                <h4 className="font-semibold text-emerald-900 text-sm">
                  {info.title}
                </h4>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-slate-600 text-xs">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
