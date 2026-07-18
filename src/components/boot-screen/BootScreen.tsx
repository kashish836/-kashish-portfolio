"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootLines = [
  { text: "$ ./boot_sequence.sh", delay: 0 },
  { text: "", delay: 300 },
  { text: "Initializing Kashish.exe...", delay: 600 },
  { text: "Loading memories...", delay: 1200 },
  { text: "", delay: 1500 },
  { text: "2006 → Born", delay: 1800 },
  { text: "2020 → Curiosity Detected", delay: 2400 },
  { text: "2024 → B.Tech Started, G.H. Raisoni College of Engineering", delay: 3000 },
  { text: "2026 → Building Intelligent Systems, SCOE Internship", delay: 3600 },
  { text: "", delay: 4000 },
  { text: "Loading Chapter One: The Engineer's Notebook...", delay: 4100 },
  { text: "Loading Developer Profile...", delay: 4200 },
  { text: "Loading AI Models...", delay: 4600 },
  { text: "Loading Projects...", delay: 5000 },
  { text: "Loading Future...", delay: 5400 },
  { text: "", delay: 5800 },
  { text: "[OK] All systems ready.", delay: 6000 },
];

interface BootScreenProps {
  onComplete: () => void;
}

export default function BootScreen({ onComplete }: BootScreenProps) {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    bootLines.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines(index + 1);
      }, line.delay);
    });

    setTimeout(() => {
      setShowCursor(false);
      onComplete();
    }, 7500);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]"
      >
        <div className="w-full max-w-2xl px-6">
          <div className="rounded-lg border border-[#2A2A2A] bg-[#0a0a0a] p-6 shadow-2xl">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <span className="ml-2 text-xs text-[#8A8A8A]">kashish@portfolio:~</span>
            </div>

            <div className="font-mono text-sm leading-relaxed">
              {bootLines.slice(0, visibleLines).map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="py-0.5"
                >
                  {line.text === "" ? (
                    <br />
                  ) : (
                    <span>
                      <span className="text-[#C084FC]">&gt;</span>{" "}
                      <span
                        className={
                          line.text.includes("→")
                            ? "text-[#A78BFA]"
                            : line.text.includes("[OK]")
                            ? "text-[#C084FC]"
                            : line.text.startsWith("$")
                            ? "text-[#7C3AED]"
                            : "text-[#F5F5F5]"
                        }
                      >
                        {line.text}
                      </span>
                    </span>
                  )}
                </motion.div>
              ))}
              {showCursor && (
                <span className="animate-blink text-[#C084FC]">█</span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
