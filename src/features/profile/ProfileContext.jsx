import { createContext, useContext, useState } from 'react';

const ProfileContext = createContext();

function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(null);

  return (
    <ProfileContext.Provider
      value={{
        profile,
        setProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

function useProfile() {
  const context = useContext(ProfileContext);
  return context;
}

export { ProfileProvider, useProfile };
