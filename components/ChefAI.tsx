
import React, { useState } from 'react';
import { getChefRecommendation } from '../services/geminiService';

const ChefAI: React.FC = () => {
  const [mood, setMood] = useState('');
  const [dietary, setDietary] = useState('');
  const [recommendation, setRecommendation] = useState<{dishName: string, description: string, pairing: string} | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const result = await getChefRecommendation(mood, dietary);
    setRecommendation(result);
    setIsLoading(false);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-neutral-900 border border-amber-500/20 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative Sparkles */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-3xl rounded-full"></div>
          
          <div className="relative z-10 text-center mb-12">
            <h3 className="text-amber-500 tracking-widest font-medium mb-4 uppercase">Personalized Taste</h3>
            <h2 className="font-serif text-4xl text-white mb-4">Chef's AI Recommendation</h2>
            <p className="text-white/60">Tell us how you're feeling, and our AI chef will craft a unique dish just for you.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto mb-12">
            <div>
              <label className="block text-white/70 text-sm mb-2 uppercase tracking-widest">How are you feeling?</label>
              <input 
                type="text"
                placeholder="e.g. Adventurous, Light, Nostalgic..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-amber-500/50 transition-all"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm mb-2 uppercase tracking-widest">Dietary Preference</label>
              <input 
                type="text"
                placeholder="e.g. Vegan, No Seafood, Keto..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-amber-500/50 transition-all"
                value={dietary}
                onChange={(e) => setDietary(e.target.value)}
              />
            </div>
            <button 
              disabled={isLoading}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <span>ASK THE CHEF</span>
              )}
            </button>
          </form>

          {recommendation && (
            <div className="bg-black/40 border border-white/5 p-8 rounded-2xl animate-[fadeInUp_0.6s_ease-out_forwards]">
              <h4 className="text-amber-500 font-serif text-3xl mb-4 italic">"{recommendation.dishName}"</h4>
              <p className="text-white/80 leading-relaxed mb-6 italic text-lg">{recommendation.description}</p>
              <div className="flex items-center space-x-3 text-sm">
                <span className="text-white/40 uppercase tracking-widest">Recommended Pairing:</span>
                <span className="text-white font-medium">{recommendation.pairing}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ChefAI;
