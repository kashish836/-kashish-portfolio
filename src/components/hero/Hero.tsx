"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section suppressHydrationWarning className="relative min-h-screen flex items-center justify-center px-6">
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 text-center md:text-left"
          >
            <p className="font-mono text-sm text-[#7C3AED] mb-4">
              <span className="text-[#8A8A8A]">&gt;</span> whoami
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
              <span className="text-gradient">KASHISH</span>
              <br />
              <span className="text-[#F5F5F5]">BHIWAPURKAR</span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap justify-center md:justify-start gap-2 mb-8"
            >
              {["AI Engineer", "ML Enthusiast", "Flutter Developer", "Computer Vision"].map(
                (role) => (
                  <span
                    key={role}
                    className="px-3 py-1.5 rounded-full border border-[#2A2A2A] bg-[#0a0a0a] text-xs font-mono text-[#A78BFA]"
                  >
                    {role}
                  </span>
                )
              )}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="text-base text-[#8A8A8A] max-w-xl mb-10 leading-relaxed"
            >
              Building intelligent systems that solve real-world problems.
              <br />
              <span className="text-[#C084FC]">Chapter One</span> of the Engineer&apos;s Notebook.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex justify-center md:justify-start gap-4"
            >
              <button
                suppressHydrationWarning
                onClick={() => scrollTo("projects")}
                className="px-6 py-3 bg-[#C084FC] text-[#050505] font-mono text-sm font-semibold rounded-lg hover:bg-[#A78BFA] transition-colors"
              >
                View Projects
              </button>
              <button
                suppressHydrationWarning
                onClick={() => scrollTo("contact")}
                className="px-6 py-3 border border-[#2A2A2A] text-[#F5F5F5] font-mono text-sm rounded-lg hover:border-[#C084FC] hover:text-[#C084FC] transition-colors"
              >
                Contact Me
              </button>
            </motion.div>
          </motion.div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex-shrink-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Decorative border */}
              <div className="absolute inset-0 rounded-2xl border border-[#2A2A2A] rotate-3" />
              <div className="absolute inset-0 rounded-2xl border border-[#C084FC]/20 -rotate-3" />
              {/* Photo */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#2A2A2A] bg-[#0a0a0a]">
                <Image
                  src="/profile.png"
                  alt="Kashish Bhiwapurkar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Corner accent */}
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border border-[#C084FC]/30 rounded-lg" />
              <div className="absolute -top-3 -left-3 w-8 h-8 border border-[#2A2A2A] rounded" />
            </div>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          onClick={() => scrollTo("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#8A8A8A] hover:text-[#C084FC] transition-colors"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
}
