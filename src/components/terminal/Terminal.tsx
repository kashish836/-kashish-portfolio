"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Terminal = ({ isOpen, onClose }: TerminalProps) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([
    "Kashish Portfolio Terminal v1.0",
    'Type "help" for available commands.',
  ]);
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const commands: Record<string, string> = {
    help: [
      "Available commands:",
      "  help     - Show available commands",
      "  projects - View my projects",
      "  skills   - View my technical skills",
      "  about    - Learn about me",
      "  future   - View my future goals",
      "  resume   - Get my resume",
      "  contact  - Get my contact information",
      "  clear    - Clear terminal output",
      "  exit     - Close terminal",
    ].join("\n"),

    projects: [
      "My Projects:",
      "  1. ISL Translator - Real-time Indian Sign Language translation using MediaPipe & TensorFlow",
      "  2. Plant Disease Detect - AI-powered plant disease detection from leaf images",
      "  3. Diabetes Prediction - ML model for diabetes prediction using healthcare data",
    ].join("\n"),

    skills: [
      "Technical Skills:",
      "  Python     - ████████████████████ 95%",
      "  Flutter    - ██████████████████   90%",
      "  AI/ML      - ██████████████████▌  92%",
      "  TensorFlow - █████████████████▌   88%",
      "  MediaPipe  - ████████████████▌    85%",
      "  OpenCV     - ████████████████▌    85%",
      "  SQL        - ████████████████     80%",
      "  Dart       - █████████████████▌   88%",
      "  React      - ███████████████      75%",
    ].join("\n"),

    about: [
      "Kashish - AI/ML Developer & Software Engineer",
      "  Passionate about building intelligent systems that solve real-world problems.",
      "  Experienced in Machine Learning, Computer Vision, and Mobile Development.",
      "  Love turning complex problems into elegant, user-friendly solutions.",
    ].join("\n"),

    future: [
      "Future Goals:",
      "  - Contribute to open-source AI/ML projects",
      "  - Build scalable production-ready applications",
      "  - Explore research in Computer Vision and NLP",
      "  - Collaborate with global tech communities",
    ].join("\n"),

    resume: "Resume coming soon! Stay tuned.",

    contact: [
      "Contact Information:",
      "  Email    - bhiwapurkarkashish0836@gmail.com",
      "  Phone    - +91 8468883531",
      "  GitHub   - github.com/kashish836",
      "  LinkedIn - linkedin.com/in/kashish-bhiwapurkar",
    ].join("\n"),
  };

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newOutput = [...output, "$ " + cmd];

    if (trimmed === "clear") {
      setOutput([]);
    } else if (trimmed === "exit") {
      onClose();
    } else if (commands[trimmed]) {
      setOutput([...newOutput, commands[trimmed]]);
    } else if (trimmed === "") {
      setOutput(newOutput);
    } else {
      setOutput([...newOutput, "Command not found: " + trimmed + ". Type 'help' for available commands."]);
    }

    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-[90%] max-w-3xl bg-[#0a0a0a] border border-[#2A2A2A] rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 bg-[#111111] border-b border-[#2A2A2A]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-3 text-sm text-[#8A8A8A]">kashish@portfolio:~</span>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded hover:bg-white/10 transition-colors"
              >
                <X size={16} className="text-[#8A8A8A]" />
              </button>
            </div>

            <div
              ref={outputRef}
              className="h-[400px] overflow-y-auto p-4 font-mono text-sm"
            >
              {output.map((line, i) => (
                <div key={i} className="whitespace-pre-wrap">
                  {line.startsWith("$ ") ? (
                    <span>
                      <span className="text-[#C084FC]">$</span>
                      <span className="text-[#F5F5F5]">{line.slice(1)}</span>
                    </span>
                  ) : (
                    <span className="text-[#F5F5F5]">{line}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center px-4 py-3 border-t border-[#2A2A2A] bg-[#0a0a0a]">
              <span className="text-[#C084FC] font-mono text-sm mr-2">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-[#F5F5F5] font-mono text-sm outline-none placeholder-[#444444]"
                placeholder="Type a command..."
                spellCheck={false}
                autoComplete="off"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Terminal;
