import { useEffect } from 'react';
import { useUser } from '../features/auth/useUser';
import { useNavigate } from 'react-router-dom';
import Spinner from './Spinner';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate('/auth/login');
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="flex h-[100dvh] items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
