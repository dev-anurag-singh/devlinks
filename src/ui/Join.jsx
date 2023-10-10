import { Outlet, useNavigate } from 'react-router-dom';
import LogoFull from '../ui/LogoFull';
import { useUser } from '../features/auth/useUser';
import { useEffect } from 'react';
import Spinner from './Spinner';

function Join() {
  const { isAuthenticated, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate('/', { replace: true });
  }, [isAuthenticated, navigate]);

  if (isLoading) {
    return (
      <div className="flex h-[100dvh] items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="md:flex md:min-h-screen md:items-center md:justify-center md:bg-grey-light">
      <main className="flex flex-col gap-16 p-8 md:items-center ">
        <LogoFull />
        <div className="md:w-[30rem] md:bg-white md:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Join;
