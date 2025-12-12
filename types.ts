import { Type } from "@google/genai";

export type Language = 'en' | 'zh' | 'fr';

export interface HexagramLine {
  line_index: number;
  line_number: string; // e.g. "初九"
  text: string;
  commentary: {
    xiang_zhuan: string;
  };
}

export interface RichHexagram {
  sequence: number;
  symbol: string;
  name: string;
  pinyin: string;
  binary: string; // Bottom-to-Top (e.g., 111111 for Qian, 100010 for Zhun)
  decision: {
    text: string;
    commentary: {
      tuan_zhuan: string;
      xiang_zhuan: string;
    }
  };
  lines: HexagramLine[];
  yong_jiu?: {
    text: string;
    commentary: { xiang_zhuan: string; }
  };
  yong_liu?: {
    text: string;
    commentary: { xiang_zhuan: string; }
  };
}

export interface YarrowResult {
  lines: number[]; // Array of 6, 7, 8, 9 (Bottom to Top)
  originalBinary: string;
  futureBinary: string;
  isDynamic: boolean;
  movingLines: number[]; // Indices of moving lines (1-6)
}

// New interfaces for AI enrichment
export interface EnhancedHexagramInfo {
  namePinyin: string;
  decisionPinyin: string;
  decisionMeaning: string;
  xiangPinyin: string;
  xiangMeaning: string;
}

export interface EnhancedLineInfo {
  lineIndex: number;
  pinyin: string;
  meaning: string;
  xiangPinyin: string;
  xiangMeaning: string;
}

export interface DialogueMessage {
  text: string;
}

export interface HexagramCardContent {
  hexagramData: RichHexagram;
  futureHexagramData?: RichHexagram;
  isDynamic: boolean;
  movingLines: number[];
  rawLines: number[]; // The raw 6/7/8/9 values
  
  // AI Generated Content
  originalAttributes?: EnhancedHexagramInfo;
  futureAttributes?: EnhancedHexagramInfo;
  movingLineAttributes?: EnhancedLineInfo[];
  dialogue: DialogueMessage[]; // Replaces single 'analysis' string
  potentialEmotions: string[];
}

export enum ReleaseStep {
  IDLE = 'IDLE',
  INPUT_FEELING = 'INPUT_FEELING',
  QUESTION_COULD = 'QUESTION_COULD',
  QUESTION_WOULD = 'QUESTION_WOULD',
  QUESTION_WHEN = 'QUESTION_WHEN',
  STUCK_TRANSITION = 'STUCK_TRANSITION'
}
