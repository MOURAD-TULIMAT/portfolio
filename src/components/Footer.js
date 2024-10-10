// src/components/Footer.js
import React from 'react';
import { FaLinkedin, FaGithub, FaHackerrank, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = ({ isVisible }) => {
  return (
    <motion.footer 
      className="footer"
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="social-icons">
        <a href="https://linkedin.com/in/mourad-tulimat" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/mourad-tulimat" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.hackerrank.com/mourad-tulimat" target="_blank" rel="noopener noreferrer"><FaHackerrank /></a>
        <a href="https://codeforces.com/profile/mourad-tulimat" target="_blank" rel="noopener noreferrer"><FaCode /></a>
      </div>
      <p>&copy; {new Date().getFullYear()} Mourad Tulimat. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;
