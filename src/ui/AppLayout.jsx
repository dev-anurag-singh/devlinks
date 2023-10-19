import { Outlet } from 'react-router-dom';
import Header from './Header';
import Mockup from './Mockup';

function AppLayout() {
  return (
    <div className="min-h-screen bg-grey-light md:p-6">
      <Header />
      <main className="justify-center p-4 md:mt-6 md:p-0 xl:grid xl:grid-cols-[35rem_minmax(0,50.5rem)] xl:grid-rows-1 xl:gap-6">
        <Mockup />
        <div className="rounded-xl bg-white">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
