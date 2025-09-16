// components/About.jsx
import React from 'react';
import { CheckCircle, Award, Users, Target } from 'lucide-react';
import sciVedic1 from "../assets/sci-vedic.png";
import sciVedic2 from "../assets/sci-vedic2.webp";
import sciVedic4 from "../assets/sci-vedic4.webp";


const About = () => {
  const achievements = [
    { icon: <Users className="w-6 h-6" />, number: "500+", text: "Happy Clients" },
    { icon: <Award className="w-6 h-6" />, number: "26+", text: "Years Experience" },
    { icon: <Target className="w-6 h-6" />, number: "95%", text: "Success Rate" },
  ];


  return (
    <section id="about" className="py-16 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium">
              About Me
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mt-4 mb-6">
              I’m <span className="text-emerald-600">SUNNY P M, </span> your Wellness and Nutrition expert in
              <span className="text-emerald-600"> Kochin.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Since 1999, we have been creating trusted health solutions powered by 
              <span className="font-semibold text-emerald-600"> SCI-VEDIC technology</span> — a blend of 
              modern science and the wisdom of Ayurveda. Our products are made with natural ingredients 
              that provide essential nutrients to support total wellness and a healthier lifestyle.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Relief for knee and joint pain",
                "Care for psoriasis and other skin conditions",
                "Support for healthy and sustainable weight management",
                "Formulations that boost immunity and restore body balance"
              ].map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">{value}</span>
                </div>
              ))}
            </div>


            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="block">
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors duration-200">
                Learn More About Us
              </button>
              </a>
              
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6 overflow-hidden">
                <img 
                  src={sciVedic1}
                  alt="SCI-VEDIC Wellness Product" 
                  className="rounded-2xl shadow-lg w-full max-w-xs h-[264px] object-cover"
                />
                <img 
                  src={sciVedic2}
                  alt="SCI-VEDIC Wellness Product 2" 
                  className="rounded-2xl shadow-lg w-full max-w-xs h-[264px] object-cover"
                />
              </div>

              <div className="space-y-6 overflow-hidden">
               
                <img 
                  src={sciVedic4}
                  alt="SCI-VEDIC Wellness Product 4" 
                  className="rounded-2xl shadow-lg w-full max-w-xs h-[264px] object-cover"
                />
              </div>

            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-20">
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg">
            <h3 className="text-2xl lg:text-3xl font-bold text-center text-slate-800 mb-12">
              Our Impact in Numbers
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-emerald-600 mb-4 flex justify-center">
                    {achievement.icon}
                  </div>
                  <div className="text-3xl font-bold text-slate-800 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-slate-600">
                    {achievement.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;