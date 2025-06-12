'use client';

import { motion } from 'framer-motion';

export default function PlaceholderProfile() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-primary-dark">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-6xl"
      >
        👨‍💻
      </motion.div>
    </div>
  );
} 