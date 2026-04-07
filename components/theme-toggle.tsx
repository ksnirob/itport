"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const isDark = theme === "dark";

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Theme toggle"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white/80 text-zinc-700 backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-200"
      >
        <Moon size={18} />
      </button>
    );
  }

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white/80 text-zinc-700 backdrop-blur transition hover:-translate-y-0.5 hover:border-rose-500/70 hover:text-rose-700 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-200 dark:hover:text-rose-300"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
