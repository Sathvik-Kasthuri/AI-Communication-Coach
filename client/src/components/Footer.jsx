import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <h3>AI Communication Coach</h3>
          <p>
            Practice, improve, and speak with confidence using AI-powered
            communication tools.
          </p>
        </div>

        <div className="footer-links">
          <h3>Product</h3>
          <p>Daily Practice</p>
          <p>Interview Practice</p>
          <p>AI Feedback</p>
          <p>Progress</p>
        </div>

        <div className="footer-links">
          <h3>Company</h3>
          <p>About</p>
          <p>Contact</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 AI Communication Coach. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
