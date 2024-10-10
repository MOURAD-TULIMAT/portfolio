import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <motion.div 
        className="about-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>
        <p>
          I'm Mourad Tulimat, a Competitive Programmer, Mathematician, Software Developer, and Backend Specialist based in Dubai, UAE. With a strong foundation in mathematics and extensive experience in software development, I thrive on solving complex problems and building efficient, scalable backend systems.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
