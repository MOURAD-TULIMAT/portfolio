import React from 'react';
import { motion } from 'framer-motion';
import './WorkExperience.css';

const WorkExperience = () => {
    const experiences = [
        {
            company: 'AirRetailer',
            role: 'Backend Software Engineer (Onsite)',
            location: 'Dubai, UAE',
            duration: 'Mar 2025 – Present',
            responsibilities: [
                'Built and maintained 20+ .NET Core and Spring Boot microservices for airline/hotel/cars Offer and Order Management.',
                'Integrated 12 suppliers using complex IATA-based SOAP/XML APIs.',
                'Applied clean code principles and design patterns to optimize orchestration.',
                'Worked in Agile squads, cross-functionally communicating with a 5-squad team to enhance airline capabilities.',
                'Learned Java Spring Boot basics within 2 weeks.'
            ]
        },
        {
            company: 'FCamara',
            role: 'Backend Software Engineer (Onsite)',
            location: 'Dubai, UAE',
            duration: 'Nov 2024 – Mar 2025',
            responsibilities: [
                'Implemented Test-Driven Development (TDD) to improve code quality and reliability.',
                'Leveraged Azure Key Vault for secure storage and retrieval of project secrets.',
                'Utilized ARM templates to provision and manage Azure infrastructure components.',
                'Implemented Azure Blob Storage to store and retrieve PDF files generated using IronPDF.',
                'Contributed to a React/Next.js project by updating designs and adding new sections.',
                'Gained banking domain expertise developing financial systems with stringent security and compliance.',
                'Engaged with stakeholders to gather technical and business requirements.'
            ]
        },
        {
            company: 'Wizme',
            role: 'Backend Software Engineer (Remote)',
            location: 'London, UK',
            duration: 'Oct 2021 – Oct 2024',
            responsibilities: [
                'Developed asynchronous background services with Java Spring Boot and SQL Server, reducing event processing time by 30%.',
                'Increased productivity for hotel and venue sales teams by 60% by creating the Diary Bot, automating scheduling with Spring Boot, MSSQL, and custom algorithms.',
                'Designed SQL-based reporting tools using Dependency Injection and the Factory Pattern, supporting Excel and JSON formats.',
                'Engineered an alert notification system with SendGrid and Strategy Pattern, improving customer response rate by 30%.',
                'Automated document processing with a PDF generation tool.',
                'Applied SOLID principles and CI/CD practices, enhancing scalability.',
                'Leveraged competitive programming experience to reduce query response times by up to 40%.',
                'Collaborated with a team of professionals using Agile methodology to streamline platform functionality.'
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
