import { Outlet } from 'react-router';
import { useSlideKeyNav } from './hooks/useSlideKeyNav';
import { SlideNavTip } from './components/navigation/SlideNavTip';
import { SmallScreenGate } from './components/navigation/SmallScreenGate';

export function AcademyRoot() {
  useSlideKeyNav();

  return (
    <div className="h-full w-full">
      <Outlet />
      <SlideNavTip />
      <SmallScreenGate />
    </div>
  );
}
