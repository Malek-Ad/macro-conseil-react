import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import incidentBg from '../assets/images/incident.jpg';

function IncidentManagement() {
  const [titleText] = useState('Incident Management');
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
        'Establish incident detection systems and protocols.',
        'Define roles and responsibilities for incident response teams.',
      ],
    },
    {
      title: 'Protect',
      items: [
        'Implement preventive measures to reduce the likelihood of incidents.',
        'Strengthen security controls to prevent unauthorized access.',
      ],
    },
    {
      title: 'Detect',
      items: [
        'Monitor systems continuously for signs of security incidents.',
        'Deploy detection tools to identify potential threats and breaches.',
      ],
    },
    {
      title: 'Respond',
      items: [
        'Activate the incident response plan upon detection of an incident.',
        'Coordinate resources to address and mitigate the impact of the incident.',
      ],
    },
    {
      title: 'Recover',
      items: [
        'Restore services and systems affected by the incident.',
        'Analyze the incident to improve future response efforts and preventive measures.',
      ],
    },
  ];

  const benefits = [
    'Rapid detection and response to minimize business disruption.',
    'Thorough post-incident analysis to improve security posture.',
    'Reduced downtime and operational impact during incidents.',
    'Enhanced collaboration between security teams and business units.',
  ];

  return (
    <div className="page-container">
      <section className="hero" style={{ backgroundImage: `url(${incidentBg})` }}>
        <div className="container">
          <h1 className="animated-title">{displayedText}</h1>
          <div className="subtitle-wrapper">
            <p className="hero-subtitle">
              Proactively manage security incidents with our comprehensive incident management solutions. Ensure a swift response to minimize the impact on your business operations.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>What is Incident Management?</h2>
          <p>
            Incident management is the process of identifying, managing, and responding to security incidents in a timely and effective manner. We help you establish robust incident management procedures to quickly detect, mitigate, and recover from incidents while minimizing disruption to your operations.
          </p>
        </div>
      </section>

      <section className="nist-steps">
        <div className="container">
          <h2>Incident Management based on NIST</h2>
          <p>
            We apply the NIST Cybersecurity Framework to incident management by following five key steps:
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

      <section className="benefits">
        <div className="container">
          <h2>Benefits of Effective Incident Management</h2>
          <p>Our Incident Management services provide:</p>
          <ul>
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Prepare for Security Incidents Today</h2>
          <p>
            Contact us to learn more about how our incident management services can strengthen your organization's ability to effectively manage and respond to cybersecurity incidents.
          </p>
          <Link to="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

export default IncidentManagement;
