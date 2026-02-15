
import React from 'react';

const Fireplace: React.FC = () => {
  return (
    <div className="relative w-full h-96 rounded-3xl overflow-hidden bg-zinc-950 flex items-end justify-center">
      {/* Fireplace Hearth */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-orange-950 to-transparent"></div>
      
      {/* Logs */}
      <div className="relative z-10 flex space-x-[-10px] mb-4">
        <div className="w-32 h-6 bg-zinc-900 rounded-full rotate-12 transform origin-bottom-right shadow-lg border-b border-white/5"></div>
        <div className="w-32 h-6 bg-zinc-900 rounded-full -rotate-6 transform origin-bottom-left shadow-lg border-b border-white/5"></div>
      </div>

      {/* Fire Animation */}
      <div className="absolute bottom-6 flex items-end space-x-1 filter blur-[2px]">
        <div className="w-12 h-32 bg-orange-600 rounded-full animate-flicker-1 opacity-80"></div>
        <div className="w-16 h-48 bg-amber-500 rounded-full animate-flicker-2 opacity-60 -mx-8"></div>
        <div className="w-10 h-24 bg-red-600 rounded-full animate-flicker-3 opacity-70"></div>
      </div>

      {/* Global Glow */}
      <div className="absolute inset-0 bg-orange-500/10 animate-pulse-slow mix-blend-screen"></div>

      <div className="absolute top-8 left-8">
        <h4 className="text-amber-500/50 uppercase tracking-[0.4em] text-xs font-medium">The Lounge</h4>
      </div>

      <style>{`
        @keyframes flicker-1 {
          0%, 100% { height: 80px; transform: scaleX(1); }
          50% { height: 110px; transform: scaleX(1.1) translateX(2px); }
        }
        @keyframes flicker-2 {
          0%, 100% { height: 120px; transform: scaleX(1); }
          50% { height: 160px; transform: scaleX(1.2) translateX(-3px); }
        }
        @keyframes flicker-3 {
          0%, 100% { height: 60px; transform: scaleX(1); }
          50% { height: 90px; transform: scaleX(0.9) translateY(-2px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.25; }
        }
        .animate-flicker-1 { animation: flicker-1 0.4s infinite alternate ease-in-out; }
        .animate-flicker-2 { animation: flicker-2 0.3s infinite alternate-reverse ease-in-out; }
        .animate-flicker-3 { animation: flicker-3 0.5s infinite alternate ease-in-out; }
        .animate-pulse-slow { animation: pulse-slow 3s infinite ease-in-out; }
      `}</style>
    </div>
  );
};

export default Fireplace;
