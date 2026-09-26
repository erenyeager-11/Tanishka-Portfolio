import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <span className="logo-text">Tanu</span>
          <span className="logo-dot"> ✦</span>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Tanishka Singh. Made with sparkle & strategy.
        </p>
        <div className="footer-links">
          <a href="mailto:tanishkasingh858547@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
