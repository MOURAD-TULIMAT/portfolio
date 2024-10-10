import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  const educationDetails = {
    institution: 'AL-Baath University, Homs',
    degree: "Bachelor's Degree in Mathematics (Algebra and Programming Focus)",
    duration: 'Mar 2019 – Dec 2023',
    notableClasses: [
      'C++ and Algorithms',
      'Pascal and Algorithms',
      'Group Therapy',
      'Geometry',
      'Probability Theory',
      'MATLAB',
      'Number Theory and the Basics of Cryptography',
      'English (Mathematics specialty)',
    ]
  };

  return (
    <section id="education" className="education-section">
      <motion.div 
        className="education-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Education</h2>
        <div className="education-details">
          <h3>{educationDetails.institution}</h3>
          <p>{educationDetails.degree} — {educationDetails.duration}</p>
          <h4>Notable Classes:</h4>
          <ul>
            {educationDetails.notableClasses.map((cls, index) => (
              <li key={index}>{cls}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
