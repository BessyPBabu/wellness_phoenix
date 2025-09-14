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
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100 group hover:border-emerald-200"
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

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition-colors duration-200">
                Our YouTube Link
              </button>
            </div>

            {/* YouTube Videos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-64"
                  src="https://www.youtube.com/embed/o67nTj3uLew?si=KRPC2G_R8I85A145"
                  title="Wellness Video 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-64"
                  src="https://www.youtube.com/embed/2C8dJQ47kB4?si=yeodJFMdgOs_CKu0" 
                  title="Wellness Video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-64"
                  src="https://www.youtube.com/embed/2C8dJQ47kB4?si=yeodJFMdgOs_CKu0" 
                  title="Wellness Video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-64"
                  src="https://www.youtube.com/embed/2C8dJQ47kB4?si=yeodJFMdgOs_CKu0" 
                  title="Wellness Video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-64"
                  src="https://www.youtube.com/embed/2C8dJQ47kB4?si=yeodJFMdgOs_CKu0" 
                  title="Wellness Video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-64"
                  src="https://www.youtube.com/embed/2C8dJQ47kB4?si=yeodJFMdgOs_CKu0" 
                  title="Wellness Video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-64"
                  src="https://www.youtube.com/embed/2C8dJQ47kB4?si=yeodJFMdgOs_CKu0" 
                  title="Wellness Video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-64"
                  src="https://www.youtube.com/embed/2C8dJQ47kB4?si=yeodJFMdgOs_CKu0" 
                  title="Wellness Video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;