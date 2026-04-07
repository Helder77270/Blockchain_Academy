import { Check } from 'lucide-react';

interface TakeawaySlideProps {
  title: string;
  takeaways: string[];
}

export function TakeawaySlide({ title, takeaways }: TakeawaySlideProps) {
  return (
    <div className="slide-template w-full items-center justify-center p-5 lg:p-10">
      <div className="max-w-4xl w-full">
        <h2 className="text-2xl lg:text-3xl font-bold text-center text-foreground mb-4 lg:mb-6">{title}</h2>

        <div className="space-y-3">
          {takeaways.map((takeaway, index) => (
            <div
              key={index}
              className="flex items-start gap-3 lg:gap-4 p-3 lg:p-5 bg-gradient-to-r from-card to-card/50 rounded-xl border-l-4 border-[#10b981] hover:shadow-lg transition-shadow"
            >
              <div className="size-6 lg:size-8 rounded-full bg-[#10b981] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="size-4 lg:size-5 text-white" strokeWidth={3} />
              </div>
              <p className="text-sm lg:text-base text-foreground flex-1">{takeaway}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
