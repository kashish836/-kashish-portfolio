"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    period: "2025 / Present",
    role: "Operations Manager",
    organization: "ACM GHRCE Student Chapter",
    description:
      "Leading operations and coordinating technical events, workshops, and community initiatives for the ACM student chapter.",
    tags: ["Leadership", "Community", "Operations"],
  },
  {
    period: "2025 / Present",
    role: "Technical Intern",
    organization: "SCOE E-Cell",
    description:
      "Contributing to startup and technical initiatives. Collaborated with multidisciplinary teams on innovation-driven activities and project development.",
    tags: ["AI/ML", "Innovation", "Startups"],
  },
  {
    period: "2025",
    role: "Technical Intern",
    organization: "MentoraAI",
    description:
      "Handled technical documentation, research analysis, and workflow documentation for AI-related projects. Contributed to organizing technical material and internal processes.",
    tags: ["Technical Documentation", "Research", "AI"],
  },
  {
    period: "2025",
    role: "Virtual Intern",
    organization: "Deloitte",
    description:
      "Completed virtual internship focused on technology consulting and analytical problem-solving.",
    tags: ["Consulting", "Analytics"],
  },
  {
    period: "2025",
    role: "Virtual Intern",
    organization: "Tata",
    description:
      "Completed virtual internship gaining exposure to enterprise technology and business operations.",
    tags: ["Enterprise", "Technology"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="section-label mb-4">04 / Experience</p>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                Where I&apos;ve
                <br />
                contributed
              </h2>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-0">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.role + exp.organization}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative pl-8 pb-12 last:pb-0 border-l border-white/10 hover:border-white/30 transition-colors"
                >
                  <div className="absolute -left-[5px] top-1 w-[10px] h-[10px] bg-[#0a0a0a] border-2 border-[#71717a] group-hover:border-white transition-colors" />

                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                    <span className="text-xs font-mono text-[#71717a] uppercase tracking-wider">
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium text-[#a1a1aa] mb-3">
                    {exp.organization}
                  </p>
                  <p className="text-sm text-[#a1a1aa] leading-relaxed mb-4 max-w-xl">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[10px] font-mono text-[#71717a] bg-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
