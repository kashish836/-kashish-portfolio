"use client";

import { motion } from "framer-motion";

export default function DecorativeElements() {
  return (
    <>
      {/* Top-left wireframe box */}
      <div className="fixed top-20 left-6 z-10 pointer-events-none hidden lg:block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2, delay: 1 }}
          className="w-16 h-16 border border-[#2A2A2A] rounded-sm"
        />
      </div>

      {/* Top-right dot grid */}
      <div className="fixed top-32 right-8 z-10 pointer-events-none hidden lg:block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="grid grid-cols-4 gap-2"
        >
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-[#C084FC]" />
          ))}
        </motion.div>
      </div>

      {/* Mid-left technical corner */}
      <div className="fixed top-1/2 left-6 z-10 pointer-events-none hidden lg:block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 2 }}
          className="font-mono text-[10px] text-[#C084FC] leading-none"
        >
          <div>┌─────────┐</div>
          <div>│ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│</div>
          <div>└─────────┘</div>
        </motion.div>
      </div>

      {/* Mid-right floating line */}
      <div className="fixed top-2/3 right-8 z-10 pointer-events-none hidden lg:block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 2, delay: 2.5 }}
          className="w-20 h-px bg-gradient-to-r from-transparent via-[#C084FC] to-transparent"
        />
      </div>

      {/* Bottom-left plus signs */}
      <div className="fixed bottom-32 left-8 z-10 pointer-events-none hidden lg:block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 3 }}
          className="grid grid-cols-3 gap-3"
        >
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="text-[#2A2A2A] text-xs">+</div>
          ))}
        </motion.div>
      </div>

      {/* Bottom-right empty box */}
      <div className="fixed bottom-20 right-8 z-10 pointer-events-none hidden lg:block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 3.5 }}
          className="w-8 h-5 border border-[#2A2A2A] rounded-sm"
        />
      </div>
    </>
  );
}
