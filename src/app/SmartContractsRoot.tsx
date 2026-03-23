import { Outlet } from 'react-router';
import { CourseNav } from './components/navigation/CourseNav';

const BASE = '/smart-contracts';

const sections = [
  { id: 'home', number: '🏠', label: 'Home',         path: BASE },
  { id: '1',    number: '01', label: 'Intro',        path: `${BASE}/section-1` },
  { id: '2',    number: '02', label: 'How It Works', path: `${BASE}/section-2` },
  { id: '3',    number: '03', label: 'Case Studies', path: `${BASE}/section-3` },
  { id: '4',    number: '04', label: 'Dehype',       path: `${BASE}/section-4` },
  { id: '5',    number: '05', label: 'Team Project', path: `${BASE}/section-5` },
  { id: 'end',  number: '🏁', label: 'Conclusion',   path: `${BASE}/conclusion` },
];

export function SmartContractsRoot() {
  return (
    <div className="h-full w-full flex flex-col">
      <CourseNav base={BASE} sections={sections} accentColor="#6366f1" />
      <main className="flex-1 overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}
