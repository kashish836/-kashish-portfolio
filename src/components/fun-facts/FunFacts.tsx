"use client";

import { motion } from "framer-motion";
import { Heart, Code, Eye, Rocket, Quote } from "lucide-react";

const facts = [
  { icon: Heart, label: "Favorite Domain", value: "Artificial Intelligence", color: "#C084FC" },
  { icon: Code, label: "Favorite Technology", value: "Python", color: "#4ADE80" },
  { icon: Eye, label: "Favorite Area", value: "Computer Vision", color: "#60A5FA" },
  { icon: Rocket, label: "Dream Role", value: "AI Engineer", color: "#F87171" },
];

export default function FunFacts() {
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
            <span className="text-[#8A8A8A]">$</span> cat fun_facts.txt
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            <span className="text-gradient">Fun Facts</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {facts.map((fact, i) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="rounded-lg border border-[#2A2A2A] bg-[#0a0a0a] p-5 hover-lift"
            >
              <fact.icon className="w-5 h-5 mb-3" style={{ color: fact.color }} />
              <p className="text-xs text-[#8A8A8A] mb-1">{fact.label}</p>
              <p className="text-sm font-semibold text-[#F5F5F5]">{fact.value}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="rounded-lg border border-[#2A2A2A] bg-[#0a0a0a] p-6 flex items-start gap-4"
        >
          <Quote className="w-6 h-6 text-[#C084FC] flex-shrink-0 mt-1" />
          <div>
            <p className="text-[#CCCCCC] italic leading-relaxed">
              &ldquo;Building intelligent systems for a better tomorrow.&rdquo;
            </p>
            <p className="text-xs text-[#8A8A8A] mt-2">— Kashish Bhiwapurkar</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
