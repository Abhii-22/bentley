import React from 'react';
import './Contact.css';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Have a question or need assistance? We’d love to hear from you!
          </p>

          <div className="contact-body">
            {/* Left side - Info */}
            <div className="contact-info">
              <div className="info-item">
                <span className="info-icon">
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <h4>Address</h4>
                  <p>
                    XGCP+9J3, MRCR Layout, MC Layout, Vijayanagar, Bengaluru,
                    Karnataka 560040
                  </p>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">
                  <FaEnvelope />
                </span>
                <div>
                  <h4>Email</h4>
                  <p>connect@medini.in</p>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">
                  <FaPhoneAlt />
                </span>
                <div>
                  <h4>Phone</h4>
                  <p>(+91) 99000 81006</p>
                </div>
              </div>

              <div className="social-links">
                <a
                  href="https://www.instagram.com/medinitechnologies/"
                  className="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/medinitechnologies/"
                  className="linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            {/* Right side - Map */}
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.015068456746!2d77.53398227491833!3d12.970887487344475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d00083446b3%3A0x350e2f5bbc9d0d11!2sMEDINI%20TECHNOLOGIES!5e0!3m2!1sen!2sin!4v1761542685031!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Medini Technologies Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-about">
            <h3>Medini Technologies</h3>
            <p>
             Leading the future of digital infrastructure with innovative engineering solutions.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#courses">Courses</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/company/medinitechnologies/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="https://www.instagram.com/medinitechnologies/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Medini Technologies. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
