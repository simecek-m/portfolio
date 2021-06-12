import React, { createContext, useContext, useState } from "react";
import styled from "styled-components";

const Theme = styled.div`
  color: var(--color-text);
  background: var(--color-background);  
  transition: .6s ease all;
  --color-text: black;
  --color-background: white;
  --color-primary: #08ED7B;

  &.dark {
    --color-text: white;
    --color-background: #171717;
    --color-primary: #2DF491;
  }
`;

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme hook must be used within a ThemeProvider");
  }
  return context;
}

export default function ThemeProvider({ children }) {
  const getThemePreferenceFromStorage = () => {
    return localStorage.getItem("theme") ?? "light"
  };
  const [theme, setTheme] = useState(getThemePreferenceFromStorage());
  const setThemeAndPersist = theme => {
    setTheme(theme)
    localStorage.setItem("theme", theme);
  };
  const switchTheme = () => theme === "light" ? setThemeAndPersist("dark") : setThemeAndPersist("light");
  const themeController = {
    switchTheme,
    theme
  }
  return (
    <ThemeContext.Provider value={ themeController }>
      <Theme className={theme}>
        { children }
      </Theme>
    </ThemeContext.Provider>
    
  )
};
