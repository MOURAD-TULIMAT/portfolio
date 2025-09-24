// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="brand">
            <h1 className="logo">Mourad Tulimat</h1>
            <p className="tagline">Backend Software Developer (.NET / Azure / Spring Boot)</p>
          </div>
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="about" smooth={true} duration={500} onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={500} onClick={closeMobileMenu}>
              Work
            </Link>
          </li>
          <li>
            <Link to="education" smooth={true} duration={500} onClick={closeMobileMenu}>
              Education
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} onClick={closeMobileMenu}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} onClick={closeMobileMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
          <li className="resume-link">
              <a href="/Mourad-Resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </li>
          </ul>
        <div className="mobile-menu-icon" onClick={handleToggleMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Dropdown Menu Animation */}
      {isMobileMenuOpen && (
        <motion.div
          className="mobile-dropdown"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="dropdown-links">
            <li>
              <Link to="about" smooth={true} duration={500} onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="work" smooth={true} duration={500} onClick={closeMobileMenu}>
                Work
              </Link>
            </li>
            <li>
              <Link to="education" smooth={true} duration={500} onClick={closeMobileMenu}>
                Education
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500} onClick={closeMobileMenu}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
            <li className="resume-link">
              <a href="/Mourad-Resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
