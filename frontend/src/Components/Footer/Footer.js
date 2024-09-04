import React from 'react';
import './Footer.css';
import logo from './img/Logo.jpg'; // Replace with your logo path

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="footer-search">
            <input type="text" placeholder="Search..." />
            <button type="button">Search</button>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-about">
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur.</p>
          </div>
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>Address: 1234 Street Name, City</p>
            <p>Phone: +123 456 789</p>
            <p>Email: contact@example.com</p>
          </div>
          <div className="footer-resources">
            <h4>Other Resources</h4>
            <ul>
              <li><a href="#">Resource 1</a></li>
              <li><a href="#">Resource 2</a></li>
              <li><a href="#">Resource 3</a></li>
              <li><a href="#">Resource 4</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-social">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
