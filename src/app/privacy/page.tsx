import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Kashish Bhiwapurkar",
  description: "Privacy policy for kashish-portfolio.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 lg:px-12 py-24">
      <div className="max-w-3xl mx-auto">
        <p className="section-label mb-4">Legal</p>
        <h1 className="text-4xl font-bold tracking-tight mb-8">
          Privacy Policy
        </h1>
        <p className="text-sm text-[#71717a] font-mono mb-12">
          Last updated: October 2026
        </p>

        <div className="space-y-8 text-[#a1a1aa] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              1. What We Collect
            </h2>
            <p>
              This portfolio website does not collect, store, or process any
              personal data. There are no user accounts, no tracking cookies,
              and no analytics scripts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. Third-Party Services
            </h2>
            <p>
              This website is hosted on Vercel and uses GitHub for source code
              management. External links to GitHub and LinkedIn are provided
              for convenience. Clicking these links takes you to their
              respective privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. Contact Form
            </h2>
            <p>
              If a contact form is present, any information you submit is used
              solely to respond to your inquiry and is not shared with third
              parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. Changes to This Policy
            </h2>
            <p>
              This policy may be updated from time to time. Changes will be
              reflected on this page with an updated date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. Contact
            </h2>
            <p>
              For questions about this privacy policy, email
              bhiwapurkarkashish0836@gmail.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
