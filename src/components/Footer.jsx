// components/Footer.jsx
import React from 'react';
import { Phone, MapPin, Heart, ArrowUp} from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import Logo from '/Phoenix_logo.svg';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { name: 'Weight Management', href: '#services' },
      { name: 'Knee/Joint Pain', href: '#services' },
      { name: 'Psoriasis', href: '#services' }
    ],
    company: [
      { name: 'About Me', href: '#about' },
      { name: 'Home', href: '#' },
      { name: 'Success Stories', href: '#testimonials' },
    ],
  };

  const socialLinks = [
    { icon: <FaFacebook size={20} />, href: '#', name: 'Facebook' },
    { icon: <FaInstagram size={20} />, href: '#', name: 'Instagram' },
    { icon: <FaLinkedin size={20} />, href: '#', name: 'LinkedIn' }
  ];

  return (
    <footer className="bg-slate-900 text-white relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 bg-emerald-600 text-white p-3 rounded-full shadow-lg hover:bg-emerald-700 transition-colors duration-200"
      >
        <ArrowUp size={20} />
      </button>

      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center">
              <a href="#" target="_blank">
                <img src={Logo} className="logo w-60 h-auto" alt="Phoenix logo" />
              </a>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3 mt-4">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-emerald-400" />
                <span className="text-slate-300">+91 9446065105</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-emerald-400" />
                <span className="text-slate-300">Roma villa, Panangadu P O, Ernakulam</span>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex items-center space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-slate-300 hover:text-emerald-400 transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-slate-300 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-slate-300 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-slate-700 pt-8">
          <div className="text-center">
            <p className="text-slate-400 mb-4">
              © 2025 Phoenix International. All rights reserved.
            </p>
            <div className="flex justify-center items-center space-x-2 text-slate-400">
              <span>Made with</span>
              <Heart size={20} className="text-red-500" />
              <span>for your wellness journey</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
