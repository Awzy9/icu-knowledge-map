"use client";

import React, { createContext, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import { useLocalStorageState } from "@/hooks/useLocalStorageState";

export type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
}

const STORAGE_KEY = "icu-knowledge-map-theme";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function subscribeToMedia(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getMediaSnapshot(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getServerMediaSnapshot(): "light" | "dark" {
  return "light";
}

export function ThemeProvider({ children }: { readonly children: React.ReactNode }) {
  const { value: storedTheme, setValue: setStoredTheme } = useLocalStorageState<Theme>(
    STORAGE_KEY,
    "system",
  );

  const systemTheme = useSyncExternalStore(
    subscribeToMedia,
    getMediaSnapshot,
    getServerMediaSnapshot,
  );

  const resolvedTheme: "light" | "dark" = useMemo(() => {
    if (storedTheme === "dark") return "dark";
    if (storedTheme === "light") return "light";
    return systemTheme;
  }, [storedTheme, systemTheme]);

  // Synchronize the DOM with resolved theme
  useEffect(() => {
    const root = document.documentElement;
    if (resolvedTheme === "dark") {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
    }
  }, [resolvedTheme]);

  const value = useMemo(
    () => ({
      theme: storedTheme,
      resolvedTheme,
      setTheme: setStoredTheme,
    }),
    [storedTheme, resolvedTheme, setStoredTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
