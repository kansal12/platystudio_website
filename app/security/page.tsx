import React from "react";

const SecurityAtPlatyStudio = () => {
  return (
    <div className="p-8 space-y-8 mt-[100px]">
      <h1 className="text-3xl font-bold mb-4">Security </h1>
      <p>
        At Platy.Studio, we understand that security is foundational to trust.
        Whether you’re a media studio, OTT platform, or enterprise content
        creator, your data, assets, and creative IP are treated with the highest
        level of care and protection.
      </p>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Our Commitment</h2>
        <p>
          We’re committed to providing a secure, private, and reliable
          environment for all our users. Our security practices are designed to
          safeguard your content across its lifecycle—from upload and processing
          to storage and delivery.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2"> Data Protection</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            End-to-End Encryption: All data in transit is protected using TLS
            1.2+; data at rest is encrypted using AES-256 standards.
          </li>
          <li>
            Isolated Processing Pipelines: Each project is handled in isolated
            containers to minimize cross-access risks.
          </li>
          <li>
            Strict Access Controls: Only authorized team members have access to
            operational systems, governed by role-based access and multi-factor
            authentication (MFA).
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          Compliance & Data Residency
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            US-Based Infrastructure: All data is stored and processed on secure
            servers located in the United States.
          </li>
          <li>
            Third-Party Provider: We leverage ElevenLabs for voice synthesis.
            Data shared with ElevenLabs is subject to their security and privacy
            practices, which align with industry standards.
          </li>
          <li>
            SOC 2 (In Progress): We are actively working toward SOC 2 Type I
            compliance, implementing rigorous internal controls to ensure
            security, availability, and confidentiality.
          </li>
          <li>
            GDPR-Aligned: While our infrastructure is based in the U.S., we
            follow GDPR principles for transparency, user consent, and data
            rights. EU users may contact us to request access, correction, or
            deletion of personal data.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          AI Ethics & Model Safety
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            No Data Retention Without Consent: We do not use customer-uploaded
            content to train our models unless we receive explicit permission.
          </li>
          <li>
            Hybrid TTS Pipeline: We use an ensemble of our own proprietary
            text-to-speech (TTS) models—trained on public datasets—and licensed
            commercial TTS models from leading providers like Google and
            ElevenLabs.
          </li>
          <li>
            Voice Cloning With Consent: When we clone a voice (e.g., from a 3M
            video), we do so only when Platy.Studio and the original speaker
            both have the legal rights to generate and use the synthesized voice
            output.
          </li>
          <li>
            Custom Voices, Securely Hosted: Unique AI voices created for your
            brand are isolated and stored in private, access-controlled
            environments.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Voice Rights & Usage</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Two Voice Options: Our dubbing system can use either (a) unique
            synthetic voices with a defined persona, or (b) cloned voices that
            match the style and tone of the original speaker—translated into new
            languages.
          </li>
          <li>
            Transparent Licensing: We only use TTS providers (e.g., Google,
            ElevenLabs) under commercial license agreements that permit our use
            cases.
          </li>
          <li>
            Ethical Voice Use: We follow a consent-first approach in voice
            cloning, and work only with voice data that is publicly licensed or
            legally authorized.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          Infrastructure & Monitoring
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Cloud-Native Security: Our services are hosted on hardened,
            compliance-ready cloud infrastructure.
          </li>
          <li>
            Real-Time Monitoring: Logging, anomaly detection, and automated
            alerts help us respond rapidly to any abnormal activity.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          Transparency & Incident Response
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Proactive Disclosure: If any data breach or security incident
            occurs, we notify affected users promptly and transparently.
          </li>
          <li>
            Rapid Response Team: A dedicated security and DevOps team is on
            standby to assess, contain, and resolve threats as quickly as
            possible.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p>
          Have questions, concerns, or a vulnerability to report? <br />
          Email our security team at{" "}
          <a
            href="mailto:contact@platy.studio"
            className="text-blue-600 underline"
          >
            contact@platy.studio
          </a>
        </p>
      </section>
    </div>
  );
};

export default SecurityAtPlatyStudio;
