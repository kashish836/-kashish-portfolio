"use client";

import { motion } from "framer-motion";

const interests = [
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "Generative AI",
  "Cloud AI",
  "Data Science",
  "Frontend / UI",
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="section-label mb-4">01 / About</p>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                About me
              </h2>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-8"
            >
              <p className="text-xl lg:text-2xl text-[#d4d4d8] leading-relaxed">
                I&apos;m a{" "}
                <span className="text-white font-medium">
                  third-year Data Science student
                </span>{" "}
                at G H Raisoni College of Engineering, Nagpur, focused on
                AI/ML engineering and computer vision.
              </p>

              <p className="text-lg text-[#a1a1aa] leading-relaxed">
                I build practical AI applications. My strongest work is in
                real-time hand-gesture recognition, multimodal AI workflows,
                and intelligent systems that turn technical ideas into usable
                applications. I care about honest evaluation, documenting
                limitations, and shipping things that work.
              </p>

              <p className="text-lg text-[#a1a1aa] leading-relaxed">
                Currently exploring healthcare AI and medical computer vision as
                research directions. Open to AI/ML internships where I can
                contribute to meaningful projects.
              </p>

              <div className="pt-4">
                <p className="text-sm font-mono text-[#71717a] mb-4 uppercase tracking-wider">
                  What I work with
                </p>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-2 text-sm font-medium text-[#d4d4d8] border border-white/10 bg-white/[0.02] hover:border-white/20 hover:text-white transition-colors"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "Focus", value: "AI/ML" },
                  { label: "Role", value: "Builder" },
                  { label: "Education", value: "B.Tech DS" },
                  { label: "CGPA", value: "8.39" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-xs font-mono text-[#71717a] mb-1 uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-lg font-semibold text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
