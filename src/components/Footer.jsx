import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./home.css"; // Import the custom styles

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-social-icons">
          <h3 className="footer-title">Ranjith M S</h3>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon">
              <FaInstagram />
              {/*  */}
            </a>
            <a href="#" className="social-icon">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="footer-navigation">
          <div className="footer-links">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Store</a></li>
              <li><a href="#">Shop Now</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
            
          <div className="contact-us">
            <p>Contact Us</p>
          </div>
            <div className="contact-info">
              <p>Contact Us: 9876543210</p>
              <p>Address: 123 Street, City, Country</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
