import React from 'react';

interface HexagramDisplayProps {
  binaryString: string; // 6 characters, Bottom-to-Top (Index 0 is Bottom Line)
}

const HexagramDisplay: React.FC<HexagramDisplayProps> = ({ binaryString }) => {
  // binaryString example: "100010" (Zhun - Water over Thunder)
  // Index 0: '1' (Bottom Line - Thunder Bottom) -> Render at Bottom
  // Index 5: '0' (Top Line - Water Top) -> Render at Top
  
  // We need to render lines from Top (Index 5) down to Bottom (Index 0)
  const lines = binaryString.split('').reverse();

  return (
    <div className="flex flex-col items-center gap-1.5 py-4 px-8 bg-stone-100 rounded-lg border border-stone-200 shadow-inner">
      {lines.map((bit, index) => (
        <div key={index} className="w-24 h-4 flex justify-between">
          {bit === '1' ? (
            // Yang Line (Solid)
            <div className="w-full h-full bg-stone-800 rounded-sm"></div>
          ) : (
            // Yin Line (Broken)
            <>
              <div className="w-[42%] h-full bg-stone-800 rounded-sm"></div>
              <div className="w-[16%] h-full"></div> {/* Gap */}
              <div className="w-[42%] h-full bg-stone-800 rounded-sm"></div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default HexagramDisplay;
