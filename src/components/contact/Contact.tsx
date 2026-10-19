"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, GitBranch, Globe, FileText } from "lucide-react";

const links = [
  {
    icon: GitBranch,
    label: "GitHub",
    href: "https://github.com/kashish836",
    handle: "@kashish836",
  },
  {
    icon: Globe,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kashish-bhiwapurkar/",
    handle: "kashish-bhiwapurkar",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:bhiwapurkarkashish0836@gmail.com",
    handle: "bhiwapurkarkashish0836@gmail.com",
  },
  {
    icon: FileText,
    label: "Resume",
    href: "/Kashish_Bhiwapurkar_Resume.pdf",
    handle: "Download PDF",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-40 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-label mb-6">10 / Contact</p>

            <h2 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
              Get in touch
            </h2>

            <p className="text-xl text-[#a1a1aa] mb-16 max-w-lg mx-auto">
              Open to internships, collaborations, and interesting problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-center gap-4 p-5 border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-colors text-left"
              >
                <div className="p-2.5 bg-white/5 group-hover:bg-white/10 transition-colors">
                  <link.icon className="w-5 h-5 text-[#a1a1aa] group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white">
                    {link.label}
                  </p>
                  <p className="text-xs text-[#71717a] truncate">
                    {link.handle}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#71717a] group-hover:text-white transition-colors shrink-0" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
