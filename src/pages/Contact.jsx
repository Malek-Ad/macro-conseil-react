import React, { useState } from 'react';
import contactImage from '../assets/images/contact-us.jpg';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <main>
      <section id="contact" role="region" aria-labelledby="contact-title">
        <div className="container">
          <h2 id="contact-title">Contact Us</h2>
          <img 
            src={contactImage} 
            alt="Contact Us" 
            className="responsive-img"
          />
          <p>
            Protect your digital assets today by contacting us to discuss your cybersecurity needs.
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            
            <button type="submit">Send</button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
