'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import ParticleSystem from '@/app/components/ui/particles/ParticleSystem';
import GeometricShapes from '@/app/components/3d/geometric-shapes/GeometricShapes';
import ProjectCalculator from '@/app/components/ui/project-calculator/ProjectCalculator';

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
    url: 'https://linkedin.com/in/anglebert-ishimwe',
  },
  {
    name: 'GitHub',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    url: 'https://github.com/anglebert',
  },
  {
    name: 'Email',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    url: 'mailto:anglebertsh@gmail.com',
  },
  {
    name: 'Phone',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    url: 'tel:+250788888888',
  },
];

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [showAvailabilityTooltip, setShowAvailabilityTooltip] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setShowSuccess(true);
    reset();
    setIsSubmitting(false);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section id="contact" className="relative min-h-screen py-12 md:py-20 bg-primary">
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
            Let's Build Something Amazing
          </h2>
          <p className="text-lg md:text-xl text-neutral-light/80 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        {/* Flex for equal height columns on desktop */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          {/* Left Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col"
          >
            <div className="bg-gradient-to-br from-primary/40 to-primary/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-secondary/10 flex flex-col h-full justify-center">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div className="relative group">
                  <input
                    {...register('name')}
                    type="text"
                    className="w-full bg-primary/30 border border-secondary/20 rounded-xl px-4 py-3 text-neutral-light focus:outline-none focus:border-secondary transition-all duration-300 peer group-hover:border-secondary/40"
                    placeholder=" "
                  />
                  <label className="absolute left-4 top-3 text-neutral-light/60 transition-all duration-300 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-secondary peer-placeholder-shown:top-3 peer-placeholder-shown:text-base group-hover:text-neutral-light/80">
                    Your Name
                  </label>
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-6 left-0 text-sm text-red-400"
                    >
                      {errors.name.message}
                    </motion.p>
                  )}
                </div>
                {/* Email Field */}
                <div className="relative group">
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full bg-primary/30 border border-secondary/20 rounded-xl px-4 py-3 text-neutral-light focus:outline-none focus:border-secondary transition-all duration-300 peer group-hover:border-secondary/40"
                    placeholder=" "
                  />
                  <label className="absolute left-4 top-3 text-neutral-light/60 transition-all duration-300 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-secondary peer-placeholder-shown:top-3 peer-placeholder-shown:text-base group-hover:text-neutral-light/80">
                    Your Email
                  </label>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-6 left-0 text-sm text-red-400"
                    >
                      {errors.email.message}
                    </motion.p>
                  )}
                </div>
                {/* Subject Field */}
                <div className="relative group">
                  <input
                    {...register('subject')}
                    type="text"
                    className="w-full bg-primary/30 border border-secondary/20 rounded-xl px-4 py-3 text-neutral-light focus:outline-none focus:border-secondary transition-all duration-300 peer group-hover:border-secondary/40"
                    placeholder=" "
                  />
                  <label className="absolute left-4 top-3 text-neutral-light/60 transition-all duration-300 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-secondary peer-placeholder-shown:top-3 peer-placeholder-shown:text-base group-hover:text-neutral-light/80">
                    Subject
                  </label>
                  {errors.subject && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-6 left-0 text-sm text-red-400"
                    >
                      {errors.subject.message}
                    </motion.p>
                  )}
                </div>
                {/* Message Field */}
                <div className="relative group">
                  <textarea
                    {...register('message')}
                    rows={4}
                    className="w-full bg-primary/30 border border-secondary/20 rounded-xl px-4 py-3 text-neutral-light focus:outline-none focus:border-secondary transition-all duration-300 resize-none peer group-hover:border-secondary/40"
                    placeholder=" "
                  />
                  <label className="absolute left-4 top-3 text-neutral-light/60 transition-all duration-300 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-secondary peer-placeholder-shown:top-3 peer-placeholder-shown:text-base group-hover:text-neutral-light/80">
                    Your Message
                  </label>
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-6 left-0 text-sm text-red-400"
                    >
                      {errors.message.message}
                    </motion.p>
                  )}
                </div>
                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-secondary to-secondary/80 text-primary font-semibold py-3 px-6 rounded-xl hover:from-secondary/90 hover:to-secondary/70 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-secondary/20"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
                {/* Success Message */}
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-emerald-400 text-center"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Right Side - Connection Options */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col gap-8"
          >
            {/* Availability Badge */}
            <div className="flex justify-center mb-2">
              <div
                className="relative group cursor-pointer"
                onMouseEnter={() => setShowAvailabilityTooltip(true)}
                onMouseLeave={() => setShowAvailabilityTooltip(false)}
                tabIndex={0}
                aria-label="Available for new projects"
              >
                <span className="flex items-center gap-2 px-4 py-2 bg-accent-emerald text-primary font-bold rounded-full shadow-lg animate-pulse text-sm md:text-base border-2 border-accent-emerald">
                  <svg className="w-4 h-4 text-accent-emerald animate-pulse" fill="#10B981" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                  Available for new projects
                </span>
                {showAvailabilityTooltip && (
                  <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-4 py-2 bg-primary text-neutral-light text-xs rounded-lg shadow-lg z-20 whitespace-nowrap animate-fade-in">
                    I'm currently accepting new collaborations! Let's connect.
                  </span>
                )}
              </div>
            </div>
            {/* Social Links */}
            <div className="bg-gradient-to-br from-primary/40 to-primary/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-secondary/10">
              <h3 className="text-xl font-semibold text-neutral-light mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex flex-col items-center justify-center gap-2 p-4 bg-primary/30 rounded-xl text-secondary hover:bg-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20"
                  >
                    {link.icon}
                    <span className="text-sm font-medium">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
            {/* Location */}
            <div className="bg-gradient-to-br from-primary/40 to-primary/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-secondary/10">
              <h3 className="text-xl font-semibold text-neutral-light mb-6">Location</h3>
              <div className="flex items-center gap-4 text-neutral-light/80">
                <div className="p-3 bg-primary/30 rounded-xl text-secondary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Kigali, Rwanda</p>
                  <p className="text-sm">Available for remote work worldwide</p>
                </div>
              </div>
            </div>
            {/* Project Collaboration Calculator Button - always emerald green for badge, icon, border; hover for glow */}
            <motion.div
              whileHover={{ scale: 1.03, boxShadow: '0 0 0 3px, 0 8px 32px #10B98155' }}
              className="relative bg-gradient-to-br from-accent-emerald/20 to-primary/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-1xl border-1 border-accent-emerald flex flex-col items-center ring-2 ring-accent-emerald/40 ring-offset-2 ring-offset-primary/30 transition-all duration-300 cursor-pointer group"
            >
              <span className="absolute -top-4 right-4 bg-[#10B981] text-primary text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce z-10 select-none">
                Try me!
              </span>
              <h3 className="text-xl font-semibold text-accent-emerald mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-accent-emerald animate-pulse" fill="#10B981" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                Project Collaboration Calculator
              </h3>
              <p className="text-neutral-light/80 mb-4 text-center">
                Get an estimate of project timeline and scope based on your requirements.
              </p>
              <motion.button
                whileHover={{ scale: 1.05,  color: '#fff' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsCalculatorOpen(true)}
                className="w-full bg-gradient-to-r from-accent-emerald to-accent-emerald/80 text-primary font-bold py-3 px-6 rounded-xl shadow-lg shadow-accent-emerald/40 hover:from-accent-emerald/80 hover:to-accent-emerald transition-all duration-300 text-lg group-hover:scale-105"
              >
                Open Project Calculator
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Project Calculator Modal Overlay */}
      {isCalculatorOpen && (
        <ProjectCalculator isOpen={isCalculatorOpen} onClose={() => setIsCalculatorOpen(false)} />
      )}
    </section>
  );
} 