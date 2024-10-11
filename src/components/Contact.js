// src/components/Contact.js
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaHackerrank, FaCode } from 'react-icons/fa';
import './Contact.css';

const Contact = ({ onInViewChange }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    onInViewChange(isInView);
  }, [isInView, onInViewChange]);

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <motion.div 
        className="contact-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Contact Me</h2>
        <div className="contact-info">
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Satwa, Dubai, UAE</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:mourad.japhar.tulimat@gmail.com">mourad.japhar.tulimat@gmail.com</a>
          </div>
          <div className="contact-item">
            <FaLinkedin className="contact-icon" />
            <a href="https://linkedin.com/in/mourad-tulimat" target="_blank" rel="noopener noreferrer">linkedin.com/in/mourad-tulimat</a>
          </div>
          <div className="contact-item">
            <FaGithub className="contact-icon" />
            <a href="https://github.com/mourad-tulimat" target="_blank" rel="noopener noreferrer">github.com/mourad-tulimat</a>
          </div>
          <div className="contact-item">
            <FaHackerrank className="contact-icon" />
            <a href="https://www.hackerrank.com/profile/mourad_japhar_t1" target="_blank" rel="noopener noreferrer">hackerrank.com/profile/mourad_japhar_t1</a>
          </div>
          <div className="contact-item">
            <FaCode className="contact-icon" />
            <a href="https://codeforces.com/profile/mourad-tulimat" target="_blank" rel="noopener noreferrer">codeforces.com/profile/mourad-tulimat</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
