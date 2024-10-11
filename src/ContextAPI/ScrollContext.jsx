import React, { createContext, useRef } from 'react';

export const scrollContext = createContext();

const ScrollProvider = ({ children }) => {
  const contactUs = useRef(null);
  const aboutMe = useRef(null);
  const myProjects = useRef(null);

  return (
    <scrollContext.Provider value={{ contactUs, aboutMe, myProjects }}>
      {children}
    </scrollContext.Provider>
  );
};

export default ScrollProvider;
