import React, { createContext, useRef, useState } from 'react';

export const scrollContext = createContext();

const ScrollProvider = ({ children }) => {
  const contactUs = useRef(null);
  const aboutMe = useRef(null);
  const myExperties = useRef(null);
  const projects = useRef(null);
  const [activeTab, setActiveTab] = useState(0)

  return (
    <scrollContext.Provider value={{ contactUs, aboutMe, myExperties, projects, activeTab, setActiveTab }}>
      {children}
    </scrollContext.Provider>
  );
};

export default ScrollProvider;
