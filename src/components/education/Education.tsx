"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="section-label mb-4">08 / Education</p>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                Education
              </h2>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="p-8 border border-white/10 bg-white/[0.02]">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      G H Raisoni College of Engineering, Nagpur
                    </h3>
                    <p className="text-sm text-[#a1a1aa] mb-3">
                      B.Tech / Data Science / 2024-2028
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-white">
                        3.39
                      </span>
                      <span className="text-sm text-[#71717a]">CGPA</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-5 border border-white/5 bg-white/[0.02]">
                  <p className="text-xs font-mono text-[#71717a] uppercase tracking-wider mb-2">
                    HSC
                  </p>
                  <p className="text-2xl font-bold text-white">60.8%</p>
                </div>
                <div className="p-5 border border-white/5 bg-white/[0.02]">
                  <p className="text-xs font-mono text-[#71717a] uppercase tracking-wider mb-2">
                    SSC
                  </p>
                  <p className="text-2xl font-bold text-white">89.80%</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
