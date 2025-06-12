'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import ParticleSystem from '@/app/components/ui/particles/ParticleSystem';
import GeometricShapes from '@/app/components/3d/geometric-shapes/GeometricShapes';

interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  skills: string[];
  achievements: string[];
}

const experiences: Experience[] = [
  {
    id: 'softpi',
    company: 'Softpi-Group',
    role: 'Back End Developer',
    location: 'Kigali, Rwanda (Remote)',
    period: 'Jan 2025 - present',
    description: 'Soft Pi is a leading software development firm based in Rwanda. We specialize in delivering innovative and reliable software solutions to help businesses solve complex problems and achieve their goals.',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST API', 'Docker', 'JWT', 'Git', 'Kubernetes'],
    achievements: [
      'Developed secure backend infrastructure for RINDA, an app that allows users to register, manage, and protect their devices online',
      'Implemented authentication, device tracking, and encrypted user data storage using Node.js and MongoDB',
      'Ensured high availability and data security with containerized deployment (Docker) and role-based access control',
      'Collaborated cross-functionally with design and mobile teams to maintain agile workflows and feature delivery'
    ]
  },
  {
    id: 'inhills',
    company: 'Inhills Technology Ltd',
    role: 'Mobile App Lead Developer',
    location: 'Kigali, Rwanda (Remote)',
    period: 'Jan 2025 - present',
    description: 'Inhills Technology is a company that develops innovative software solutions, including cloud-based systems and applications tailored to various industries.',
    skills: ['Flutter', 'Dart', 'API Integrations', 'Mobile Architecture'],
    achievements: [
      'Leading the development of the INJONGE POS mobile app, a cross-platform solution designed to enhance business accessibility and tax compliance',
      'Utilizing Flutter to create a scalable, user-friendly mobile application that integrates seamlessly with RRA APIs',
      'Developing core features such as inventory management, sales tracking, and financial reporting to support real-time, on-the-go business operations',
      'Ensuring the mobile app aligns with the modular architecture of the web system, supporting additional functionalities like CRM, HRM, and project management'
    ]
  },
  {
    id: 'inhills-fullstack',
    company: 'Inhills Technology Ltd',
    role: 'Fullstack Developer',
    location: 'Kigali, Rwanda (Remote)',
    period: 'July 2024 - present',
    description: 'Leading the development of INJONGE POS, a cloud-based point-of-sale system integrated with Rwanda Revenue Authority (RRA) APIs.',
    skills: ['Laravel', 'MySQL', 'jQuery', 'RRA APIs', 'Bootstrap'],
    achievements: [
      'Working extensively with Laravel, MySQL, and jQuery to build a scalable solution that helps businesses streamline their billing processes and ensure tax compliance',
      'Spearheading the integration of inventory management, sales tracking, and financial reporting functionalities into the INJONGE POS system',
      'Collaborating with a cross-functional team to enhance the system\'s modular approach, incorporating additional features like CRM, HRM, and project management',
      'Ensuring the system complies with RRA standards and provides cloud-based real-time access to business operations'
    ]
  },
  {
    id: 'coseke',
    company: 'COSEKE (R) Limited',
    role: 'Software Engineer',
    location: 'Kigali, Rwanda',
    period: 'Feb 2024 - August 2024',
    description: 'COSEKE (R) Limited is a leading provider of banking and financial software solutions, focusing on enhancing operational efficiency and security in the financial sector.',
    skills: ['Laravel', 'React.js', 'Spring Boot', 'MySQL', 'Flutterwave'],
    achievements: [
      'Contributed to backend development for large-scale projects, including core banking systems, document management, and e-commerce solutions',
      'Utilized Laravel, Spring Boot, and MySQL to implement business logic and manage large datasets efficiently',
      'Integrated third-party services such as payment gateways for secure online transactions',
      'Developed and optimized APIs to ensure cross-platform compatibility and efficient data handling'
    ]
  },
  {
    id: 'kiac',
    company: 'Kiac',
    role: 'Backend Developer',
    location: 'Kigali, Rwanda (Remote)',
    period: 'June 2022 – June 2023',
    description: 'Kiac is a dynamic tech company that creates innovative online solutions for educational institutions.',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'RESTful APIs'],
    achievements: [
      'Led the development of a comprehensive online education platform, handling front and backend responsibilities',
      'Designed and implemented features for managing students, courses, teachers, and reports',
      'Developed RESTful APIs and backend services using Node.js and Express.js, as well as frontend interfaces using React.js',
      'Integrated authentication and authorization mechanisms to ensure secure access to platform resources',
      'Implemented real-time communication features such as chat and notifications for improved user engagement'
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative min-h-screen py-12 md:py-20 bg-primary">
      {/* Background Elements */}
      <ParticleSystem />
      <GeometricShapes />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-light mb-4">
            Professional Journey
          </h2>
          <p className="text-lg md:text-xl text-neutral-light/80 max-w-2xl mx-auto">
            A timeline of my professional experience, showcasing my growth and expertise in software development.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-secondary/20" />

          {/* Experience items */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-secondary" />

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mb-4 md:mb-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-primary/20 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-secondary/10"
                  >
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-neutral-light mb-2">{experience.role}</h3>
                        <div className="flex items-center gap-2 text-secondary mb-1">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          <span className="font-medium">{experience.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-light/60">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>{experience.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-neutral-light/60 bg-primary/30 px-4 py-2 rounded-lg">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="font-medium">{experience.period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-light/80 mb-6">{experience.description}</p>

                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-neutral-light mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Key Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <motion.span
                            key={skill}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1.5 bg-secondary/20 rounded-full text-xs font-bold text-secondary border border-secondary/30"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-light mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-2 text-neutral-light/80"
                          >
                            <svg className="w-4 h-4 text-secondary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 