'use client';

import { motion } from 'framer-motion';
import ParticleSystem from '@/app/components/ui/particles/ParticleSystem';
import GeometricShapes from '@/app/components/3d/geometric-shapes/GeometricShapes';
import TypewriterEffect from '@/app/components/ui/typewriter/TypewriterEffect';

export default function HeroSection() {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Elements */}
      <ParticleSystem />
      <GeometricShapes />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-light">
            Anglebert Shumbusho Ishimwe
          </h1>
          
          <h2 className="text-xl md:text-2xl text-secondary font-mono">
            Backend-Focused Full Stack Developer
          </h2>

          <div className="h-24 md:h-32">
            <TypewriterEffect
              text="Building Scalable Digital Infrastructures"
              className="text-2xl md:text-4xl font-accent text-accent-emerald"
              speed={50}
              delay={1000}
            />
          </div>

          <p className="text-lg md:text-xl text-neutral-light/80 max-w-2xl mx-auto">
            Specializing in financial systems, API integrations, 
            and high-performance backend solutions.
          </p>

          <div className="flex gap-4 justify-center mt-8">
            <motion.a
              href="#projects"
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary-light transition-all duration-300 ease-in-out"
            >
              Explore My Work
            </motion.a>
            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border-2 border-secondary text-secondary font-semibold rounded-lg hover:bg-secondary/10 transition-all duration-300 ease-in-out"
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 