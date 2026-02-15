
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 py-4 backdrop-blur-md border-b border-white/10' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-serif text-3xl font-bold tracking-tighter text-white">
          LUMINA<span className="text-amber-500">.</span>
        </a>
        <div className="hidden md:flex space-x-12">
          {['Menu', 'About', 'Reservation', 'Gallery'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105">
          BOOK NOW
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
