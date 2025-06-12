'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const activities = [
  { time: '08:00', activity: 'Morning Standup', icon: '👋' },
  { time: '09:00', activity: 'Code Review & Planning', icon: '📋' },
  { time: '10:00', activity: 'Backend Development', icon: '💻' },
  { time: '12:00', activity: 'Lunch Break', icon: '🍱' },
  { time: '13:00', activity: 'API Integration', icon: '🔌' },
  { time: '14:00', activity: 'Database Optimization', icon: '🗄️' },
  { time: '15:00', activity: 'Testing & Debugging', icon: '🐛' },
  { time: '16:00', activity: 'Documentation', icon: '📝' },
  { time: '17:00', activity: 'Team Sync', icon: '👥' }
];

export default function DayInLife() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activities.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full">
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-secondary/20" />

      <div className="relative h-full">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{
              opacity: currentIndex === index ? 1 : 0.3,
              x: currentIndex === index ? 0 : index % 2 === 0 ? -20 : 20,
              scale: currentIndex === index ? 1 : 0.9
            }}
            transition={{ duration: 0.5 }}
            className={`absolute w-1/2 ${
              index % 2 === 0 ? 'left-0' : 'right-0'
            }`}
            style={{ top: `${(index * 100) / (activities.length - 1)}%` }}
          >
            <div
              className={`flex items-center gap-4 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <motion.div
                animate={{
                  scale: currentIndex === index ? 1.2 : 1,
                  backgroundColor: currentIndex === index ? '#00D4FF' : '#1A2B4D'
                }}
                className="w-8 h-8 rounded-full flex items-center justify-center text-xl"
              >
                {activity.icon}
              </motion.div>
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? 'items-start' : 'items-end'
                }`}
              >
                <motion.div
                  animate={{
                    color: currentIndex === index ? '#00D4FF' : '#F8FAFC'
                  }}
                  className="text-sm font-mono"
                >
                  {activity.time}
                </motion.div>
                <motion.div
                  animate={{
                    color: currentIndex === index ? '#F8FAFC' : '#F8FAFC80'
                  }}
                  className="font-medium"
                >
                  {activity.activity}
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 