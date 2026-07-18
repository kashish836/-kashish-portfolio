"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2006",
    title: "Born",
    description: "The beginning of a curious journey.",
    color: "bg-[#7C3AED]",
  },
  {
    year: "2020",
    title: "Curiosity Detected",
    description: "Discovered the power of technology and coding.",
    color: "bg-[#A78BFA]",
  },
  {
    year: "2024",
    title: "B.Tech Started",
    description: "Started B.Tech in Data Science. Dived deep into AI/ML.",
    color: "bg-[#C084FC]",
  },
  {
    year: "2025",
    title: "Built AI Projects",
    description: "ISL Translator, ML models, and Flutter apps.",
    color: "bg-[#C084FC]",
  },
  {
    year: "2026",
    title: "Building Intelligent Systems",
    description: "SCOE Internship, Hackathons, and Research.",
    color: "bg-[#C084FC]",
  },
  {
    year: "2030",
    title: "Chapter Two...",
    description: "The future is unwritten.",
    color: "bg-[#7C3AED]",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-[#7C3AED] mb-2">
            <span className="text-[#8A8A8A]">$</span> cat timeline.log
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-12">
            Technical <span className="text-gradient">Timeline</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#7C3AED] via-[#C084FC] to-[#A78BFA]" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Node */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                <div
                  className={`w-4 h-4 rounded-full ${milestone.color} shadow-lg`}
                  style={{
                    boxShadow: `0 0 10px ${
                      milestone.color === "bg-[#7C3AED]"
                        ? "rgba(124,58,237,0.5)"
                        : milestone.color === "bg-[#A78BFA]"
                        ? "rgba(167,139,250,0.5)"
                        : "rgba(192,132,252,0.5)"
                    }`,
                  }}
                />
              </div>

              {/* Content */}
              <div
                className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <div className="rounded-lg border border-[#2A2A2A] bg-[#0a0a0a] p-5 hover:border-[#C084FC]/30 transition-colors">
                  <span className="font-mono text-xs text-[#C084FC]">
                    {milestone.year}
                  </span>
                  <h3 className="text-lg font-semibold text-[#F5F5F5] mt-1">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-[#8A8A8A] mt-2">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
