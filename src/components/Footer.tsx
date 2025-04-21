import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6'; // ya 'fa'

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 ShopEasy. All rights reserved.</p>
      <div className="social-icons">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          {React.createElement(FaGithub)}
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          {React.createElement(FaLinkedin)}
        </a>
        <a href="mailto:your@email.com" title="Email">
          {React.createElement(FaEnvelope)}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
