import { createContext, useState } from 'react';

export const PageContext = createContext(null);

export const PageChange = ({ children }) => {
  const [page, setPage] = useState({
    name: '',
    slug: '',
  });

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
};
