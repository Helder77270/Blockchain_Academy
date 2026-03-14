import { Book } from 'lucide-react';

interface DefinitionBoxProps {
  term: string;
  definition: string;
  className?: string;
}

export function DefinitionBox({ term, definition, className = "" }: DefinitionBoxProps) {
  return (
    <div className={`bg-[#6366f1]/10 border-l-4 border-[#6366f1] rounded-r-lg p-4 ${className}`}>
      <div className="flex items-start gap-3">
        <Book className="size-5 text-[#6366f1] mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <div className="font-bold text-[#6366f1] mb-1">{term}</div>
          <div className="text-sm text-foreground">{definition}</div>
        </div>
      </div>
    </div>
  );
}
