import React, { useState, useEffect, useRef } from 'react';
import { ReleaseStep, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface ReleaseFlowProps {
  potentialEmotions: string[];
  language: Language;
}

const ReleaseFlow: React.FC<ReleaseFlowProps> = ({ potentialEmotions, language }) => {
  const t = TRANSLATIONS[language];
  const [step, setStep] = useState<ReleaseStep>(ReleaseStep.INPUT_FEELING);
  const [feeling, setFeeling] = useState('');
  const [isStuckLoop, setIsStuckLoop] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (step === ReleaseStep.INPUT_FEELING && inputRef.current) {
      inputRef.current.focus();
    }
  }, [step]);

  const handleNext = (answer: 'Yes' | 'No' | 'Now' | 'NotYet') => {
    if (answer === 'No' || answer === 'NotYet') {
      setStep(ReleaseStep.STUCK_TRANSITION);
      return;
    }
    switch (step) {
      case ReleaseStep.QUESTION_COULD:
        setStep(ReleaseStep.QUESTION_WOULD);
        break;
      case ReleaseStep.QUESTION_WOULD:
        setStep(ReleaseStep.QUESTION_WHEN);
        break;
      case ReleaseStep.QUESTION_WHEN:
        if (answer === 'Now') {
          setFeeling('');
          setIsStuckLoop(false);
          setStep(ReleaseStep.INPUT_FEELING);
        }
        break;
      default:
        break;
    }
  };

  const startStuckLoop = () => {
    setIsStuckLoop(true);
    setStep(ReleaseStep.QUESTION_COULD);
  };

  // Allow empty submit
  const handleFeelingSubmit = () => {
    setStep(ReleaseStep.QUESTION_COULD);
  };

  return (
    <div className="bg-stone-100/50 border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-inner animate-fade-in relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="relative z-10 max-w-lg mx-auto min-h-[300px] flex flex-col justify-center text-center">
        
        {step === ReleaseStep.INPUT_FEELING && (
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-xl font-medium text-stone-700">
              {potentialEmotions.length > 0 && !isStuckLoop ? (
                <span>
                  {t.feel_intro} <br/>
                  <span className="text-stone-900 font-bold">{potentialEmotions.join(', ')}</span>.
                </span>
              ) : (
                <span>{t.feel_deeper}</span>
              )}
            </h3>
            
            <div className="space-y-4">
              <label className="block text-2xl font-light text-stone-600">
                {isStuckLoop ? t.how_stuck : t.how_feel}
              </label>
              <input
                ref={inputRef}
                type="text"
                value={feeling}
                onChange={(e) => setFeeling(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleFeelingSubmit()}
                placeholder={isStuckLoop ? t.stuck_placeholder : t.input_placeholder}
                className="w-full bg-white border-b-2 border-stone-300 px-4 py-3 text-center text-xl focus:border-stone-800 focus:outline-none transition-colors placeholder:text-stone-300"
              />
              <button
                onClick={handleFeelingSubmit}
                className="mt-4 text-sm font-bold uppercase tracking-widest text-stone-400 hover:text-stone-800 transition-all"
              >
                {t.begin_release} &rarr;
              </button>
            </div>
          </div>
        )}

        {(step === ReleaseStep.QUESTION_COULD || step === ReleaseStep.QUESTION_WOULD || step === ReleaseStep.QUESTION_WHEN) && (
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-widest text-stone-400 font-bold">
                {t.focus_on}: {isStuckLoop ? t.stuckness : (feeling || "this feeling")}
              </p>
              <h3 className="text-3xl sm:text-4xl font-serif text-stone-800 leading-tight">
                {step === ReleaseStep.QUESTION_COULD && (isStuckLoop ? t.could_stuck : t.could_let_go)}
                {step === ReleaseStep.QUESTION_WOULD && (isStuckLoop ? t.would_stuck : t.would_let_go)}
                {step === ReleaseStep.QUESTION_WHEN && t.when}
              </h3>
            </div>

            <div className="flex justify-center gap-4">
              {step === ReleaseStep.QUESTION_WHEN ? (
                <>
                  <button onClick={() => handleNext('Now')} className="min-w-[120px] px-8 py-3 bg-stone-800 text-stone-50 rounded-full font-medium hover:bg-stone-700 transition-all shadow-lg text-white">
                    {t.now}
                  </button>
                  <button onClick={() => handleNext('NotYet')} className="min-w-[120px] px-8 py-3 bg-white border border-stone-300 text-stone-600 rounded-full font-medium hover:bg-stone-50 transition-all">
                    {t.not_yet}
                  </button>
                </>
              ) : (
                <>
                  <button onClick={() => handleNext('Yes')} className="min-w-[120px] px-8 py-3 bg-stone-800 text-stone-50 rounded-full font-medium hover:bg-stone-700 transition-all shadow-lg text-white">
                    {t.yes}
                  </button>
                  <button onClick={() => handleNext('No')} className="min-w-[120px] px-8 py-3 bg-white border border-stone-300 text-stone-600 rounded-full font-medium hover:bg-stone-50 transition-all">
                    {t.no}
                  </button>
                </>
              )}
            </div>
          </div>
        )}

        {step === ReleaseStep.STUCK_TRANSITION && (
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-serif text-stone-600">{t.never_mind}</h3>
            <p className="text-stone-500 max-w-xs mx-auto">{t.stuck_advice}</p>
            <button onClick={startStuckLoop} className="px-8 py-3 bg-stone-200 text-stone-800 rounded-full font-medium hover:bg-stone-300 active:scale-95 transition-all">
              {t.try_stuck}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReleaseFlow;
