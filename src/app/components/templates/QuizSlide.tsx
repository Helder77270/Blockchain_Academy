import { useState } from 'react';
import { Check, X } from 'lucide-react';

interface QuizOption {
  text: string;
  correct: boolean;
}

interface QuizSlideProps {
  question: string;
  options: QuizOption[];
  explanation?: string;
}

export function QuizSlide({ question, options, explanation }: QuizSlideProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    setShowAnswer(true);
  };

  const isCorrect = selectedIndex !== null && options[selectedIndex]?.correct;

  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-12">
      <div className="max-w-4xl w-full">
        <div className="mb-6 text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-[#6366f1]/20 border border-[#6366f1] mb-4">
            <span className="text-[#6366f1] font-bold">Quiz</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground">{question}</h2>
        </div>
        
        <div className="space-y-4 mb-6">
          {options.map((option, index) => {
            const isSelected = selectedIndex === index;
            const showCorrect = showAnswer && option.correct;
            const showIncorrect = showAnswer && isSelected && !option.correct;
            
            return (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                disabled={showAnswer}
                className={`
                  w-full p-6 rounded-xl border-2 text-left transition-all
                  flex items-center gap-4
                  ${!showAnswer ? 'hover:border-[#6366f1] hover:bg-card/50' : ''}
                  ${isSelected && !showAnswer ? 'border-[#6366f1] bg-card' : 'border-border bg-card/30'}
                  ${showCorrect ? 'border-[#10b981] bg-[#10b981]/10' : ''}
                  ${showIncorrect ? 'border-[#ef4444] bg-[#ef4444]/10' : ''}
                  ${showAnswer ? 'cursor-default' : 'cursor-pointer'}
                `}
              >
                <div className={`
                  size-8 rounded-full border-2 flex items-center justify-center flex-shrink-0
                  ${showCorrect ? 'border-[#10b981] bg-[#10b981]' : ''}
                  ${showIncorrect ? 'border-[#ef4444] bg-[#ef4444]' : ''}
                  ${!showAnswer ? 'border-muted-foreground' : ''}
                `}>
                  {showCorrect && <Check className="size-5 text-white" strokeWidth={3} />}
                  {showIncorrect && <X className="size-5 text-white" strokeWidth={3} />}
                  {!showAnswer && <span className="text-muted-foreground">{String.fromCharCode(65 + index)}</span>}
                </div>
                <span className="text-lg text-foreground">{option.text}</span>
              </button>
            );
          })}
        </div>
        
        {showAnswer && explanation && (
          <div className={`
            p-6 rounded-xl border-2
            ${isCorrect ? 'border-[#10b981] bg-[#10b981]/10' : 'border-[#ef4444] bg-[#ef4444]/10'}
          `}>
            <div className="flex items-center gap-2 mb-2">
              {isCorrect ? (
                <Check className="size-6 text-[#10b981]" strokeWidth={3} />
              ) : (
                <X className="size-6 text-[#ef4444]" strokeWidth={3} />
              )}
              <span className={`font-bold ${isCorrect ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                {isCorrect ? 'Correct!' : 'Incorrect'}
              </span>
            </div>
            <p className="text-foreground">{explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
}
