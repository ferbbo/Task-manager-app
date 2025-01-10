"use client";
import React, { useMemo } from "react";
import { createContext, useContext, useState } from "react";

type Collapse = boolean;
type HandleCollapse = () => void;
interface CollapseContextType {
  collapse: Collapse;
  handleCollapse: HandleCollapse;
}
const CollapseContext = createContext<CollapseContextType | null>(null);
export const useCollapse = () => useContext(CollapseContext);

function CollapseProvider({ children }) {
  const [collapse, setCollapse] = useState<Collapse>(false);
  const handleCollapse: HandleCollapse = () => {
    setCollapse((prevCollapse) => !prevCollapse);
  };
  const value = useMemo(() => (
    { collapse, handleCollapse }
  ),[collapse])
  
  return (
    <CollapseContext.Provider value={value}>
      {children}
    </CollapseContext.Provider>
  );
}
export default CollapseProvider;
