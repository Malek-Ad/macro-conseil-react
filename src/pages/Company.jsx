import React from 'react';
import '../styles/Company.css';

function Company() {
  return (
    <main>
      <section id="company" role="region" aria-labelledby="company-title">
        <div className="container">
          <h1 id="company-title" className="section-title">
            MACRO Consulting & Assistance
          </h1>
          
          <div className="company-description">
            <p>
              We are committed to protecting our clients' digital assets by offering cutting-edge 
              cybersecurity solutions tailored to the specific needs of each business. With recognized 
              expertise in vulnerability management, securing IT and OT infrastructures, and cloud 
              security, we provide strategic services to ensure the confidentiality, integrity, and 
              availability of data.
            </p>
            <p>
              Our mission is to strengthen companies' security and prepare them for the growing 
              threats of the digital world by offering innovative solutions and personalized advice.
            </p>
          </div>
          
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>
              <strong>Phone:</strong> +216 555 555 555
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:contact@macro.com">contact@macro.com</a>
            </p>
            <p>
              <strong>Website:</strong>{' '}
              <a 
                href="http://www.macro-conseil.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                www.macro-conseil.com
              </a>
            </p>
            <p>
              <strong>Address:</strong> Tunis - Tunisie
            </p>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102239.5940821875!2d10.060876351225252!3d36.79485453007145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd337f5e7ef543:0xd671924e714a0275!2sTunis, Tunisie!5e0!3m2!1sfr!2sfr!4v1736014314162!5m2!1sfr!2sfr"
              title="MACRO Consulting & Assistance Location"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Company;
