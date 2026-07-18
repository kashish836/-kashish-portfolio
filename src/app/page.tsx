"use client";

import { useState, useEffect } from "react";
import NeuralBackground from "@/components/neural-background/NeuralBackground";
import Navigation from "@/components/navigation/Navigation";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Timeline from "@/components/timeline/Timeline";
import SkillsMatrix from "@/components/skills/SkillsMatrix";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/experience/Experience";
import Achievements from "@/components/achievements/Achievements";
import CurrentFocus from "@/components/current-focus/CurrentFocus";
import FunFacts from "@/components/fun-facts/FunFacts";
import AIAssistant from "@/components/ai-assistant/AIAssistant";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Terminal from "@/components/terminal/Terminal";
import ThemeToggle from "@/components/theme-toggle/ThemeToggle";
import DecorativeElements from "@/components/decorative/DecorativeElements";
import CustomCursor from "@/components/cursor/CustomCursor";
import ClickRipple from "@/components/click-ripple/ClickRipple";
import { ThemeProvider } from "@/lib/theme-context";
import { useKonamiCode } from "@/lib/useKonamiCode";
import { useHydrationFix } from "@/lib/useHydrationFix";

export default function Home() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [secretMode, setSecretMode] = useState(false);

  useHydrationFix();

  useKonamiCode(() => {
    setSecretMode(true);
    setTimeout(() => setSecretMode(false), 5000);
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <ThemeProvider>
      <div suppressHydrationWarning className={`relative min-h-screen bg-[#050505] bg-grid ${secretMode ? "animate-pulse-glow" : ""}`}>
        <CustomCursor />
        <ClickRipple />
        <NeuralBackground />
        <DecorativeElements />
        <Navigation />
        <ThemeToggle />
        <Terminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
        {secretMode && (
          <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-lg bg-[#C084FC] text-[#050505] font-mono text-sm shadow-lg">
            Secret Mode Activated!
          </div>
        )}
        <main suppressHydrationWarning className="relative z-10">
          <Hero />
          <About />
          <Timeline />
          <SkillsMatrix />
          <Projects />
          <Experience />
          <CurrentFocus />
          <Achievements />
          <FunFacts />
          <AIAssistant />
          <Contact />
        </main>
        <Footer />
        <div className="fixed bottom-4 right-4 z-40 px-3 py-1.5 rounded border border-[#2A2A2A] bg-[#0a0a0a] text-xs font-mono text-[#8A8A8A]">
          Press <kbd className="px-1.5 py-0.5 rounded bg-[#111111] text-[#C084FC]">Ctrl+K</kbd> for terminal
        </div>
      </div>
    </ThemeProvider>
  );
}
