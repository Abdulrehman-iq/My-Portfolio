'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  // Detect scroll position to change navbar styles
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <motion.header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? isDarkMode
            ? 'bg-slate-800/95 backdrop-blur-md shadow-md shadow-black/20 py-4'
            : 'bg-white/95 backdrop-blur-md shadow-md shadow-slate-200/20 py-4'
          : isDarkMode
            ? 'bg-slate-800/80 backdrop-blur-sm py-6'
            : 'bg-white/80 backdrop-blur-sm py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Name/Logo */}
        <Link href="/" className="font-rajdhani font-bold text-xl md:text-2xl tracking-tight relative group">
          <span className={isDarkMode ? "text-white" : "text-slate-900"}>Abdulrehman Iqbal</span>
          <span className="text-blue-500">.</span>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
        </Link>

        {/* Social Links */}
        <div className="flex items-center space-x-5">
          {/* GitHub */}
          <motion.a 
            href="https://github.com/yourusername" 
            target="_blank"
            rel="noopener noreferrer"
            className={`${isDarkMode ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-slate-900"} transition-colors`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="text-xl md:text-2xl" />
            <span className="sr-only">GitHub</span>
          </motion.a>
          
          {/* LinkedIn */}
          <motion.a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin className="text-xl md:text-2xl" />
            <span className="sr-only">LinkedIn</span>
          </motion.a>
          
          {/* WhatsApp */}
          <motion.a 
            href="https://wa.me/yournumber" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp className="text-xl md:text-2xl" />
            <span className="sr-only">WhatsApp</span>
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}