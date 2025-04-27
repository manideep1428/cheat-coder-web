import React from 'react';

export default function RefundPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>
      <h2 className="text-2xl font-semibold mt-6 mb-4">1.Subscriptions</h2>
      <p className="mb-4">
        All sales for digital products, memberships, and subscriptions are <strong>final</strong>. Once access to premium content, downloadable material, or exclusive resources has been granted, <strong>no refunds</strong> will be issued.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">2. Eligibility for Refunds</h2>
      <p className="mb-4">
        Refunds will <strong>only</strong> be considered under the following circumstances:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>You were charged more than once for the same service (duplicate transactions).</li>
        <li>You experienced a technical issue that prevented access to paid content <strong>and</strong> we are unable to resolve it within a reasonable timeframe.</li>
        <li>The platform permanently discontinues service within 30 days of your purchase.</li>
      </ul>
      <p className="mb-4">
        <strong>Note:</strong> Issues arising from user error (e.g., forgetting login credentials, not reviewing system requirements, etc.) do not qualify for a refund.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">3. How to Request a Refund</h2>
      <p className="mb-4">
        If you believe you are eligible for a refund:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Contact our support team at <strong>saimanideepnaidu@gmail.com</strong> within <strong>7 days</strong> of your purchase.</li>
        <li>Provide your order details and a clear explanation of the issue.</li>
      </ul>
      <p className="mb-4">
        Our team will review your request and respond within <strong>5 business days</strong>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">4. Changes to This Policy</h2>
      <p className="mb-4">
        We reserve the right to modify this Refund Policy at any time. Updates will be posted on this page with a new effective date.
      </p>
    </div>
  );
}
