"use client";

import { createContext, useState } from "react";

export const CollapseContext = createContext([]);

import React from "react";

function CollapseProvider({ children }) {
  const [collapse, setCollapse] = useState(false);
  return (
    <CollapseContext.Provider value={[collapse, setCollapse]}>
      {children}
    </CollapseContext.Provider>
  );
}
export default CollapseProvider;
