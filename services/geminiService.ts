import { GoogleGenAI, Type, Schema } from "@google/genai";
import { RichHexagram, Language, HexagramCardContent } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
const modelName = 'gemini-2.5-flash';

const responseSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    originalAttributes: {
      type: Type.OBJECT,
      properties: {
        namePinyin: { type: Type.STRING },
        decisionPinyin: { type: Type.STRING },
        decisionMeaning: { type: Type.STRING },
        xiangPinyin: { type: Type.STRING },
        xiangMeaning: { type: Type.STRING },
      },
      required: ["namePinyin", "decisionPinyin", "decisionMeaning", "xiangPinyin", "xiangMeaning"]
    },
    futureAttributes: {
      type: Type.OBJECT,
      properties: {
        namePinyin: { type: Type.STRING },
        decisionPinyin: { type: Type.STRING },
        decisionMeaning: { type: Type.STRING },
        xiangPinyin: { type: Type.STRING },
        xiangMeaning: { type: Type.STRING },
      },
      nullable: true
    },
    movingLineAttributes: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          lineIndex: { type: Type.INTEGER },
          pinyin: { type: Type.STRING },
          meaning: { type: Type.STRING },
          xiangPinyin: { type: Type.STRING },
          xiangMeaning: { type: Type.STRING },
        },
        required: ["lineIndex", "pinyin", "meaning", "xiangPinyin", "xiangMeaning"]
      }
    },
    dialogue: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          text: { type: Type.STRING, description: "One part of the conversation/analysis." }
        },
        required: ["text"]
      },
      description: "The analysis presented as a series of gentle, wise conversational messages from a Guide."
    },
    potentialEmotions: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "List of 2-3 specific emotions identified."
    }
  },
  required: ["originalAttributes", "dialogue", "potentialEmotions"]
};

export const generateHexagramAnalysis = async (
  question: string,
  hexagramData: RichHexagram,
  futureHexagramData: RichHexagram | undefined,
  movingLines: number[],
  language: Language
): Promise<Partial<HexagramCardContent>> => {
  
  const langName = language === 'zh' ? 'Simplified Chinese' : language === 'fr' ? 'French' : 'English';
  const meaningLang = language === 'zh' ? 'Modern Chinese (Vernacular/Baihua)' : 'English';
  
  // Extract moving lines text for context
  const movingLinesContext = movingLines.map(idx => {
    const line = hexagramData.lines.find(l => l.line_index === idx);
    return line ? `Line ${idx}: ${line.text} (Xiang: ${line.commentary.xiang_zhuan})` : '';
  }).join('\n');

  const prompt = `
    Target Language: ${langName}
    Translation Language for Meanings: ${meaningLang}
    
    User Question: "${question}"
    
    Context:
    1. Original Hexagram: ${hexagramData.name}
       Decision: ${hexagramData.decision.text}
       Xiang: ${hexagramData.decision.commentary.xiang_zhuan}
    
    2. Future Hexagram: ${futureHexagramData ? futureHexagramData.name : "None"}
       Decision: ${futureHexagramData ? futureHexagramData.decision.text : "None"}
       Xiang: ${futureHexagramData ? futureHexagramData.decision.commentary.xiang_zhuan : "None"}
       
    3. Moving Lines:
    ${movingLinesContext}
    
    Task 1: Data Enrichment
    - Provide Pinyin and a clear, modern translation (${meaningLang}) for:
      a) The Decision Text (卦辞)
      b) The Xiang Commentary (象辞)
      c) Any Moving Lines (爻辞 + 象辞)
    
    Task 2: Dialogue Analysis
    - Act as a wise, gentle I Ching guide.
    - Break your analysis into 3-5 conversational messages (dialogue bubbles).
    - First message: Acknowledge the question and introduce the Hexagram.
    - Middle messages: Explain the wisdom, the shift (if any), and the deeper psychological aspect (Sedona Method style - wanting Control/Approval/Safety).
    - Final message: A gentle encouragement to release.
  `;

  try {
    const response = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from Gemini");
    
    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
