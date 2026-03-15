import { ReactNode } from 'react';

interface DiagramSlideProps {
  title: string;
  diagram: ReactNode;
  caption?: string;
  annotations?: Array<{ label: string; description: string }>;
}

export function DiagramSlide({ title, diagram, caption, annotations = [] }: DiagramSlideProps) {
  return (
    <div className="w-full flex flex-col p-5 lg:p-10">
      <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-3 lg:mb-4">{title}</h2>

      <div className="flex flex-col items-center gap-4 lg:gap-6">
        {/* Diagram Area */}
        <div className="w-full max-w-5xl p-4 lg:p-8 bg-card/30 rounded-2xl border border-border overflow-visible">
          {diagram}
        </div>

        {caption && (
          <p className="text-sm lg:text-lg text-muted-foreground text-center italic">{caption}</p>
        )}

        {/* Annotations */}
        {annotations.length > 0 && (
          <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4">
            {annotations.map((annotation, index) => (
              <div
                key={index}
                className="p-3 lg:p-4 bg-card rounded-lg border border-[#6366f1]/30"
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
