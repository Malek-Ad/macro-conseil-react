import React from 'react';
import '../styles/TermsOfService.css';

function TermsOfService() {
  return (
    <main className="container">
      <section className="terms-section">
        <h1 className="faq-title">Terms of Service</h1>
        <p><strong>Effective Date:</strong> January 1, 2025</p>
        <p>Welcome to MACRO Consulting & Assistance. By accessing our website and using our services, you agree to the following terms:</p>

        <article>
          <h2>Service Usage</h2>
          <p>By using our services, you agree to follow our rules and use them only for lawful purposes.</p>
        </article>

        <article>
          <h2>Account Responsibilities</h2>
          <p>You are responsible for keeping your account information secure and for any activity that occurs under your account.</p>
        </article>

        <article>
          <h2>Payment and Billing</h2>
          <p>You agree to pay for our services according to our pricing and billing policies, which may include recurring charges.</p>
        </article>

        <article>
          <h2>Limitation of Liability</h2>
          <p>We are not liable for any damages or losses that may occur from using our services, beyond what the law requires.</p>
        </article>

        <article>
          <h2>Governing Law</h2>
          <p>Any legal disputes will be resolved under the laws of the jurisdiction where our company is based.</p>
        </article>

        <p>For more information, feel free to contact us at <a href="mailto:info@macro-conseil.com">info@macro-conseil.com</a>.</p>
      </section>
    </main>
  );
}

export default TermsOfService;
