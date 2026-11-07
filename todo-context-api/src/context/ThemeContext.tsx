import { type ThemeSwitchingProps } from "../types";
import { useState, createContext, useMemo } from "react";
import { type ThemeType } from "../types";

// Steps to follow
// 1. creating context
// 2. providing context
// 3. consuming context

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeContextType {
  initialTheme: ThemeSwitchingProps;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeType>("light");

  function toggleThemeFunction(currentTheme: string) {
    let activeTheme: ThemeType = currentTheme === "light" ? "dark" : "light";
    setTheme(activeTheme);
  }

  let value = useMemo<ThemeContextType>(
    () => ({
      initialTheme: {
        currentTheme: theme,
        toggleTheme: toggleThemeFunction,
      },
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeContext;
