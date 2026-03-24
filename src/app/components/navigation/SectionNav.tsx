import { useState, useEffect } from 'react';

export interface SubChapter {
  id: string;
  label: string;
}

interface SectionNavProps {
  chapters: SubChapter[];
}

export function SectionNav({ chapters }: SectionNavProps) {
  const [activeId, setActiveId] = useState<string>(chapters[0]?.id ?? '');

  useEffect(() => {
    const container = document.getElementById('section-scroll');
    if (!container) return;

    const handleScroll = () => {
      const threshold = container.clientHeight / 3;
      let current = chapters[0]?.id ?? '';
      for (const ch of chapters) {
        const el = document.getElementById(ch.id);
        if (el) {
          const top = el.getBoundingClientRect().top - container.getBoundingClientRect().top;
          if (top <= threshold) current = ch.id;
        }
      }
      setActiveId(current);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => container.removeEventListener('scroll', handleScroll);
  }, [chapters]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="h-full flex flex-col py-2 pl-2 pr-1 overflow-y-auto">
      {chapters.map((ch) => (
        <button
          key={ch.id}
          onClick={() => scrollTo(ch.id)}
          className={`
            flex-1 min-w-0 text-left text-xs leading-snug px-3 rounded-md transition-all cursor-pointer flex items-center
            ${activeId === ch.id
              ? 'bg-[#ED1C24]/15 text-[#ED1C24] font-bold'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}
          `}
        >
          <span className="truncate block w-full">{ch.label}</span>
        </button>
      ))}
    </nav>
  );
}
