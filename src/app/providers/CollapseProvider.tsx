"use client";

import { createContext, useContext, useState } from "react";

type Collapse = boolean;
type HandleCollapse = () => void;
interface CollapseContextType {
  collapse: Collapse;
  handleCollapse: HandleCollapse;
}
const CollapseContext = createContext<CollapseContextType | null>(null);
export const useCollapse = () => useContext(CollapseContext);

import React from "react";

function CollapseProvider({ children }) {
  const [collapse, setCollapse] = useState<Collapse>(false);
  const handleCollapse: HandleCollapse = () => {
    setCollapse((prevCollapse) => !prevCollapse);
  };
  return (
    <CollapseContext.Provider value={{ collapse, handleCollapse }}>
      {children}
    </CollapseContext.Provider>
  );
}
export default CollapseProvider;
