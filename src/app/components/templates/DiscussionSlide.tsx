import { MessageCircle, Lightbulb } from 'lucide-react';

interface DiscussionSlideProps {
  prompt: string;
  guidingQuestions?: string[];
}

export function DiscussionSlide({ prompt, guidingQuestions = [] }: DiscussionSlideProps) {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-12">
      <div className="max-w-4xl w-full">
        {/* Discussion Icon */}
        <div className="flex justify-center mb-6">
          <div className="size-24 rounded-full bg-gradient-to-br from-[#ED1C24] to-[#39B54A] flex items-center justify-center shadow-lg shadow-[#ED1C24]/30">
            <MessageCircle className="size-12 text-white" strokeWidth={2} />
          </div>
        </div>
        
        {/* Prompt */}
        <div className="bg-card border-2 border-[#ED1C24] rounded-2xl p-8 mb-6">
          <h2 className="text-3xl font-bold text-foreground text-center">{prompt}</h2>
        </div>
        
        {/* Guiding Questions */}
        {guidingQuestions.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <Lightbulb className="size-5 text-[#39B54A]" />
              <span className="font-bold">Think about:</span>
            </div>
            
            {guidingQuestions.map((question, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg"
              >
                <div className="size-6 rounded-full bg-[#ED1C24]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm text-[#ED1C24] font-bold">{index + 1}</span>
                </div>
                <p className="text-foreground flex-1">{question}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}