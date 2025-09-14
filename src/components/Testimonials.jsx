// components/Testimonials.jsx
import React, { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Executive",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b359?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "WellnessHub transformed my life completely. The personalized nutrition plan and mental health support helped me overcome years of stress-related issues."
    },
    {
      name: "Michael Chen",
      role: "Software Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "The holistic approach at WellnessHub is incredible. From fitness training to meditation sessions, everything is tailored to my needs."
    },
    {
      name: "Emily Rodriguez",
      role: "Teacher",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "The community support at WellnessHub is amazing. Group programs and workshops created lasting friendships while helping me develop healthy habits."
    },
    {
      name: "David Thompson",
      role: "Business Owner",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "As a busy entrepreneur, I struggled with work-life balance. The lifestyle coaching program helped me prioritize my health without sacrificing my business goals."
    },
    {
      name: "Sophia Patel",
      role: "Doctor",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=150&q=80",
      rating: 4,
      text: "Balancing my hectic schedule with self-care was tough. WellnessHub guided me with stress management and mindfulness practices that truly worked."
    },
    {
      name: "James Anderson",
      role: "Fitness Trainer",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "I was impressed by their holistic approach. Not only did I improve my physical health, but my mental well-being also flourished."
    },
    {
      name: "Olivia Martin",
      role: "Graphic Designer",
      image:
        "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "The creativity workshops and stress-relief programs made me more productive at work. I feel inspired every day now."
    },
    {
      name: "Daniel Lee",
      role: "College Student",
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&q=80",
      rating: 4,
      text: "WellnessHub taught me how to manage exam stress and stay fit despite my busy schedule. It's been a game-changer for my studies."
    },
    {
      name: "Isabella Gomez",
      role: "Nurse",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Working long shifts was draining, but their wellness plan gave me energy and improved my sleep quality."
    },
  ];

  // Slider logic
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentTestimonials = () => {
    const start = currentIndex * itemsPerSlide;
    return testimonials.slice(start, start + itemsPerSlide);
  };

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-emerald-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="bg-emerald-100 text-emerald-900 px-4 py-2 rounded-full text-sm font-medium">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-emerald-900 mt-4 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-emerald-700 max-w-2xl mx-auto">
            Real stories from real people who have transformed their lives
            through our wellness programs.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {getCurrentTestimonials().map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-8 lg:p-12 rounded-2xl text-white relative flex flex-col hover:shadow-2xl transition-all"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-emerald-300">
                  <Quote size={32} />
                </div>

                {/* Profile */}
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white"
                  />
                  <div className="ml-3">
                    <h4 className="text-lg font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-emerald-100">{testimonial.role}</p>
                  </div>
                </div>

                {/* Stars - GOLD */}
                <div className="flex space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-emerald-50 text-sm leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-emerald-700 text-white hover:bg-emerald-600 transition"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex space-x-2">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full ${
                    i === currentIndex ? "bg-yellow-400" : "bg-emerald-200"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-emerald-700 text-white hover:bg-emerald-600 transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
