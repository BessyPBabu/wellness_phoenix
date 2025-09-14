// components/Hero.jsx
import React from 'react';
import { ArrowRight, Play, Star } from 'lucide-react';
import prImage from "../assets/pr.webp";


const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:pr-8">
            <div className="mb-6">
              <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium">
                ✨ Transform Your Wellness Journey
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Your Path to 
              <span className="text-emerald-600 block">Complete Wellness</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Discover a holistic approach to health and wellness. Our expert team provides 
              personalized programs designed to help you achieve optimal physical, mental, 
              and emotional well-being.
            </p>

            {/* Stats */}
            <div className="flex space-x-8 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">500+</div>
                <div className="text-sm text-slate-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">26+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">95%</div>
                <div className="text-sm text-slate-600">Success Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="block">
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-full hover:bg-emerald-700 transition-all duration-200 flex items-center justify-center group">
                Start Your Journey
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </a>

            <a href="#services" className="block mt-4 md:mt-0">
              <button className="border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full hover:border-emerald-600 hover:text-emerald-600 transition-all duration-200 flex items-center justify-center">
                <Play size={20} className="mr-2" />
                Our Services and Videos
              </button>
            </a>
            </div>

            {/* Reviews */}
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-slate-600">4.9/5 from 200+ reviews</span>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative ">
            <div className="relative z-10">
              <img
              src={prImage}
              alt="Wellness and Health"
              className="rounded-2xl shadow-2xl w-full h-full object-cover"
            />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 text-xl">💪</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-800">Fitness</div>
                  <div className="text-sm text-slate-600">Personal Training</div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full opacity-20 -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 translate-y-32 -translate-x-32"></div>
    </section>
  );
};

export default Hero;