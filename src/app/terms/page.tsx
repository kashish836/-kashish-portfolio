import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Kashish Bhiwapurkar",
  description: "Terms and conditions for kashish-portfolio.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 lg:px-12 py-24">
      <div className="max-w-3xl mx-auto">
        <p className="section-label mb-4">Legal</p>
        <h1 className="text-4xl font-bold tracking-tight mb-8">
          Terms and Conditions
        </h1>
        <p className="text-sm text-[#71717a] font-mono mb-12">
          Last updated: October 2026
        </p>

        <div className="space-y-8 text-[#a1a1aa] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing this website, you agree to these terms and
              conditions. If you do not agree, please do not use this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. Content
            </h2>
            <p>
              All content on this website, including text, projects, images,
              and code examples, is the intellectual property of Kashish
              Bhiwapurkar unless otherwise noted. You may not reproduce or
              distribute content without permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. Project Information
            </h2>
            <p>
              Project descriptions, metrics, and technical details are provided
              for informational purposes. While efforts are made to keep
              information accurate, no guarantees are made about completeness
              or accuracy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. External Links
            </h2>
            <p>
              This website contains links to external sites (GitHub, LinkedIn).
              These sites are not under our control, and we are not responsible
              for their content or privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. Limitation of Liability
            </h2>
            <p>
              This website is provided as-is. Kashish Bhiwapurkar shall not be
              liable for any damages arising from the use of this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              6. Changes to Terms
            </h2>
            <p>
              These terms may be updated from time to time. Changes will be
              reflected on this page with an updated date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              7. Contact
            </h2>
            <p>
              For questions about these terms, email
              bhiwapurkarkashish0836@gmail.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
