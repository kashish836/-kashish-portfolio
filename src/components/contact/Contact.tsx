"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, GitBranch, Globe, Send } from "lucide-react";

const WEB3FORMS_KEY = "YOUR_WEB3FORMS_KEY_HERE";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `New message from ${formState.name} — Portfolio`,
          from_name: "Kashish Portfolio",
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch {
      // silent fail
    }

    setSending(false);
  };

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-[#8A8A8A] mb-2">
            <span className="text-[#8A8A8A]">$</span> cat contact.sh
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-[#8A8A8A] mb-12">
            Have a project in mind? Let&apos;s build something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="rounded-lg border border-[#2A2A2A] bg-[#0a0a0a] p-6">
              <p className="font-mono text-xs text-[#C084FC] mb-4">
                $ cat contact_info.txt
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:bhiwapurkarkashish0836@gmail.com"
                  className="flex items-center gap-3 text-[#CCCCCC] hover:text-[#C084FC] transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-mono text-sm">bhiwapurkarkashish0836@gmail.com</span>
                </a>
                <a
                  href="tel:+918468883531"
                  className="flex items-center gap-3 text-[#CCCCCC] hover:text-[#C084FC] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-mono text-sm">+91 8468883531</span>
                </a>
                <a
                  href="https://github.com/kashish836"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#CCCCCC] hover:text-[#C084FC] transition-colors"
                >
                  <GitBranch className="w-5 h-5" />
                  <span className="font-mono text-sm">github.com/kashish836</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/kashish-bhiwapurkar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#CCCCCC] hover:text-[#C084FC] transition-colors"
                >
                  <Globe className="w-5 h-5" />
                  <span className="font-mono text-sm">linkedin.com/in/kashish-bhiwapurkar</span>
                </a>
              </div>
            </div>

            <a
              href="/Kashish_Bhiwapurkar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-6 py-3 bg-[#C084FC] text-[#050505] font-mono text-sm font-semibold rounded-lg hover:bg-[#A78BFA] transition-colors text-center"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-lg border border-[#2A2A2A] bg-[#0a0a0a] p-6 space-y-4"
            >
              <div>
                <label className="block font-mono text-xs text-[#8A8A8A] mb-2">
                  name:
                </label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                  className="w-full bg-[#111111] border border-[#2A2A2A] rounded-lg px-4 py-2 text-sm text-[#F5F5F5] placeholder-[#8A8A8A] focus:outline-none focus:border-[#C084FC] transition-colors font-mono"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block font-mono text-xs text-[#8A8A8A] mb-2">
                  email:
                </label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                  className="w-full bg-[#111111] border border-[#2A2A2A] rounded-lg px-4 py-2 text-sm text-[#F5F5F5] placeholder-[#8A8A8A] focus:outline-none focus:border-[#C084FC] transition-colors font-mono"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block font-mono text-xs text-[#8A8A8A] mb-2">
                  message:
                </label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full bg-[#111111] border border-[#2A2A2A] rounded-lg px-4 py-2 text-sm text-[#F5F5F5] placeholder-[#8A8A8A] focus:outline-none focus:border-[#C084FC] transition-colors font-mono resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#C084FC] text-[#050505] font-mono text-sm font-semibold rounded-lg hover:bg-[#A78BFA] transition-colors disabled:opacity-50"
              >
                {submitted ? (
                  "Message Sent!"
                ) : sending ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
