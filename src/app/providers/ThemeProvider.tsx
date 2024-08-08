"use client";

import { createContext, useEffect, useState, useContext } from "react";

type Theme = "light" | "dark" | null;
type HandleTheme = (mode: Theme) => void;
interface ThemeContextType {
  theme: Theme;
  handleTheme: HandleTheme;
}

const ThemeContext = createContext<ThemeContextType | null>(null);
export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>(null);
  const handleTheme: HandleTheme = (mode) => {
    setTheme(mode);
    if (mode === "light") document.documentElement.classList.remove("dark");
    document.documentElement.classList.add(mode);
    document.documentElement.style.colorScheme = mode;
    window.localStorage.setItem("theme", mode);
  };
  useEffect(() => {
    const storeTheme = window.localStorage.getItem("theme") as Theme;
    const isPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initialTheme = storeTheme || isPrefersDark ? "dark" : "light";
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    document.documentElement.style.colorScheme = initialTheme;
    document.body.classList.add("body-visible");

    return () => {
      // clean up by removing the class if the component unmounts
      document.body.classList.remove("body-visible");
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
