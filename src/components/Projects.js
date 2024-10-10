// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Diary Bot ©',
      description: 'An automated scheduling tool that increased productivity by 60% for hotel and venue sales teams.',
      technologies: ['.NET Core', 'MSSQL', 'C#'],
    },
    {
      title: 'My Pharmacy Loyalty App',
      description: 'Developed a RESTful API with real-time customer point tracking system integrated with accounting software.',
      technologies: ['Node.js', 'Express', 'MongoDB'],
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="projects-section">
      <motion.div 
        className="projects-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
