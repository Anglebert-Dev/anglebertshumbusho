'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { useState } from 'react';

interface ProjectRequirements {
  type: 'web' | 'mobile' | 'desktop' | 'api' | 'other';
  complexity: 'simple' | 'moderate' | 'complex';
  features: string[];
  timeline: 'urgent' | 'normal' | 'flexible';
}

const projectTypes = [
  { id: 'web', label: 'Web Application', icon: '🌐' },
  { id: 'mobile', label: 'Mobile App', icon: '📱' },
  { id: 'desktop', label: 'Desktop Software', icon: '💻' },
  { id: 'api', label: 'API Development', icon: '🔌' },
  { id: 'other', label: 'Other', icon: '✨' },
];

const complexityLevels = [
  { id: 'simple', label: 'Simple', description: 'Basic features, standard UI' },
  { id: 'moderate', label: 'Moderate', description: 'Advanced features, custom UI' },
  { id: 'complex', label: 'Complex', description: 'Enterprise features, complex architecture' },
];

const timelineOptions = [
  { id: 'urgent', label: 'Urgent', description: '1-2 weeks' },
  { id: 'normal', label: 'Normal', description: '2-4 weeks' },
  { id: 'flexible', label: 'Flexible', description: '4+ weeks' },
];

const commonFeatures = [
  { id: 'auth', label: 'Authentication', icon: '🔐' },
  { id: 'database', label: 'Database Integration', icon: '🗄️' },
  { id: 'api', label: 'API Integration', icon: '🔄' },
  { id: 'payment', label: 'Payment Processing', icon: '💳' },
  { id: 'realtime', label: 'Real-time Features', icon: '⚡' },
  { id: 'analytics', label: 'Analytics', icon: '📊' },
  { id: 'admin', label: 'Admin Dashboard', icon: '👨‍💼' },
  { id: 'responsive', label: 'Responsive Design', icon: '📱' },
];

interface ProjectCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectCalculator({ isOpen, onClose }: ProjectCalculatorProps) {
  const [requirements, setRequirements] = useState<ProjectRequirements>({
    type: 'web',
    complexity: 'moderate',
    features: [],
    timeline: 'normal',
  });
  const [estimate, setEstimate] = useState<{
    timeline: string;
    complexity: string;
    features: string[];
  } | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const calculateEstimate = () => {
    let baseTimeline = 2;
    switch (requirements.type) {
      case 'web': baseTimeline = 2; break;
      case 'mobile': baseTimeline = 3; break;
      case 'desktop': baseTimeline = 4; break;
      case 'api': baseTimeline = 2; break;
      case 'other': baseTimeline = 3; break;
    }
    switch (requirements.complexity) {
      case 'simple': baseTimeline *= 1; break;
      case 'moderate': baseTimeline *= 1.5; break;
      case 'complex': baseTimeline *= 2; break;
    }
    switch (requirements.timeline) {
      case 'urgent': baseTimeline *= 0.7; break;
      case 'normal': baseTimeline *= 1; break;
      case 'flexible': baseTimeline *= 1.3; break;
    }
    const featureMultiplier = 1 + (requirements.features.length * 0.1);
    baseTimeline *= featureMultiplier;
    const finalTimeline = Math.ceil(baseTimeline);
    setEstimate({
      timeline: `${finalTimeline} week${finalTimeline > 1 ? 's' : ''}`,
      complexity: requirements.complexity,
      features: requirements.features,
    });
  };

  const toggleFeature = (featureId: string) => {
    setRequirements(prev => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter(id => id !== featureId)
        : [...prev.features, featureId],
    }));
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/95 backdrop-blur-md p-2 md:p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative bg-gradient-to-br from-primary/40 to-primary/20 backdrop-blur-sm rounded-2xl p-4 md:p-8 shadow-2xl border border-secondary/10 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-neutral-light">Project Calculator</h3>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="text-neutral-light/60 hover:text-neutral-light transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </div>
          <div className="space-y-6">
            {/* Project Type */}
            <div>
              <label className="block text-neutral-light font-medium mb-3">Project Type</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {projectTypes.map((type) => {
                  const selected = requirements.type === type.id;
                  return (
                    <motion.button
                      key={type.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setRequirements(prev => ({ ...prev, type: type.id as ProjectRequirements['type'] }))}
                      className={`p-3 rounded-xl border transition-all duration-300 flex flex-col items-center justify-center
                        ${selected
                          ? 'bg-secondary/30 border-2 border-secondary text-secondary shadow-xl shadow-secondary/30 scale-105'
                          : 'bg-primary/30 border-secondary/20 text-neutral-light/60 hover:bg-primary/40 opacity-70 hover:opacity-100'}
                      `}
                    >
                      <span className={`text-2xl mb-1 block ${selected ? 'text-secondary' : 'text-neutral-light/60'}`}>{type.icon}</span>
                      <span className={`text-sm font-bold ${selected ? 'text-secondary' : 'text-neutral-light/70'}`}>{type.label}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
            {/* Complexity */}
            <div>
              <label className="block text-neutral-light font-medium mb-3">Project Complexity</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {complexityLevels.map((level) => {
                  const selected = requirements.complexity === level.id;
                  return (
                    <motion.button
                      key={level.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setRequirements(prev => ({ ...prev, complexity: level.id as ProjectRequirements['complexity'] }))}
                      className={`p-4 rounded-xl border transition-all duration-300 text-left flex flex-col
                        ${selected
                          ? 'bg-secondary/30 border-2 border-secondary text-secondary shadow-xl shadow-secondary/30 scale-105'
                          : 'bg-primary/30 border-secondary/20 text-neutral-light/60 hover:bg-primary/40 opacity-70 hover:opacity-100'}
                      `}
                    >
                      <span className={`font-bold block mb-1 ${selected ? 'text-secondary' : 'text-neutral-light/70'}`}>{level.label}</span>
                      <span className={`text-sm opacity-80 ${selected ? 'text-secondary/80' : 'text-neutral-light/50'}`}>{level.description}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
            {/* Features */}
            <div>
              <label className="block text-neutral-light font-medium mb-3">Required Features</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {commonFeatures.map((feature) => {
                  const selected = requirements.features.includes(feature.id);
                  return (
                    <motion.button
                      key={feature.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleFeature(feature.id)}
                      className={`p-3 rounded-xl border transition-all duration-300 flex flex-col items-center justify-center
                        ${selected
                          ? 'bg-secondary/30 border-2 border-secondary text-secondary shadow-xl shadow-secondary/30 scale-105'
                          : 'bg-primary/30 border-secondary/20 text-neutral-light/60 hover:bg-primary/40 opacity-70 hover:opacity-100'}
                      `}
                    >
                      <span className={`text-2xl mb-1 block ${selected ? 'text-secondary' : 'text-neutral-light/60'}`}>{feature.icon}</span>
                      <span className={`text-sm font-bold ${selected ? 'text-secondary' : 'text-neutral-light/70'}`}>{feature.label}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
            {/* Timeline Preference */}
            <div>
              <label className="block text-neutral-light font-medium mb-3">Timeline Preference</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {timelineOptions.map((option) => {
                  const selected = requirements.timeline === option.id;
                  return (
                    <motion.button
                      key={option.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setRequirements(prev => ({ ...prev, timeline: option.id as ProjectRequirements['timeline'] }))}
                      className={`p-4 rounded-xl border transition-all duration-300 text-left flex flex-col
                        ${selected
                          ? 'bg-secondary/30 border-2 border-secondary text-secondary shadow-xl shadow-secondary/30 scale-105'
                          : 'bg-primary/30 border-secondary/20 text-neutral-light/60 hover:bg-primary/40 opacity-70 hover:opacity-100'}
                      `}
                    >
                      <span className={`font-bold block mb-1 ${selected ? 'text-secondary' : 'text-neutral-light/70'}`}>{option.label}</span>
                      <span className={`text-sm opacity-80 ${selected ? 'text-secondary/80' : 'text-neutral-light/50'}`}>{option.description}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
            {/* Calculate Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={calculateEstimate}
              className="w-full bg-gradient-to-r from-secondary to-secondary/80 text-primary font-semibold py-3 px-6 rounded-xl hover:from-secondary/90 hover:to-secondary/70 transition-all duration-300 shadow-lg shadow-secondary/20 mt-2"
            >
              Calculate Estimate
            </motion.button>
            {/* Estimate Result */}
            {estimate && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-primary/30 rounded-xl p-6 border border-secondary/20 shadow-lg"
              >
                <h4 className="text-xl font-semibold text-neutral-light mb-4">Estimated Timeline</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-light/80">Timeline:</span>
                    <span className="text-secondary font-medium">{estimate.timeline}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-light/80">Complexity:</span>
                    <span className="text-secondary font-medium capitalize">{estimate.complexity}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-light/80">Selected Features:</span>
                    <span className="text-secondary font-medium">{estimate.features.length}</span>
                  </div>
                </div>
                <p className="text-sm text-neutral-light/60 mt-4">
                  Note: This is a rough estimate. The actual timeline may vary based on specific requirements and scope changes.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
} 