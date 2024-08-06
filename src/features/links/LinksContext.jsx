import { createContext, useContext, useState } from 'react';

const LinksContext = createContext();

function LinksProvider({ children }) {
  const [links, setLinks] = useState(null);

  return (
    <LinksContext.Provider value={{ links, setLinks }}>
      {children}
    </LinksContext.Provider>
  );
}

function useLink() {
  const context = useContext(LinksContext);
  if (!context) {
    throw new Error('useLink should be used within <LinksProvider>');
  }
  return context;
}

export { LinksProvider, useLink };
