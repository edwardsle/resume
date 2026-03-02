import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

const THEMES = ["rose", "violet", "cyan", "amber", "emerald"] as const;
export type ThemeName = (typeof THEMES)[number];

interface ThemeContextType {
  theme: ThemeName;
  cycleTheme: () => void;
  themes: readonly ThemeName[];
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeName>(() => {
    return THEMES[Math.floor(Math.random() * THEMES.length)];
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const cycleTheme = () => {
    setTheme((prev) => {
      const idx = THEMES.indexOf(prev);
      return THEMES[(idx + 1) % THEMES.length];
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, cycleTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
