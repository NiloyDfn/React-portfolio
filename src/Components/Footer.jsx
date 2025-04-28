import React from "react";
import NiloyImg from "../assets/me2.png";
import { AiOutlineArrowUp } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/NiloyDfn", label: "GitHub" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/dfn_official7/", label: "Instagram" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/foysal-ahammed-niloy-bb9289270/", label: "LinkedIn" },
  ];

  return (
    <footer>
      <div className="footer-content">
        <div className="profile-section">
          <div className="profile-image-container">
            <img src={NiloyImg} alt="Foysal Ahammed Niloy" />
          </div>
          <h2>Foysal Ahammed Niloy</h2>
          <p className="tagline">"Motivation is temporary, but discipline lasts forever."</p>
        </div>

        <div className="social-section">
          <h3>Connect With Me</h3>
          <div className="social-icons">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} • Thanks for visiting 😊</p>
        <a className="scroll-to-top" href="#home" aria-label="Scroll to top">
          <AiOutlineArrowUp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;