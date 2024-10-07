import React, { createContext, useRef } from 'react';

export const scrollContext = createContext();

const ScrollProvider = ({ children }) => {
  const contactUs = useRef(null);

  return (
    <scrollContext.Provider value={contactUs}>
      {children}
    </scrollContext.Provider>
  );
};

export default ScrollProvider;
