"use client";

export default function Footer() {
  return (
    <footer className="border-t border-[#2A2A2A] bg-[#050505] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="font-mono text-sm text-[#C084FC]">
            {"<Kashish/>"}
          </div>

          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#2A2A2A] to-transparent" />

          <p className="text-[#8A8A8A] text-sm font-mono text-center">
            Chapter One is Still Being Written...
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/kashish836"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-[#8A8A8A] hover:text-[#C084FC] transition-colors"
            >
              GitHub
            </a>
            <span className="text-[#2A2A2A]">·</span>
            <a
              href="https://www.linkedin.com/in/kashish-bhiwapurkar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-[#8A8A8A] hover:text-[#C084FC] transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-[#2A2A2A]">·</span>
            <a
              href="mailto:bhiwapurkarkashish0836@gmail.com"
              className="text-xs font-mono text-[#8A8A8A] hover:text-[#C084FC] transition-colors"
            >
              Email
            </a>
          </div>

          <p className="text-[10px] text-[#2A2A2A] font-mono">
            © 2026 Kashish Bhiwapurkar. Built with curiosity.
          </p>
        </div>
      </div>
    </footer>
  );
}
