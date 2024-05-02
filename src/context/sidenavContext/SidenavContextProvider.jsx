import React, { useState } from "react";
import { SidenavContext } from "./SidenavContext";
const SidenavContextProvider = ({ children }) => {
  const [showSideNav, setShowSideNav] = useState(false);
  const handleToggleSideNav = () => {
    setShowSideNav((prev) => !prev);
  };
  return (
    <div>
      <SidenavContext.Provider value={{ showSideNav, setShowSideNav, handleToggleSideNav }}>
        {children}
      </SidenavContext.Provider>
    </div>
  );
};

export default SidenavContextProvider;
