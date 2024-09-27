import React from 'react';
import '../index.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} FanArena. All rights reserved.</p>
        <p>
          Follow us: 
          <a href="https://twitter.com/fanarena" className="social-link"> Twitter </a> | 
          <a href="https://facebook.com/fanarena" className="social-link"> Facebook </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
