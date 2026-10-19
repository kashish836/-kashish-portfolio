"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "C++", "SQL", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Machine Learning",
    skills: [
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "Pandas",
      "NumPy",
    ],
  },
  {
    title: "AI",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "NLP",
      "Generative AI",
    ],
  },
  {
    title: "Tools / Platforms",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter",
      "Google Colab",
      "AWS",
      "Vercel",
      "Supabase",
      "Figma",
    ],
  },
  {
    title: "Frontend / Design",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Figma",
      "Responsive UI",
      "UI/UX",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="section-label mb-4">05 / Skills</p>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                Tech stack
              </h2>
              <p className="text-[#71717a] mt-4 text-sm">
                Technologies I use to build ML models and applications.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-8 space-y-12">
            {skillGroups.map((group) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-xs font-mono text-[#71717a] uppercase tracking-[0.15em] mb-4">
                  {group.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-2 text-sm font-medium text-[#d4d4d8] bg-white/[0.03] border border-white/10 hover:border-white/20 hover:text-white transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
