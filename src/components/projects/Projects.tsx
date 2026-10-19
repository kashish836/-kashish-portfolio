"use client";

import { motion } from "framer-motion";
import { GitBranch, ArrowUpRight } from "lucide-react";

const featuredProject = {
  number: "01",
  name: "ISL Translator",
  subtitle:
    "Real-time Indian Sign Language recognition using computer vision and deep learning.",
  description:
    "A real-time Indian Sign Language recognition system that uses MediaPipe landmarks and a deep learning model to recognize signs through a webcam and provide predictions through a Flutter application.",
  stack: [
    "Python",
    "OpenCV",
    "MediaPipe",
    "TensorFlow",
    "Keras",
    "TensorFlow Lite",
    "Flutter",
  ],
  stats: [
    { label: "Sign classes", value: "35" },
    { label: "Landmark samples", value: "41,175" },
    { label: "Webcam accuracy", value: "~82%" },
    { label: "CPU FPS", value: "11-35" },
    { label: "APK size", value: "~53 MB" },
  ],
  github: "https://github.com/kashish836/isl-translator.git",
};

const otherProjects = [
  {
    number: "02",
    name: "Fashion Recommender System",
    description: "AI-powered fashion recommendation engine.",
    stack: ["Python", "Machine Learning", "OpenCV"],
    github: "https://github.com/kashish836",
  },
  {
    number: "03",
    name: "Diabloom AI",
    description: "Intelligent diabetes management system.",
    stack: ["Python", "AI/ML", "Healthcare"],
    github: "https://github.com/kashish836",
  },
  {
    number: "04",
    name: "Loan Prediction System",
    description: "ML-based loan approval prediction.",
    stack: ["Python", "Scikit-learn", "Pandas"],
    github: "https://github.com/kashish836",
  },
  {
    number: "05",
    name: "Krishi Sakhi",
    description: "AI-powered agriculture assistant for farmers.",
    stack: ["Python", "Machine Learning", "NLP"],
    github: "https://github.com/kashish836",
  },
  {
    number: "06",
    name: "CanCare AI",
    description: "AI-driven cancer detection support system.",
    stack: ["Python", "Deep Learning", "Computer Vision"],
    github: "https://github.com/kashish836",
  },
  {
    number: "07",
    name: "Snuggle Glow",
    description: "Responsive web platform with strong UX.",
    stack: ["React", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/kashish836",
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="section-label mb-4">02 / Work</p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Featured projects
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="relative border border-white/10 bg-[#0a0a0a] overflow-hidden">
            <div className="absolute top-0 right-0 p-8 lg:p-12 pointer-events-none select-none">
              <span className="project-number">{featuredProject.number}</span>
            </div>

            <div className="relative p-8 lg:p-16">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 text-[10px] font-mono font-medium tracking-[0.15em] text-[#4ade80] bg-[#4ade80]/10 border border-[#4ade80]/20">
                  DEPLOYED
                </span>
                <span className="text-xs font-mono text-[#71717a]">
                  Featured Project
                </span>
              </div>

              <h3 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
                {featuredProject.name}
              </h3>

              <p className="text-lg lg:text-xl text-[#a1a1aa] max-w-3xl mb-8 leading-relaxed">
                {featuredProject.subtitle}
              </p>

              <p className="text-[#71717a] max-w-2xl mb-10 leading-relaxed">
                {featuredProject.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-10 py-8 border-y border-white/5">
                {featuredProject.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl lg:text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs font-mono text-[#71717a] uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-10">
                {featuredProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-mono text-[#d4d4d8] bg-white/5 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white border border-white/20 hover:border-white/40 hover:bg-white/5 transition-colors"
                >
                  <GitBranch className="w-4 h-4" />
                  View Code
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <div>
          <p className="text-sm font-mono text-[#71717a] mb-8 uppercase tracking-wider">
            Other projects
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, i) => (
              <motion.div
                key={project.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-colors h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl font-bold text-white/10">
                      {project.number}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#71717a] group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {project.name}
                  </h4>
                  <p className="text-sm text-[#71717a] mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-[10px] font-mono text-[#a1a1aa] bg-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
