import React from 'react';
import burpsuiteLogo from '../assets/images/burpsuite-logo.png';
import tenableLogo from '../assets/images/tenable-logo.png';
import elasticLogo from '../assets/images/elastic-stack-logo.png';
import crowdstrikeLogo from '../assets/images/crowdstrike-logo.png';
import awsLogo from '../assets/images/aws-logo.png';
import '../styles/Partners.css';

function Partners() {
  const partners = [
    {
      name: 'Burpsuite',
      logo: burpsuiteLogo,
      description: 'Burpsuite provides comprehensive security testing solutions for web applications.',
      url: 'https://portswigger.net/burp'
    },
    {
      name: 'Tenable',
      logo: tenableLogo,
      description: 'Tenable offers vulnerability management solutions to help you identify and manage risks.',
      url: 'https://www.tenable.com/'
    },
    {
      name: 'Elastic Stack',
      logo: elasticLogo,
      description: 'Elastic Stack provides powerful search and analytics capabilities for your data.',
      url: 'https://www.elastic.co/'
    },
    {
      name: 'Crowdstrike',
      logo: crowdstrikeLogo,
      description: 'Crowdstrike delivers endpoint protection and threat intelligence solutions.',
      url: 'https://www.crowdstrike.com/'
    },
    {
      name: 'AWS',
      logo: awsLogo,
      description: 'AWS offers a wide range of cloud computing services to support your business needs.',
      url: 'https://aws.amazon.com/'
    }
  ];

  return (
    <main>
      <section id="partners" role="region" aria-labelledby="partners-title">
        <div className="container">
          <h2 id="partners-title" className="section-title">
            Our Partners
          </h2>
          <div className="partner-list">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                className="partner"
                rel="noopener noreferrer"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  className="medium-img"
                />
                <p>{partner.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Partners;
