import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import '../styles/Home.css';

function Home() {
  const [titleText] = useState('MACRO Consulting & Assistance');
  const [displayedText, setDisplayedText] = useState('');
  const [showIntro, setShowIntro] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [countersVisible, setCountersVisible] = useState(false);
  const impactRef = useRef(null);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= titleText.length) {
        setDisplayedText(titleText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setShowIntro(true);
        setTimeout(() => setShowButton(true), 500);
      }
    }, 100);

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.service-card').forEach(card => {
      cardObserver.observe(card);
    });

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setCountersVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (impactRef.current) {
      counterObserver.observe(impactRef.current);
    }

    return () => {
      clearInterval(typingInterval);
      cardObserver.disconnect();
      counterObserver.disconnect();
    };
  }, [titleText]);

  const scrollToServices = (e) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-container">
      <main>
        {/* Welcome Section */}
        <section 
          className="custom-background-section" 
          role="region" 
          aria-labelledby="main-title"
        >
          <div className="content">
            <h1 
              id="main-title" 
              className="main-title"
            >
              {displayedText}
            </h1>
            <p 
              id="intro-text" 
              style={{ opacity: showIntro ? 1 : 0 }}
            >
              We offer cutting-edge cybersecurity solutions tailored to your business needs.
            </p>
            <a 
              href="#services" 
              className="button--transparent--home"
              style={{ opacity: showButton ? 1 : 0 }}
              onClick={scrollToServices}
            >
              Discover our services
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services-section" role="region" aria-labelledby="services-title">
          <div className="container">
            <h2 id="services-title" className="section-title">Our Services</h2>
            <div className="service-grid">
              <article className="service-card">
                <div className="service-card-header">
                  <h3>
                    <Link to="/vulnerability-management">Vulnerability Management</Link>
                  </h3>
                </div>
                <div className="service-card-body">
                  <p>Proactive vulnerability management to identify, analyze, and fix security flaws in your IT infrastructure.</p>
                  <ul>
                    <li>Regular asset scans.</li>
                    <li>Vulnerability prioritization.</li>
                    <li>Action plans for remediation.</li>
                  </ul>
                </div>
              </article>

              <article className="service-card">
                <div className="service-card-header">
                  <h3>
                    <Link to="/incident-management">Incident Management</Link>
                  </h3>
                </div>
                <div className="service-card-body">
                  <p>Managing security incidents to quickly and effectively identify, contain, and resolve attacks.</p>
                  <ul>
                    <li>Incident response plans and emergency procedures.</li>
                    <li>Real-time incident detection and analysis.</li>
                    <li>Recovery and repair of compromised systems.</li>
                  </ul>
                </div>
              </article>

              <article className="service-card">
                <div className="service-card-header">
                  <h3>
                    <Link to="/cloud-security">Cloud Security</Link>
                  </h3>
                </div>
                <div className="service-card-body">
                  <p>Securing cloud environments to ensure the protection of sensitive data in cloud infrastructures.</p>
                  <ul>
                    <li>Cloud security configuration assessments.</li>
                    <li>Identity and access management (IAM).</li>
                    <li>Data and application protection in the cloud.</li>
                  </ul>
                </div>
              </article>

              <article className="service-card">
                <div className="service-card-header">
                  <h3>
                    <Link to="/risk-assessment">Risk Assessment</Link>
                  </h3>
                </div>
                <div className="service-card-body">
                  <p>Risk assessments to determine potential threats and their impact on your business.</p>
                  <ul>
                    <li>In-depth analysis of threats and vulnerabilities.</li>
                    <li>Identification of risks specific to your industry.</li>
                    <li>Risk mitigation strategies.</li>
                  </ul>
                </div>
              </article>

              <article className="service-card">
                <div className="service-card-header">
                  <h3>
                    <Link to="/security-audit">Security Audit & Compliance</Link>
                  </h3>
                </div>
                <div className="service-card-body">
                  <p>Comprehensive security audits to assess your compliance with cybersecurity standards and industry regulations.</p>
                  <ul>
                    <li>Security audits of systems and processes.</li>
                    <li>Assistance with regulatory compliance.</li>
                    <li>Non-compliance reports and recommendations.</li>
                  </ul>
                </div>
              </article>

              <article className="service-card">
                <div className="service-card-header">
                  <h3>
                    <Link to="/iot-ot-security">IoT and OT Security</Link>
                  </h3>
                </div>
                <div className="service-card-body">
                  <p>Securing IoT and OT systems to prevent unauthorized access and protect critical networks.</p>
                  <ul>
                    <li>Monitoring of IoT devices and OT infrastructures.</li>
                    <li>Protection of SCADA systems and industrial equipment.</li>
                    <li>Management of vulnerabilities specific to OT and IoT environments.</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="impact-section" role="region" aria-labelledby="impact-title" ref={impactRef}>
          <div className="content-wrapper">
            <div className="text-content">
              <h2 id="impact-title">Our Cybersecurity Vision</h2>
              <p>At MACRO Consulting & Assistance, we are committed to pioneering cybersecurity solutions that anticipate and mitigate future threats. Our focus is on building a secure digital landscape for our clients, leveraging advanced technologies and strategic partnerships to drive innovation and resilience.</p>
              <div className="impact-row">
                <div className="impact-item">
                  <div className="elementor-counter-number-wrapper">
                    {countersVisible && (
                      <>
                        <CountUp
                          end={15}
                          duration={2}
                          className="elementor-counter-number"
                        />
                        <span className="elementor-counter-number-suffix">+</span>
                      </>
                    )}
                  </div>
                  <div className="elementor-counter-title">Solutions Developed</div>
                </div>
                <div className="separator"></div>
                <div className="impact-item">
                  <div className="elementor-counter-number-wrapper">
                    {countersVisible && (
                      <>
                        <CountUp
                          end={200}
                          duration={2}
                          className="elementor-counter-number"
                        />
                        <span className="elementor-counter-number-suffix">+</span>
                      </>
                    )}
                  </div>
                  <div className="elementor-counter-title">Threats Neutralized</div>
                </div>
                <div className="separator"></div>
                <div className="impact-item">
                  <div className="elementor-counter-number-wrapper">
                    {countersVisible && (
                      <>
                        <CountUp
                          end={30}
                          duration={2}
                          className="elementor-counter-number"
                        />
                        <span className="elementor-counter-number-suffix">+</span>
                      </>
                    )}
                  </div>
                  <div className="elementor-counter-title">Clients Protected</div>
                </div>
                <div className="separator"></div>
                <div className="impact-item">
                  <div className="elementor-counter-number-wrapper">
                    {countersVisible && (
                      <>
                        <CountUp
                          end={23}
                          duration={2}
                          className="elementor-counter-number"
                        />
                        <span className="elementor-counter-number-suffix">+</span>
                      </>
                    )}
                  </div>
                  <div className="elementor-counter-title">Global Partnerships</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
