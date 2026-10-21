"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export default function ResearchInterests() {
  const interests = [
    {
      icon: BookOpen,
      title: "Healthcare AI",
      description:
        "Applying machine learning to medical data for diagnosis support, disease prediction, and clinical decision-making.",
    },
    {
      icon: Award,
      title: "Medical Computer Vision",
      description:
        "Image analysis techniques for medical imaging, including classification, segmentation, and anomaly detection.",
    },
    {
      icon: GraduationCap,
      title: "Trustworthy Machine Learning",
      description:
        "Model reliability, fairness, interpretability, and robustness in real-world deployments.",
    },
  ];

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
              <p className="section-label mb-4">10 / Research</p>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                Research
                <br />
                interests
              </h2>
              <p className="text-[#71717a] mt-4 text-sm">
                Areas I want to explore through internships, academic work, and
                personal projects.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            {interests.map((interest) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="p-6 border border-white/5 bg-white/[0.02] hover:border-white/10 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 shrink-0">
                    <interest.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {interest.title}
                    </h3>
                    <p className="text-sm text-[#a1a1aa] leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
