// components/Services.jsx
import React from 'react';
import { Apple , Activity, Droplet } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Apple className="w-8 h-8" />,
      title: "Weight Management",
      description: "Personalized nutrition plans tailored to your health goals and dietary preferences.Manage your weight without avoiding your favourite foods",
      features: [
        "Custom meal plans",
        "Calorie and nutrition tracking",
        "Ongoing expert support"
      ]
    },
    
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Knee/Joint Pain",
      description: "Healing joint pain without any knee surgery.Improve mobility and flexibility through natural methods",
      features: ["Pain relief exercises",
      "Joint strengthening programs",
      "Lifestyle and posture guidance"]
    },
    {
      icon: <Droplet className="w-8 h-8" />,
      title: "Psoriasis",
      description: "Complete cure from psoriasis.Hundreds of happy customers. Restore skin health naturally with SCI-VEDIC solutions.",
      features: ["Herbal skincare treatments",
      "Immune system support",
      "Personalized skin care routines"]
    }
  ];
  const images = [
    "/images/Abdurahman.jpg",
    "/images/abdu1recovery.jpg",
  "/images/abdu2recovery.jpg",
  "/images/abdu3recovery.jpg",
  "/images/joji.png",
  "/images/joji1recovery.jpg",
  "/images/joji2recovery.jpg",
  "/images/joji3recovery.jpg",

];

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium">
            Our Services
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mt-4 mb-6">
            Comprehensive Wellness Solutions
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We offer a wide range of wellness services designed to support your journey 
            towards optimal health and well-being.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-emerald-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100 group hover:border-emerald-200"
            >
              <div className="text-emerald-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                {service.title}
              </h3>
              
              <p className="text-slate-600 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-slate-600">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-8 lg:p-12 rounded-2xl text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Watch Our YouTube Videos
            </h3>

           

            {/* YouTube Videos */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-64"
                  src="https://www.youtube.com/embed/o67nTj3uLew?si=nnucrg7mok2wFRN6"
                  title="Wellness Video 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-64"
                  src="https://www.youtube.com/embed/jZAOhCDXY80?si=y4bENCXscBNCucfy" 
                  title="Wellness Video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-64"
                  src="https://www.youtube.com/embed/1oVnyu_5aZo?si=Wmw-1IWq9-NYwU7N" 
                  title="Wellness Video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-64"
                  src="https://www.youtube.com/embed/KMSwRu_w1vk?si=NcxibEsSm4CZYQdO" 
                  title="Wellness Video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-64"
                  src="https://www.youtube.com/embed/q3EV8LsEuNA?si=GHYd_4naI-ox3MTW" 
                  title="Wellness Video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-64"
                  src="https://www.youtube.com/embed/e77sdn3h6b4?si=H-Itkg12mhbWty20" 
                  title="Wellness Video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-64"
                  src="https://www.youtube.com/embed/PVXYE1wAPVE?si=2g8qCZfgeBmGqatz" 
                  title="Wellness Video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-64"
                  src="https://www.youtube.com/embed/1DT1xnRTWX0?si=RZaeDajUJrEQN29Q" 
                  title="Wellness Video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            {/* Wellness Highlights Section */}
            <div className="mt-16">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 text-center">
                Wellness Highlights
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {/* Replace the video IDs with your own */}
                {[
                  "lalBnZAS6oY",
                  "WiMrOBcGiPM",
                  "CJOZ-yE-kag",
                  "1oVnyu_5aZo",
                  "DWGVPpvJRZM",
                  "qMtsd8JEl8Y",
                  "bEgTKcf1Umg",
                  "Gtb8ac3CyYs",


                ].map((id, index) => (
                  <div key={index} className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                      alt={`Video Thumbnail ${index + 1}`}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                ))}
              </div>
              
            </div>
            <div className="mt-16">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 text-center">
                Recovery Stories
              </h3>

              {/* Image Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {images.map((src, index) => (
                  <div
                    key={index}
                    className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex justify-center items-center ${
                  ""
                    }`}
                  >
                    <img
                      src={src}
                      alt={`Recovery Image ${index + 1}`}
                      className={`${
                        index === 0 || index === 4
                          ? "w-40 h-40 object-cover rounded-full hover:scale-105 transition-transform duration-300"
                          : "w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;