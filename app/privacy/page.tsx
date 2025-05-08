import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="p-8 space-y-8  mx-auto  mt-[100px]">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p>
        <strong>Effective Date:</strong> [Insert Date]
      </p>
      <p>
        At Platy.Studio, we are committed to protecting your privacy. This
        Privacy Policy explains how we collect, use, disclose, and safeguard
        your personal data when you use our services.
      </p>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          1. Information We Collect
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Personal Information:</strong> Name, email address, and
            contact details (when you contact us or sign up); payment details
            (processed securely by third-party providers).
          </li>
          <li>
            <strong>Content Data:</strong> Media files uploaded for dubbing
            (e.g., video or audio), transcriptions, generated voice outputs, and
            speaker information if voice cloning is requested.
          </li>
          <li>
            <strong>Technical Information:</strong> Browser type, device type,
            IP address, and usage data for performance monitoring.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Data</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Deliver our dubbing and audio services</li>
          <li>Customize and improve our platform</li>
          <li>Provide customer support</li>
          <li>
            Ensure security, detect abuse, and comply with legal obligations
          </li>
          <li>Send service-related updates</li>
        </ul>
        <p>
          We do <strong>not</strong> use customer data for training our AI
          models without explicit consent.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          3. Sharing Your Information
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Service Providers:</strong> Trusted vendors (e.g.,
            ElevenLabs, cloud providers) under strict confidentiality
            agreements.
          </li>
          <li>
            <strong>Legal Authorities:</strong> If required by law or to protect
            our legal rights.
          </li>
          <li>
            We do <strong>not</strong> sell or share your data with advertisers.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          4. Data Location and Transfers
        </h2>
        <p>
          All data is hosted on secure servers located in the{" "}
          <strong>United States</strong>. If you are accessing our service from
          outside the U.S., your data may be transferred and processed in
          accordance with applicable laws.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2"> 5. Your Rights</h2>
        <p>
          If you are located in the EU or similar jurisdictions, you have the
          right to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Access the personal data we hold about you</li>
          <li>Request correction or deletion</li>
          <li>Object to or restrict certain processing</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p>
          To exercise these rights, email us at{" "}
          <a
            href="mailto:privacy@platy.studio"
            className="text-blue-600 underline"
          >
            privacy@platy.studio
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          6. Data Retention and Security
        </h2>
        <p>
          We retain data only as long as necessary for delivering services and
          complying with legal obligations. Data is stored securely with
          encryption and strict access controls. Deletion requests are honored
          promptly.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          7. Children&quot;s Privacy
        </h2>
        <p>
          Platy.Studio is not intended for children under 13. We do not
          knowingly collect personal data from children.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          8. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Updates will be
          posted on this page with a revised &quot;Effective Date.&quot;
          Continued use of our services means you accept the changes.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2"> 9. Contact Us</h2>
        <p>
          For any privacy-related questions or to exercise your rights, please
          contact us at: <br />
          <a
            href="mailto:privacy@platy.studio"
            className="text-blue-600 underline"
          >
            privacy@platy.studio
          </a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
