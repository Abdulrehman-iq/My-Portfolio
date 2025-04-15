
'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { FaCode, FaMobileAlt, FaRocket, FaTools, FaUserTie, FaGlobe } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

export default function WhyChooseAriqSystems() {
  const { styles } = useTheme()
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  
  // Refs for each section
  const titleRef = useRef<HTMLHeadingElement>(null)
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 })
  
  const refs = Array.from({ length: 6 }).map(() => useRef<HTMLDivElement>(null))
  const inViews = refs.map(ref => useInView(ref, { once: true, amount: 0.5 }))

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  
  // Animated features with icons (removed AI specifics)
  const features = [
    {
      icon: FaCode,
      title: "Full-Stack Web Development",
      description: "Building scalable, performant web applications with modern frameworks and clean architecture patterns."
    },
    {
      icon: FaMobileAlt,
      title: "Mobile App Development",
      description: "Creating intuitive mobile experiences that work flawlessly across iOS and Android platforms."
    },
    {
      icon: FaUserTie,
      title: "UK-Based Client Success",
      description: "Proven track record of delivering successful projects for discerning UK-based clients."
    },
    {
      icon: FaTools,
      title: "Clean Development Practices",
      description: "Commitment to writing maintainable, well-documented code that scales with your business needs."
    },
    {
      icon: FaGlobe,
      title: "Cross-Platform Expertise",
      description: "Seamlessly bridging web and mobile platforms to deliver cohesive digital experiences."
    },
    {
      icon: FaRocket,
      title: "Future-Ready Solutions",
      description: "Forward-thinking approach that prepares your digital assets for tomorrow's challenges."
    }
  ]

  return (
    <section
      ref={containerRef}
      className={`relative py-24 overflow-hidden ${styles.mainBg}`}
      id="why-choose"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute -right-20 top-10 w-[600px] h-[600px] rounded-full bg-lime-400/5 blur-[100px]"
        />
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute -left-20 bottom-10 w-[500px] h-[500px] rounded-full bg-amber-400/5 blur-[80px]"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-lime-400 to-amber-400 text-transparent bg-clip-text font-outfit">
            Why Choose Ariq Systems
          </h2>
          <p className="text-lg text-lime-200/90 leading-relaxed">
            Delivering exceptional software solutions through thoughtful design, clean code, and innovative approaches that 
            solve real business problems and create delightful user experiences.
          </p>
        </motion.div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              ref={refs[index]}
              initial={{ opacity: 0, y: 30 }}
              animate={inViews[index] ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-lime-800/30 bg-lime-900/20 backdrop-blur-sm hover:border-lime-700/50 transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-lime-500 to-amber-500 rounded-xl w-14 h-14 flex items-center justify-center mb-5 text-black">
                <feature.icon className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-lime-200">{feature.title}</h3>
              <p className="text-lime-200/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Cross-Platform Experience Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center gap-10 mb-20"
        >
          {/* Illustration */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-lime-500/20 to-amber-500/20 blur-2xl rounded-full"></div>
              <div className="relative w-[300px] h-[300px] flex items-center justify-center">
                {/* Developer Illustration (simplified with SVG) */}
                <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                  <rect x="100" y="50" width="100" height="80" rx="10" fill="#84cc16" opacity="0.7" />
                  <rect x="115" y="70" width="70" height="40" rx="5" fill="#0d0d0d" />
                  <rect x="125" y="80" width="50" height="5" rx="2" fill="#d9f99d" />
                  <rect x="125" y="90" width="50" height="5" rx="2" fill="#d9f99d" />
                  <rect x="125" y="100" width="30" height="5" rx="2" fill="#d9f99d" />
                  <circle cx="150" cy="170" r="30" fill="#84cc16" opacity="0.7" />
                  <rect x="135" y="150" width="30" height="60" rx="15" fill="#84cc16" opacity="0.7" />
                  <rect x="110" y="180" width="40" height="10" rx="5" fill="#84cc16" opacity="0.7" />
                  <rect x="150" y="180" width="40" height="10" rx="5" fill="#84cc16" opacity="0.7" />
                  <rect x="135" y="210" width="10" height="40" rx="5" fill="#84cc16" opacity="0.7" />
                  <rect x="155" y="210" width="10" height="40" rx="5" fill="#84cc16" opacity="0.7" />
                  <circle cx="150" cy="150" r="15" fill="#0d0d0d" />
                  <circle cx="145" cy="145" r="3" fill="white" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-lime-200">Bridging Web & Mobile Platforms</h3>
            <p className="text-lime-200/80 mb-4 leading-relaxed">
              With extensive experience across both web and mobile development ecosystems, Ariq Systems delivers cohesive 
              solutions that work seamlessly wherever your users are.
            </p>
            <p className="text-lime-200/80 mb-6 leading-relaxed">
              Each project benefits from platform-specific optimization while maintaining consistency in quality, 
              performance, and user experience.
            </p>
            <ul className="space-y-2">
              {["React & Next.js", "React Native", "Node.js", "RESTful APIs", "TypeScript", "Database Design"].map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-lime-400 mr-2"></span>
                  <span className="text-lime-200/90">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
        
        {/* Future Vision - Modified to downplay specific AI focus */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col md:flex-row-reverse items-center gap-10"
        >
          {/* Generic technology illustration */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-lime-500/20 blur-2xl rounded-full"></div>
              <div className="relative w-[300px] h-[300px] flex items-center justify-center">
                {/* Technology/Future Illustration (simplified with SVG) - less AI specific */}
                <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="150" cy="150" r="80" fill="#84cc16" opacity="0.2" />
                  <circle cx="150" cy="150" r="70" fill="#84cc16" opacity="0.2" stroke="#84cc16" strokeWidth="1" />
                  
                  {/* Connected nodes representing technology */}
                  <circle cx="150" cy="150" r="10" fill="#84cc16" />
                  <circle cx="200" cy="130" r="8" fill="#84cc16" />
                  <circle cx="180" cy="190" r="8" fill="#84cc16" />
                  <circle cx="120" cy="190" r="8" fill="#84cc16" />
                  <circle cx="100" cy="130" r="8" fill="#84cc16" />
                  
                  {/* Connecting lines */}
                  <line x1="150" y1="150" x2="200" y2="130" stroke="#84cc16" strokeWidth="1" />
                  <line x1="150" y1="150" x2="180" y2="190" stroke="#84cc16" strokeWidth="1" />
                  <line x1="150" y1="150" x2="120" y2="190" stroke="#84cc16" strokeWidth="1" />
                  <line x1="150" y1="150" x2="100" y2="130" stroke="#84cc16" strokeWidth="1" />
                  <line x1="200" y1="130" x2="180" y2="190" stroke="#84cc16" strokeWidth="1" opacity="0.5" />
                  <line x1="180" y1="190" x2="120" y2="190" stroke="#84cc16" strokeWidth="1" opacity="0.5" />
                  <line x1="120" y1="190" x2="100" y2="130" stroke="#84cc16" strokeWidth="1" opacity="0.5" />
                  <line x1="100" y1="130" x2="200" y2="130" stroke="#84cc16" strokeWidth="1" opacity="0.5" />
                  
                  {/* Secondary nodes */}
                  <circle cx="175" cy="100" r="5" fill="#84cc16" />
                  <circle cx="225" cy="160" r="5" fill="#84cc16" />
                  <circle cx="150" cy="220" r="5" fill="#84cc16" />
                  <circle cx="75" cy="160" r="5" fill="#84cc16" />
                  <circle cx="125" cy="100" r="5" fill="#84cc16" />
                  
                  {/* Secondary connections */}
                  <line x1="200" y1="130" x2="175" y2="100" stroke="#84cc16" strokeWidth="1" opacity="0.5" />
                  <line x1="200" y1="130" x2="225" y2="160" stroke="#84cc16" strokeWidth="1" opacity="0.5" />
                  <line x1="180" y1="190" x2="225" y2="160" stroke="#84cc16" strokeWidth="1" opacity="0.5" />
                  <line x1="180" y1="190" x2="150" y2="220" stroke="#84cc16" strokeWidth="1" opacity="0.5" />
                  <line x1="120" y1="190" x2="150" y2="220" stroke="#84cc16" strokeWidth="1" opacity="0.5" />
                  <line x1="120" y1="190" x2="75" y2="160" stroke="#84cc16" strokeWidth="1" opacity="0.5" />
                  <line x1="100" y1="130" x2="75" y2="160" stroke="#84cc16" strokeWidth="1" opacity="0.5" />
                  <line x1="100" y1="130" x2="125" y2="100" stroke="#84cc16" strokeWidth="1" opacity="0.5" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Text Content - Modified to mention future expansion without AI specifics */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-lime-200">Looking to the Future</h3>
            <p className="text-lime-200/80 mb-4 leading-relaxed">
              Ariq Systems is committed to staying at the forefront of technology, with plans to expand into emerging 
              fields including artificial intelligence as part of our commitment to delivering tomorrow's solutions today.
            </p>
            <p className="text-lime-200/80 mb-6 leading-relaxed">
              With a foundation built on technical excellence and a dedication to continuous learning, we're positioned 
              to help your business not just keep pace with technology, but harness it for competitive advantage.
            </p>
            <ul className="space-y-2">
              {["Cutting-Edge Technologies", "Performance Optimization", "Responsive Design", "Scalable Architecture", "Security Best Practices", "Future-Proof Development"].map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mr-2"></span>
                  <span className="text-lime-200/90">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl font-bold mb-6 text-lime-200">Let's Build Something Smart Together</h3>
          <p className="text-lime-200/80 max-w-2xl mx-auto mb-8">
            Ready to transform your ideas into powerful digital solutions? Leverage our expertise in web and mobile 
            development to create standout applications that drive results.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-lime-500 to-amber-500 rounded-xl text-black font-medium hover:from-lime-400 hover:to-amber-400 transition-all duration-300 shadow-lg"
          >
            Start a Conversation
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}