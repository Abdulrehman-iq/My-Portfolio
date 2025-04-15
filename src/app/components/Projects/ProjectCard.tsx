// src/components/projects/ProjectCard.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../../components/context/ThemeContext';
import { Project } from '../../components/Projects/project';
import { useState } from 'react';

const PhoneFrame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full max-w-[280px] mx-auto">
      <div className="relative aspect-[9/19.5] rounded-[3rem] border-[14px] border-[#1F1F1F] overflow-hidden
        bg-black shadow-xl shadow-black/20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-[#1F1F1F] rounded-b-3xl z-10" />
        <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
          {children}
        </div>
      </div>
    </div>
  );
};

const LaptopFrame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full mx-auto">
      {/* Screen */}
      <div className="relative aspect-[16/10] rounded-t-xl border-[12px] border-[#1F1F1F] overflow-hidden
        bg-black shadow-xl shadow-black/20">
        <div className="absolute inset-0 overflow-hidden">
          {children}
        </div>
        {/* Webcam */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-[#2a2a2a] z-10" />
      </div>
      {/* Base */}
      <div className="relative h-[20px] bg-[#1F1F1F] rounded-b-xl mx-[10%]
        shadow-lg shadow-black/20">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[30%] h-[4px] 
          bg-[#2a2a2a] rounded-t-sm" />
      </div>
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { styles } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  const statusColors = {
    'completed': 'bg-green-500/20 text-green-400 border border-green-500/30',
    'in-progress': 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
    'coming-soon': 'bg-sky-500/20 text-sky-400 border border-sky-500/30',
    'in-development': 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
  };

  const renderContent = () => {
    if (project.type === 'mobile') {
      return (
        <PhoneFrame>
          <div className="relative aspect-[9/19.5]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              onLoadingComplete={() => setIsLoading(false)}
              className="object-cover transition-all duration-300 group-hover:scale-105"
            />
            {isLoading && (
              <motion.div
                initial={false}
                animate={{
                  opacity: isLoading ? 1 : 0,
                  scale: isLoading ? 1 : 0.95,
                }}
                className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"
              />
            )}
          </div>
        </PhoneFrame>
      );
    }

    return (
      <LaptopFrame>
        <div className="relative aspect-[16/10]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            onLoadingComplete={() => setIsLoading(false)}
            className="object-cover transition-all duration-300 group-hover:scale-105"
          />
          {isLoading && (
            <motion.div
              initial={false}
              animate={{
                opacity: isLoading ? 1 : 0,
                scale: isLoading ? 1 : 0.95,
              }}
              className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"
            />
          )}
        </div>
      </LaptopFrame>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <div
        className={`
          relative ${styles.card} p-4 rounded-xl overflow-hidden group
          hover:shadow-xl hover:shadow-sky-500/10 transition-shadow duration-300
        `}
      >
        {renderContent()}

          <div className="flex items-center gap-2 mt-4 mb-2">
            <motion.span 
              className={`text-xs px-2 py-1 rounded-full ${statusColors['coming-soon']}`}
              whileHover={{ scale: 1.05 }}
            >
            </motion.span>
            <motion.span 
              className={`text-xs px-2 py-1 rounded-full ${statusColors['coming-soon']}`}
              whileHover={{ scale: 1.05 }}
            >
            </motion.span>
          </div>
        

        <div className="mt-4">
          <div className="flex items-start justify-between mb-2">
            <h4 className={`text-xl ${styles.headingText} font-bold`}>
              {project.title}
            </h4>
            {project.status && (
              <motion.span 
                className={`px-2 py-1 text-xs rounded-full ${statusColors[project.status]}`}
                whileHover={{ scale: 1.05 }}
              >
                {project.status}
              </motion.span>
            )}
          </div>

          <p className={`mb-4 ${styles.bodyText}`}>{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <motion.span 
                key={i}
                className={`${styles.pill} text-sm px-3 py-1 rounded-full`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}