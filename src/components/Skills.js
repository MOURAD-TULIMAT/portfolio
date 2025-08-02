import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTools, FaCloud, FaWrench, FaBrain, FaUserTie } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      icon: <FaCode />,
      title: 'Languages',
      list: ['C#', 'Java', 'Python', 'C++', 'TypeScript']
    },
    {
      icon: <FaTools />,
      title: 'Frameworks',
      list: ['.NET Core', 'Spring Boot', 'React']
    },
    {
      icon: <FaCloud />,
      title: 'Cloud',
      list: [
        {
          name: 'Azure',
          sublist: [
            'App Services',
            'Functions',
            'Key Vault',
            'Blob Storage',
            'SQL Database',
            'DevOps (Pipelines)'
          ]
        },
        {
          name: 'AWS',
          sublist: [
            'CloudWatch Alarms',
            'CodeDeploy (Blue/Green Deployments)'
          ]
        },
        'Digital Ocean'
      ]
    },
    {
      icon: <FaWrench />,
      title: 'Tools',
      list: ['Git', 'Docker', 'Jira', 'Azure Data Studio', 'Linux/macOS CLI']
    },
    {
      icon: <FaBrain />,
      title: 'Concepts',
      list: ['Microservices', 'API Design', 'TDD', 'CI/CD', 'Design Patterns', 'Security']
    },
    {
      icon: <FaUserTie />,
      title: 'Soft Skills',
      list: ['Fast Learner', 'Team Collaboration', 'Problem Solving', 'Adaptability']
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
                  typeof item === 'string' ? (
                    <li key={idx}>{item}</li>
                  ) : (
                    <li key={idx}>
                      <strong>{item.name}</strong>
                      <ul>
                        {item.sublist.map((sub, subIdx) => (
                          <li key={subIdx}>{sub}</li>
                        ))}
                      </ul>
                    </li>
                  )
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
