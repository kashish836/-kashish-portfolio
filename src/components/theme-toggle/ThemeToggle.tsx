"use client";

import { useTheme } from "@/lib/theme-context";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      suppressHydrationWarning
      className="fixed top-4 right-4 z-50 p-2 rounded-lg border border-[#2A2A2A] bg-[#0a0a0a] text-[#8A8A8A] hover:text-[#C084FC] hover:border-[#C084FC]/40 transition-colors"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}
