import React, { useEffect, useState, useCallback, useMemo } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [dark, setDark] = useState<boolean>(() => {
    try {
      if (typeof window === "undefined") return true;

      const saved = localStorage.getItem("theme");

      // First visit = dark mode
      if (!saved) return true;

      // Returning visitor = use saved preference
      return saved === "dark";
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn("Failed to read persisted theme:", err);
      return true;
    }
  });

  const toggle = useCallback(() => {
    setDark((d) => !d);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn("Failed to persist theme:", err);
    }

    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", dark);
    }
  }, [dark]);

  const value = useMemo(() => ({ dark, toggle }), [dark, toggle]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;