'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillBarsProps {
  skills: Skill[];
}

export default function SkillBars({ skills }: SkillBarsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="space-y-6">
      {skills.map((skill, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-neutral-light font-medium">{skill.name}</span>
            <span className="text-neutral-light/60">{skill.level}%</span>
          </div>
          <div className="h-2 bg-primary rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
              transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
              className={`h-full ${skill.color} rounded-full`}
            />
          </div>
        </div>
      ))}
    </div>
  );
} 