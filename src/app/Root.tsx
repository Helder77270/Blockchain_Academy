import { Outlet } from 'react-router';
import { CourseNav } from './components/navigation/CourseNav';

export function Root() {
  return (
    <div className="h-full w-full flex flex-col">
      <CourseNav />
      <main className="flex-1 overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}
