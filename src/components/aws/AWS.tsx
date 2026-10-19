"use client";

import { motion } from "framer-motion";
import { Cloud, BookOpen, Cpu, Workflow } from "lucide-react";

const awsFocus = [
  {
    icon: Cpu,
    title: "Amazon SageMaker",
    description: "Building and deploying ML models at scale",
  },
  {
    icon: Cloud,
    title: "Amazon Bedrock",
    description: "Foundation models and generative AI on AWS",
  },
  {
    icon: BookOpen,
    title: "ML on AWS",
    description: "Machine learning services and infrastructure",
  },
  {
    icon: Workflow,
    title: "MLOps",
    description: "End-to-end ML pipeline orchestration",
  },
];

export default function AWS() {
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
              <p className="section-label mb-4">06 / Cloud AI</p>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                AWS Journey
              </h2>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-10"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 border border-[#ff9900]/20 bg-[#ff9900]/10 mb-6">
                <span className="w-2 h-2 bg-[#ff9900]" />
                <span className="text-xs font-mono text-[#ff9900] tracking-wider">
                  AWS AI &amp; ML Scholars, 2026
                </span>
              </div>

              <p className="text-lg text-[#a1a1aa] leading-relaxed max-w-2xl">
                Currently deepening my expertise in cloud-based AI/ML through
                the AWS AI &amp; ML Scholars program, focusing on building
                scalable machine learning solutions.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {awsFocus.map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  className="p-5 border border-white/5 bg-white/[0.02] hover:border-white/10 transition-colors"
                >
                  <item.icon className="w-5 h-5 text-[#ff9900] mb-3" />
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#71717a] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-5 border border-dashed border-white/10"
            >
              <p className="text-xs font-mono text-[#71717a] mb-2 uppercase tracking-wider">
                In Progress
              </p>
              <p className="text-sm text-[#a1a1aa]">
                AWS Certified Machine Learning Engineer Associate. Currently
                preparing.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
