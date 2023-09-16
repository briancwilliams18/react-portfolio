import React from 'react';

function Footer() {
  return (
    <footer>
      <ul className="social-links">
        <li>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/yourname/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        {/* Add more social links as needed */}
      </ul>
    </footer>
  );
}

export default Footer;