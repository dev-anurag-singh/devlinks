import { Outlet } from 'react-router-dom';
import Header from './Header';
import Mockup from './Mockup';
import Spinner from './Spinner';
import { useLink } from '../features/links/LinksContext';
import { useGetLinks } from '../features/links/useGetLinks';
import { useEffect } from 'react';
import { useProfile } from '../features/profile/ProfileContext';
import { useGetProfile } from '../features/profile/useGetProfile';

function AppLayout() {
  const { links, setLinks } = useLink();
  const { profile, setProfile } = useProfile();
  const { data, error } = useGetLinks();
  const { data: profileData, error: profileError } = useGetProfile();

  useEffect(() => {
    if (data) setLinks(data);
  }, [setLinks, data]);

  useEffect(() => {
    if (profileData) setProfile(profileData);
  }, [profileData, setProfile]);

  if (error || profileError) {
    throw new Error(error.message);
  }

  // DO NOT SHOW FORM UNTIL LINKS AND PROFILE IS FETCHED AND UPDATED IN CONTEXT

  if (!links || !profile) {
    return (
      <div className="flex h-[100dvh] items-center justify-center">
        <Spinner />
      </div>
    );
  }

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
