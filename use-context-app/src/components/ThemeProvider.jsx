import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Initial theme based on localStorage value, default to light theme
  const [darkTheme, setDarkTheme] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    // Apply the class based on darkTheme state value
    if (darkTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkTheme]); // Re-run only when darkTheme state changes

  const toggleTheme = () => {
    // Toggle the darkTheme state, which will trigger useEffect to update the theme
    setDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
