import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (    
    <div className="min-h-screen w-full overflow-x-hidden bg-emerald-50">
      {/* Navbar stays outside of main */}
      <Navbar />

      {/* Main content */}
      <main className="pt-16"> 
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer also outside */}
      <Footer />
    </div>
  );
}

export default App;
