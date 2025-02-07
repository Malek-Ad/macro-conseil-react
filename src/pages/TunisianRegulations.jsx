import React from 'react';
import '../styles/TunisianRegulations.css';

function TunisianRegulations() {
  return (
    <div className="regulations-container">
      <div className="regulations-content">
        <h1 className="regulations-title">Tunisian Regulations</h1>
        <p><strong>Effective Date:</strong> January 1, 2025</p>
        <p>This page provides an overview of key regulations in Tunisia and your rights under global privacy laws.</p>

        <section className="regulation-section">
          <h2>Tunisian Regulations</h2>
          <p>In compliance with Tunisian laws, we ensure that your data is processed transparently and securely. You have the right to:</p>
          <ul>
            <li>Access your personal data.</li>
            <li>Request correction or deletion of inaccurate data.</li>
            <li>Object to the processing of your data for marketing purposes.</li>
          </ul>
        </section>

        <section className="regulation-section">
          <h2>Your Rights Under Global Privacy Laws</h2>
          <p>We value your privacy and are committed to transparency about how we collect, use, and share your personal information. This page explains your rights under various regulations, including:</p>
          <ul>
            <li>Tunisian Data Protection Laws</li>
            <li>General Data Protection Regulation (GDPR)</li>
          </ul>
        </section>

        <section className="contact-section">
          <p>For more detailed information on Tunisian regulations, please contact us at{' '}
            <a href="mailto:info@macro-conseil.com">info@macro-conseil.com</a>
          </p>
        </section>

        <div className="regulations-footer">
          <p>© 2025 MACRO Consulting & Assistance. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default TunisianRegulations;
