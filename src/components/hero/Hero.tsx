"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download, GitBranch, Globe } from "lucide-react";

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
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 bg-[#4ade80]" />
                <span className="text-xs font-mono text-[#71717a] tracking-wider uppercase">
                  Open to internships
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05] tracking-[-0.02em] mb-4"
            >
              Kashish
              <br />
              Bhiwapurkar
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-sm font-mono text-[#a1a1aa] tracking-wide mb-6"
            >
              AI/ML &amp; Computer Vision Engineer in Training | B.Tech Data
              Science, GHRCE
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-lg text-[#a1a1aa] max-w-xl leading-relaxed mb-8"
            >
              I build practical AI applications using machine learning, computer
              vision and deep learning. My projects explore real-time
              hand-gesture recognition, multimodal AI workflows and intelligent
              systems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm text-[#71717a] mb-8"
            >
              Currently open to: AI/ML Internships, Computer Vision Internships,
              Healthcare AI Opportunities
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <button
                onClick={() => scrollTo("work")}
                className="inline-flex items-center gap-3 px-6 py-3 bg-white text-black text-sm font-medium hover:bg-[#d4d4d8] transition-colors"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="/Kashish_Bhiwapurkar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 text-sm font-medium text-white border border-white/20 hover:border-white/40 hover:bg-white/5 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-3 px-6 py-3 text-sm font-medium text-white border border-white/20 hover:border-white/40 hover:bg-white/5 transition-colors"
              >
                Contact
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex items-center gap-4"
            >
              <a
                href="https://github.com/kashish836"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#71717a] hover:text-white transition-colors"
              >
                <GitBranch className="w-4 h-4" />
                GitHub
              </a>
              <span className="text-[#27272a]">|</span>
              <a
                href="https://www.linkedin.com/in/kashish-bhiwapurkar/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#71717a] hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4" />
                LinkedIn
              </a>
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
