import { Outlet } from 'react-router-dom';
import Header from './Header';
import Mockup from './Mockup';

function AppLayout() {
  return (
    <div className="container mx-auto md:p-6">
      <Header />
      <main className="flex justify-center gap-6 p-4 md:mt-6 md:p-0">
        <Mockup />
        <div className="flex-grow rounded-xl bg-white">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
