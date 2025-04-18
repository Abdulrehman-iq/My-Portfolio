// components/Experience/Experience.tsx
'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { FaGlobe, FaRunning, FaShoppingBag, FaTshirt, FaTaxi, FaUsers, FaExternalLinkAlt } from 'react-icons/fa'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Project data structure
interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  imageSrc: string
  icon: React.ElementType
  link?: string
  color: string
  status: 'completed' | 'in-progress'
}

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const professionalRef = useRef<HTMLDivElement>(null)
  const personalRef = useRef<HTMLDivElement>(null)
  const mobileRef = useRef<HTMLDivElement>(null)
  
  const [activeTab, setActiveTab] = useState(0)
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  
  // Scroll animation setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })
  
  const smoothProgress = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  })
  
  // Parallax effects
  const headerY = useTransform(smoothProgress, [0, 0.1], [0, -50])
  const headerOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0.3])
  
  // Theme colors - using the project theme
  const themeColors = {
    cyan: "#00c9ff",
    green: "#92fe9d",
    blue: "#60a5fa"
  }
  
  // Project data with detailed information
  const professionalProjects: Project[] = [
    {
      id: 'fastiya',
      title: 'Fastiya Logistics',
      description: 'A comprehensive logistics platform for a UK-based company, featuring package tracking, scheduling, and customer management features. Built with modern web technologies for performance and scalability.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      imageSrc: '/images/projects/fastiya.jpg',
      icon: FaGlobe,
      link: 'https://fastiya.com',
      color: themeColors.cyan,
      status: 'completed'
    },
    {
      id: 'hawas',
      title: 'Hawas Boutique',
      description: 'E-commerce website for a boutique clothing brand using the MERN stack. Features include product catalog, cart functionality, payment processing, and admin dashboard for inventory management.',
      tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Stripe API'],
      imageSrc: '/images/projects/hawas.jpg',
      icon: FaShoppingBag,
      link: 'https://hawasboutique.com',
      color: themeColors.green,
      status: 'completed'
    }
  ]
  
  const personalProjects: Project[] = [
    {
      id: 'arclothing',
      title: 'AR Clothing Store',
      description: 'An innovative e-commerce platform with virtual try-on functionality using WebXR. Customers can visualize how clothing items would look on them before purchasing.',
      tags: ['MERN Stack', 'OpenCV', 'Computer Vision', 'MediaPipe'],
      imageSrc: '/images/projects/arclothing.jpg',
      icon: FaTshirt,
      link: 'https://ar-clothing-store.vercel.app/',
      color: themeColors.blue,
      status: 'in-progress'
    },
    {
        id: 'sportsEvent',
        title: 'Sports Event Management',
        description: 'A platform for sports event management where players can register, view event details, and check match schedules. Built with PHP and JavaScript, and integrated with a database.',
        tags: ['PHP', 'JavaScript', 'Database', ],
        imageSrc: '/images/projects/sportsevent.jpg',  // You can replace the path with your actual image path
        icon: FaRunning,  // You can choose an appropriate icon for your project
        color: themeColors.green,  // Choose an appropriate color
        status: 'completed'
      }
      
  ]
  
  const mobileProjects: Project[] = [
    {
      id: 'rideby',
      title: 'Ride By',
      description: 'A ride-hailing mobile application with real-time tracking, payment processing, and driver/passenger matching algorithms. Features include route optimization and fare estimation.',
      tags: ['React Native', 'Firebase', 'Google Maps API', 'Stripe'],
      imageSrc: '/images/projects/rideby.jpg',
      icon: FaTaxi,
      link: '#',
      color: themeColors.green,
      status: 'completed'
    },
    {
      id: 'studygroup',
      title: 'Virtual Study Group App',
      description: 'Mobile application that connects students for virtual study sessions. Features include video conferencing, shared whiteboards, document sharing, and session scheduling.',
      tags: ['Flutter', 'Firebase', 'WebRTC', 'Cloud Functions'],
      imageSrc: '/images/projects/studygroup.jpg',
      icon: FaUsers,
      link: '#',
      color: themeColors.blue,
      status: 'completed'
    }
  ]
  
  // GSAP animations for scroll-triggered effects
  useEffect(() => {
    if (!containerRef.current) return
    
    // Section headers reveal
    const sectionHeaders = document.querySelectorAll('.section-header')
    sectionHeaders.forEach((header) => {
      gsap.fromTo(
        header,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: header,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })
    
    // Project cards staggered animation
    const projectCards = document.querySelectorAll('.project-card')
    projectCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { 
          opacity: 0, 
          y: 50,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=50',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })
    
    // Return cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
  
  // Animation variants for framer-motion
  const tabVariants = {
    inactive: { 
      opacity: 0.7,
      scale: 0.95,
      y: 0
    },
    active: { 
      opacity: 1, 
      scale: 1,
      y: -5
    }
  }
  
  const projectCardVariants = {
    initial: { 
      opacity: 0, 
      y: 20, 
      scale: 0.95 
    },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  }
  
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  }

  return (
    <section 
      id="experience" 
      ref={containerRef}
      className="relative py-20 overflow-hidden"
      style={{ backgroundColor: '#0d0d0d' }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Abstract shape 1 - Cyan */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute top-20 -left-20 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 201, 255, 0.2), rgba(0, 201, 255, 0.05))',
            filter: 'blur(80px)'
          }}
        ></motion.div>
        
        {/* Abstract shape 2 - Green */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute -bottom-40 -right-20 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(146, 254, 157, 0.2), rgba(146, 254, 157, 0.05))',
            filter: 'blur(100px)'
          }}
        ></motion.div>
      </div>
      
      {/* Header with parallax effect */}
      <motion.div 
        ref={headerRef}
        style={{ y: headerY, opacity: headerOpacity }}
        className="container mx-auto px-6 mb-20 relative z-10"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-[#fffce1] font-outfit"
        >
          My Experience
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-center max-w-3xl mx-auto text-[#fffce1]/90 mb-12"
        >
          From professional client work to personal passion projects, here&apos;s a selection of applications I&apos;ve built across web and mobile platforms.
        </motion.p>
        
        {/* Category tabs with active indicator */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
          {['Professional Work', 'Personal Web Projects', 'Mobile App Projects'].map((tab, index) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(index)}
              variants={tabVariants}
              initial="inactive"
              animate={activeTab === index ? "active" : "inactive"}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`relative px-6 py-3 rounded-xl font-medium focus:outline-none transition-colors duration-300 ${
                activeTab === index 
                  ? 'text-[#fffce1]' 
                  : 'text-[#fffce1]/70 hover:text-[#fffce1]'
              }`}
              style={{
                background: activeTab === index 
                  ? 'rgba(255, 255, 255, 0.1)' 
                  : 'transparent',
                backdropFilter: activeTab === index ? 'blur(10px)' : 'none',
                border: activeTab === index 
                  ? '1px solid rgba(255, 255, 255, 0.1)' 
                  : '1px solid transparent'
              }}
            >
              {tab}
              {activeTab === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 mx-2"
                  style={{ 
                    background: `linear-gradient(90deg, ${themeColors.cyan}, ${themeColors.green}, ${themeColors.blue})`,
                    boxShadow: `0 0 8px ${themeColors.cyan}`
                  }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>
      
      {/* Content sections */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Professional Work Section */}
        <AnimatePresence mode="wait">
          {activeTab === 0 && (
            <motion.div
              ref={professionalRef}
              key="professional"
              variants={fadeIn}
              initial="initial"
              animate="animate"
              exit="exit"
              className="mb-24"
            >
              <div className="section-header mb-12">
                <h3 className="text-3xl font-bold mb-4 text-[#fffce1]">Professional Work</h3>
                <div className="h-1 w-20 rounded-full" style={{ background: `linear-gradient(90deg, ${themeColors.cyan}, ${themeColors.green})` }}></div>
                <p className="mt-4 text-[#fffce1]/80 max-w-3xl">
                  Client projects developed for businesses, showcasing real-world solutions and deliverables.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {professionalProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="project-card rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 h-full"
                    variants={projectCardVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    whileTap="tap"
                    onHoverStart={() => setHoveredProject(project.id)}
                    onHoverEnd={() => setHoveredProject(null)}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="relative overflow-hidden h-64">
                      {/* Project image with subtle animation on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gray-800"
                        animate={{
                          scale: hoveredProject === project.id ? 1.05 : 1
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        <Image 
                          src={project.imageSrc} 
                          alt={project.title}
                          layout="fill"
                          objectFit="cover"
                          className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                        />
                        
                        {/* Status indicator */}
                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
                          style={{
                            backgroundColor: project.status === 'completed' 
                              ? 'rgba(146, 254, 157, 0.2)' 
                              : 'rgba(0, 201, 255, 0.2)',
                            color: project.status === 'completed' ? '#92fe9d' : '#00c9ff',
                            border: `1px solid ${project.status === 'completed' ? 'rgba(146, 254, 157, 0.3)' : 'rgba(0, 201, 255, 0.3)'}`
                          }}
                        >
                          {project.status === 'completed' ? 'Completed' : 'In Progress'}
                        </div>
                      </motion.div>
                      
                      {/* Project icon */}
                      <div 
                        className="absolute left-4 bottom-4 w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ 
                          background: `linear-gradient(135deg, ${project.color}, rgba(255, 255, 255, 0.1))`,
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.2)'
                        }}
                      >
                        <project.icon className="text-2xl text-[#0d0d0d]" />
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2 text-[#fffce1]">{project.title}</h4>
                      <p className="text-[#fffce1]/80 mb-4 text-sm">{project.description}</p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map(tag => (
                          <span 
                            key={tag} 
                            className="px-2 py-1 text-xs rounded-md text-[#fffce1]"
                            style={{ 
                              backgroundColor: 'rgba(255, 255, 255, 0.07)',
                              border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Visit button - simplified style */}
                      {project.link && project.status === 'completed' && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg text-[#fffce1] border border-[#fffce1]/30 transition-all"
                          whileHover={{ 
                            scale: 1.05,
                            borderColor: 'rgba(255, 252, 225, 0.5)'
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Visit Project
                          <FaExternalLinkAlt />
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          
          {/* Personal Web Projects Section */}
          {activeTab === 1 && (
            <motion.div
              ref={personalRef}
              key="personal"
              variants={fadeIn}
              initial="initial"
              animate="animate"
              exit="exit"
              className="mb-24"
            >
              <div className="section-header mb-12">
                <h3 className="text-3xl font-bold mb-4 text-[#fffce1]">Personal Web Projects</h3>
                <div className="h-1 w-20 rounded-full" style={{ background: `linear-gradient(90deg, ${themeColors.blue}, ${themeColors.green})` }}></div>
                <p className="mt-4 text-[#fffce1]/80 max-w-3xl">
                  Self-driven web applications and experiments showcasing creativity and technical exploration.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {personalProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="project-card rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 h-full"
                    variants={projectCardVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    whileTap="tap"
                    onHoverStart={() => setHoveredProject(project.id)}
                    onHoverEnd={() => setHoveredProject(null)}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="relative overflow-hidden h-64">
                      {/* Project image with subtle animation on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gray-800"
                        animate={{
                          scale: hoveredProject === project.id ? 1.05 : 1
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        <Image 
                          src={project.imageSrc} 
                          alt={project.title}
                          layout="fill"
                          objectFit="cover"
                          className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                        />
                        
                        {/* Status indicator */}
                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
                          style={{
                            backgroundColor: project.status === 'completed' 
                              ? 'rgba(146, 254, 157, 0.2)' 
                              : 'rgba(0, 201, 255, 0.2)',
                            color: project.status === 'completed' ? '#92fe9d' : '#00c9ff',
                            border: `1px solid ${project.status === 'completed' ? 'rgba(146, 254, 157, 0.3)' : 'rgba(0, 201, 255, 0.3)'}`
                          }}
                        >
                          {project.status === 'completed' ? 'Completed' : 'In Progress'}
                        </div>
                      </motion.div>
                      
                      {/* Project icon */}
                      <div 
                        className="absolute left-4 bottom-4 w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ 
                          background: `linear-gradient(135deg, ${project.color}, rgba(255, 255, 255, 0.1))`,
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.2)'
                        }}
                      >
                        <project.icon className="text-2xl text-[#0d0d0d]" />
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2 text-[#fffce1]">{project.title}</h4>
                      <p className="text-[#fffce1]/80 mb-4 text-sm">{project.description}</p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map(tag => (
                          <span 
                            key={tag} 
                            className="px-2 py-1 text-xs rounded-md text-[#fffce1]"
                            style={{ 
                              backgroundColor: 'rgba(255, 255, 255, 0.07)',
                              border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Visit button - simplified style */}
                      {project.link && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg text-[#fffce1] border border-[#fffce1]/30 transition-all"
                          whileHover={{ 
                            scale: 1.05,
                            borderColor: 'rgba(255, 252, 225, 0.5)'
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Visit Project
                          <FaExternalLinkAlt />
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          
          {/* Mobile App Projects Section with Device Mockups */}
          {activeTab === 2 && (
            <motion.div
              ref={mobileRef}
              key="mobile"
              variants={fadeIn}
              initial="initial"
              animate="animate"
              exit="exit"
              className="mb-24"
            >
              <div className="section-header mb-12">
                <h3 className="text-3xl font-bold mb-4 text-[#fffce1]">Mobile App Projects</h3>
                <div className="h-1 w-20 rounded-full" style={{ background: `linear-gradient(90deg, ${themeColors.green}, ${themeColors.blue})` }}></div>
                <p className="mt-4 text-[#fffce1]/80 max-w-3xl">
                  Cross-platform mobile applications built with React Native and Flutter.
                </p>
              </div>
              
              {/* Special mobile device mockup layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {mobileProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="project-card relative"
                    variants={projectCardVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: index * 0.15 }}
                  >
                    {/* Mobile device frame */}
                    <div className="relative mx-auto w-[280px] h-[580px]">
                      {/* Phone frame */}
                      <motion.div 
                        className="absolute inset-0 rounded-[40px] border-[14px] border-gray-800 overflow-hidden shadow-2xl bg-gray-900"
                        whileHover={{ 
                          scale: 1.03,
                          rotate: index % 2 === 0 ? 1 : -1
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Phone screen content */}
                        <div className="relative h-full w-full overflow-hidden">
                          {/* App screenshot */}
                          <Image 
                            src={project.imageSrc} 
                            alt={project.title}
                            layout="fill"
                            objectFit="cover"
                            className="opacity-90"
                          />
                          
                          {/* Status indicator */}
                          <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
                            style={{
                              backgroundColor: 'rgba(146, 254, 157, 0.2)',
                              color: '#92fe9d',
                              border: '1px solid rgba(146, 254, 157, 0.3)'
                            }}
                          >
                            Completed
                          </div>
                          
                          {/* App info overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-4 backdrop-blur-md bg-black/50">
                            <h4 className="text-lg font-bold mb-2 text-[#fffce1]">{project.title}</h4>
                            <div className="flex flex-wrap gap-1 mb-2">
                              {project.tags.slice(0, 2).map(tag => (
                                <span 
                                  key={tag} 
                                  className="px-1.5 py-0.5 text-[10px] rounded-sm text-[#fffce1]"
                                  style={{ 
                                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                  }}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        {/* Phone notch */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-xl"></div>
                      </motion.div>
                      
                      {/* Floating app icon */}
                      <motion.div
                        className="absolute -left-6 top-10 w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl"
                        style={{ 
                          background: `linear-gradient(135deg, ${project.color}, rgba(255, 255, 255, 0.2))`,
                          border: '2px solid rgba(255, 255, 255, 0.1)'
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          boxShadow: `0 10px 25px rgba(${project.color.replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(', ')}, 0.3)`
                        }}
                        animate={{
                          y: [0, -5, 0],
                          rotate: [0, 2, 0]
                        }}
                        transition={{
                          y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                          rotate: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                        }}
                      >
                        <project.icon className="text-2xl text-white" />
                      </motion.div>
                    </div>
                    
                    {/* Project description card */}
                    <motion.div
                      className="mt-8 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                      whileHover={{ 
                        y: -5,
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
                      }}
                    >
                      <h3 className="text-xl font-bold mb-3 text-[#fffce1]">{project.title}</h3>
                      <p className="text-[#fffce1]/80 mb-4 text-sm">{project.description}</p>
                      
                      {/* Additional tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                          <span 
                            key={tag} 
                            className="px-2 py-1 text-xs rounded-md text-[#fffce1]"
                            style={{ 
                              backgroundColor: 'rgba(255, 255, 255, 0.07)',
                              border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Visit button removed for mobile apps as requested */}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Bottom CTA */}
      <div className="container mx-auto px-6 text-center mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="inline-block p-0.5 rounded-xl"
          style={{ 
            background: `linear-gradient(90deg, ${themeColors.cyan}, ${themeColors.green}, ${themeColors.blue})`,
            boxShadow: '0 0 20px rgba(0, 201, 255, 0.3)'
          }}
        >
          <a
            href="#contact"
            className="block px-8 py-4 bg-[#0d0d0d] rounded-[9px] text-[#fffce1] font-medium transition-transform hover:bg-[#111111]"
          >
            Interested in working together?
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience