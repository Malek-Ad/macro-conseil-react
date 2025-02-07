import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer role="contentinfo">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} MACRO Consulting & Assistance. All rights reserved.</p>
        
        <nav className="footer-nav">
          <ul>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/tunisian-regulations">Tunisian Regulations</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
          </ul>
        </nav>

        <div className="footer-interest">
          <p>Also of Interest:</p>
          <ul>
            <li>
              <a 
                href="https://cyber.gouv.fr/bonnes-pratiques-protegez-vous" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Cyber Security Best Practices
              </a>
            </li>
            <li>
              <a 
                href="https://gdpr-info.eu/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                General Data Protection Regulation
              </a>
            </li>
            <li>
              <a 
                href="https://www.nist.gov/cybersecurity" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                NIST
              </a>
            </li>
            <li>
              <a 
                href="https://thehackernews.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Cybersecurity News
              </a>
            </li>
            <li>
              <a 
                href="https://industrytoday.com/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Industry News
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
