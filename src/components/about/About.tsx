"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-[#8A8A8A] mb-2">
            <span className="text-[#8A8A8A]">$</span> cat about.md
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="text-gradient">About Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="rounded-lg border border-[#2A2A2A] bg-[#0a0a0a] p-6">
              <p className="font-mono text-sm text-[#8A8A8A] mb-4">
                <span className="text-[#C084FC]">const</span> kashish = <span className="text-[#8A8A8A]">{"{"}</span>
              </p>
              <div className="pl-6 space-y-2 font-mono text-sm">
                <p>
                  <span className="text-[#C084FC]">name</span>:{" "}
                  <span className="text-[#4ADE80]">&quot;Kashish Bhiwapurkar&quot;</span>,
                </p>
                <p>
                  <span className="text-[#C084FC]">role</span>:{" "}
                  <span className="text-[#4ADE80]">&quot;AI Engineer &amp; Developer&quot;</span>,
                </p>
                <p>
                  <span className="text-[#C084FC]">education</span>:{" "}
                  <span className="text-[#4ADE80]">&quot;B.Tech Data Science&quot;</span>,
                </p>
                <p>
                  <span className="text-[#C084FC]">college</span>:{" "}
                  <span className="text-[#4ADE80]">&quot;G.H. Raisoni College of Engineering, Nagpur&quot;</span>,
                </p>
                <p>
                  <span className="text-[#C084FC]">cgpa</span>:{" "}
                  <span className="text-[#4ADE80]">&quot;8.39&quot;</span>,
                </p>
                <p>
                  <span className="text-[#C084FC]">graduation</span>:{" "}
                  <span className="text-[#4ADE80]">&quot;2028&quot;</span>,
                </p>
                <p>
                  <span className="text-[#C084FC]">focus</span>:{" "}
                  <span className="text-[#4ADE80]">&quot;AI/ML, Computer Vision, Mobile Dev&quot;</span>,
                </p>
                <p>
                  <span className="text-[#C084FC]">passion</span>:{" "}
                  <span className="text-[#4ADE80]">&quot;Building Intelligent Systems&quot;</span>,
                </p>
                <p>
                  <span className="text-[#C084FC]">motto</span>:{" "}
                  <span className="text-[#4ADE80]">&quot;Building intelligent systems for a better tomorrow.&quot;</span>,
                </p>
              </div>
              <p className="font-mono text-sm text-[#8A8A8A] mt-4">{"}"};</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-[#CCCCCC] leading-relaxed">
              Hi, I&apos;m Kashish Bhiwapurkar, a third-year B.Tech Data Science student
              at G. H. Raisoni College of Engineering, Nagpur, with a passion for
              Artificial Intelligence, Machine Learning, Computer Vision, and Mobile
              Development. My journey started with curiosity and evolved into building
              AI-powered solutions that make a real difference. From creating an ISL
              Translator that bridges communication gaps for the deaf community to
              participating in hackathons that push creative boundaries, I&apos;m always
              seeking the next challenge.
            </p>
            <p className="text-[#CCCCCC] leading-relaxed">
              I believe technology should be accessible, impactful, and human-centered.
              When I&apos;m not coding, you&apos;ll find me exploring startup ideas, diving
              into research papers, or mentoring juniors in tech communities. I&apos;m
              driven by the belief that intelligent systems can reshape how we live,
              learn, and connect with the world.
            </p>

            <div>
              <p className="font-mono text-sm text-[#8A8A8A] mb-3">
                <span className="text-[#C084FC]">//</span> Currently exploring
              </p>
              <div className="flex flex-wrap gap-3">
                {["LLMs", "NLP", "System Design", "Advanced AI Engineering"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md border border-[#2A2A2A] bg-[#111111] text-xs font-mono text-[#C084FC]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {[
                "Python",
                "Dart",
                "JavaScript",
                "TensorFlow",
                "PyTorch",
                "Flutter",
                "React",
                "Next.js",
                "OpenCV",
                "MediaPipe",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md border border-[#2A2A2A] bg-[#111111] text-xs font-mono text-[#A78BFA]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
