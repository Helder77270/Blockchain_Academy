import { Outlet } from 'react-router';
import { CourseNav } from './components/navigation/CourseNav';

const BASE = '/blockchain-platforms';

const sections = [
  { id: 'home', number: '🏠', label: 'Home',            path: BASE },
  { id: 'lo',   number: '🎯', label: 'Objectives',     path: `${BASE}/learning-objectives` },
  { id: '0',    number: '00', label: 'Recap',           path: `${BASE}/section-0` },
  { id: '1',    number: '01', label: 'Bitcoin',         path: `${BASE}/section-1` },
  { id: '2',    number: '02', label: 'Ethereum',        path: `${BASE}/section-2` },
  { id: '3',    number: '03', label: 'Hyperledger',     path: `${BASE}/section-3` },
  { id: '4',    number: '04', label: 'Interoperability',path: `${BASE}/section-4` },
  { id: 'end',  number: '🏁', label: 'Conclusion',      path: `${BASE}/conclusion` },
];

export function BlockchainPlatformsRoot() {
  return (
    <div className="h-full w-full flex flex-col">
      <CourseNav base={BASE} sections={sections} accentColor="#39B54A" />
      <main className="flex-1 overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}
