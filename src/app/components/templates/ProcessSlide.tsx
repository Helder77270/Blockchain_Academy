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
    <div className="w-full flex flex-col p-5 lg:p-10">
      <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-4 lg:mb-6">{title}</h2>

      {/* Steps — vertical on small screens, horizontal on lg */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 max-w-6xl">
        {steps.map((step, index) => (
          <div key={step.number} className="flex lg:flex-row flex-row items-center gap-4 lg:gap-6 flex-1">
            {/* Step Card */}
            <div className="flex-1 min-w-0 lg:min-w-[160px]">
              <div className="bg-card border-2 border-[#ED1C24] rounded-xl p-4 lg:p-6 hover:shadow-lg hover:shadow-[#ED1C24]/20 transition-all">
                {/* Step Number */}
                <div className="size-10 lg:size-12 rounded-full bg-gradient-to-br from-[#ED1C24] to-[#39B54A] flex items-center justify-center mb-2 lg:mb-4">
                  <span className="text-xl lg:text-2xl font-bold text-white">{step.number}</span>
                </div>

                <h3 className="text-base lg:text-lg font-bold text-foreground mb-1 lg:mb-2">{step.title}</h3>
                <p className="text-xs lg:text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>

            {/* Arrow — right on lg, down on mobile */}
            {index < steps.length - 1 && (
              <>
                <ArrowRight className="size-6 lg:size-8 text-[#ED1C24] flex-shrink-0 hidden lg:block" strokeWidth={3} />
                <ArrowRight className="size-6 text-[#ED1C24] flex-shrink-0 block lg:hidden rotate-90" strokeWidth={3} />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}