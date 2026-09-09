import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Refund Policy · Recovia",
  description: "Our 14-day money-back guarantee for Recovia & Exhibit Organizer, processed via Paddle.",
};

export default function RefundPage() {
  return (
    <LegalPage title="Refund Policy" updated="September 9, 2026">
      <p>
        We want you to be confident in your purchase. Recovia offers a free trial so you can
        evaluate the Software before buying, and the refund terms below for paid licenses.
      </p>

      <h2>1. 14-day money-back guarantee</h2>
      <p>
        If you are not satisfied with your license, you may request a full refund within
        <strong> 14 days</strong> of purchase. You do not need to provide a reason, though feedback
        is always welcome.
      </p>

      <h2>2. How to request a refund</h2>
      <p>
        Email <a href="mailto:support@recovia.app">support@recovia.app</a> from the address used at
        checkout, or use the receipt link sent by Paddle. Refunds are processed by
        {" "}<strong>Paddle</strong>, our Merchant of Record, back to your original payment method.
        It may take several business days for the funds to appear, depending on your bank or card
        issuer.
      </p>

      <h2>3. After the refund window</h2>
      <p>
        Because the Software is a digital product that works offline once activated, we generally do
        not provide refunds after the 14-day window. If you experience a technical problem, contact
        support first — we&rsquo;ll do our best to make it right.
      </p>

      <h2>4. Chargebacks</h2>
      <p>
        If you believe a charge is incorrect, please contact us or Paddle before initiating a
        chargeback so we can resolve it quickly.
      </p>

      <h2>5. Contact</h2>
      <p>
        Questions about refunds? Email <a href="mailto:support@recovia.app">support@recovia.app</a>.
      </p>

      <p className="legal-note">
        Template for review. Confirm the refund window and effective date, and ensure it matches the
        policy you configure in Paddle before publishing.
      </p>
    </LegalPage>
  );
}
