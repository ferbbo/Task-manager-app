"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext([]);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState(null);
  const handleTheme = (mode) => {
    if (mode === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
      window.localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
      window.localStorage.setItem("theme", "light");
    }
  };
  useEffect(() => {
    if (
      window.localStorage.theme === "dark" ||
      (!("theme" in window.localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
      setTheme("light");
    }
    document.body.classList.add("body-visible");
    return () => {
      // clean up by removing the class if the component unmounts
      document.body.classList.remove("body-visible");
    };
  }, []);
  return (
    <ThemeContext.Provider value={[theme, handleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}
