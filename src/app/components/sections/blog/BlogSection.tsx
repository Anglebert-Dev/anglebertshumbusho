'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import ParticleSystem from '@/app/components/ui/particles/ParticleSystem';
import GeometricShapes from '@/app/components/3d/geometric-shapes/GeometricShapes';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: 'backend' | 'architecture' | 'performance' | 'security';
  date: string;
  readTime: string;
  tags: string[];
  image?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 'scalable-apis',
    title: 'Building Scalable Financial APIs',
    excerpt: 'A deep dive into designing and implementing high-performance financial APIs that can handle millions of transactions while maintaining data integrity and security.',
    category: 'backend',
    date: 'March 15, 2025',
    readTime: '8 min read',
    tags: ['API Design', 'Financial Systems', 'Scalability', 'Node.js']
  },
  {
    id: 'microservices-laravel',
    title: 'Microservices Architecture in Laravel',
    excerpt: 'Exploring how to break down monolithic Laravel applications into microservices, with practical examples and best practices for service communication.',
    category: 'architecture',
    date: 'February 28, 2025',
    readTime: '10 min read',
    tags: ['Laravel', 'Microservices', 'Architecture', 'PHP']
  },
  {
    id: 'db-optimization',
    title: 'Optimizing Database Performance',
    excerpt: 'Advanced techniques for optimizing database performance in high-traffic applications, including query optimization, indexing strategies, and caching patterns.',
    category: 'performance',
    date: 'February 10, 2025',
    readTime: '12 min read',
    tags: ['Database', 'Performance', 'MySQL', 'MongoDB']
  },
  {
    id: 'african-financial-systems',
    title: 'Integration Patterns for African Financial Systems',
    excerpt: 'A comprehensive guide to integrating with various African financial systems, including mobile money, banking APIs, and payment gateways.',
    category: 'backend',
    date: 'January 25, 2025',
    readTime: '15 min read',
    tags: ['Financial Systems', 'Africa', 'Integration', 'APIs']
  }
];

const categoryColors = {
  backend: 'bg-blue-500/20 text-blue-400',
  architecture: 'bg-purple-500/20 text-purple-400',
  performance: 'bg-green-500/20 text-green-400',
  security: 'bg-red-500/20 text-red-400'
};

const categoryLabels = {
  backend: 'Backend Development',
  architecture: 'Architecture',
  performance: 'Performance',
  security: 'Security'
};

export default function BlogSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPosts = activeCategory
    ? blogPosts.filter(post => post.category === activeCategory)
    : blogPosts;

  return (
    <section id="blog" className="relative min-h-screen py-12 md:py-20 bg-primary">
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
            Technical Blog
          </h2>
          <p className="text-lg md:text-xl text-neutral-light/80 max-w-2xl mx-auto">
            Deep dives into software architecture, development practices, and technical insights.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300
              ${!activeCategory ? 'bg-secondary text-primary' : 'bg-primary/20 text-neutral-light'}`}
          >
            All Posts
          </motion.button>
          {Object.entries(categoryLabels).map(([category, label]) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300
                ${activeCategory === category ? 'bg-secondary text-primary' : 'bg-primary/20 text-neutral-light'}`}
            >
              {label}
            </motion.button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative bg-primary/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-secondary/10"
            >
              {/* Category Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${categoryColors[post.category]}`}>
                  {categoryLabels[post.category]}
                </span>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-neutral-light/60">{post.date}</span>
                  <span className="text-sm text-neutral-light/60">•</span>
                  <span className="text-sm text-neutral-light/60">{post.readTime}</span>
                </div>

                <h3 className="text-2xl font-bold text-neutral-light mb-4 group-hover:text-secondary transition-colors">
                  {post.title}
                </h3>

                <p className="text-neutral-light/80 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-primary/30 rounded-full text-xs font-medium text-neutral-light/80"
                    >
                      #{tag}
                    </motion.span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 text-secondary hover:text-secondary-light transition-colors"
                >
                  Read Article
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
} 