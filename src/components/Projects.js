// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Emra Platform (side project)',
      description: 'Service‑provider marketplace backend with ratings, pricing models, and Telegram bot notifications. Production‑ready CI/CD and Azure Blob storage for media.',
      technologies: ['.NET 8', 'ASP.NET Core', 'EF Core', 'SQL Server', 'Docker', 'Azure Blob', 'CI/CD'],
    },
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
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
              viewport={{ once: true }}
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
