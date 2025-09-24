import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaCloud, FaDatabase, FaVial, FaReact, FaProjectDiagram } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      icon: <FaCode />,
      title: 'Backend',
      list: ['C# (.NET 8, ASP.NET Core, EF Core)', 'Java (Spring Boot)', 'REST, Swagger'],
    },
    {
      icon: <FaCloud />,
      title: 'Cloud / DevOps',
      list: ['Azure (App Services, Key Vault, Blob, ARM/Bicep)', 'Azure DevOps Pipelines (CI/CD)'],
    },
    {
      icon: <FaDatabase />,
      title: 'Data / Queues',
      list: ['SQL Server (migrations, indexes, views, stored procedures)', 'MongoDB', 'Redis'],
    },
    {
      icon: <FaVial />,
      title: 'Testing / Quality',
      list: ['TDD', 'xUnit, NUnit, Moq', 'Integration Tests', 'SonarQube'],
    },
    {
      icon: <FaReact />,
      title: 'Frontend',
      list: ['React (TypeScript / JavaScript)'],
    },
    {
      icon: <FaProjectDiagram />,
      title: 'Practices',
      list: ['Agile/Scrum', 'Code Reviews', 'Unit/Integration Testing'],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <motion.div 
        className="skills-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Core Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <ul>
                {skill.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
