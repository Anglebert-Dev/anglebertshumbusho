'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import '@/app/styles/skills.css';

interface Technology {
  name: string;
  category: 'backend' | 'database' | 'frontend' | 'devops' | 'specialized';
  proficiency: number;
  projects: string[];
  icon: string;
}

const technologies: Technology[] = [
  // Backend Mastery
  {
    name: 'Laravel',
    category: 'backend',
    proficiency: 95,
    projects: ['INJONGE POS', 'Agency Business Management System'],
    icon: '⚡'
  },
  {
    name: 'Spring Boot',
    category: 'backend',
    proficiency: 90,
    projects: ['COSEKE Banking Systems'],
    icon: '🌱'
  },
  {
    name: 'Node.js',
    category: 'backend',
    proficiency: 92,
    projects: ['RINDA', 'Kiac Education Platform'],
    icon: '🟢'
  },
  {
    name: 'Python',
    category: 'backend',
    proficiency: 85,
    projects: ['FastAPI Projects'],
    icon: '🐍'
  },

  // Database Systems
  {
    name: 'MySQL',
    category: 'database',
    proficiency: 95,
    projects: ['INJONGE POS', 'Agency Business Management'],
    icon: '🐬'
  },
  {
    name: 'PostgreSQL',
    category: 'database',
    proficiency: 88,
    projects: ['Financial Systems'],
    icon: '🐘'
  },
  {
    name: 'MongoDB',
    category: 'database',
    proficiency: 90,
    projects: ['RINDA', 'Kiac Platform'],
    icon: '🍃'
  },

  // Frontend Technologies
  {
    name: 'React.js',
    category: 'frontend',
    proficiency: 90,
    projects: ['COSEKE Systems', 'Portfolio Website'],
    icon: '⚛️'
  },
  {
    name: 'Flutter',
    category: 'frontend',
    proficiency: 92,
    projects: ['INJONGE POS Mobile'],
    icon: '🎯'
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    proficiency: 88,
    projects: ['RINDA', 'Modern Web Apps'],
    icon: '📘'
  },

  // DevOps & Architecture
  {
    name: 'Docker',
    category: 'devops',
    proficiency: 90,
    projects: ['RINDA', 'Microservices'],
    icon: '🐳'
  },
  {
    name: 'Kubernetes',
    category: 'devops',
    proficiency: 85,
    projects: ['RINDA Deployment'],
    icon: '⚓'
  },
  {
    name: 'Microservices',
    category: 'devops',
    proficiency: 88,
    projects: ['Financial Systems'],
    icon: '🔧'
  },

  // Specialized
  {
    name: 'Financial Systems',
    category: 'specialized',
    proficiency: 95,
    projects: ['INJONGE POS', 'Agency Management'],
    icon: '💰'
  },
  {
    name: 'API Integration',
    category: 'specialized',
    proficiency: 93,
    projects: ['RRA APIs', 'Payment Gateways'],
    icon: '🔌'
  },
  {
    name: 'TDD',
    category: 'specialized',
    proficiency: 90,
    projects: ['All Major Projects'],
    icon: '✅'
  }
];

const categoryColors = {
  backend: 'from-blue-500 to-blue-700',
  database: 'from-green-500 to-green-700',
  frontend: 'from-purple-500 to-purple-700',
  devops: 'from-yellow-500 to-yellow-700',
  specialized: 'from-red-500 to-red-700'
};

const categoryLabels = {
  backend: 'Backend Mastery',
  database: 'Database Systems',
  frontend: 'Frontend Technologies',
  devops: 'DevOps & Architecture',
  specialized: 'Specialized Skills'
};

export default function SkillsSection() {
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="min-h-screen py-20 bg-primary-dark">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Arsenal of Technologies
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Panel - Skill Constellation */}
          <div className="relative h-[600px] bg-primary/20 rounded-lg p-8">
            <div className="grid grid-cols-3 gap-6">
              {Object.entries(categoryLabels).map(([category, label]) => (
                <motion.div
                  key={category}
                  className="relative"
                  onHoverStart={() => setHoveredCategory(category)}
                  onHoverEnd={() => setHoveredCategory(null)}
                >
                  <motion.div
                    animate={{
                      scale: hoveredCategory === category ? 1.1 : 1,
                      opacity: hoveredCategory === null || hoveredCategory === category ? 1 : 0.3
                    }}
                    className={`p-4 rounded-lg bg-gradient-to-br ${categoryColors[category as keyof typeof categoryColors]} 
                      text-white font-semibold text-center cursor-pointer`}
                  >
                    {label}
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-4 gap-4">
              {technologies.map((tech) => (
                <motion.div
                  key={tech.name}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.1, rotateY: 180 }}
                  onClick={() => setSelectedTech(tech)}
                  className={`relative h-24 perspective-1000 ${
                    hoveredCategory && hoveredCategory !== tech.category ? 'opacity-30' : ''
                  }`}
                >
                  <motion.div
                    className="absolute w-full h-full backface-hidden"
                    animate={{
                      rotateY: selectedTech?.name === tech.name ? 180 : 0
                    }}
                  >
                    <div className={`w-full h-full rounded-lg bg-gradient-to-br ${
                      categoryColors[tech.category]
                    } flex items-center justify-center text-2xl`}>
                      {tech.icon}
                    </div>
                  </motion.div>
                  <motion.div
                    className="absolute w-full h-full backface-hidden rotate-y-180"
                    animate={{
                      rotateY: selectedTech?.name === tech.name ? 0 : 180
                    }}
                  >
                    <div className="w-full h-full rounded-lg bg-primary p-4">
                      <h4 className="text-sm font-bold text-neutral-light">{tech.name}</h4>
                      <div className="w-full h-1 bg-neutral-light/20 rounded-full mt-2">
                        <div
                          className="h-full bg-secondary rounded-full"
                          style={{ width: `${tech.proficiency}%` }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Panel - Technology Details */}
          <div className="bg-primary/20 rounded-lg p-8">
            {selectedTech ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{selectedTech.icon}</span>
                  <h3 className="text-2xl font-bold text-neutral-light">{selectedTech.name}</h3>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-neutral-light">Proficiency</h4>
                  <div className="w-full h-2 bg-neutral-light/20 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedTech.proficiency}%` }}
                      className="h-full bg-secondary rounded-full"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-neutral-light">Projects</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedTech.projects.map((project, index) => (
                      <li key={index} className="text-neutral-light/80">{project}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ) : (
              <div className="h-full flex items-center justify-center">
                <p className="text-neutral-light/60 text-center">
                  Select a technology to view detailed information
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 