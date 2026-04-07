"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

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
