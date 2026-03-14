import { ReactNode } from 'react';
import { Pen } from 'lucide-react';

interface WhiteboardSlideProps {
  title: string;
  content: ReactNode;
  notes?: string[];
}

export function WhiteboardSlide({ title, content, notes = [] }: WhiteboardSlideProps) {
  return (
    <div className="size-full flex flex-col p-12">
      <div className="flex items-center gap-3 mb-8">
        <Pen className="size-6 text-[#6366f1]" />
        <h2 className="text-4xl font-bold text-foreground">{title}</h2>
      </div>
      
      <div className="flex-1 grid grid-cols-3 gap-8">
        {/* Whiteboard Area */}
        <div className="col-span-2 bg-card rounded-2xl border-4 border-[#6366f1]/30 p-8 relative overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
          
          {/* Content */}
          <div className="relative z-10 size-full flex items-center justify-center">
            {content}
          </div>
        </div>
        
        {/* Notes Panel */}
        <div className="space-y-4">
          <div className="bg-[#f59e0b]/10 border-l-4 border-[#f59e0b] rounded-r-lg p-4">
            <div className="font-bold text-[#f59e0b] mb-2">Notes</div>
            <div className="text-xs text-muted-foreground">
              Interactive teaching area - explain concepts visually
            </div>
          </div>
          
          {notes.length > 0 && (
            <div className="space-y-3">
              {notes.map((note, index) => (
                <div
                  key={index}
                  className="p-4 bg-card rounded-lg border border-border"
                >
                  <div className="flex items-start gap-2">
                    <div className="size-6 rounded-full bg-[#6366f1]/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs text-[#6366f1] font-bold">{index + 1}</span>
                    </div>
                    <p className="text-sm text-foreground flex-1">{note}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
