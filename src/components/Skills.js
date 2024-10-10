import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTools, FaCloud, FaWrench, FaBrain, FaUserTie } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      icon: <FaCode />,
      title: 'Programming Languages',
      list: ['C++', 'C#', 'Python', 'SQL', 'TypeScript', 'JavaScript']
    },
    {
      icon: <FaTools />,
      title: 'Frameworks/Tools',
      list: ['Entity Framework', 'ASP.NET Core', 'ASP.NET MVC', 'React']
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Platforms',
      list: ['Azure (Pipelines, Cloud Services)', 'AWS', 'Digital Ocean']
    },
    {
      icon: <FaWrench />,
      title: 'Tools',
      list: ['Azure Data Studio', 'GIT', 'Jira', 'macOS/Linux Command Line', 'Docker']
    },
    {
      icon: <FaBrain />,
      title: 'Techniques',
      list: [
        'AGILE Development',
        'API Design',
        'Automation',
        'Problem Solving',
        'Design Patterns',
        'System Design',
        'Database Management',
        'Cryptography',
        'Reverse Engineering'
      ]
    },
    {
      icon: <FaUserTie />,
      title: 'Proven Soft Skills',
      list: [
        'Fast Learner',
        'Adaptability',
        'Analytical Thinking',
        'Team Collaboration',
        'Effective Communication',
        'Ownership of Project Quality',
        'Software Targets Achievement'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="skills-section">
      <motion.div 
        className="skills-content"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="skill-card"
              variants={itemVariants}
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
