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
          I’m Mourad Tulimat — a Backend Software Developer focused on .NET and Azure. I’ve spent ~4 years building secure, high-availability REST APIs (C#, .NET 8, ASP.NET Core, EF Core, SQL Server), with strong CI/CD on Azure DevOps and production observability (Serilog, Application Insights). I’ve worked on financial services and airline integrations, and I care a lot about data integrity, idempotency, and clean, testable code.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
