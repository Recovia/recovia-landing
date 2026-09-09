import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service · Recovia",
  description: "The terms governing your use of Recovia & Exhibit Organizer.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="September 9, 2026">
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your purchase and use of Recovia &amp;
        Exhibit Organizer (the &ldquo;Software&rdquo;), provided by [COMPANY] (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;). By downloading, installing, or using the Software, you agree to these
        Terms. If you do not agree, do not use the Software.
      </p>

      <h2>1. License</h2>
      <p>
        Subject to these Terms and your payment of the applicable fee, we grant you a perpetual,
        non-exclusive, non-transferable license to install and use the Software for your own
        purposes. A single license may be activated on a reasonable number of devices that you
        own or control. Free updates are provided for the period stated at the time of purchase.
      </p>

      <h2>2. Restrictions</h2>
      <p>You agree not to:</p>
      <ul>
        <li>resell, sublicense, rent, or redistribute the Software or license keys;</li>
        <li>reverse engineer, decompile, or attempt to derive source code, except where that
          restriction is prohibited by law;</li>
        <li>circumvent the licensing or activation mechanism, or share your license key publicly.</li>
      </ul>

      <h2>3. Payments and Merchant of Record</h2>
      <p>
        Payments are processed by <strong>Paddle</strong>, our authorized reseller and Merchant of
        Record. When you buy a license, your order and billing relationship are with Paddle, and
        Paddle&rsquo;s <a href="https://www.paddle.com/legal/checkout-buyer-terms">buyer terms</a>
        {" "}also apply. Paddle handles payment processing, billing, and applicable sales tax/VAT.
        Prices are shown at checkout and may change for future purchases.
      </p>

      <h2>4. Refunds</h2>
      <p>
        Refunds are handled as described in our <a href="/refund">Refund Policy</a>, administered
        through Paddle.
      </p>

      <h2>5. Your data</h2>
      <p>
        The Software is local-first: your email and document content are processed entirely on your
        own device and are never transmitted to us. See our <a href="/privacy">Privacy Policy</a>
        {" "}for details on the limited information involved in licensing.
      </p>

      <h2>6. Disclaimer of warranties</h2>
      <p>
        The Software is provided &ldquo;as is&rdquo; without warranties of any kind, whether
        express or implied, including merchantability, fitness for a particular purpose, and
        non-infringement. You are responsible for verifying that exported exhibits and indexes meet
        the requirements of any court or proceeding in which you use them.
      </p>

      <h2>7. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, [COMPANY] will not be liable for any indirect,
        incidental, special, consequential, or punitive damages, or any loss of data, arising from
        your use of the Software. Our total liability will not exceed the amount you paid for the
        license.
      </p>

      <h2>8. Governing law</h2>
      <p>
        These Terms are governed by the laws of [JURISDICTION], without regard to its conflict-of-law
        rules.
      </p>

      <h2>9. Changes</h2>
      <p>
        We may update these Terms from time to time. Material changes will be reflected by the
        &ldquo;Last updated&rdquo; date above. Continued use after changes take effect constitutes
        acceptance.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions about these Terms? Email <a href="mailto:support@recovia.app">support@recovia.app</a>.
      </p>

      <p className="legal-note">
        Template for review. Replace [COMPANY] and [JURISDICTION], confirm the update effective
        date, and have legal counsel review before publishing.
      </p>
    </LegalPage>
  );
}
