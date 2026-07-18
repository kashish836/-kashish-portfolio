"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Star, Zap, Target } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "ISL Translator",
    description:
      "Built an AI-powered sign language translator with 99.96% accuracy",
    color: "#C084FC",
  },
  {
    icon: Award,
    title: "Hackathon Participant",
    description:
      "Competed in national-level hackathons, building innovative solutions",
    color: "#4ADE80",
  },
  {
    icon: Target,
    title: "99.96% Model Accuracy",
    description:
      "Achieved state-of-the-art accuracy in gesture recognition",
    color: "#A78BFA",
  },
  {
    icon: Star,
    title: "Tech Community Contributor",
    description:
      "Active contributor to technical communities and innovation programs",
    color: "#60A5FA",
  },
  {
    icon: Zap,
    title: "Continuous Learner",
    description:
      "Always exploring new technologies in AI/ML and software engineering",
    color: "#F87171",
  },
];

export default function Achievements() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-[#8A8A8A] mb-2">
            $ cat achievements.md
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-12">
            <span className="text-gradient">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg border border-[#2A2A2A] bg-[#0a0a0a] p-5 hover-lift"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: `${achievement.color}1a` }}
              >
                <achievement.icon
                  className="w-5 h-5"
                  style={{ color: achievement.color }}
                />
              </div>
              <h3 className="text-sm font-semibold text-[#F5F5F5] mb-2">
                {achievement.title}
              </h3>
              <p className="text-xs text-[#8A8A8A] leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
