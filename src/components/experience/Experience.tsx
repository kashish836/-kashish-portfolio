"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "Technical Intern",
    organization: "Sinhgad College of Engineering (SCOE) E-Cell",
    period: "2025 - Present",
    description:
      "Contributed to startup and technical initiatives. Collaborated with multidisciplinary teams. Participated in innovation-driven activities. Supported project development and technical execution.",
    tags: ["AI/ML", "Innovation", "Teamwork"],
    icon: Briefcase,
    color: "#C084FC",
  },
  {
    title: "B.Tech in Data Science",
    organization: "G.H. Raisoni College of Engineering, Nagpur",
    period: "2024 - 2028",
    description:
      "CGPA: 8.1. Focus on AI/ML, Computer Vision, Software Development.",
    tags: ["Data Science", "AI/ML", "Research"],
    icon: GraduationCap,
    color: "#A78BFA",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-[#8A8A8A] mb-2">
            <span className="text-[#8A8A8A]">$</span> cat experience.json
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-12">
            <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg border border-[#2A2A2A] bg-[#0a0a0a] p-6 hover:border-[#C084FC]/20 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 rounded-md bg-[#111111]">
                    <Icon className="w-5 h-5" style={{ color: exp.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-semibold text-[#F5F5F5]">
                        {exp.title}
                      </h3>
                      <span className="font-mono text-xs text-[#8A8A8A]">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-[#A78BFA] mb-2">{exp.organization}</p>
                    <p className="text-sm text-[#8A8A8A] mb-3">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-xs font-mono bg-[#111111]"
                          style={{ color: exp.color }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
