"use client";

import { motion } from "framer-motion";

const focusAreas = [
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "AWS AI/ML",
  "MLOps",
  "Generative AI",
  "DSA",
  "System Building",
];

export default function CurrentLearning() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#050505]">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="section-label mb-4">09 / Learning</p>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                Currently learning
              </h2>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <p className="text-lg text-[#a1a1aa] leading-relaxed max-w-2xl">
                My current focus areas. I update this list as I deepen my
                skills and take on new challenges.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {focusAreas.map((area) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="relative p-4 border border-white/5 bg-white/[0.02] text-center hover:border-white/10 transition-colors"
                >
                  <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-[#4ade80] opacity-60" />
                  <p className="text-sm font-medium text-[#d4d4d8]">{area}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
