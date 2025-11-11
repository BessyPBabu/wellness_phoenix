// components/Testimonials.jsx
import React, { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

// Import images from assets folder
import SusanImg from "../assets/testimonial_pics/DrSusan.jpg";
import LakshmiImg from "../assets/testimonial_pics/Lakshmi.jpg";
import LeelaImg from "../assets/testimonial_pics/Leela.jpg";
import MejoImg from "../assets/testimonial_pics/mejo.jpeg";
import MeryJoseImg from "../assets/testimonial_pics/MeryJose.jpg";
import PushpammaImg from "../assets/testimonial_pics/Pushpamma.jpg";
import Reena2Img from "../assets/testimonial_pics/Reena2.jpg";
import Saneeesh1Img from "../assets/testimonial_pics/Saneesh1.jpg";
import PushpavallyImg from "../assets/testimonial_pics/Pushpavally.jpg";
import lakshmi2Img from "../assets/testimonial_pics/lakshmi2.jpg";
import AbdurahmanImg from "../assets/testimonial_pics/Abdurahman.jpg";
import jojiImg from "../assets/testimonial_pics/joji.png";


const Testimonials = () => {
  const testimonials = [
    
    {
      name: "Lakshmi",
      place: "Perumbavoor",
      image: LakshmiImg,
      rating: 5,
      text: "കാൽ മുട്ട് തെയ്മാനം മൂലം വര്ഷങ്ങളായി ബുദ്ധിമുട്ടി, 7 ഹോസ്പിറ്റലുകളിൽ മാറി മാറി ചികിത്സ തേടി, അവസാനം ആസ്റ്റർ മെഡിസിറ്റിയിൽ 7 ലക്ഷം രൂപ മുടക്കി സർജറി ചെയ്യാൻ തീരുമാനിച്ചിരികുമ്പോഴാണ് Sci -Vedic Product നെ പറ്റി കേൾക്കുന്നത്. സർജറി ചെയ്യാതെ Sci- Vedic Product എടുത്ത് തുടങ്ങി. 4 മാസം കൊണ്ട് 80% സൗഖ്യമായി. മുൻപ് യാത്രകൾ ചെയ്യാൻ ബുദ്ധിമുട്ട് നേരിട്ട എനിക്ക് ഇപ്പോൾ ഒറ്റയ്ക്കു ബസിൽ യാത്ര ചെയ്യാനും പുറത്ത് പോകാനും കാൽ സൗഖ്യമായി. ഇതെന്റെ രണ്ടാം ജന്മം ആണ് അതിനു Sci - Vedic  നോട്‌ എത്ര നന്ദി പറഞ്ഞാലും മതിയാവില്ല"
    },
    {
      name: "Leela Krishnankutty",
      place: "Polayil Charuvila Veedu, Chathanoor, Kollam",
      image: LeelaImg,
      rating: 5,
      text: "35 കൊല്ലങ്ങൾ പഴക്കമുള്ള മുട്ടുവേദന ആയിരുന്നു എനിക്ക് ഉണ്ടായിരുന്നത്. അലോപ്പതി, ആയുർവ്വേദം, വേദ - സിദ്ധ, യുനാനി, എല്ലാം മരുന്നുകളും എടുത്ത് നോക്കി, അവസാനം 2 വർഷം മുൻപ് സർജറി ചെയ്യാൻ തീരുമിച്ചപ്പോൾ പേടി കാരണം സർജറി വേണ്ട എന്ന് വെച്ചു. 6 മാസം മുൻപ് ആണ് വീഡിയോകളിൽ കൂടി Sci - vedic Product നെ പറ്റി കേൾക്കുന്നത്. അന്ന് മുതൽ Product ഉപയോഗിച്ച് തുടങ്ങി. ഇപ്പോൾ സൗഖ്യമായി, നടക്കാൻ കഴിയുന്നുണ്ട് അതുപോലെ വേദനകൾ എല്ലാം തന്നെ മാറി. മുട്ടുവേദനയ്ക് കാരണം ആവുന്ന Over Weight കുറയ്ക്കാനും ഞാൻ തീരുമാനിച്ചു. ആരോഗ്യം തിരികെ തന്ന Sci - Vedic നു നന്ദി"
    },
    {
      name: "Mejo",
      place: "Thrissur",
      image: MejoImg,
      rating: 5,
      text: "ഞാൻ 10 വർഷം മുന്നേ ആണ് Sci- Vedic product നെ പറ്റി കേൾക്കുന്നത്. എന്റെ കാൽ വേദന മൂലം ഒരുപാട് ബുദ്ധിമുട്ടിയ സാഹചര്യത്തിൽ ആയിരുന്ന അത്. അന്ന് പ്രോഡക്റ്റ് എടുക്കുകയും പൂർണമായി വേദന മാറുകയും ചെയ്തു. ഞാൻ വെൽഡർ ആയിട്ടാണ് ഒമാനിൽ ജോലി ചെയുന്നത്, ഈ ഇടയ്ക്ക് വീണ്ടും ജോലിയുടെ ഇടയിൽ കാലിനു വീണ്ടും pain ഉണ്ടായപ്പോൾ Sci - Vedic ഇൽ വിശ്വാസം ഉള്ളത് കൊണ്ട് നാട്ടിൽ വന്നു വീണ്ടും Sci - Vedic Product എടുത്തു. ഇപ്പോൾ വേദനയ്ക് നല്ല മാറ്റമുണ്ട്"
    },
    {
      name: "Mery Jose",
      place: "Velangad, Kozhikode",
      image: MeryJoseImg,
      rating: 5,
      text: "എനിക്ക് കാൽമുട്ടിനു നീരും കാൽ നിലത്തു കുത്താൻ പറ്റാത്ത അത്രയും വേദനയും ആയിരുന്നു, ഒരുപാട് മരുന്നുകൾ എടുത്തു ഒരു കുറവും തോന്നിയില്ല. അങ്ങനെ Sci - vedic Product നെ പറ്റി കേട്ടു Product എടുക്കാൻ തീരുമാനിച്ചു. Sunny Sir ആദ്യം ഒരു മാസത്തെ Product തന്നു, അത് കഴിച്ചപ്പോൾ വളരെ  കുറവ് തോന്നി. ഇപ്പോൾ 4 മാസമായി, ഏറെക്കുറെ വേദനയും മാറി വരുന്നു. ഇതുപോലെ വേദന അനുഭവിക്കുന്നവർ ഈ Sci- Vedic Product വാങ്ങി സൗഖ്യപ്പെടട്ടെ എന്നാണ് എന്റെ ആഗ്രഹം. ഇതിൽ കൂടി എനിക്ക് അത്രമാത്രം സൗഖ്യവും, ആശ്വാസവും സന്തോഷവും ആണ് കിട്ടിയത്. ഒരുപാട് നന്ദി"
    },
    {
      name: "Pushpamma ",
      place: "Pushpasadanam, Pallikal, Naduvilmuri, Alappuzha",
      image: PushpammaImg, 
      rating: 5,
      text: "15 വര്ഷങ്ങളായി മുട്ടുവേദനയാൽ കഷ്ടപ്പെട്ടു. ഒരുപാട് ഹോസ്പിറ്റലിൽ ചികിത്സ തേടി. ആയുർവ്വേദം, ഹോമിയോ, അലോപ്പതി. എല്ലാം മാറി മാറി കഴിച്ചു, മാറ്റം ഒന്നും കണ്ടില്ല. സ്വയം എണീറ്റ് നടക്കാൻ വയ്യാത്ത അവസ്ഥയിൽ ആയിരുന്നു. അങ്ങനെ Sci -Vedic product നെ പറ്റി അറിഞ്ഞു , കഴിച്ചു തുടങ്ങി. ഇപ്പോൾ 4 മാസങ്ങൾ ആയി വേദനയ്ക് പൂർണമായ സൗഖ്യം കിട്ടി. വേദന കൂടാതെ യാത്രകൾ സുഖമായി ചെയ്യാൻ കഴിയുന്നു. നന്ദിയുണ്ട് ഒരുപാട്"
    },
    {
      name: "Reena Antony",
      place: "Mankottachera, Karumady, Ambalapuzha",
      image: Reena2Img, 
      rating: 5,
      text: "മുട്ടുവേദന ആയിരുന്നു എന്റെ പ്രശ്നം. വർഷങ്ങൾ ആയിട്ടുള്ള വേദന സഹിച് മടുത്തു പല ഹോസ്പിറ്റലിലും ചികിൽസിച്ചു, അവസാനം സർജറി അല്ലാതെ വേറെ നിവൃത്തി ഇല്ല എന്ന സാഹചര്യത്തിൽ ആണ് യൂട്യൂബിൽ Sunny സാറിന്റെ വീഡിയോകൾ വഴി Sci - Vedic product നെപ്പറ്റി അറിയുന്നത്. Product കഴിച്ചു തുടങ്ങി 5 മാസമായപ്പോൾ കാലിന്റെ നീര് ഏതാണ്ട് പൂർണമായി മാറി. ഇപ്പോൾ പള്ളിയിൽ പോകാനും തൊഴിലുറപ്പ് പണിക് പോകാനും ഒക്കെ സാധിക്കുന്നുണ്ട്. ഞാൻ over Weight കുറച്ചു. ഈ product എനിക്ക് വളരെ ആശ്വാസവും സൗഖ്യവും നൽകുന്നുണ്ട്.  സാറിനോടും sci - Vedic നോടും നന്ദിയുണ്ട്"
    },
    {
      name: "Dr. Susan Sabu John",
      place: "Shamal Al Batinah Medical Complex, Oman",
      image: SusanImg,
      rating: 5,
      text: "4 വർഷത്തിൽ ഏറെ ആയി ഈ എന്റെ ക്ലിനിക്കിൽ വരുന്നവർക് ഞാൻ Recommend ചെയ്യാറുണ്ട് . കാരണം ഒരിക്കലും മാറില്ല എന്ന് കരുതിയ Joint pain, Psoriasis, Auto Immunity രോഗങ്ങൾക് ഒരുപാട് ഫലപ്രദമാണ് ഈ Products. റിസൾട്ട്‌ കണ്ട് അറിയുന്നത് കൊണ്ട് 100% വിശ്വസിക്കാം"
    },
    {
      name: "Saneesh",
      place: "Chambakulam, Alappuzha",
      image: Saneeesh1Img, 
      rating: 5,
      text: "എന്റെ ശരീരത്തിൽ 5 വര്ഷങ്ങളായി ഉണ്ടായിരുന്ന സോറിയാസിസിൽ നിന്ന് മോചനം ലഭിച്ചു. കൈ ചുരുട്ടി സ്വയം ഭക്ഷണം കഴിക്കാൻ പോലും കഴിയില്ലാരുന്നു. എന്നാൽ Sci -Vedic Product എടുത്ത് തുടങ്ങി 11 മത്തെ ദിവസം മുതൽ മാറ്റം കണ്ടു തുടങ്ങി, 20 ദിവസം ആയപോഴേക്കും ഭൂരിഭാഗവും സൗഖ്യമായി. Sci - vedic Team നോട്‌ ഒരുപാട് നന്ദിയുണ്ട്."
    },
    {
      name: "Pushpavally Teacher",
      place: "St. Augustin High School Road, Aroor, Alappuzha",
      image: PushpavallyImg, 
      rating: 5,
      text: "30 വര്ഷങ്ങളായി ഞാൻ മുട്ടുവേദനയാൽ നരകിച്ചിരുന്നു. സ്വയം എഴുനേൽക്കാനോ, നടക്കാനോ കഴിയില്ലാരുന്നു.പ്രാഥമിക ആവശ്യങ്ങൾക് പോലും പരസഹായം ആവശ്യമായി വന്നു. രാത്രികളിൽ ബെഡിൽ നിന്നും താഴെയിറങ്ങി തറയിൽ കൂടി നിരങ്ങി ഭിത്തിയിൽ പിടിച്ചു നിരങ്ങി നിരങ്ങി ടോയ്‌ലറ്റിൽ പോയി വരാറായിരുന്നു പതിവ്. അങ്ങനെ ഒരിക്കൽ വീഡിയോകൾ വഴി sci -vedic Product നെ പറ്റി അറിയുകയും product എടുത്ത് തുടങ്ങുകയും ചെയ്തു. 6 മാസങ്ങൾ കൊണ്ട് എനിക്ക് അത്ഭുതമായ മാറ്റം ആണ് ഉണ്ടായത്. സ്വയം എഴുനേൽക്കാനും നടക്കാനും ഒകെ സാധിച്ചു. 74 വയസുള്ളപ്പോഴാണ് ഈ പ്രോഡക്റ്റ് കഴിക്കാൻ തുടങ്ങിയത്, ഇപ്പോൾ 77 വയസ്സായി ഇതുവരെ ഒരു മരുന്നും എടുത്തിട്ടില്ല. ഇപ്പോ ഞാൻ ഒരു കട നടത്തി ഉപജീവിക്കുന്നു. ഇത്രെയും ജീവിതം മടക്കി നൽകിയ sci - vedic നു നന്ദി"
    },
    {
      name: "Lakshmi P V",
      place: "Padinjarethil, Alakkad, Kannur",
      image: lakshmi2Img, 
      rating: 5,
      text: "കഴിഞ്ഞ 15 വർഷങ്ങൾ മുട്ടുവേദന യ്ക്ക് ചികിത്സ തേടി, സർജറി ചെയ്യാനുള്ള പണമില്ലാതെ വിഷമിച്ചു. ചെയ്തുകൊണ്ടിരുന്ന തൊഴിലുറപ്പ് ജോലിക് പോലും പോവാൻ കഴിയാതിരുന്ന സാഹചര്യത്തിൽ ആണ് Sci - Vedic Product  പറ്റി അറിയുന്നത്.  അന്ന് മുതൽ product എടുത്ത് തുടങ്ങുകയും ചെയ്തു. ഇപ്പോ 4 മത്തെ മാസം ആയപോഴേക്കും മുട്ടുവേദന കുറയുകയും തൊഴിലുറപ്പിനും പോയി തുടങ്ങുകയും ചെയ്തു. പൂർണമായി സൗഖ്യമാകാൻ തുടർന്നും പ്രോഡക്റ്റ് എടുത്ത് കൊണ്ടിരിക്കുന്നു. Sci - vedic നോട്‌ ഹൃദയം നിറഞ്ഞ നന്ദിയുണ്ട്"
    },
    {
      name: "Abdurahman",
      place: "vallakadavu, Thiruvananthapuram",
      image: AbdurahmanImg, 
      rating: 5,
      text: "31 വർഷങ്ങൾ ആയി സോറിയാസിസിന്റെ തീവ്രമായ പ്രയാസം അനുഭവിച്ചു വന്ന വ്യക്തിയായിരുന്നു ഞാൻ.വർഷങ്ങൾ ആയി സൗദിയിൽ ജോലിയിൽ ആയിരുന്നു. അങ്ങനെ ഇരിക്കുമ്പോഴാണ് sci -vedic product നെ പറ്റി കേൾക്കുന്നതും, തുടർന്നു സാറിനെ ബന്ധപ്പെടുന്നതും. Product എടുത്ത് 2 മാസം കഴിഞ്ഞപ്പോൾ തന്നെ മാറ്റങ്ങൾ കണ്ടു തുടങ്ങി, 4 മത്തെ മാസം ആയപ്പോൾ പൂർണമായ സൗഖ്യം ലഭിച്ചു. എന്റെ മാറ്റങ്ങളുടെയും സൗഖ്യത്തിന്റെയും ഫോട്ടോസ് ഞാൻ കൊടുത്തിട്ടുണ്ട്. ഇതുപോലെ സോറിയാസിസ്‌  അനുഭവിക്കുന്നവർ sci - vedic product എടുത്താൽ ഉറപ്പായും സൗഖ്യമാകും.എനിക്ക് പൂർണമായി സൗഖ്യമായതിൽ സന്തോഷമുണ്ട്  അതുപോലെ നന്ദിയും"
    },
    {
      name: "Joji",
      place: "Angamaly",
      image: jojiImg, 
      rating: 5,
      text: "15 വർഷങ്ങളിൽ ഏറെയായി സോറിയാസിസ്‌ മൂലം ഒരുപാട് വിഷമിച്ചു. ഞാൻ സൗദിയിൽ ജോലിയിൽ ആയിരുന്നു. എന്റെ റിക്കവറി ഫോട്ടോസ് ഞാൻ ഷെയർ ചെയ്തിട്ടുണ്ട്, അതിൽ കാണുന്നത് പോലെ കാലിൽ വൃണം പോലെയും ഉണ്ടായിരുന്നു.  കാലിൽ മാത്രമല്ല കൈയിലും പുറത്തും നെഞ്ചിലും ഒകെ കൊണ്ട് വളരെ ബുദ്ധിമുട്ടിയിരുന്നു. ഞാൻ sci - vedic product എടുത്ത് 2 മാസം ആയപോഴേക്കും നല്ല മാറ്റം ഉണ്ടായി, 3 മാസം ആയപ്പോൾ പൂർണമായി സൗഖ്യമായി. നന്ദിയുണ്ട് ഒരുപാട്"
    },
    
  ];

  // Slider logic
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 2;
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
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
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
                    loading="lazy"
                    className="w-20 h-20 rounded-full object-cover border-2 border-white"
                  />
                  <div className="ml-3">
                    <h4 className="text-lg font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-emerald-100">{testimonial.place}</p>
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
