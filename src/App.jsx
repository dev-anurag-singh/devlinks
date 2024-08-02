import { Toaster } from 'react-hot-toast';
import Login from './pages/Login';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Home from './pages/Home';
import ProtectedRoute from './ui/ProtectedRoute';
import AppLayout from './ui/AppLayout';
import { LinksProvider } from './features/links/LinksContext';
import Profile from './pages/Profile';
import { ProfileProvider } from './features/profile/ProfileContext';
import PageNotFound from './pages/PageNotFound';
import UserPreview from './pages/UserPreview';
import AuthLayout from './ui/AuthLayout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const router = createBrowserRouter([
  {
    element: (
      <ProtectedRoute>
        <ProfileProvider>
          <LinksProvider>
            <AppLayout />
          </LinksProvider>
        </ProfileProvider>
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate replace to="dashboard" />,
      },
      {
        path: 'dashboard',
        element: <Home />,
      },
      { path: 'profile', element: <Profile /> },
    ],
    errorElement: <PageNotFound />,
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <p>Signup</p>,
      },
    ],
  },
  {
    path: '/preview',
    element: (
      <ProtectedRoute>
        <UserPreview />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster
        position="top-right"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          succes: {
            duration: 3000,
          },
          error: {
            duration: 4000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            color: '#ffffff',
            backgroundColor: '#633CFF',
          },
        }}
      />

      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
