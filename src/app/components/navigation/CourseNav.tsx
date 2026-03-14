import { Link, useLocation } from 'react-router';
import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import logo from '../../../blockchainptlogo.jpeg';

interface Section {
  id: string;
  number: string;
  label: string;
  path: string;
}

const sections: Section[] = [
  { id: 'home', number: '🏠', label: 'Home', path: '/' },
  { id: 'lo', number: '🎯', label: 'Objectives', path: '/learning-objectives' },
  { id: 'cs', number: '🗺️', label: 'Summary', path: '/course-summary' },
  { id: '0', number: '00', label: 'Prologue', path: '/prologue' },
  { id: '1', number: '01', label: 'Intro', path: '/section-1' },
  { id: '2', number: '02', label: 'Bitcoin', path: '/section-2' },
  { id: '3', number: '03', label: "What's Next", path: '/section-3' },
  { id: 'bib', number: '📖', label: 'Bibliography', path: '/bibliography' },
  // { id: 'ds', number: '📚', label: 'Design', path: '/design-system' },
  // { id: 'qr', number: '⚡', label: 'Reference', path: '/quick-reference' },
];

export function CourseNav() {
  const location = useLocation();
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <nav className="w-full bg-sidebar border-b border-sidebar-border flex items-center px-3 py-2 gap-2 overflow-x-auto shrink-0">
      {/* Logo */}
      <Link to="/" className="flex-shrink-0 mr-1 group">
        <img src={logo} alt="Blockchain.pt" className="h-8 object-contain group-hover:scale-105 transition-transform" />
      </Link>

      {/* Section squares */}
      <div className="flex items-center gap-1 flex-1 min-w-0">
        {sections.map((section) => {
          const isActive = location.pathname === section.path ||
            (section.path === '/' && location.pathname === '/');

          return (
            <Link
              key={section.id}
              to={section.path}
              title={section.label}
              className={`
                flex-1 flex flex-col items-center justify-center py-1.5 rounded-lg transition-all
                text-center group
                ${isActive
                  ? 'bg-[#ED1C24]/15 border border-[#ED1C24]/60 shadow-sm shadow-[#ED1C24]/10'
                  : 'hover:bg-sidebar-accent/60 border border-transparent'
                }
              `}
            >
              <span className={`
                text-sm font-bold leading-none mb-0.5
                ${isActive ? 'text-[#ED1C24]' : 'text-muted-foreground group-hover:text-[#ED1C24]'}
              `}>
                {section.number}
              </span>
              <span className={`
                text-[10px] leading-tight truncate w-full
                ${isActive ? 'text-foreground font-semibold' : 'text-muted-foreground'}
              `}>
                {section.label}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Dark mode toggle */}
      <button
        onClick={() => setIsDark(d => !d)}
        className="flex-shrink-0 size-9 flex items-center justify-center rounded-lg border border-border text-foreground hover:border-[#ED1C24] hover:bg-sidebar-accent transition-all"
        title={isDark ? 'Light Mode' : 'Dark Mode'}
      >
        {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
      </button>
    </nav>
  );
}