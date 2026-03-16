import { Link, useLocation } from 'react-router';
import { Sun, Moon, ChevronLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import logo from '../../../blockchainptlogo.jpeg';

interface Section {
  id: string;
  number: string;
  label: string;
  path: string;
}

const BF_BASE = '/blockchain-fundamentals';

const BF_SECTIONS: Section[] = [
  { id: 'home',  number: '🏠', label: 'Home',       path: `${BF_BASE}` },
  { id: 'lo',    number: '🎯', label: 'Objectives', path: `${BF_BASE}/learning-objectives` },
  { id: 'cs',    number: '🗺️', label: 'Summary',    path: `${BF_BASE}/course-summary` },
  { id: '0',     number: '00', label: 'Prologue',   path: `${BF_BASE}/prologue` },
  { id: '1',     number: '01', label: 'Intro',      path: `${BF_BASE}/section-1` },
  { id: '2',     number: '02', label: 'Bitcoin',    path: `${BF_BASE}/section-2` },
  { id: '3',     number: '03', label: "What's Next", path: `${BF_BASE}/section-3` },
  { id: 'bib',   number: '📖', label: 'Bibliography', path: `${BF_BASE}/bibliography` },
];

interface CourseNavProps {
  base?: string;
  sections?: Section[];
  accentColor?: string;
}

export function CourseNav({ base = BF_BASE, sections = BF_SECTIONS, accentColor = '#ED1C24' }: CourseNavProps) {
  const location = useLocation();
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <nav className="w-full bg-sidebar border-b border-sidebar-border flex items-center px-3 py-2 gap-2 overflow-x-auto shrink-0">

      {/* Back to courses */}
      <Link
        to="/"
        title="All Courses"
        className="flex-shrink-0 flex items-center gap-1 px-2 py-1.5 rounded-lg border border-transparent text-muted-foreground hover:text-foreground hover:border-border hover:bg-sidebar-accent transition-all"
      >
        <ChevronLeft className="size-3.5" />
        <span className="text-[10px] font-semibold hidden sm:block">Courses</span>
      </Link>

      {/* Divider */}
      <div className="h-6 w-px bg-border flex-shrink-0" />

      {/* Logo */}
      <Link to={base} className="flex-shrink-0 mr-1 group">
        <img src={logo} alt="Blockchain.pt" className="h-8 object-contain group-hover:scale-105 transition-transform" />
      </Link>

      {/* Section squares */}
      <div className="flex items-center gap-1 flex-1 min-w-0">
        {sections.map((section) => {
          const isActive =
            section.path === base
              ? location.pathname === base || location.pathname === `${base}/`
              : location.pathname.startsWith(section.path);

          return (
            <Link
              key={section.id}
              to={section.path}
              title={section.label}
              style={isActive ? {
                backgroundColor: accentColor + '18',
                borderColor: accentColor + '90',
                boxShadow: `0 1px 3px ${accentColor}18`,
              } : undefined}
              className={`flex-1 flex flex-col items-center justify-center py-1.5 rounded-lg transition-all text-center group border ${isActive ? '' : 'border-transparent hover:bg-sidebar-accent/60'}`}
            >
              <span
                className="text-sm font-bold leading-none mb-0.5"
                style={{ color: isActive ? accentColor : undefined }}
              >
                {section.number}
              </span>
              <span className={`text-[10px] leading-tight truncate w-full text-center ${isActive ? 'text-foreground font-semibold' : 'text-muted-foreground'}`}>
                {section.label}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Dark mode toggle */}
      <button
        onClick={() => setIsDark(d => !d)}
        className="flex-shrink-0 size-9 flex items-center justify-center rounded-lg border border-border text-foreground hover:bg-sidebar-accent transition-all"
        title={isDark ? 'Light Mode' : 'Dark Mode'}
      >
        {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
      </button>
    </nav>
  );
}
