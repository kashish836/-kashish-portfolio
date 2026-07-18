"use client";

import { motion } from "framer-motion";

const focusAreas = [
  {
    title: "Large Language Models",
    description: "Exploring LLM architectures, fine-tuning, and deployment",
    tag: "Learning",
    color: "#C084FC",
  },
  {
    title: "Natural Language Processing",
    description: "Building NLP pipelines and text analysis systems",
    tag: "Active",
    color: "#A78BFA",
  },
  {
    title: "AI Product Development",
    description: "Turning AI research into production-ready products",
    tag: "Building",
    color: "#4ADE80",
  },
  {
    title: "System Design",
    description: "Learning scalable system architecture and design patterns",
    tag: "Studying",
    color: "#60A5FA",
  },
  {
    title: "Computer Vision",
    description: "Advanced CV techniques for real-world applications",
    tag: "Core",
    color: "#7C3AED",
  },
  {
    title: "Open Source Contributions",
    description: "Contributing to open-source AI/ML projects",
    tag: "Active",
    color: "#F87171",
  },
];

export default function CurrentFocus() {
  return (
    <section id="focus" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[#8A8A8A] font-mono text-sm mb-3">
            $ cat current_focus.md
          </p>
          <h2 className="text-3xl font-bold">
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Current Focus
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="hover-lift rounded-lg border border-[#2A2A2A] bg-[#0a0a0a] p-5 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[#F5F5F5] font-semibold">{area.title}</h3>
                <span
                  className="text-xs px-2 py-1 rounded-full"
                  style={{
                    color: area.color,
                    backgroundColor: `${area.color}1A`,
                  }}
                >
                  {area.tag}
                </span>
              </div>
              <p className="text-[#8A8A8A] text-sm leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
