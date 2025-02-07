import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cloudBg from '../assets/images/back55$.jpg';

function CloudSecurity() {
  const [titleText] = useState('Cloud Security Services');
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
        'Assess cloud assets and identify sensitive data.',
        'Evaluate security risks related to cloud service providers.',
      ],
    },
    {
      title: 'Protect',
      items: [
        'Implement access controls and data encryption.',
        'Ensure strong security measures for cloud services.',
      ],
    },
    {
      title: 'Detect',
      items: [
        'Monitor cloud environments for suspicious activity.',
        'Use cloud security tools to scan for risks.',
      ],
    },
    {
      title: 'Respond',
      items: [
        'Develop incident response plans for cloud security.',
        'Act quickly to mitigate security breaches.',
      ],
    },
    {
      title: 'Recover',
      items: [
        'Restore cloud services after security incidents.',
        'Update security practices to prevent vulnerabilities.',
      ],
    },
  ];

  return (
    <main>
      <section
        className="hero"
        style={{ backgroundImage: `url(${cloudBg})` }}
      >
        <div className="container">
          <h1 className="animated-title">{displayedText}</h1>
          <p className="animated-subtitle">
            Empower your business with secure and resilient cloud infrastructures.
            We help you protect your data and ensure compliance across all cloud
            environments.
          </p>
        </div>
      </section>

      <section className="overview">
        <div className="container">
          <h2>What is Cloud Security?</h2>
          <p>
            Cloud security refers to the practices, policies, and technologies designed to protect 
            cloud computing environments and the data stored in them. We provide tailored cloud 
            security solutions that ensure your infrastructure is secure from evolving threats 
            while remaining compliant with industry standards and regulations.
          </p>
        </div>
      </section>

      <section className="nist-steps">
        <div className="container">
          <h2>Cloud Security based on NIST</h2>
          <p>
            We apply the NIST Cybersecurity Framework to cloud security to safeguard 
            your cloud environments and ensure comprehensive protection of your assets.
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
          <h2>Secure Your Cloud Infrastructure Today</h2>
          <p>
            Contact us to learn how our cloud security services can protect your 
            organization's cloud infrastructure and ensure compliance with industry standards.
          </p>
          <Link to="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}

export default CloudSecurity;
