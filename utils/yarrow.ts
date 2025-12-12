import { YarrowResult } from '../types';

/**
 * Simulates the 4 numbers of the Yarrow Stalk method.
 * 6: Old Yin (Changing) - Prob ~1/16
 * 7: Young Yang (Static) - Prob ~5/16
 * 8: Young Yin (Static) - Prob ~7/16
 * 9: Old Yang (Changing) - Prob ~3/16
 */
const generateLineValue = (): number => {
  const r = Math.random() * 16;
  if (r < 1) return 6;        // 1/16
  if (r < 6) return 7;        // 5/16 (1+5)
  if (r < 13) return 8;       // 7/16 (6+7)
  return 9;                   // 3/16 (rest)
};

export const consultYarrowStalks = (): YarrowResult => {
  const lines: number[] = [];
  
  // Generate 6 lines (Bottom to Top)
  for (let i = 0; i < 6; i++) {
    lines.push(generateLineValue());
  }

  // Construct Binaries (Note: App uses Top-to-Bottom string indexing for constants, 
  // so we need to reverse the order when building the string if lines[0] is bottom)
  
  // Prompt spec: "list of binary number from right to left means from up to down"
  // Example 000111 = Top Earth (000), Bottom Heaven (111).
  // So index 0 is Top, Index 5 is Bottom.
  
  // Our `lines` array: index 0 is Bottom, index 5 is Top (standard generation order).
  // We need to map lines[5] -> string[0], lines[0] -> string[5].

  let originalBinary = "";
  let futureBinary = "";
  const movingLines: number[] = [];

  // Iterate from Top (5) down to Bottom (0) to build string Left-to-Right
  for (let i = 5; i >= 0; i--) {
    const val = lines[i];
    
    // Original Hexagram Logic
    // 6 (Yin) -> 0
    // 7 (Yang) -> 1
    // 8 (Yin) -> 0
    // 9 (Yang) -> 1
    const originalBit = (val === 7 || val === 9) ? "1" : "0";
    originalBinary += originalBit;

    // Future Hexagram Logic
    // 6 (Old Yin) -> Changes to Yang (1)
    // 7 (Young Yang) -> Stays Yang (1)
    // 8 (Young Yin) -> Stays Yin (0)
    // 9 (Old Yang) -> Changes to Yin (0)
    let futureBit = "";
    if (val === 6) futureBit = "1";
    else if (val === 7) futureBit = "1";
    else if (val === 8) futureBit = "0";
    else if (val === 9) futureBit = "0";
    futureBinary += futureBit;

    // Check for moving line
    if (val === 6 || val === 9) {
      // Record the position (1-based, from Bottom)
      movingLines.push(i + 1);
    }
  }
  
  // Sort moving lines to be 1 (Bottom) to 6 (Top) naturally if needed, 
  // but currently they are pushed in reverse order of generation loop (Top down).
  // Let's reverse them to be intuitive.
  movingLines.sort((a, b) => a - b);

  return {
    lines,
    originalBinary,
    futureBinary,
    isDynamic: movingLines.length > 0,
    movingLines
  };
};
