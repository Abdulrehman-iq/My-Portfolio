// src/components/projects/ProjectDisplay.tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '../../components/context/ThemeContext';
import { ProjectCard } from './ProjectCard';
import { experiences, webProjects, mobileProjects } from '../../components/Projects/projects';
import { useRef } from 'react';

export function ProjectDisplay() {
  const { styles } = useTheme();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [0.95, 1]);

  return (
    <section className="w-full py-32 relative" ref={containerRef}>
      {/* Subtle background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] opacity-20 bg-[size:20px_20px]" />
      
      <motion.div
        style={{ opacity, scale }}
        className="container mx-auto px-4 relative"
      >
        <motion.h2 
          className={`text-5xl mb-24 ${styles.headingText} text-center font-bold tracking-tight`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        {/* Experience Timeline */}
        <div className="mb-40 relative">
          {/* Timeline line with gradient */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px]">
            <div className="h-full bg-gradient-to-b from-sky-500/30 via-sky-500/10 to-transparent" />
            <motion.div 
              className="absolute top-0 w-full h-full bg-sky-400/20"
              style={{ scaleY: scrollYProgress }}
              initial={{ scaleY: 0 }}
            />
          </div>
          
          <motion.h3 
            className={`text-3xl mb-16 ${styles.headingText} flex items-center gap-3 justify-center`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Professional Experience
            <motion.span 
              className="w-2 h-2 rounded-full bg-sky-400 shadow-lg shadow-sky-400/20"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {experiences.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Web Projects */}
        <div className="mb-40">
          <motion.h3 
            className={`text-3xl mb-16 ${styles.headingText} flex items-center gap-3 justify-center`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Web Applications
            <motion.span 
              className="w-2 h-2 rounded-full bg-violet-400 shadow-lg shadow-violet-400/20"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {webProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Projects */}
        <div>
          <motion.h3 
            className={`text-3xl mb-16 ${styles.headingText} flex items-center gap-3 justify-center flex-wrap`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Mobile Applications
            <motion.span 
              className="w-2 h-2 rounded-full bg-green-400 shadow-lg shadow-green-400/20"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm px-3 py-1.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
              Coming to stores
            </span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {mobileProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}