import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import iotBg from '../assets/images/iot.jpg';

function IoTSecurity() {
  const [titleText] = useState('IoT & OT Security');
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
        'Assess IT infrastructure and IoT devices for vulnerabilities.',
        'Evaluate risks and security requirements based on industry standards.',
      ],
    },
    {
      title: 'Protect',
      items: [
        'Implement security controls for IoT devices and OT systems.',
        'Ensure secure device configurations, access control, and encryption.',
      ],
    },
    {
      title: 'Detect',
      items: [
        'Monitor IoT devices and OT networks for malicious activities.',
        'Identify potential breaches or anomalies in real-time.',
      ],
    },
    {
      title: 'Respond',
      items: [
        'Develop incident response protocols for IoT and OT environments.',
        'Ensure quick containment and remediation of security incidents.',
      ],
    },
    {
      title: 'Recover',
      items: [
        'Design disaster recovery plans for IT and OT systems.',
        'Minimize downtime and restore services after an incident.',
      ],
    },
  ];

  return (
    <main>
      <section
        className="hero"
        style={{ backgroundImage: `url(${iotBg})` }}
      >
        <div className="container">
          <h1 className="animated-title">{displayedText}</h1>
          <p>
            Comprehensive IT and IoT security services to secure your digital assets, networks, and critical infrastructures.
          </p>
        </div>
      </section>

      <section className="overview">
        <div className="container">
          <h2>What is IT & IoT Security?</h2>
          <p>
            In today's interconnected world, IT and IoT security are essential to protect your systems, devices, and networks from cyber threats. We focus on securing your IT infrastructure as well as Internet of Things (IoT) devices and operational technologies (OT), ensuring compliance with industry standards and regulations.
          </p>
        </div>
      </section>

      <section className="iot-ot-steps">
        <div className="container">
          <h2>IT & IoT Security based on NIST</h2>
          <p>
            Our IT & IoT security approach covers key aspects to ensure the integrity, availability, and confidentiality of your networks and devices.
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
          <h2>Start Securing Your IT & IoT Systems Today</h2>
          <p>
            Contact us to learn more about how our IT and IoT security services can help protect your business from emerging cyber threats.
          </p>
          <Link to="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}

export default IoTSecurity;
