
import React, { useState } from 'react';
import { MENU_DATA } from '../constants';
import { MenuItem } from '../types';

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuItem['category']>('starters');

  const categories: MenuItem['category'][] = ['starters', 'mains', 'desserts', 'drinks'];

  const filteredItems = MENU_DATA.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-amber-500 tracking-[0.3em] font-medium mb-4">SENSORY JOURNEY</h2>
          <h3 className="font-serif text-5xl md:text-6xl text-white">The Menu</h3>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-2 rounded-full text-sm tracking-widest uppercase transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/20' 
                  : 'border border-white/10 text-white/50 hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="group bg-neutral-900/50 rounded-2xl overflow-hidden border border-white/5 hover:border-amber-500/30 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-serif text-2xl text-white group-hover:text-amber-500 transition-colors">
                    {item.name}
                  </h4>
                  <span className="text-amber-500 font-medium">{item.price}</span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className="h-[1px] w-full bg-white/10 group-hover:bg-amber-500/30 transition-colors"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
