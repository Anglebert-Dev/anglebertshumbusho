'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SkillBars, { Skill } from '@/app/components/ui/skill-bars/SkillBars';
import Timeline from '@/app/components/ui/timeline/Timeline';
import DayInLife from '@/app/components/animations/day-in-life/DayInLife';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: 'education' | 'work';
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '2025-Present',
    title: 'Back End Developer at Softpi-Group',
    description: 'Leading development of RINDA - Secure Device Management App. Skills: Node.js, Express.js, MongoDB, REST API, Docker, JWT, Git, Kubernetes',
    type: 'work'
  },
  {
    year: '2024-Present',
    title: 'Mobile App Lead Developer at Inhills Technology Ltd',
    description: 'Leading INJONGE POS mobile app development. Skills: Flutter, Dart, API Integrations, Mobile Architecture',
    type: 'work'
  },
  {
    year: '2024-Present',
    title: 'Fullstack Developer at Inhills Technology Ltd',
    description: 'Leading INJONGE POS development. Skills: Laravel, MySQL, jQuery, RRA APIs, Bootstrap',
    type: 'work'
  },
  {
    year: '2024',
    title: 'Software Engineer at COSEKE (R) Limited',
    description: 'Backend development for banking systems. Skills: Laravel, React.js, Spring Boot, MySQL, Flutterwave',
    type: 'work'
  },
  {
    year: '2022-2023',
    title: 'Backend Developer at Kiac',
    description: 'Led development of online education platform. Skills: Node.js, Express.js, MongoDB, MySQL, RESTful APIs',
    type: 'work'
  },
  {
    year: '2024-2027',
    title: 'African Leadership University',
    description: 'Bachelor\'s in Software Engineering - Kigali, Rwanda',
    type: 'education'
  },
  {
    year: '2020-2023',
    title: 'Rwanda Coding Academy',
    description: 'Advanced High School Diploma - Nyabihu, Rwanda',
    type: 'education'
  }
];

const skills: Skill[] = [
  { name: 'Backend Development', level: 95, color: 'bg-blue-500' },
  { name: 'Database Design', level: 90, color: 'bg-green-500' },
  { name: 'API Development', level: 92, color: 'bg-purple-500' },
  { name: 'System Architecture', level: 88, color: 'bg-yellow-500' },
  { name: 'Mobile Development', level: 85, color: 'bg-red-500' }
];

const interests = [
  { name: 'Reading', icon: '📚' },
  { name: 'TED Talks', icon: '🎤' },
  { name: 'Music', icon: '🎵' },
  { name: 'Football', icon: '⚽' },
  { name: 'Psychology', icon: '🧠' },
  { name: 'Movies', icon: '🎬' }
];

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-20 bg-primary-dark">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          The Developer Behind the Code
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Panel - Technical Persona */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden shadow-lg">
              <Image
                src="/assets/images/_DSC6196[1].jpg"
                alt="Professional Photo"
                fill
                className="object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            <div className="bg-primary/20 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
              <SkillBars skills={skills} />
            </div>

            <div className="bg-primary/20 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Professional Journey</h3>
              <Timeline events={timelineEvents} />
            </div>
          </motion.div>

          {/* Right Panel - Human Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-primary/20 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Development Philosophy</h3>
              <p className="text-neutral-light leading-relaxed">
                I am passionate about building software that not only solves problems but also creates meaningful
                experiences. My approach combines technical excellence with a deep understanding of
                user needs, ensuring that every line of code serves a purpose. I specialize in financial systems,
                transaction management, and API integrations, creating secure and efficient solutions that ensure
                system integrity and scalability.
              </p>
            </div>

            <div className="bg-primary/20 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Interests & Hobbies</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 p-4 bg-primary/10 rounded-lg"
                  >
                    <span className="text-2xl">{interest.icon}</span>
                    <span className="font-medium">{interest.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-primary/20 p-6 rounded-lg shadow-lg h-[400px]">
              <h3 className="text-2xl font-semibold mb-4">Day in My Life</h3>
              <DayInLife />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 