import { Outlet } from 'react-router';

export function AcademyRoot() {
  return (
    <div className="h-full w-full">
      <Outlet />
    </div>
  );
}
