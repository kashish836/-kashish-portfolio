"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User } from "lucide-react";

interface Message {
  role: "user" | "bot";
  text: string;
}

const knowledgeBase: Record<string, string> = {
  projects:
    "Kashish has built 6 notable projects:\n1. ISL Translator – 35 gesture classes, 41,000+ samples, 99.96% accuracy using MediaPipe + TensorFlow Lite\n2. Krishi Sakhi – AI-powered agriculture assistant for farmers\n3. Snuggle Glow – Responsive web platform\n4. Ananda Restaurant – Restaurant website\n5. Flashcard App – Flutter + Firebase learning tool\n6. Civic-Eye – Hackathon project",
  isl: "The ISL Translator is Kashish's flagship project. It supports 35 gesture classes trained on 41,000+ samples, achieving 99.96% accuracy. Built with MediaPipe for hand landmark detection and TensorFlow Lite for real-time gesture classification on mobile devices.",
  "sign language":
    "The ISL Translator is Kashish's flagship project. It supports 35 gesture classes trained on 41,000+ samples, achieving 99.96% accuracy. Built with MediaPipe for hand landmark detection and TensorFlow Lite for real-time gesture classification on mobile devices.",
  krishi:
    "Krishi Sakhi is an AI-powered agriculture assistant designed to help farmers with crop guidance, disease detection, and smart farming recommendations.",
  agriculture:
    "Krishi Sakhi is an AI-powered agriculture assistant designed to help farmers with crop guidance, disease detection, and smart farming recommendations.",
  snuggle:
    "Snuggle Glow is a responsive web platform built by Kashish with a clean, modern UI and smooth user experience.",
  ananda:
    "Ananda Restaurant is a restaurant website project by Kashish featuring an elegant design for menu display and online presence.",
  restaurant:
    "Ananda Restaurant is a restaurant website project by Kashish featuring an elegant design for menu display and online presence.",
  flashcard:
    "The Flashcard App is a Flutter + Firebase learning tool built by Kashish to help users study and retain information through interactive flashcards.",
  "civic eye":
    "Civic-Eye is a hackathon project by Kashish focused on civic awareness and community engagement.",
  hackathon:
    "Kashish has participated in multiple hackathons, including building Civic-Eye, a project focused on civic awareness and community engagement.",
  skills:
    "Kashish's main skills include Python (95%), Flutter (90%), AI/ML (92%), TensorFlow (88%), MediaPipe (85%), OpenCV (85%), SQL (80%), and Dart (88%).",
  technologies:
    "Kashish works with Python, Flutter, TensorFlow, MediaPipe, OpenCV, SQL, Dart, React, and Git.",
  "machine learning":
    "Kashish is passionate about Machine Learning and has built projects like ISL Translator, Krishi Sakhi, and other intelligent systems using TensorFlow and Scikit-learn.",
  flutter:
    "Kashish is a Flutter developer who has built cross-platform mobile applications, including the ISL Translator app and the Flashcard App with Firebase integration.",
  experience:
    "Kashish is currently doing an SCOE internship focused on AI/ML research and has participated in multiple hackathons.",
  education:
    "Kashish is pursuing a B.Tech in Data Science (2024–2028) at G.H. Raisoni College of Engineering, Nagpur, with a CGPA of 8.1. Her focus areas are AI/ML and Software Development.",
  college:
    "Kashish is pursuing a B.Tech in Data Science at G.H. Raisoni College of Engineering, Nagpur. She maintains a CGPA of 8.1.",
  cgpa:
    "Kashish maintains a CGPA of 8.1 in her B.Tech Data Science program at G.H. Raisoni College of Engineering, Nagpur.",
  "current focus":
    "Kashish is currently focused on AI/ML research during her SCOE internship, participating in hackathons, and building intelligent systems like the ISL Translator and Krishi Sakhi.",
  future:
    "Kashish aims to build more intelligent systems, contribute to AI research, and eventually start her own tech venture. Chapter Two is just beginning!",
  contact:
    "You can reach Kashish through the contact form below or connect on GitHub and LinkedIn.",
  hello: "Hello! I'm Kashish's AI assistant. Ask me anything about her projects, skills, experience, or background!",
  hi: "Hey there! 👋 I'm here to tell you about Kashish. What would you like to know?",
  "who are you":
    "I'm a simple AI assistant built to help you learn about Kashish Bhiwapurkar. Ask me about her projects, skills, or experience!",
  "what does she do":
    "Kashish is an AI Engineer and Flutter Developer who builds intelligent systems. She's pursuing B.Tech Data Science at G.H. Raisoni College of Engineering, Nagpur with a CGPA of 8.1.",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();

  for (const [key, value] of Object.entries(knowledgeBase)) {
    if (lower.includes(key)) {
      return value;
    }
  }

  return "I'm not sure about that. Try asking about her projects, skills, experience, education, or future goals!";
}

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hello! I'm Kashish's AI assistant. Ask me anything about her projects, skills, experience, or background!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);

    setIsTyping(true);
    setTimeout(() => {
      const response = getResponse(userMessage);
      setMessages((prev) => [...prev, { role: "bot", text: response }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <section suppressHydrationWarning className="relative py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-[#7C3AED] mb-2">
            <span className="text-[#8A8A8A]">$</span> ./ask_kashish --interactive
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4">
            Ask <span className="text-gradient">Kashish AI</span>
          </h2>
          <p className="text-[#8A8A8A] mb-8">
            Curious? Ask me anything about Kashish.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-lg border border-[#2A2A2A] bg-[#0a0a0a] overflow-hidden"
        >
          {/* Header */}
          <div className="border-b border-[#2A2A2A] p-3 flex items-center gap-2">
            <Bot className="w-4 h-4 text-[#C084FC]" />
            <span className="font-mono text-xs text-[#8A8A8A]">
              kashish-ai v1.0
            </span>
            <div className="ml-auto flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-[#C084FC]" />
              <span className="text-xs text-[#C084FC]">online</span>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            <AnimatePresence>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-3 ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.role === "bot" && (
                    <div className="w-7 h-7 rounded-full bg-[#111111] flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-[#C084FC]" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 text-sm ${
                      msg.role === "user"
                        ? "bg-[#C084FC] text-[#050505]"
                        : "bg-[#111111] text-[#CCCCCC]"
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-7 h-7 rounded-full bg-[#111111] flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-[#A78BFA]" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-3"
              >
                <div className="w-7 h-7 rounded-full bg-[#111111] flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-[#C084FC]" />
                </div>
                <div className="bg-[#111111] rounded-lg px-4 py-2 text-sm text-[#8A8A8A]">
                  <span className="animate-pulse">Thinking...</span>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-[#2A2A2A] p-3">
            <div className="flex gap-2">
              <input
                suppressHydrationWarning
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about Kashish..."
                className="flex-1 bg-[#111111] border border-[#2A2A2A] rounded-lg px-4 py-2 text-sm text-[#F5F5F5] placeholder-[#8A8A8A] focus:outline-none focus:border-[#C084FC] transition-colors font-mono"
              />
              <button
                suppressHydrationWarning
                onClick={handleSend}
                className="px-4 py-2 bg-[#C084FC] text-[#050505] rounded-lg hover:bg-[#A78BFA] transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
