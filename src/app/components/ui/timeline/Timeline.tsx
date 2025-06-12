'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: 'education' | 'work';
}

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-secondary/20" />

      <div className="space-y-6 md:space-y-8">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-12"
            onMouseEnter={() => !isMobile && setHoveredIndex(index)}
            onMouseLeave={() => !isMobile && setHoveredIndex(null)}
          >
            {/* Timeline dot */}
            <div className="absolute left-3 top-1.5 w-3 h-3 rounded-full bg-secondary" />

            {/* Year */}
            <motion.div
              animate={{
                scale: hoveredIndex === index ? 1.1 : 1,
                color: hoveredIndex === index ? '#00D4FF' : '#F8FAFC'
              }}
              className="text-sm font-mono text-neutral-light/60 mb-1"
            >
              {event.year}
            </motion.div>

            {/* Title */}
            <motion.h4
              animate={{
                color: hoveredIndex === index ? '#00D4FF' : '#F8FAFC'
              }}
              className="text-base md:text-lg font-bold text-neutral-light mb-2"
            >
              {event.title}
            </motion.h4>

            {/* Description */}
            <motion.div
              initial={{ height: isMobile ? 'auto' : 0, opacity: isMobile ? 1 : 0 }}
              animate={{
                height: isMobile || hoveredIndex === index ? 'auto' : 0,
                opacity: isMobile || hoveredIndex === index ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-sm text-neutral-light/80">
                {event.description}
              </p>
            </motion.div>

            {/* Type indicator */}
            <motion.div
              animate={{
                backgroundColor: event.type === 'education' ? '#10B981' : '#F59E0B',
                scale: hoveredIndex === index ? 1.1 : 1
              }}
              className="absolute right-0 top-1.5 px-2 py-1 rounded-full text-xs font-medium"
            >
              {event.type === 'education' ? 'Education' : 'Work'}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 