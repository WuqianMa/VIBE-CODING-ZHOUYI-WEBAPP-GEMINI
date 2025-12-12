import React from 'react';

const YarrowLoading: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 space-y-8 animate-fade-in">
      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* Animated Stalks */}
        <div className="absolute w-1 h-24 bg-stone-400 rounded-full animate-stalk-1 origin-bottom"></div>
        <div className="absolute w-1 h-24 bg-stone-400 rounded-full animate-stalk-2 origin-bottom"></div>
        <div className="absolute w-1 h-24 bg-stone-400 rounded-full animate-stalk-3 origin-bottom"></div>
        <div className="absolute w-1 h-24 bg-stone-400 rounded-full animate-stalk-4 origin-bottom"></div>
        <div className="absolute w-1 h-24 bg-stone-400 rounded-full animate-stalk-5 origin-bottom"></div>
      </div>
      
      <div className="text-center space-y-2">
        <p className="text-stone-800 font-serif text-lg tracking-wide">Divining...</p>
        <p className="text-stone-400 text-xs uppercase tracking-widest">Sorting the Stalks</p>
      </div>

      <style>{`
        @keyframes stalk-spread {
          0% { transform: rotate(0deg) translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: rotate(var(--rot)) translateY(var(--ty)); opacity: 0; }
        }
        .animate-stalk-1 { --rot: -45deg; --ty: -10px; animation: stalk-spread 2s infinite ease-in-out; }
        .animate-stalk-2 { --rot: -20deg; --ty: -15px; animation: stalk-spread 2s infinite ease-in-out 0.2s; }
        .animate-stalk-3 { --rot: 0deg;   --ty: -20px; animation: stalk-spread 2s infinite ease-in-out 0.4s; }
        .animate-stalk-4 { --rot: 20deg;  --ty: -15px; animation: stalk-spread 2s infinite ease-in-out 0.6s; }
        .animate-stalk-5 { --rot: 45deg;  --ty: -10px; animation: stalk-spread 2s infinite ease-in-out 0.8s; }
      `}</style>
    </div>
  );
};

export default YarrowLoading;
