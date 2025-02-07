import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import riskBg from '../assets/images/risk-a.jpg';

function RiskAssessment() {
  const [titleText] = useState('Risk Assessment');
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
        'Asset identification and classification',
        'Threat landscape analysis',
      ],
    },
    {
      title: 'Analyze',
      items: [
        'Vulnerability assessment',
        'Risk impact evaluation',
      ],
    },
    {
      title: 'Evaluate',
      items: [
        'Risk level determination',
        'Control effectiveness assessment',
      ],
    },
    {
      title: 'Mitigate',
      items: [
        'Risk treatment planning',
        'Implementation of controls',
      ],
    },
  ];

  return (
    <main>
      <section
        className="hero"
        style={{ backgroundImage: `url(${riskBg})` }}
      >
        <div className="container">
          <h1 className="animated-title">{displayedText}</h1>
          <p className="animated-subtitle">
            Our Risk Assessment service provides a comprehensive evaluation of your organization's security posture. 
            We identify vulnerabilities, assess potential threats, and develop mitigation strategies tailored to your specific needs.
          </p>
        </div>
      </section>

      <section className="overview">
        <div className="container">
          <h2>What is Risk Assessment?</h2>
          <p>
            Risk assessment is a systematic process of evaluating potential risks
            that could affect your organization's security posture. We help you
            identify vulnerabilities, assess their potential impact, and develop
            effective mitigation strategies.
          </p>
        </div>
      </section>

      <section className="nist-steps">
        <div className="container">
          <h2>Our Risk Assessment Process</h2>
          <p>
            Our risk assessment methodology follows industry best practices,
            ensuring a thorough evaluation of your organization's security risks
            and providing actionable recommendations.
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
          <h2>Start Your Risk Assessment Today</h2>
          <p>
            Contact us to learn how our risk assessment services can help protect
            your organization from potential threats and strengthen your security posture.
          </p>
          <Link to="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}

export default RiskAssessment;
