import { ReactNode } from 'react';

interface ConceptSlideProps {
  title: string;
  description: string;
  visual?: ReactNode;
  keyPoints?: string[];
}

export function ConceptSlide({
  title,
  description,
  visual,
  keyPoints = []
}: ConceptSlideProps) {
  return (
    <div className="h-full w-full flex flex-col p-12">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-4xl font-bold text-foreground mb-4">{title}</h2>
        <p className="text-lg text-muted-foreground max-w-3xl">{description}</p>
      </div>
      
      {/* Content Grid */}
      <div className="flex-1 grid grid-cols-2 gap-6">
        {/* Visual */}
        <div className="flex items-center justify-center p-8 bg-card/50 rounded-2xl border border-border">
          {visual || (
            <div className="text-muted-foreground text-center">
              Visual placeholder
            </div>
          )}
        </div>

        {/* Key Points */}
        <div className="flex flex-col justify-center space-y-4">
          {keyPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-card rounded-lg border border-[#6366f1]/30 hover:border-[#6366f1] transition-colors"
            >
              <div className="size-8 rounded-full bg-[#6366f1] flex items-center justify-center flex-shrink-0 text-white font-bold">
                {index + 1}
              </div>
              <p className="text-foreground flex-1">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
