
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import ChefAI from './components/ChefAI';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import AmbianceOverlay from './components/AmbianceOverlay';
import Fireplace from './components/Fireplace';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] relative">
      <AmbianceOverlay />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        
        {/* About Preview Section */}
        <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-amber-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img 
              src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=800" 
              alt="Chef" 
              className="relative rounded-3xl shadow-2xl z-10 w-full grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-amber-500 tracking-[0.3em] font-medium uppercase">Heritage & Passion</h2>
            <h3 className="font-serif text-5xl text-white leading-tight">Crafting Moments,<br/>Plate by Plate.</h3>
            <p className="text-white/60 text-lg leading-relaxed">
              At Lumina, we believe that dining is more than just a meal—it's a multi-sensory experience. From the carefully curated jazz playlist to the tactile elegance of our hand-finished stoneware, every detail is designed to transport you.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <span className="text-amber-500 font-serif text-4xl font-bold block mb-2">12+</span>
                <span className="text-white/40 uppercase tracking-widest text-xs">Signature Courses</span>
              </div>
              <div>
                <span className="text-amber-500 font-serif text-4xl font-bold block mb-2">3</span>
                <span className="text-white/40 uppercase tracking-widest text-xs">Michelin Stars</span>
              </div>
            </div>
          </div>
        </section>

        {/* Ambiance Feature */}
        <section className="py-12 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1">
              <Fireplace />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-amber-500 tracking-[0.3em] font-medium uppercase">The Lounge</h2>
              <h3 className="font-serif text-4xl text-white">Warmth in every corner.</h3>
              <p className="text-white/50 leading-relaxed">
                Before your meal, enjoy a handcrafted cocktail by our fireplace. The gentle flicker of the embers sets the tone for an evening of sophisticated relaxation.
              </p>
            </div>
          </div>
        </section>

        <MenuSection />
        
        <ChefAI />

        {/* Gallery Preview */}
        <section className="py-24 bg-neutral-900/30">
          <div className="max-w-[1600px] mx-auto px-6 overflow-hidden">
             <div className="text-center mb-16">
              <h2 className="text-amber-500 tracking-[0.3em] font-medium mb-4 uppercase">Atmosphere</h2>
              <h3 className="font-serif text-5xl text-white">Visual Banquet</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'https://images.unsplash.com/photo-1550966842-2849a2249865?auto=format&fit=crop&q=80&w=400',
                'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=400',
                'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&q=80&w=400',
                'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=400'
              ].map((img, i) => (
                <div key={i} className="group relative overflow-hidden rounded-xl h-96">
                  <img 
                    src={img} 
                    alt={`Gallery ${i}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white tracking-widest uppercase text-xs">Explore</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Reservation />
      </main>
      <Footer />
    </div>
  );
};

export default App;
