import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy · Recovia",
  description:
    "How Recovia handles your data — local-first by design. Your email content never leaves your machine.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="September 9, 2026">
      <p>
        Recovia &amp; Exhibit Organizer is <strong>local-first</strong>. This policy explains the
        limited information involved in running and licensing the Software, and what we do
        <em> not</em> collect. It is provided by [COMPANY] (&ldquo;we&rdquo;, &ldquo;us&rdquo;).
      </p>

      <h2>1. Your email and documents never leave your device</h2>
      <p>
        All importing, threading, deduplication, tagging, and exporting happen entirely on your own
        computer. The Software does not upload your email content, documents, or exported exhibits
        anywhere, and sends no telemetry about that content.
      </p>

      <h2>2. Licensing</h2>
      <p>
        The only routine network request the Software makes is a license check. When you activate or
        validate a license, the Software sends your <strong>license key</strong> (and a generic
        device label, e.g. &ldquo;desktop&rdquo;) to our license server so we can confirm the key is
        valid and enforce activation limits. Your email content is never part of this request. Once
        activated, the Software continues to work offline for a grace period between checks.
      </p>

      <h2>3. Payment data</h2>
      <p>
        Purchases are processed by <strong>Paddle</strong>, our Merchant of Record. Paddle collects
        the information needed to complete your purchase (such as name, email, billing address, and
        payment details) under <a href="https://www.paddle.com/legal/privacy">Paddle&rsquo;s privacy
        policy</a>. We receive order and buyer-contact information from Paddle to issue your license
        and provide support; we do not receive or store full payment card numbers.
      </p>

      <h2>4. The website</h2>
      <p>
        This marketing site aims to be low-tracking. It loads Paddle&rsquo;s checkout script so the
        &ldquo;Buy a license&rdquo; overlay can open; that script runs only when you start checkout.
        We do not sell your personal information.
      </p>

      <h2>5. Data we store</h2>
      <ul>
        <li>License keys and their status, activation counts, and the buyer email associated with a
          purchase (used for support and license recovery).</li>
        <li>Standard support correspondence if you email us.</li>
      </ul>

      <h2>6. Retention</h2>
      <p>
        We retain license and order records for as long as needed to support your license and to
        meet legal and accounting obligations.
      </p>

      <h2>7. Your rights</h2>
      <p>
        Depending on where you live, you may have rights to access, correct, or delete personal
        information we hold. To make a request, email
        {" "}<a href="mailto:support@recovia.app">support@recovia.app</a>. For payment data held by
        Paddle, you may also contact Paddle directly.
      </p>

      <h2>8. Changes</h2>
      <p>
        We may update this policy; the &ldquo;Last updated&rdquo; date above reflects the latest
        version.
      </p>

      <h2>9. Contact</h2>
      <p>
        Privacy questions? Email <a href="mailto:support@recovia.app">support@recovia.app</a>.
      </p>

      <p className="legal-note">
        Template for review. Replace [COMPANY], confirm the effective date, and have legal counsel
        review before publishing.
      </p>
    </LegalPage>
  );
}
