import { ArrowRight } from 'lucide-react';

interface Step {
  number: number;
  title: string;
  description: string;
}

interface ProcessSlideProps {
  title: string;
  steps: Step[];
}

export function ProcessSlide({ title, steps }: ProcessSlideProps) {
  return (
    <div className="h-full w-full flex flex-col p-12">
      <h2 className="text-4xl font-bold text-foreground mb-8">{title}</h2>
      
      <div className="flex-1 flex items-center justify-center">
        <div className="flex items-center gap-6 max-w-6xl">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center gap-6">
              {/* Step Card */}
              <div className="flex-1 min-w-[200px]">
                <div className="bg-card border-2 border-[#ED1C24] rounded-xl p-6 hover:shadow-lg hover:shadow-[#ED1C24]/20 transition-all">
                  {/* Step Number */}
                  <div className="size-12 rounded-full bg-gradient-to-br from-[#ED1C24] to-[#39B54A] flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
              
              {/* Arrow */}
              {index < steps.length - 1 && (
                <ArrowRight className="size-8 text-[#ED1C24] flex-shrink-0" strokeWidth={3} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}