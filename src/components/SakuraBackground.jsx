import React, { useMemo } from 'react';

// Animated sakura petals floating down the page.
// Pure CSS + React, no external dependencies.
export default function SakuraBackground({ count = 36 }) {
  const petals = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * 12 + 8; // 8 - 20 px
      const left = Math.random() * 100; // vw
      const duration = Math.random() * 12 + 12; // 12 - 24s
      const delay = (Math.random() * 20 - 10).toFixed(2); // -10 - 10s
      const sway = Math.random() * 40 + 10; // px
      const rotate = Math.random() * 360;

      return {
        id: i,
        style: {
          left: `${left}vw`,
          animationDuration: `${duration}s, ${duration / 2}s, ${duration / 1.8}s`,
          animationDelay: `${delay}s, ${delay}s, ${delay}s`,
          ['--sway']: `${sway}px`,
          width: `${size}px`,
          height: `${size * 0.65}px`,
          transform: `rotate(${rotate}deg)`
        }
      };
    });
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <style>{`
        @keyframes sakura-fall { 0% { transform: translate3d(0, -110%, 0) rotate(0deg); } 100% { transform: translate3d(0, 110vh, 0) rotate(360deg); } }
        @keyframes sakura-sway { 0%, 100% { margin-left: 0; } 50% { margin-left: var(--sway); } }
        @keyframes sakura-tilt { 0% { filter: drop-shadow(0 0 0 rgba(0,0,0,0.2)); } 50% { filter: drop-shadow(0 6px 10px rgba(0,0,0,0.25)); } 100% { filter: drop-shadow(0 0 0 rgba(0,0,0,0.2)); } }
        .petal { position: absolute; top: -5vh; background: radial-gradient( circle at 30% 30%, rgba(255,255,255,0.9), rgba(255,182,193,0.95) 60%, rgba(255,105,180,0.9) ); border-radius: 100% 0 100% 0; box-shadow: 0 2px 6px rgba(212, 44, 122, 0.18); opacity: 0.95; animation-name: sakura-fall, sakura-sway, sakura-tilt; animation-timing-function: linear, ease-in-out, ease-in-out; animation-iteration-count: infinite, infinite, infinite; }
      `}</style>

      {petals.map((p) => (
        <div key={p.id} className="petal" style={p.style} />
      ))}

      {/* Ambient soft gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50/70 via-transparent to-rose-100/60" />
      <div className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-pink-300/30 blur-3xl" />
      <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-rose-300/30 blur-3xl" />
    </div>
  );
}
