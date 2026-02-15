
import React, { useEffect, useState } from 'react';

const AmbianceOverlay: React.FC = () => {
  const [particles, setParticles] = useState<{ id: number; left: string; top: string; size: string; delay: string; duration: string }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 10 + 10}s`,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-amber-500/20 blur-[1px] animate-float"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          25% { opacity: 0.6; }
          50% { transform: translateY(-100px) translateX(20px); opacity: 0.3; }
          75% { opacity: 0.6; }
          100% { transform: translateY(-200px) translateX(-20px); opacity: 0; }
        }
        .animate-float {
          animation-name: float;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }
      `}</style>
    </div>
  );
};

export default AmbianceOverlay;
