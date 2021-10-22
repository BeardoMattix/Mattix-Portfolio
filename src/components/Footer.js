import React from "react";
import "./styles/Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Footer = () => {
  return (
    <footer className="footer fixed-bottom">
      <a
        className="contact-links"
        href="https://github.com/BeardoMattix"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fab fa-github"></i>
      </a>

      <a
        className="contact-links"
        href="https://www.linkedin.com/in/christopher-j-mattix-4773b736/"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fab fa-linkedin"></i>
      </a>

      <a
        className="contact-links"
        href="https://twitter.com/MattixnotMatrix"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fab fa-twitter"></i>
      </a>
    </footer>
  );
};

export default Footer;
