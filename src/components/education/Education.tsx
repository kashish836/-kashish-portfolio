"use client";

import { motion } from "framer-motion";
import { GraduationCap, Shield, Trophy } from "lucide-react";

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
                Education &amp;
                <br />
                certifications
              </h2>
            </motion.div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="p-8 border border-white/10 bg-white/[0.02]">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      G H Raisoni College of Engineering, Nagpur
                    </h3>
                    <p className="text-sm text-[#a1a1aa] mb-3">
                      B.Tech / Data Science / Expected 2028
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-white">
                        8.39
                      </span>
                      <span className="text-sm text-[#71717a]">CGPA</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="p-5 border border-white/5 bg-white/[0.02]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-4 h-4 text-[#ff9900]" />
                  <p className="text-xs font-mono text-[#71717a] uppercase tracking-wider">
                    Certification
                  </p>
                </div>
                <p className="text-sm font-semibold text-white mb-1">
                  AWS AI &amp; ML Scholars
                </p>
                <p className="text-xs text-[#71717a]">
                  Challenge Completion, 2026
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="p-5 border border-white/5 bg-white/[0.02]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Trophy className="w-4 h-4 text-[#f59e0b]" />
                  <p className="text-xs font-mono text-[#71717a] uppercase tracking-wider">
                    Achievement
                  </p>
                </div>
                <p className="text-sm font-semibold text-white mb-1">
                  HackerRank Orchestrate
                </p>
                <p className="text-xs text-[#71717a]">
                  Participation and Relay project achievement
                </p>
              </motion.div>
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
          </div>
        </div>
      </div>
    </section>
  );
}
