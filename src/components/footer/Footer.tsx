"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black py-12 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#71717a] font-mono">
          &copy; 2026 Kashish Bhiwapurkar
        </p>
        <div className="flex items-center gap-6">
          <a
            href="/privacy"
            className="text-xs text-[#71717a] hover:text-white transition-colors"
          >
            Privacy
          </a>
          <a
            href="/terms"
            className="text-xs text-[#71717a] hover:text-white transition-colors"
          >
            Terms
          </a>
          <a
            href="https://github.com/kashish836"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#71717a] hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kashish-bhiwapurkar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#71717a] hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:bhiwapurkarkashish0836@gmail.com"
            className="text-xs text-[#71717a] hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
