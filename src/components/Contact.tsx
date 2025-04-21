import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <p className="description">
        Got a question? We’d love to hear from you. Send us a message and we’ll respond as soon as possible.
      </p>
      <form className="contact-form">
        <label htmlFor="name">Name*</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email address *</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5}></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
