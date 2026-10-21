"use client";

import { useTheme } from "@/lib/theme-context";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-[#71717a] hover:text-white transition-colors"
      aria-label="Toggle theme"
      suppressHydrationWarning
    >
      {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}
