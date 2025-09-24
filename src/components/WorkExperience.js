import React from 'react';
import { motion } from 'framer-motion';
import './WorkExperience.css';

const WorkExperience = () => {
  const experiences = [
    {
      company: 'AirRetailer',
      role: 'Backend Software Engineer (.NET / Spring Boot)',
      location: 'Dubai, UAE',
      duration: 'Mar 2025 – Present',
      responsibilities: [
        'Owned and stabilized 2 IATA NDC supplier integrations; reduced integration error rate by ~35% across Offer/Order flows.',
        'Implemented resilient NDC adapters (retry/backoff, idempotency keys) cutting booking-flow timeouts by ~28%.',
        'Introduced structured logging and tracing (correlation IDs) reducing incident MTTR by ~40%.',
      ],
      stack: 'Spring Boot, Java 17, REST, Redis, SQL, GitLab',
    },
    {
      company: 'FCamara',
      role: 'Backend Software Engineer (.NET / React)',
      location: 'Dubai, UAE',
      duration: 'Nov 2024 – Mar 2025',
      responsibilities: [
        'Introduced TDD; increased unit-test coverage by ~40% and reduced escaped defects.',
        'Centralized secrets with Azure Key Vault and removed hard-coded credentials; passed internal security review.',
        'Automated infrastructure with ARM/Bicep; reduced manual provisioning ~50% and ensured environment parity.',
        'Owned CI/CD in Azure DevOps (multi-stage pipelines, approvals, gated builds); cut lead time for changes by ~30%.',
      ],
      stack: '.NET 8, ASP.NET Core, EF Core, SQL Server, Azure DevOps, ARM/Bicep, Serilog, App Insights, React',
    },
    {
      company: 'Wizme',
      role: 'Backend Software Developer (.NET)',
      location: 'Remote / London, UK',
      duration: 'Oct 2021 – Oct 2024',
      responsibilities: [
        'Designed and shipped the Venues Calendar Tracker microservice, improving conflict-resolution SLA by ~90%.',
        'Hardened APIs (authZ scopes, validation, rate limits) and reduced on-call noise by ~25%.',
        'Established observability (Serilog + Application Insights) and Azure DevOps deployments; improved MTTR and change failure rate.',
        'Instituted code-review practices and branch policies; reduced PR cycle time by ~20%.',
      ],
      stack: 'ASP.NET Core, EF Core, SQL Server, Azure DevOps, Serilog, Application Insights',
    },
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
        <h2>Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <h3>{exp.role} — <span className="company">{exp.company}</span></h3>
              <p className="meta">{exp.location} — {exp.duration}</p>
              <ul>
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="stack"><strong>Stack:</strong> {exp.stack}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WorkExperience;
