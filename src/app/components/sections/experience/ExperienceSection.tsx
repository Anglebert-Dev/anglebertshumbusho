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
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

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
                    className="bg-primary/20 backdrop-blur-sm rounded-lg p-4 md:p-6 shadow-lg border border-secondary/10"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-neutral-light">{experience.role}</h3>
                        <p className="text-secondary text-sm md:text-base">{experience.company}</p>
                        <p className="text-neutral-light/60 text-sm md:text-base">{experience.location}</p>
                      </div>
                      <span className="text-sm text-neutral-light/60 whitespace-nowrap">{experience.period}</span>
                    </div>

                    <p className="text-sm md:text-base text-neutral-light/80 mb-4">{experience.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-neutral-light mb-2">Key Skills:</h4>
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

                    <div>
                      <h4 className="text-sm font-semibold text-neutral-light mb-2">Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-neutral-light/80">
                        {experience.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="mb-1"
                          >
                            {achievement}
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