"use client";

import { motion } from "framer-motion";

const allSkills = [
  "Python", "Dart", "JavaScript", "SQL",
  "TensorFlow", "PyTorch", "OpenCV", "MediaPipe", "Hugging Face", "LangChain", "Scikit-learn",
  "Flutter", "TensorFlow Lite", "React", "Next.js", "Tailwind CSS", "HTML", "CSS",
  "Git", "GitHub", "VS Code", "Jupyter Notebook", "Figma",
];

export default function SkillsMatrix() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-[#8A8A8A] mb-2">
            <span className="text-[#8A8A8A]">$</span> cat skills.json
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-[#8A8A8A] mb-10">Technologies I work with.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-lg border border-[#2A2A2A] bg-[#0a0a0a] p-6"
        >
          <div className="flex flex-wrap gap-3">
            {allSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                viewport={{ once: true }}
                className="px-4 py-2 rounded-md bg-[#111111] border border-[#2A2A2A] text-sm font-mono text-[#CCCCCC] hover:border-[#C084FC]/40 hover:text-[#C084FC] transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
