"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, GitBranch, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "ISL Translator",
    status: "DEPLOYED",
    description:
      "Real-time Indian Sign Language Translator that recognizes hand gestures and converts them into text and speech.",
    stack: ["Flutter", "TensorFlow", "TensorFlow Lite", "MediaPipe", "OpenCV", "Python"],
    highlights: [
      "35 gesture classes",
      "41000+ landmark samples",
      "Text-to-Speech support",
      "99.96% accuracy",
    ],
    github: "https://github.com/kashish836",
    demo: "#",
    color: "#C084FC",
  },
  {
    id: 2,
    name: "Krishi Sakhi",
    status: "COMPLETED",
    description:
      "AI-powered agriculture assistant designed to support farmers with intelligent recommendations and accessible technology.",
    stack: ["Python", "Machine Learning", "NLP"],
    highlights: [
      "AI-powered recommendations",
      "Farmer-friendly interface",
      "Intelligent crop insights",
      "Accessible technology",
    ],
    github: "https://github.com/kashish836",
    demo: "#",
    color: "#4ADE80",
  },
  {
    id: 3,
    name: "Snuggle Glow",
    status: "COMPLETED",
    description:
      "Modern and responsive web platform with strong emphasis on user experience and visual aesthetics.",
    stack: ["HTML", "CSS", "JavaScript", "React"],
    highlights: [
      "Responsive design",
      "Modern UI/UX",
      "Visual aesthetics focus",
      "Cross-browser compatible",
    ],
    github: "https://github.com/kashish836",
    demo: "#",
    color: "#60A5FA",
  },
  {
    id: 4,
    name: "Ananda Restaurant",
    status: "COMPLETED",
    description:
      "Restaurant website delivering an engaging digital dining experience with interactive components.",
    stack: ["HTML", "CSS", "JavaScript", "React"],
    highlights: [
      "Interactive components",
      "Digital dining experience",
      "Engaging UI",
      "Menu management",
    ],
    github: "https://github.com/kashish836",
    demo: "#",
    color: "#60A5FA",
  },
  {
    id: 5,
    name: "Flashcard Application",
    status: "COMPLETED",
    description:
      "Smart learning platform designed to help users retain information effectively using flashcard-based learning.",
    stack: ["Flutter", "Firebase"],
    highlights: [
      "Flashcard-based learning",
      "Smart retention system",
      "Cloud sync with Firebase",
      "Progress tracking",
    ],
    github: "https://github.com/kashish836",
    demo: "#",
    color: "#A78BFA",
  },
  {
    id: 6,
    name: "Civic-Eye",
    status: "HACKATHON",
    description:
      "Technology-driven project addressing real-world challenges through innovation and problem-solving.",
    stack: ["AI/ML", "Web Technologies"],
    highlights: [
      "Real-world problem solving",
      "Hackathon project",
      "Innovation-driven",
      "AI/ML integration",
    ],
    github: "https://github.com/kashish836",
    demo: "#",
    color: "#F87171",
  },
];

export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-[#8A8A8A] mb-2">
            <span className="text-[#8A8A8A]">$</span> ls projects/
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-12">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className="rounded-lg border border-[#2A2A2A] bg-[#0a0a0a] p-5 overflow-hidden hover:border-[#C084FC]/30 transition-all cursor-pointer"
                onClick={() =>
                  setExpandedId(expandedId === project.id ? null : project.id)
                }
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <ChevronRight
                        className={`w-4 h-4 text-[#8A8A8A] transition-transform ${
                          expandedId === project.id ? "rotate-90" : ""
                        }`}
                      />
                      <span
                        className="text-xs font-mono px-2 py-0.5 rounded"
                        style={{
                          backgroundColor: `${project.color}22`,
                          color: project.color,
                        }}
                      >
                        {project.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#F5F5F5]">
                      {project.name}
                    </h3>
                    <p className="text-sm text-[#8A8A8A] mt-1">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-xs font-mono bg-[#111111] text-[#A78BFA]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <AnimatePresence>
                  {expandedId === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-[#2A2A2A] mt-4 pt-4">
                        <p className="font-mono text-xs text-[#C084FC] mb-3">
                          $ cat highlights.txt
                        </p>
                        <ul className="space-y-2">
                          {project.highlights.map((item) => (
                            <li
                              key={item}
                              className="text-sm text-[#CCCCCC] flex items-center gap-2"
                            >
                              <span className="text-[#C084FC]">→</span>
                              {item}
                            </li>
                          ))}
                        </ul>

                        <div className="flex gap-3 mt-6">
                          <a
                            href={project.github}
                            className="flex items-center gap-2 px-4 py-2 rounded border border-[#2A2A2A] text-sm font-mono text-[#F5F5F5] hover:border-[#C084FC] hover:text-[#C084FC] transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <GitBranch className="w-4 h-4" />
                            Code
                          </a>
                          <a
                            href={project.demo}
                            className="flex items-center gap-2 px-4 py-2 rounded bg-[#C084FC] text-[#050505] text-sm font-mono font-semibold hover:bg-[#A78BFA] transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-4 h-4" />
                            Demo
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
