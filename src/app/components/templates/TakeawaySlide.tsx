import { Check } from 'lucide-react';

interface TakeawaySlideProps {
  title: string;
  takeaways: string[];
}

export function TakeawaySlide({ title, takeaways }: TakeawaySlideProps) {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-12">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold text-center text-foreground mb-8">{title}</h2>
        
        <div className="space-y-6">
          {takeaways.map((takeaway, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-gradient-to-r from-card to-card/50 rounded-xl border-l-4 border-[#10b981] hover:shadow-lg transition-shadow"
            >
              <div className="size-8 rounded-full bg-[#10b981] flex items-center justify-center flex-shrink-0">
                <Check className="size-5 text-white" strokeWidth={3} />
              </div>
              <p className="text-lg text-foreground flex-1">{takeaway}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
