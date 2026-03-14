interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface TimelineSlideProps {
  title: string;
  events: TimelineEvent[];
}

export function TimelineSlide({ title, events }: TimelineSlideProps) {
  return (
    <div className="size-full flex flex-col p-12">
      <h2 className="text-4xl font-bold text-foreground mb-12">{title}</h2>
      
      <div className="flex-1 relative overflow-y-auto min-h-0">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ED1C24] via-[#39B54A] to-[#ffffff]" />
        
        {/* Events */}
        <div className="space-y-6 pb-4">
          {events.map((event, index) => (
            <div key={index} className="relative pl-24 group">
              {/* Timeline Dot */}
              <div className="absolute left-5 top-2 size-8 rounded-full bg-[#ED1C24] border-4 border-background shadow-lg shadow-[#ED1C24]/50 group-hover:scale-125 transition-transform" />
              
              {/* Content */}
              <div className="bg-card border border-border rounded-lg p-4 hover:border-[#ED1C24] transition-colors">
                <div className="flex items-baseline gap-4 mb-1">
                  <span className="text-xl font-bold text-[#ED1C24] font-mono">{event.year}</span>
                  <h3 className="text-lg font-bold text-foreground">{event.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}