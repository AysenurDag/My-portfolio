import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">𝓐</div>
          <p>Thanks for stopping by ツ</p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Links</h3>
            <ul>
              <li>About</li>
              <li>Work</li>
              <li>Tech Stack</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Elsewhere</h3>
            <ul>
              <li>
                <a href="mailto:1aysenurdag@gmail.com">Email</a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ay%C5%9Fenur-da%C4%9F-169a271b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AysenurDag"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Ayşenur Dağ. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
