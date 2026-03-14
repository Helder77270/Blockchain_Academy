import { ReactNode } from 'react';

interface DiagramSlideProps {
  title: string;
  diagram: ReactNode;
  caption?: string;
  annotations?: Array<{ label: string; description: string }>;
}

export function DiagramSlide({ title, diagram, caption, annotations = [] }: DiagramSlideProps) {
  return (
    <div className="h-full w-full flex flex-col p-12">
      <h2 className="text-4xl font-bold text-foreground mb-4">{title}</h2>
      
      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        {/* Diagram Area */}
        <div className="w-full max-w-5xl p-8 bg-card/30 rounded-2xl border border-border overflow-visible">
          {diagram}
        </div>
        
        {caption && (
          <p className="text-lg text-muted-foreground text-center italic">{caption}</p>
        )}
        
        {/* Annotations */}
        {annotations.length > 0 && (
          <div className="w-full max-w-5xl grid grid-cols-3 gap-4">
            {annotations.map((annotation, index) => (
              <div
                key={index}
                className="p-4 bg-card rounded-lg border border-[#6366f1]/30"
              >
                <div className="text-sm font-bold text-[#6366f1] mb-1">{annotation.label}</div>
                <div className="text-xs text-muted-foreground">{annotation.description}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
