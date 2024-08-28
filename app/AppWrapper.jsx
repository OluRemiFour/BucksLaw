"use client";
import React, { useState } from "react";
import Navigation from "./components/Reusable/Navigation";

function AppWrapper({ children }) {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const handleToggleIcon = () => {
    setIsLightMode(!isLightMode);
  };
  return (
    <div className={`${isLightMode ? "light-mode" : "dark-mode"}`}>
      <Navigation
        isLightMode={isLightMode}
        handleToggleIcon={handleToggleIcon}
      />
      {children}
    </div>
  );
}

export default AppWrapper;
