"use client";

import { motion } from "framer-motion";
import { Trophy, Users, Code2 } from "lucide-react";

const events = [
  {
    icon: Trophy,
    title: "SBI Hackathon @ GFF 2026",
    description:
      "Participated in the SBI Hackathon at Global Fintech Fest 2026, building solutions at the intersection of finance and technology.",
    tag: "Hackathon",
    color: "#f59e0b",
  },
  {
    icon: Code2,
    title: "Smart India Hackathon 2025",
    description:
      "Built Krishi Sakhi, an AI-powered agriculture assistant for farmers, as part of the Smart India Hackathon.",
    tag: "Hackathon",
    color: "#a1a1aa",
  },
  {
    icon: Users,
    title: "AWS Builder Center",
    description:
      "Active member of the AWS Builder Center community, exploring cloud AI/ML services and sharing learnings.",
    tag: "Community",
    color: "#ff9900",
  },
];

export default function Hackathons() {
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
              <p className="section-label mb-4">07 / Community</p>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                Hackathons
                <br />&amp; community
              </h2>
            </motion.div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            {events.map((event) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group p-6 border border-white/5 bg-white/[0.02] hover:border-white/10 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 shrink-0"
                    style={{ backgroundColor: `${event.color}15` }}
                  >
                    <event.icon
                      className="w-5 h-5"
                      style={{ color: event.color }}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-white">
                        {event.title}
                      </h3>
                      <span
                        className="px-2.5 py-0.5 text-[10px] font-mono"
                        style={{
                          color: event.color,
                          backgroundColor: `${event.color}15`,
                        }}
                      >
                        {event.tag}
                      </span>
                    </div>
                    <p className="text-sm text-[#a1a1aa] leading-relaxed">
                      {event.description}
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
