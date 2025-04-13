'use client'

import { useState, useEffect, MouseEvent, useRef } from "react"
import { FaChevronDown, FaLayerGroup, FaMobile, FaDatabase, FaPlug } from 'react-icons/fa'
import { HiOutlineSparkles } from 'react-icons/hi'
import { useTheme } from '../context/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

// Register the ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const { isDarkMode, styles } = useTheme();
  const impactWords = ["Innovation", "Simplicty", "Impact", "Excellence"];
  
  // Refs for GSAP animations
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const specialtiesRef = useRef<HTMLDivElement>(null);

  // Word cycling animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % impactWords.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Set loaded state after initial render
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // GSAP ScrollTrigger animations
  useEffect(() => {
    if (!sectionRef.current) return;
    
    // Create a timeline for scroll animations
    const heroTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.5,
      }
    });
    
    // Animation for headline - move up and fade slightly as scrolling down
    if (headlineRef.current) {
      heroTimeline.to(headlineRef.current, {
        y: -50,
        opacity: 0.5,
        ease: "power1.inOut"
      }, 0);
    }
    
    // Animation for tagline - move up faster and fade more
    if (taglineRef.current) {
      heroTimeline.to(taglineRef.current, {
        y: -70,
        opacity: 0.3,
        ease: "power1.inOut"
      }, 0);
    }
    
    // Animation for description - move up and fade out
    if (descriptionRef.current) {
      heroTimeline.to(descriptionRef.current, {
        y: -90,
        opacity: 0,
        ease: "power1.inOut"
      }, 0);
    }
    
    // Animation for CTA button - shrink slightly
    if (ctaRef.current) {
      heroTimeline.to(ctaRef.current, {
        y: -100,
        scale: 0.9,
        opacity: 0,
        ease: "power1.inOut"
      }, 0);
    }
    
    // Animation for specialties section - parallax effect moving slower
    if (specialtiesRef.current) {
      heroTimeline.to(specialtiesRef.current, {
        y: -30,
        opacity: 0.7,
        ease: "power1.inOut"
      }, 0);
    }
    
    // Cleanup
    return () => {
      if (heroTimeline.scrollTrigger) {
        heroTimeline.scrollTrigger.kill();
      }
    };
  }, [isLoaded]);

  // Handle smooth scroll on button click
  const handleExploreClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef}
      className={`relative overflow-hidden font-['Inter'] ${styles.mainBg} pb-48`}
    >
      {/* Background with subtle 3D elements but no gradient */}
      <div className="absolute inset-0 z-0">
        {/* Solid background */}
        <div className={`absolute inset-0 ${styles.mainBg}`}></div>
        
        {/* Abstract shape 1 */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className={`absolute top-20 -left-20 w-[500px] h-[500px] rounded-full ${
            isDarkMode ? 'bg-emerald-700/10' : 'bg-emerald-500/5'
          } blur-[80px]`}
        ></motion.div>
        
        {/* Abstract shape 2 */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className={`absolute -bottom-40 -right-20 w-[600px] h-[600px] rounded-full ${
            isDarkMode ? 'bg-teal-600/10' : 'bg-teal-500/5'
          } blur-[100px]`}
        ></motion.div>
      </div>

      {/* Main content with enhanced layout */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[85vh]">
          {/* Centered content layout */}
          <div className="text-center max-w-4xl mx-auto">
            {/* Decorative element */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, type: "spring" }}
              className="mb-6 inline-flex"
            >
              <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-m font-medium ${styles.accentBg}`}>
                <HiOutlineSparkles className="text-emerald-500" />
                Crafting Web & Mobile Apps That Drive Results
              </span>
            </motion.div>
            
            {/* Headline with enhanced typography */}
            <motion.h1 
              ref={headlineRef}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className={`text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight ${styles.headingText} font-['Montserrat'] tracking-tight`}
            >
              Transforming Ideas Into{' '}
              <span className={styles.gradient}>
                Digital Reality
              </span>
            </motion.h1>
            
            {/* Animated words with enhanced effect */}
            <motion.div 
              ref={taglineRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="h-16 mt-6 mb-6"
            >
              <div className="relative h-14 flex justify-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={impactWords[currentWordIndex]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className={`text-3xl sm:text-4xl font-semibold ${styles.accentText} font-['Montserrat']`}
                  >
                    {impactWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
              <div className={`w-24 h-1 mx-auto ${
                isDarkMode ? 'bg-emerald-500' : 'bg-gradient-to-r from-emerald-500 to-teal-600'
              }`}></div>
            </motion.div>
            
            {/* Description with more refined typography */}
            <motion.p 
              ref={descriptionRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className={`text-xl leading-relaxed max-w-2xl mx-auto mb-10 ${styles.bodyText}`}
            >
              Cutting-edge solutions for the modern digital world. I craft scalable web and mobile applications that bring your vision to life—efficiently, beautifully, and reliably.
            </motion.p>
            
            {/* Enhanced CTA button with downward orientation */}
            <motion.div 
              ref={ctaRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-col items-center mt-8"
            >
              <motion.a 
                href="#projects"
                onClick={handleExploreClick}
                className={`group px-10 py-6 rounded-xl text-lg md:text-xl font-medium inline-flex items-center justify-center transition-all duration-300 ${styles.button.primary}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ y: 10, transition: { type: "spring", stiffness: 400, damping: 10 } }}
              >
                Explore My Portfolio
              </motion.a>
              
              {/* Animated down chevron */}
              <motion.div 
                animate={{ 
                  y: [0, 5, 0],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="mt-4"
              >
                <FaChevronDown className={`text-2xl ${styles.accentText}`} />
              </motion.div>
            </motion.div>
            
            {/* Enhanced specialties section */}
            <motion.div 
              ref={specialtiesRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="mt-20"
            >
              <p className={`text-sm uppercase tracking-wider font-medium mb-8 ${styles.mutedText}`}>
                DIGITAL SOLUTIONS FOR
              </p>
              <div className="flex flex-wrap justify-center gap-5 sm:gap-6 md:gap-8">
                {[
                  { icon: FaLayerGroup, text: "Full Stack Web Development", color: "#059669" }, // emerald-600
                  { icon: FaMobile, text: "Mobile App Development", color: "#0D9488" },        // teal-600
                  { icon: FaDatabase, text: "Database Management", color: "#0F766E" },         // teal-700
                  { icon: FaPlug, text: "Custom APIs & Integration", color: "#047857" },       // emerald-700
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + (index * 0.2), duration: 0.5 }}
                    className="flex flex-col items-center group text-center w-[160px] sm:w-[180px] md:w-[200px]"
                  >
                    <div className={`p-6 rounded-2xl mb-4 group-hover:scale-110 transition-all duration-300 ${styles.glassBg}`}>
                      <item.icon style={{ color: item.color }} className="text-3xl" />
                    </div>
                    <span className={`font-medium text-sm sm:text-base md:text-lg ${styles.bodyText}`}>
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Add a visual connector element at the bottom to blend into the Introduction section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, transparent, ${isDarkMode ? '#0a2718' : '#ffffff'})`
        }}
      />
    </section>
  )
}