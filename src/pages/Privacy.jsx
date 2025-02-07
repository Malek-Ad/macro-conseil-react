import React from 'react';
import '../styles/Privacy.css';

function Privacy() {
  return (
    <main className="container">
      <section className="privacy-section">
        <h1 className="faq-title">Privacy Policy</h1>
        <p><strong>Effective Date:</strong> January 1, 2025</p>
        <p>Welcome to MACRO Consulting & Assistance. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website and use our services.</p>

        <article>
          <h2>Personal Data Security</h2>
          <p>We use appropriate security measures to protect your personal information. However, no method of data transmission over the internet is 100% secure, and we cannot guarantee its absolute security.</p>
        </article>

        <article>
          <h2>Information We Collect</h2>
          <p>We collect various types of information from users, including personal identification details (name, email, phone number, etc.), usage data (IP address, browser type, pages visited, etc.), and cookies for improving user experience.</p>
        </article>

        <article>
          <h2>How We Use Your Information</h2>
          <p>We use your information to improve our website and services, respond to customer inquiries and support requests, and for marketing and promotional communications (with your consent).</p>
        </article>

        <article>
          <h2>Data Sharing and Disclosure</h2>
          <p>We do not sell or share your personal information with third parties for their marketing purposes. However, we may share your information with trusted service providers that help operate our website and when required by law or to protect the rights, safety, and security of our users.</p>
        </article>

        <article>
          <h2>Your Rights</h2>
          <p>You have the right to access, correct, and delete the personal information we hold about you. You can exercise these rights by contacting us directly at <a href="mailto:contact@macro-conseil.com">contact@macro-conseil.com</a>.</p>
        </article>

        <article>
          <h2>Cookies</h2>
          <p>We use cookies to enhance your experience on our website. You can manage your cookie preferences in your browser settings.</p>
        </article>
      </section>
    </main>
  );
}

export default Privacy;
