import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auditBg from '../assets/images/back55$.jpg';

function SecurityAudit() {
  const [titleText] = useState('Security Audit & Compliance');
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= titleText.length) {
        setDisplayedText(titleText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [titleText]);

  const steps = [
    {
      title: 'Identify',
      items: [
        'Assess assets, risks, and vulnerabilities.',
        'Define security requirements based on industry regulations.',
      ],
    },
    {
      title: 'Protect',
      items: [
        'Implement security controls to mitigate risks.',
        'Ensure secure configurations and access controls.',
      ],
    },
    {
      title: 'Detect',
      items: [
        'Set up continuous monitoring for security events.',
        'Detect and respond to security incidents in real-time.',
      ],
    },
    {
      title: 'Respond',
      items: [
        'Establish incident response protocols.',
        'Ensure rapid containment and remediation of incidents.',
      ],
    },
    {
      title: 'Recover',
      items: [
        'Develop a recovery plan to restore services after an incident.',
        'Ensure business continuity and minimize downtime.',
      ],
    },
  ];

  return (
    <main>
      <section
        className="hero"
        style={{ backgroundImage: `url(${auditBg})` }}
      >
        <div className="container">
          <h1 className="animated-title">{displayedText}</h1>
          <p className="animated-subtitle">
            Comprehensive security audits to assess your compliance with
            cybersecurity standards and industry regulations based on NIST
            guidelines.
          </p>
        </div>
      </section>

      <section className="overview">
        <div className="container">
          <h2>What is Security Audit & Compliance?</h2>
          <p>
            Security audits involve evaluating the security of your systems and
            processes against industry standards and regulations. We assist you
            in identifying vulnerabilities, non-compliance issues, and provide
            actionable recommendations to enhance your cybersecurity posture.
          </p>
        </div>
      </section>

      <section className="nist-steps">
        <div className="container">
          <h2>Security Audit Based on NIST</h2>
          <p>
            Our security audit process follows the NIST Cybersecurity Framework,
            ensuring that your organization is aligned with the latest security
            standards and compliance requirements.
          </p>

          <div className="steps">
            {steps.map((step) => (
              <div key={step.title} className="step">
                <h3>{step.title}</h3>
                <ul>
                  {step.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Start Your Security Audit & Compliance Today</h2>
          <p>
            Contact us to learn more about how our security audit services can
            help your organization comply with industry standards and enhance
            your cybersecurity defenses.
          </p>
          <Link to="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}

export default SecurityAudit;
