import React from 'react';
import { motion } from 'framer-motion';
import './WorkExperience.css';

const WorkExperience = () => {
  const experiences = [
    {
      company: 'Wizme',
      role: 'Backend Software Engineer',
      location: 'London, UK',
      duration: 'Oct 2021 – Present',
      responsibilities: [
        'Developed asynchronous background services with C#, .NET Core, and SQL Server, reducing event processing time by 30%.',
        'Increased productivity for hotel and venue sales teams by 60% by creating the Diary Bot ©, which automates scheduling using .NET Core, MSSQL, and custom algorithms.',
        'Designed SQL-based reporting tools, supporting Excel and JSON formats, through Dependency Injection and Factory Design Pattern, improving reporting versatility.',
        'Engineered an alert notification system with SendGrid and Strategy Pattern, improving customer response rate by 30%.',
        'Automated document processing with a PDF generation tool (using IText7).',
        'Applied SOLID principles and CI/CD practices, and enhanced scalability.',
        'Leveraged competitive programming experience to reduce query response times by up to 40%.',
        'Collaborated with a team of professionals using AGILE methodology to enhance platform functionality and streamline processes.'
      ]
    },
    {
      company: 'Akwad',
      role: 'Software Engineer',
      location: 'Freelance',
      duration: 'Mar 2021 – Oct 2021',
      responsibilities: [
        'Led the development of a RESTful API for the "My Pharmacy" loyalty app, implementing real-time customer point tracking system.',
        'Constructed the backend for a Dashboard app, automating point exchange rates via a rule-based system.',
        'Integrated the loyalty app with the "Al-Bayan" accounting software, ensuring seamless real-time synchronization of customer data, removing data discrepancies.',
        'Collaborated with product teams to enhance user experience by optimizing RESTful API responsiveness for the front end needs, reducing customer fulfillment issues by 20%, and improving overall system performance and reliability.'
      ]
    }
  ];

  return (
    <section id="work" className="work-section">
      <motion.div 
        className="work-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Work Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="experience">
            <h3>{exp.company}, {exp.role}</h3>
            <p>{exp.location} — {exp.duration}</p>
            <ul>
              {exp.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default WorkExperience;
