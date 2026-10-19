"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const tags = ["DATA SCIENCE", "AI / ML", "COMPUTER VISION", "AWS"];

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center px-6 lg:px-12">
      <div className="mx-auto max-w-7xl w-full pt-24 pb-16 lg:pt-0 lg:pb-0">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex flex-wrap gap-2 mb-8">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-[10px] font-mono font-medium tracking-[0.15em] text-[#a1a1aa] border border-white/10 bg-white/[0.02]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05] tracking-[-0.02em] mb-8"
            >
              Kashish
              <br />
              Bhiwapurkar
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg lg:text-xl text-[#a1a1aa] max-w-xl leading-relaxed mb-10"
            >
              Data Science student at G H Raisoni College of Engineering,
              Nagpur. I build machine learning models for computer vision,
              natural language processing, and predictive systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollTo("work")}
                className="inline-flex items-center gap-3 px-6 py-3 bg-white text-black text-sm font-medium hover:bg-[#d4d4d8] transition-colors"
              >
                View my work
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-3 px-6 py-3 text-sm font-medium text-white border border-white/20 hover:border-white/40 hover:bg-white/5 transition-colors"
              >
                Contact
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 overflow-hidden border border-white/10">
              <Image
                src="/profile.png"
                alt="Kashish Bhiwapurkar"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
