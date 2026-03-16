import { Outlet } from 'react-router';
import { useSlideKeyNav } from './hooks/useSlideKeyNav';

export function AcademyRoot() {
  useSlideKeyNav();

  return (
    <div className="h-full w-full">
      <Outlet />
    </div>
  );
}
