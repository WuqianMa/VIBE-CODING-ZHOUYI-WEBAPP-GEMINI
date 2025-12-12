import React, { useState, useRef, useEffect } from 'react';
import HexagramDisplay from './components/HexagramDisplay';
import ReleaseFlow from './components/ReleaseFlow';
import YarrowLoading from './components/YarrowLoading';
import { generateHexagramAnalysis } from './services/geminiService';
import { consultYarrowStalks } from './utils/yarrow';
import { HexagramCardContent, Language, RichHexagram } from './types';
import { HEXAGRAM_DB } from './data/hexagrams';
import { TRANSLATIONS } from './data/translations';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('zh'); 
  const t = TRANSLATIONS[language];

  const [question, setQuestion] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);
  const [hexagramBinary, setHexagramBinary] = useState<string | null>(null);
  const [futureBinary, setFutureBinary] = useState<string | null>(null);
  const [cardContent, setCardContent] = useState<HexagramCardContent | null>(null);
  const [showReleaseFlow, setShowReleaseFlow] = useState(false);
  
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardContent && resultsRef.current) {
        resultsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [cardContent]);

  const getHexagramData = (binary: string): RichHexagram => {
    const entry = HEXAGRAM_DB[binary];
    if (entry) {
      return entry;
    }
    return {
      sequence: 0,
      symbol: "??",
      name: "Unknown",
      pinyin: "",
      binary: binary,
      decision: { text: "Data missing.", commentary: { tuan_zhuan: "", xiang_zhuan: "" } },
      lines: []
    };
  };

  const getLineLabel = (index: number, value: number, lang: Language): string => {
      const isYang = (value === 7 || value === 9);
      const valStr = isYang ? "九" : "六";
      const valStrEn = isYang ? "Nine" : "Six";

      if (lang === 'zh') {
          if (index === 0) return `初${valStr}`;
          if (index === 5) return `上${valStr}`;
          // Correct mapping for indices 1, 2, 3, 4
          const positions = ["", "二", "三", "四", "五"];
          return `${valStr}${positions[index]}`;
      } else {
          const posEn = ["at the beginning", "in the second place", "in the third place", "in the fourth place", "in the fifth place", "at the top"];
          return `${valStrEn} ${posEn[index]}`;
      }
  };

  const handleGenerate = async () => {
    if (!question.trim()) return;

    setIsLoading(true);
    setHexagramBinary(null);
    setFutureBinary(null);
    setCardContent(null);
    setShowReleaseFlow(false);

    // Artificial delay for animation
    await new Promise(resolve => setTimeout(resolve, 2000));

    try {
      const yarrowResult = consultYarrowStalks();
      setHexagramBinary(yarrowResult.originalBinary);
      if (yarrowResult.isDynamic) {
        setFutureBinary(yarrowResult.futureBinary);
      }

      const originalData = getHexagramData(yarrowResult.originalBinary);
      const futureData = yarrowResult.isDynamic 
        ? getHexagramData(yarrowResult.futureBinary) 
        : undefined;

      const aiData = await generateHexagramAnalysis(
        question, 
        originalData, 
        futureData, 
        yarrowResult.movingLines, 
        language
      );
      
      setCardContent({
        hexagramData: originalData,
        futureHexagramData: futureData,
        isDynamic: yarrowResult.isDynamic,
        movingLines: yarrowResult.movingLines, // Indices 1-6
        rawLines: yarrowResult.lines, // Raw 6,7,8,9
        originalAttributes: aiData.originalAttributes,
        futureAttributes: aiData.futureAttributes,
        movingLineAttributes: aiData.movingLineAttributes,
        dialogue: aiData.dialogue || [],
        potentialEmotions: aiData.potentialEmotions || []
      });

    } catch (error) {
      console.error(error);
      alert("Connection interrupted.");
    } finally {
      setIsLoading(false);
    }
  };

  // Helper component for enriched text
  const EnrichedText = ({ original, pinyin, meaning }: { original: string, pinyin?: string, meaning?: string }) => (
    <div className="space-y-1">
      <p className="font-serif-sc text-stone-800 text-lg leading-relaxed">{original}</p>
      {pinyin && <p className="text-xs text-stone-400 font-mono tracking-wide">{pinyin}</p>}
      {meaning && <p className="text-sm text-stone-600 italic font-serif leading-relaxed">{meaning}</p>}
    </div>
  );

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans text-stone-700">
      <header className="bg-white border-b border-stone-200 py-4 px-6 sticky top-0 z-20 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
             <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-800 serif-sc">
               {t.title}
             </h1>
             <span className="hidden sm:inline text-stone-300">|</span>
             <div className="text-xs text-stone-400 hidden sm:block">
               {t.subtitle}
             </div>
          </div>
          
          <select 
            value={language}
            onChange={(e) => setLanguage(e.target.value as Language)}
            className="text-sm bg-stone-100 border-none rounded-md px-3 py-1 focus:ring-1 focus:ring-stone-300 cursor-pointer"
          >
            <option value="en">English</option>
            <option value="zh">中文</option>
            <option value="fr">Français</option>
          </select>
        </div>
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6 flex flex-col gap-8 pb-32">
        
        {!cardContent && !isLoading && (
            <div className="flex flex-col gap-4 mt-12 transition-all duration-500 ease-in-out max-w-3xl mx-auto w-full">
                <div className="text-center space-y-2 mb-8">
                    <h2 className="text-3xl font-light text-stone-600">{t.burdens}</h2>
                    <p className="text-stone-400">{t.instruction}</p>
                </div>

                <div className="relative">
                    <input 
                        type="text" 
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder={t.placeholder}
                        className="w-full p-4 pr-12 text-lg bg-white border border-stone-300 rounded-xl shadow-sm focus:ring-2 focus:ring-stone-400 focus:outline-none transition-shadow placeholder:text-stone-300"
                        onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                    />
                </div>

                <button 
                    onClick={handleGenerate}
                    disabled={!question.trim()}
                    className="w-full sm:w-auto mx-auto px-8 py-3 bg-stone-800 text-stone-50 rounded-full font-medium hover:bg-stone-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg active:scale-95 text-white"
                >
                    {t.button_reveal}
                </button>
            </div>
        )}

        {isLoading && <YarrowLoading />}

        {cardContent && hexagramBinary && !isLoading && (
            <div ref={resultsRef} className="animate-fade-in space-y-12">
                
                {/* Cards Container */}
                <div className="flex flex-col xl:flex-row gap-6 justify-center items-start">
                    
                    {/* 1. Original Hexagram (Ben Gua) */}
                    <div className="w-full xl:w-1/3 bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-100 flex flex-col">
                        <div className="bg-stone-50 p-6 flex flex-col items-center border-b border-stone-100 relative overflow-hidden">
                             <div className="mb-2 text-xs uppercase tracking-widest text-stone-400 font-bold relative z-10">
                                {cardContent.isDynamic ? t.dynamic_hexagram : t.static_hexagram}
                             </div>
                             <HexagramDisplay binaryString={hexagramBinary} />
                             <div className="text-center mt-4">
                                <h2 className="text-3xl font-bold serif-sc text-stone-800">{cardContent.hexagramData.name}</h2>
                                {cardContent.originalAttributes?.namePinyin && (
                                   <p className="text-xs text-stone-400 font-mono mt-1">{cardContent.originalAttributes.namePinyin}</p>
                                )}
                             </div>
                             
                             {/* Background Watermark Symbol */}
                             <div className="absolute -bottom-10 -right-10 text-[10rem] text-stone-200/20 font-serif leading-none select-none pointer-events-none z-0">
                                {cardContent.hexagramData.symbol}
                             </div>
                        </div>
                        <div className="p-6 space-y-6 flex-1 bg-white relative z-10">
                             <div>
                                <h3 className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-2">{t.tuan_zhuan}</h3>
                                <EnrichedText 
                                  original={cardContent.hexagramData.decision.text}
                                  pinyin={cardContent.originalAttributes?.decisionPinyin}
                                  meaning={cardContent.originalAttributes?.decisionMeaning}
                                />
                             </div>
                             <div>
                                <h3 className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-2">{t.xiang_zhuan}</h3>
                                <EnrichedText 
                                  original={cardContent.hexagramData.decision.commentary.xiang_zhuan}
                                  pinyin={cardContent.originalAttributes?.xiangPinyin}
                                  meaning={cardContent.originalAttributes?.xiangMeaning}
                                />
                             </div>
                        </div>
                    </div>

                    {/* Transition Arrow (Desktop) */}
                    {cardContent.isDynamic && (
                        <div className="hidden xl:flex items-center justify-center text-stone-300 py-32 opacity-50">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </div>
                    )}

                    {/* 2. Future Hexagram (Dong Gua) */}
                    {cardContent.isDynamic && cardContent.futureHexagramData && futureBinary && (
                      <div className="w-full xl:w-1/3 flex flex-col gap-6">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-100 flex flex-col">
                            <div className="bg-stone-50 p-6 flex flex-col items-center border-b border-stone-100 relative overflow-hidden">
                                 <div className="mb-2 text-xs uppercase tracking-widest text-stone-400 font-bold relative z-10">
                                    {t.changed_to}
                                 </div>
                                 <HexagramDisplay binaryString={futureBinary} />
                                 <div className="text-center mt-4">
                                    <h2 className="text-3xl font-bold serif-sc text-stone-800">{cardContent.futureHexagramData.name}</h2>
                                    {cardContent.futureAttributes?.namePinyin && (
                                       <p className="text-xs text-stone-400 font-mono mt-1">{cardContent.futureAttributes.namePinyin}</p>
                                    )}
                                 </div>
                                 
                                 <div className="absolute -bottom-10 -left-10 text-[10rem] text-stone-200/20 font-serif leading-none select-none pointer-events-none z-0">
                                    {cardContent.futureHexagramData.symbol}
                                 </div>
                            </div>
                            <div className="p-6 space-y-6 flex-1 bg-white relative z-10">
                                <div>
                                    <h3 className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-2">{t.tuan_zhuan}</h3>
                                    <EnrichedText 
                                      original={cardContent.futureHexagramData.decision.text}
                                      pinyin={cardContent.futureAttributes?.decisionPinyin}
                                      meaning={cardContent.futureAttributes?.decisionMeaning}
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-2">{t.xiang_zhuan}</h3>
                                    <EnrichedText 
                                      original={cardContent.futureHexagramData.decision.commentary.xiang_zhuan}
                                      pinyin={cardContent.futureAttributes?.xiangPinyin}
                                      meaning={cardContent.futureAttributes?.xiangMeaning}
                                    />
                                </div>
                            </div>
                        </div>
                      </div>
                    )}

                    {/* 3. Moving Lines Box */}
                    {cardContent.isDynamic && cardContent.movingLines.length > 0 && (
                        <div className="w-full xl:w-1/4 bg-stone-100 rounded-xl border border-stone-200 p-5 flex flex-col self-start shadow-inner">
                             <div className="flex items-center gap-2 mb-4">
                                <div className="w-2 h-2 bg-stone-400 rounded-full animate-pulse"></div>
                                <h3 className="text-sm uppercase tracking-widest text-stone-500 font-bold">{t.moving_lines}</h3>
                             </div>
                             <div className="space-y-6 divide-y divide-stone-200/50">
                                {cardContent.movingLines.map((lineIndex) => { 
                                    const rawIndex = lineIndex - 1; 
                                    const value = cardContent.rawLines[rawIndex];
                                    const label = getLineLabel(rawIndex, value, language);
                                    const lineData = cardContent.hexagramData.lines[rawIndex];
                                    
                                    // Find enrichment data
                                    const enrichment = cardContent.movingLineAttributes?.find(l => l.lineIndex === lineIndex);

                                    return (
                                        <div key={lineIndex} className="pt-4 first:pt-0">
                                            <div className="font-bold serif-sc text-stone-800 mb-2 border-l-2 border-stone-400 pl-2">{label}</div>
                                            {lineData ? (
                                                <div className="space-y-4">
                                                    <div>
                                                        <EnrichedText 
                                                            original={lineData.text}
                                                            pinyin={enrichment?.pinyin}
                                                            meaning={enrichment?.meaning}
                                                        />
                                                    </div>
                                                    <div className="bg-white/50 p-2 rounded">
                                                        <span className="text-xs uppercase text-stone-400 font-bold block mb-1">{t.xiang_zhuan}</span>
                                                        <EnrichedText 
                                                            original={lineData.commentary.xiang_zhuan}
                                                            pinyin={enrichment?.xiangPinyin}
                                                            meaning={enrichment?.xiangMeaning}
                                                        />
                                                    </div>
                                                </div>
                                            ) : (
                                                <p className="text-stone-400 text-xs italic">(Text unavailable)</p>
                                            )}
                                        </div>
                                    );
                                })}
                             </div>
                        </div>
                    )}
                </div>

                {/* AI Dialogue Interface */}
                <div className="max-w-4xl mx-auto space-y-8 w-full">
                    <div className="flex items-center gap-3">
                        <div className="h-px bg-stone-200 flex-1"></div>
                        <span className="text-stone-400 text-sm uppercase tracking-widest">{t.interpretation}</span>
                        <div className="h-px bg-stone-200 flex-1"></div>
                    </div>
                    
                    <div className="flex flex-col gap-6">
                        {cardContent.dialogue.map((msg, idx) => (
                           <div key={idx} className="flex gap-4 items-start animate-slide-up" style={{animationDelay: `${idx * 150}ms`}}>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-stone-800 text-white flex items-center justify-center font-serif text-lg shadow-md">
                                    <span>易</span>
                                </div>
                                <div className="bg-white p-6 rounded-2xl rounded-tl-none shadow-sm border border-stone-100 max-w-2xl text-lg leading-loose text-stone-700">
                                    {msg.text}
                                </div>
                           </div>
                        ))}
                    </div>
                </div>

                {/* Release Flow */}
                <div className="max-w-4xl mx-auto space-y-6 w-full">
                    <div className="flex items-center gap-3">
                        <div className="h-px bg-stone-200 flex-1"></div>
                        <span className="text-stone-400 text-sm uppercase tracking-widest">{t.release_practice}</span>
                        <div className="h-px bg-stone-200 flex-1"></div>
                    </div>

                    {!showReleaseFlow ? (
                        <div className="text-center py-10 bg-gradient-to-b from-stone-50 to-white rounded-2xl border border-stone-200 border-dashed">
                            <p className="mb-6 text-stone-600 max-w-md mx-auto text-lg font-light">
                                {t.release_intro}
                            </p>
                            <button
                                onClick={() => setShowReleaseFlow(true)}
                                className="px-8 py-3 bg-stone-800 text-white rounded-full font-medium hover:bg-stone-700 active:scale-95 transition-all shadow-lg"
                            >
                                {t.start_release}
                            </button>
                        </div>
                    ) : (
                        <ReleaseFlow potentialEmotions={cardContent.potentialEmotions} language={language} />
                    )}
                </div>

            </div>
        )}
      </main>

      {cardContent && (
        <button 
            onClick={() => {
                setCardContent(null);
                setHexagramBinary(null);
                setFutureBinary(null);
                setQuestion('');
                setShowReleaseFlow(false);
            }}
            className="fixed top-20 right-4 sm:right-8 bg-white p-3 rounded-full shadow-lg border border-stone-200 hover:bg-stone-50 text-stone-500 z-30 transition-transform hover:scale-105"
            title="Start Over"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
        </button>
      )}
    </div>
  );
};

export default App;
