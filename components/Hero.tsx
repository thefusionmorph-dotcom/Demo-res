
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Day/Night Cycle Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1920" 
          alt="Lumina Hero" 
          className="w-full h-full object-cover scale-110 animate-day-night"
        />
        {/* Dynamic Light Overlay */}
        <div className="absolute inset-0 bg-black/60 animate-lighting-cycle"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h2 className="text-amber-500 font-medium tracking-[0.4em] mb-4 opacity-0 animate-[fadeInDown_1s_ease-out_forwards]">
          ESTABLISHED 2024
        </h2>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 opacity-0 animate-[fadeInUp_1s_0.3s_ease-out_forwards]">
          Culinary Art<br/><span className="italic text-amber-500/80">Refined.</span>
        </h1>
        <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto opacity-0 animate-[fadeIn_1s_0.6s_ease-out_forwards]">
          Experience a journey through global flavors, meticulously crafted by our Michelin-starred chefs in an atmosphere of pure elegance.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 opacity-0 animate-[fadeInUp_1s_0.9s_ease-out_forwards]">
          <a href="#menu" className="bg-white text-black px-10 py-4 rounded-full font-semibold hover:bg-amber-500 hover:text-white transition-all transform hover:-translate-y-1">
            VIEW THE MENU
          </a>
          <a href="#reservation" className="border border-white/30 text-white px-10 py-4 rounded-full font-semibold backdrop-blur-sm hover:bg-white/10 transition-all">
            RESERVE A TABLE
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style>{`
        @keyframes dayNight {
          0%, 100% { filter: brightness(0.6) sepia(0.2) hue-rotate(0deg); transform: scale(1.1); }
          50% { filter: brightness(0.3) sepia(0.5) hue-rotate(-20deg); transform: scale(1.15); }
        }
        @keyframes lightingCycle {
          0%, 100% { background-color: rgba(0, 0, 0, 0.4); }
          50% { background-color: rgba(20, 10, 0, 0.7); }
        }
        .animate-day-night {
          animation: dayNight 20s infinite ease-in-out;
        }
        .animate-lighting-cycle {
          animation: lightingCycle 20s infinite ease-in-out;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
