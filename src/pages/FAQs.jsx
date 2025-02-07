import React, { useState } from 'react';
import '../styles/FAQs.css';

function FAQs() {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const faqData = [
    {
      question: 'What is cybersecurity?',
      answer: 'Cybersecurity refers to protecting systems, networks, and programs from digital attacks that aim to access, change, or destroy sensitive information.',
      category: 'security'
    },
    {
      question: 'How can I secure my account?',
      answer: 'Use strong passwords, enable multi-factor authentication, and avoid sharing login details with anyone.',
      category: 'account'
    },
    {
      question: 'What services does your company offer?',
      answer: 'We offer a range of cybersecurity solutions, including vulnerability assessments, penetration testing, and threat intelligence services.',
      category: 'services'
    },
    {
      question: 'How can I protect my business from cyber threats?',
      answer: 'There are several key steps to protect your business: 1) Implement strong password policies and multi-factor authentication, 2) Regularly update and patch systems, 3) Train employees on security best practices, 4) Use encrypted connections and VPNs, 5) Maintain regular backups, and 6) Have an incident response plan.',
      category: 'security'
    },
    {
      question: 'What makes MACRO Consulting different from other security firms?',
      answer: 'MACRO Consulting stands out through our: 1) Comprehensive approach to security, 2) Deep industry expertise, 3) Customized solutions for each client, 4) 24/7 support and monitoring, 5) Advanced threat intelligence capabilities, and 6) Proven track record of successful implementations.',
      category: 'services'
    },
    {
      question: 'What industries do you serve?',
      answer: 'We serve a wide range of industries including: Financial Services, Healthcare, Manufacturing, Retail, Government, Education, and Technology. Our experience across various sectors allows us to bring best practices and industry-specific knowledge to each engagement.',
      category: 'services'
    }
  ];

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const filteredFaqs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="container">
      <section id="faq" className="faq-section">
        <h1 className="faq-title">Frequently Asked Questions (FAQs)</h1>

        {/* Search Bar */}
        <div className="faq-search">
          <input
            type="text"
            placeholder="Search FAQs..."
            aria-label="Search FAQs"
            value={searchQuery}
            onChange={handleSearch}
          />
          <button>Search</button>
        </div>

        {/* Categories */}
        <div className="faq-categories">
          <button
            className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('all')}
          >
            All
          </button>
          <button
            className={`category-btn ${activeCategory === 'services' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('services')}
          >
            Services
          </button>
          <button
            className={`category-btn ${activeCategory === 'security' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('security')}
          >
            Security
          </button>
          <button
            className={`category-btn ${activeCategory === 'account' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('account')}
          >
            Account
          </button>
        </div>

        {/* FAQ Accordion */}
        <div className="faq-accordion">
          {filteredFaqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h2
                className="faq-question"
                onClick={() => toggleQuestion(index)}
              >
                {faq.question}
                <span>{activeQuestion === index ? '-' : '+'}</span>
              </h2>
              <div className={`faq-answer ${activeQuestion === index ? 'active' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default FAQs;
