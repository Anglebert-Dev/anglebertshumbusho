'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  category: 'pos' | 'security' | 'financial' | 'education' | 'ngo';
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 'pos-system',
    title: 'Point of Sale System',
    description: 'Led development of a cloud-based point-of-sale system with tax authority integration. Created both web and mobile applications to enhance business accessibility and tax compliance.',
    technologies: ['Laravel', 'MySQL', 'jQuery', 'REST APIs', 'Bootstrap', 'Flutter', 'Dart'],
    features: [
      'Real-time inventory management',
      'Multi-location business support',
      'Tax compliance automation',
      'Financial reporting',
      'CRM and HRM integration',
      'Cross-platform mobile app'
    ],
    category: 'pos',
    liveUrl: 'https://injonge.rw'
  },
  {
    id: 'device-management',
    title: 'Device Management System',
    description: 'Developed secure backend infrastructure for a device management solution, implementing authentication, device tracking, and encrypted data storage with containerized deployment.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Docker', 'JWT', 'Kubernetes'],
    features: [
      'Device registration and tracking',
      'Encrypted data storage',
      'Role-based access control',
      'Containerized deployment',
      'Real-time monitoring',
      'High availability architecture'
    ],
    category: 'security',
    liveUrl: 'https://rinda.rw'
  },
  {
    id: 'transaction-system',
    title: 'Transaction Management System',
    description: 'Engineered a comprehensive transaction management system enabling tracking, processing, and management of financial transactions across multiple accounts and banks.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'RESTful API', 'Bootstrap'],
    features: [
      'Multi-source transaction tracking',
      'Dynamic account balance management',
      'Comprehensive transaction logging',
      'Multi-bank integration',
      'Real-time processing',
      'Complex transaction handling'
    ],
    category: 'financial',
    githubUrl: 'https://github.com/Anglebert-Dev/Agency-Business-Management-System'
  },
  {
    id: 'education-platform',
    title: 'Online Education Platform',
    description: 'Led development of a comprehensive online education platform, handling both front and backend responsibilities. Implemented features for managing students, courses, teachers, and reports.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'React.js'],
    features: [
      'Student and teacher management',
      'Course delivery system',
      'Real-time chat and notifications',
      'Progress tracking',
      'Resource sharing',
      'Authentication and authorization'
    ],
    category: 'education'
  },
  {
    id: 'donation-platform',
    title: 'Donation Management Platform',
    description: 'Developed a custom donation platform to streamline donation processes and track real-time transactions, ensuring scalability and performance during fundraising campaigns.',
    technologies: ['PHP', 'HTML', 'CSS', 'Payment Gateway API', 'MySQL'],
    features: [
      'Secure donation processing',
      'Real-time transaction tracking',
      'Responsive donation pages',
      'Scalable backend system',
      'Campaign management',
      'Payment gateway integration'
    ],
    category: 'ngo',
    liveUrl: 'https://www.bettereducationngo.com'
  }
];

const categoryColors = {
  pos: 'from-blue-500 to-blue-700',
  security: 'from-green-500 to-green-700',
  financial: 'from-purple-500 to-purple-700',
  education: 'from-yellow-500 to-yellow-700',
  ngo: 'from-red-500 to-red-700'
};

const categoryLabels = {
  pos: 'Point of Sale',
  security: 'Security',
  financial: 'Financial',
  education: 'Education',
  ngo: 'NGO Platform'
};

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredProjects = activeCategory
    ? projects.filter(project => project.category === activeCategory)
    : projects;

  return (
    <section id="projects" className="min-h-screen py-12 md:py-20 bg-primary-dark">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12"
        >
          Digital Solutions Portfolio
        </motion.h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-colors
              ${!activeCategory ? 'bg-secondary text-primary' : 'bg-primary/20 text-neutral-light'}`}
          >
            All Projects
          </motion.button>
          {Object.entries(categoryLabels).map(([category, label]) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-colors
                ${activeCategory === category ? 'bg-secondary text-primary' : 'bg-primary/20 text-neutral-light'}`}
            >
              {label}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-primary/20 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[project.category]} opacity-20`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white opacity-50">
                    {project.title.charAt(0)}
                  </span>
                </div>
              </div>

              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-neutral-light mb-2">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-neutral-light/80 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/30 rounded-full text-xs md:text-sm text-neutral-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-2 bg-primary/30 rounded-lg text-center text-sm md:text-base text-neutral-light hover:bg-primary/40 transition-colors"
                    >
                      View Code
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 bg-secondary rounded-lg text-center text-sm md:text-base text-primary hover:bg-secondary-light transition-colors ${project.githubUrl ? 'flex-1' : 'w-full'}`}
                    >
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 