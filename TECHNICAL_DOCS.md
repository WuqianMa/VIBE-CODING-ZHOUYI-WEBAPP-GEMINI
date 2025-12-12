# Technical Documentation

## Overview
**I Ching Release** is a React-based single-page application (SPA) built with TypeScript and Tailwind CSS. It serves as a digital oracle that uses a mathematical simulation of the Yarrow Stalk method for divination and the Google Gemini API for natural language interpretation and data enrichment.

## Tech Stack
*   **Frontend:** React 19, TypeScript
*   **Styling:** Tailwind CSS
*   **AI Integration:** Google GenAI SDK (`@google/genai`)
*   **Build/Runtime:** Browser-based ES Modules (via `importmap` in `index.html`).

---

## ⚠️ API Usage Specification

The application communicates with the Google Gemini API (Model: `gemini-2.5-flash`) at a specific point in the user flow.

### When is the API called?
The API is triggered **only** inside the `handleGenerate` function in `App.tsx`, specifically after the local divination algorithm has finished.

### Sequence of Events:
1.  **User Input:** User types a question and clicks "Reveal".
2.  **Local Algorithm (`consultYarrowStalks`):** The app runs a client-side algorithm using `Math.random()` to generate 6 lines based on Yarrow Stalk probabilities (6, 7, 8, 9). This determines the Hexagram binary codes.
3.  **Data Retrieval:** The app looks up the static hardcoded data (Chinese characters, standard commentary) for the resulting Hexagrams from `data/hexagrams.ts`.
4.  **API CALL TRIGGERS HERE (`generateHexagramAnalysis`):**
    *   The app sends the *User's Question*, the *Hexagram Name/Text*, and the *Moving Lines* to Gemini.
5.  **API Response:** Gemini returns a structured JSON object containing:
    *   Pinyin annotations.
    *   Modern contextual translations.
    *   A conversational "Dialogue" interpretation.
    *   A list of "Potential Emotions" for the Release flow.
6.  **Rendering:** The UI updates to show the result cards.

---

## Core Algorithms

### Yarrow Stalk Simulation (`utils/yarrow.ts`)
The app does not use a simple 50/50 coin toss. It simulates the probability distribution of the 49 yarrow stalks method:
*   **Old Yin (6):** ~1/16 probability (Changes to Yang)
*   **Young Yang (7):** ~5/16 probability (Static)
*   **Young Yin (8):** ~7/16 probability (Static)
*   **Old Yang (9):** ~3/16 probability (Changes to Yin)

### Hexagram Mapping
Hexagrams are stored as 6-bit binary strings (e.g., `111111`).
*   **Storage:** Top-to-Bottom index (Index 0 is Top line).
*   **Generation:** The Yarrow function generates Bottom-to-Top, so the string is reversed before lookup in `HEXAGRAM_DB`.

## Data Structure (`types.ts`)

The application relies heavily on the `HexagramCardContent` interface, which merges static database data with AI-generated enhancements:

```typescript
interface HexagramCardContent {
  hexagramData: RichHexagram;       // From local DB
  futureHexagramData?: RichHexagram;// From local DB (if moving lines exist)
  
  // AI Generated Content via Gemini
  originalAttributes?: EnhancedHexagramInfo; // Pinyin/Meanings
  futureAttributes?: EnhancedHexagramInfo;   // Pinyin/Meanings
  dialogue: DialogueMessage[];               // The chat bubbles
  potentialEmotions: string[];               // For Sedona Method
}
```

## Setup & Installation

1.  Ensure you have a valid Google Gemini `API_KEY`.
2.  Since this uses ES Modules via CDN (esm.sh), no `npm install` is strictly required for running the `index.html` directly if served via a simple HTTP server, provided the environment variables are injected or handled.
3.  In a development environment, standard React tooling (Vite/CRA) can be used.

## Localization
Support for `en` (English), `zh` (Chinese), and `fr` (French) is handled via a `TRANSLATIONS` constant dictionary. The AI is explicitly prompted to generate interpretations in the target language selected by the user.
