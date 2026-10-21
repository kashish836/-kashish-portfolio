"use client";

import { motion } from "framer-motion";
import { GitBranch, ArrowUpRight } from "lucide-react";

const featuredProjects = [
  {
    number: "01",
    name: "ISL Translator",
    category: "Computer Vision / Mobile AI",
    subtitle:
      "Real-time Indian Sign Language recognition using computer vision and deep learning.",
    problem:
      "Millions of deaf and hard-of-hearing individuals in India rely on sign language. Most digital communication tools do not support Indian Sign Language (ISL), creating a barrier in education, healthcare, and daily interaction.",
    solution:
      "A real-time ISL recognition system that captures hand gestures through a webcam, classifies them using a deep learning model, and displays predictions through a Flutter mobile application.",
    stats: [
      { label: "Sign classes", value: "35" },
      { label: "Training samples", value: "41,175" },
      { label: "Webcam accuracy", value: "~82%" },
      { label: "CPU FPS", value: "11-35" },
    ],
    stack: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "TensorFlow",
      "Keras",
      "TFLite",
      "Flutter",
    ],
    details:
      "MediaPipe extracts 21 hand landmarks per frame. A Random Forest classifier achieves 99.96% accuracy on the test set. Real-hand webcam performance is approximately 82%, reflecting the gap between controlled and real-world conditions.",
    github: "https://github.com/kashish836/isl-translator.git",
  },
  {
    number: "02",
    name: "Relay",
    category: "LLMs / Safety / Multimodal AI",
    subtitle:
      "AI WhatsApp notification router that classifies messages and routes them intelligently.",
    problem:
      "WhatsApp notification overload makes it hard to identify which messages actually need immediate attention. Important messages get buried under promotional content, group chats, and routine updates.",
    solution:
      "Relay classifies incoming WhatsApp messages into Notify, Digest, and Mute categories using Groq LLMs, OCR, and Whisper transcription. Rule-based safety overrides ensure sensitive messages are never auto-muted.",
    stats: [
      { label: "Messages tested", value: "110" },
      { label: "Error rows", value: "0" },
      { label: "Categories", value: "3" },
    ],
    stack: ["Python", "Groq LLMs", "OCR", "Whisper", "n8n"],
    details:
      "Tested on 110 real messages with zero fallback or error rows. Safety overrides catch messages containing keywords related to emergencies, financial transactions, and time-sensitive information before classification.",
    github: "https://github.com/kashish836/whatsapp-notification-router",
  },
  {
    number: "03",
    name: "Fashion Recommender",
    category: "Deep Learning / Image Embeddings",
    subtitle:
      "Visual similarity fashion recommendations using deep learning embeddings.",
    problem:
      "Fashion e-commerce platforms struggle with visual search. Users want to find similar items based on appearance, not just text descriptions.",
    solution:
      "A recommendation engine that extracts visual features from fashion images using ResNet18 and finds similar items through KNN in the embedding space.",
    stats: [
      { label: "Embedding dims", value: "512" },
      { label: "Dataset", value: "2,000+" },
      { label: "Model", value: "ResNet18" },
    ],
    stack: ["Python", "ResNet18", "KNN", "OpenCV", "PyTorch"],
    details:
      "ResNet18 extracts 512-dimensional feature vectors from fashion images. KNN finds the most visually similar items in the embedding space. Preprocessing includes resizing, normalization, and data augmentation.",
    github: "https://github.com/kashish836",
  },
];

const otherProjects = [
  {
    number: "04",
    name: "HR-Assist RAG",
    description:
      "RAG assistant for HR document querying using embeddings and cosine-similarity retrieval.",
    stack: ["n8n", "Hugging Face", "Groq", "RAG"],
    github: "https://github.com/kashish836",
  },
  {
    number: "05",
    name: "Diabloom AI",
    description: "Intelligent diabetes management system.",
    stack: ["Python", "AI/ML", "Healthcare"],
    github: "https://github.com/kashish836",
  },
  {
    number: "06",
    name: "Loan Prediction System",
    description: "ML-based loan approval prediction using Scikit-learn.",
    stack: ["Python", "Scikit-learn", "Pandas"],
    github: "https://github.com/kashish836",
  },
  {
    number: "07",
    name: "Krishi Sakhi",
    description: "AI agriculture assistant built at Smart India Hackathon.",
    stack: ["Python", "ML", "NLP"],
    github: "https://github.com/kashish836",
  },
  {
    number: "08",
    name: "Snuggle Glow",
    description: "Responsive web platform with strong UX.",
    stack: ["React", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/kashish836",
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-label mb-4">02 / Work</p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Featured projects
          </h2>
          <p className="text-[#71717a] max-w-2xl">
            Three projects that demonstrate different skills: computer vision
            model development, LLM integration with safety systems, and deep
            learning for visual recommendations.
          </p>
        </motion.div>

        <div className="space-y-12">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative border border-white/10 bg-[#0a0a0a] overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 lg:p-12 pointer-events-none select-none">
                <span className="project-number">{project.number}</span>
              </div>

              <div className="relative p-8 lg:p-16">
                <p className="text-xs font-mono text-[#71717a] uppercase tracking-wider mb-4">
                  {project.category}
                </p>

                <h3 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
                  {project.name}
                </h3>

                <p className="text-lg text-[#a1a1aa] max-w-3xl mb-8 leading-relaxed">
                  {project.subtitle}
                </p>

                <div className="grid lg:grid-cols-2 gap-8 mb-10">
                  <div>
                    <p className="text-xs font-mono text-[#71717a] uppercase tracking-wider mb-2">
                      Problem
                    </p>
                    <p className="text-sm text-[#a1a1aa] leading-relaxed mb-6">
                      {project.problem}
                    </p>
                    <p className="text-xs font-mono text-[#71717a] uppercase tracking-wider mb-2">
                      Solution
                    </p>
                    <p className="text-sm text-[#a1a1aa] leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-[#71717a] uppercase tracking-wider mb-2">
                      Technical Details
                    </p>
                    <p className="text-sm text-[#a1a1aa] leading-relaxed mb-6">
                      {project.details}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {project.stats.map((stat) => (
                        <div key={stat.label}>
                          <p className="text-xl font-bold text-white">
                            {stat.value}
                          </p>
                          <p className="text-[10px] font-mono text-[#71717a] uppercase tracking-wider">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-mono text-[#d4d4d8] bg-white/5 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white border border-white/20 hover:border-white/40 hover:bg-white/5 transition-colors"
                  >
                    <GitBranch className="w-4 h-4" />
                    View Code
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-sm font-mono text-[#71717a] mb-8 uppercase tracking-wider">
            Other projects
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, i) => (
              <motion.div
                key={project.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-colors h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl font-bold text-white/10">
                      {project.number}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#71717a] group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {project.name}
                  </h4>
                  <p className="text-sm text-[#71717a] mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-[10px] font-mono text-[#a1a1aa] bg-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
