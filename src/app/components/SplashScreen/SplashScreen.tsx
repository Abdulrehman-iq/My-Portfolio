// components/SplashScreen/SplashScreen.tsx
'use client'

import { useEffect, useState, useRef, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import SplitType from 'split-type'

// Main Splash Screen Component
const SplashScreen = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true)
  const [animationStarted, setAnimationStarted] = useState(false)
  const logoRef = useRef<HTMLDivElement>(null)
  const sloganRef = useRef<HTMLDivElement>(null)
  const logoCharsRef = useRef<HTMLSpanElement[]>([])
  const originalOverflow = useRef<string>('')
  
  useEffect(() => {
    // Only run animation once
    if (animationStarted) return
    
    setAnimationStarted(true)
    
    // Store original overflow value
    if (typeof window !== 'undefined') {
      originalOverflow.current = document.body.style.overflow || ''
    }
    
    // Set body styles
    document.body.style.backgroundColor = '#0d0d0d'
    document.body.style.color = '#fffce1'
    document.body.style.overflow = 'hidden'
    
    // Logo text animation
    if (logoRef.current) {
      const splitLogo = new SplitType(logoRef.current, {
        types: 'chars',
        tagName: 'span'
      })
      
      // Store references to characters for hover effects
      if (splitLogo.chars) {
        logoCharsRef.current = Array.from(splitLogo.chars)
        
        // Add hover effect to each character
        logoCharsRef.current.forEach(char => {
          char.style.display = 'inline-block'
          char.style.transition = 'transform 0.2s ease-out'
          
          char.addEventListener('mouseenter', () => {
            // Random animation effect from several options
            const effectNum = Math.floor(Math.random() * 5)
            
            switch(effectNum) {
              case 0:
                gsap.to(char, { y: -15, scale: 1.2, color: '#4ade80', duration: 0.3 }) 
                break
              case 1:
                gsap.to(char, { x: 5, scale: 1.3, color: '#60a5fa', duration: 0.3 }) 
                break
              case 2:
                gsap.to(char, { rotate: 15, scale: 1.1, color: '#22d3ee', duration: 0.3 }) 
                break
              case 3:
                gsap.to(char, { skewX: 20, color: '#f472b6', duration: 0.3 }) 
                break
              case 4:
                gsap.to(char, { scale: 1.4, color: '#c084fc', duration: 0.3 }) 
                break
            }
          })
          
          char.addEventListener('mouseleave', () => {
            gsap.to(char, { x: 0, y: 0, scale: 1, rotate: 0, skewX: 0, color: '#fffce1', duration: 0.5 })
          })
        })
      }
      
      // Initial character animation
      gsap.fromTo(
        splitLogo.chars,
        {
          opacity: 0,
          y: 40,
          rotateX: -90,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.05,
          duration: 0.8,
          ease: 'power4.out',
          delay: 0.5,
        }
      )
    }
    
    // Slogan text animation
    if (sloganRef.current) {
      const splitSlogan = new SplitType(sloganRef.current, {
        types: 'words',
        tagName: 'span'
      })
      
      gsap.fromTo(
        splitSlogan.words,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.7,
          ease: 'power3.out',
          delay: 1.5,
        }
      )
    }
    
    // Set to exactly 6 seconds with direct state updates
    const timer = setTimeout(() => {
      console.log("Timer completed, fading out splash screen");
      
      // Fade out animation before unmounting
      const fadeOutAnimation = gsap.to('.splash-content', {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: () => {
          console.log("Fade out animation completed");
          document.body.style.overflow = originalOverflow.current || 'auto';
          setLoading(false);
        }
      });
      
      // Set a backup timeout in case the animation complete callback doesn't fire
      setTimeout(() => {
        if (loading) {
          console.log("Backup timeout triggered");
          fadeOutAnimation.kill();
          document.body.style.overflow = originalOverflow.current || 'auto';
          setLoading(false);
        }
      }, 1000); // 1 second backup
    }, 6000);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow.current || 'auto';
      
      // Clean up event listeners
      logoCharsRef.current.forEach(char => {
        char.removeEventListener('mouseenter', () => {});
        char.removeEventListener('mouseleave', () => {});
      });
    }
  }, [animationStarted, loading]);
  
  // Separate useEffect to ensure overflow is restored
  useEffect(() => {
    if (!loading) {
      console.log("Loading state changed to false");
      document.body.style.overflow = originalOverflow.current || 'auto';
    }
  }, [loading]);
  
  // Force exit after 7.5 seconds regardless of animation state
  useEffect(() => {
    const forceExitTimer = setTimeout(() => {
      if (loading) {
        console.log("Force exit triggered");
        document.body.style.overflow = originalOverflow.current || 'auto';
        setLoading(false);
      }
    }, 7500); // 7.5 seconds total maximum
    
    return () => clearTimeout(forceExitTimer);
  }, [loading]);
  
  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d0d0d] overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { 
                duration: 0.8, 
                ease: [0.43, 0.13, 0.23, 0.96] 
              } 
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Rest of splash screen content remains the same */}
            {/* Full-screen animated gradient background */}
            <motion.div 
              className="absolute inset-0"
              animate={{ 
                background: [
                  'radial-gradient(circle at 20% 30%, rgba(74, 222, 128, 0.05) 0%, rgba(13, 13, 13, 0) 50%)',
                  'radial-gradient(circle at 80% 10%, rgba(34, 211, 238, 0.05) 0%, rgba(13, 13, 13, 0) 50%)',
                  'radial-gradient(circle at 40% 80%, rgba(96, 165, 250, 0.05) 0%, rgba(13, 13, 13, 0) 50%)',
                  'radial-gradient(circle at 20% 30%, rgba(74, 222, 128, 0.05) 0%, rgba(13, 13, 13, 0) 50%)',
                ]
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity, 
                repeatType: 'mirror',
                ease: 'linear' 
              }}
            />
            
            {/* Background gradient elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              {/* Animated background elements */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.6, 0.4],
                  x: [0, 30, 0],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
                className="absolute top-20 -left-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-green-400/10 blur-[80px]"
              ></motion.div>
              
              <motion.div 
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.6, 0.4],
                  y: [0, -40, 0]
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5
                }}
                className="absolute -bottom-40 -right-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-blue-400/10 blur-[80px] md:blur-[100px]"
              ></motion.div>
              
              <motion.div
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.5, 0.2],
                  x: [0, -30, 0],
                  y: [0, 20, 0]
                }}
                transition={{ 
                  duration: 7, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
                className="absolute top-1/3 right-[20%] w-[150px] md:w-[300px] h-[150px] md:h-[300px] rounded-full bg-cyan-400/5 blur-[40px] md:blur-[60px]"
              ></motion.div>
              
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                  x: [0, 40, 0],
                  y: [0, -30, 0]
                }}
                transition={{ 
                  duration: 9, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1.5
                }}
                className="absolute bottom-1/3 left-[30%] w-[125px] md:w-[250px] h-[125px] md:h-[250px] rounded-full bg-purple-400/5 blur-[50px] md:blur-[70px]"
              ></motion.div>
              
              <motion.div
                animate={{ 
                  scale: [1, 1.4, 1],
                  opacity: [0.2, 0.4, 0.2],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 11, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 2
                }}
                className="absolute top-[60%] right-[40%] w-[100px] md:w-[200px] h-[100px] md:h-[200px] rounded-full bg-pink-400/5 blur-[40px] md:blur-[60px]"
              ></motion.div>
            </div>
            
            <div className="max-w-5xl w-full relative z-10 py-6 md:py-10">
              <div className="splash-content flex flex-col items-center justify-center px-4 md:px-6">
                {/* Main Content */}
                <div className="relative z-20 text-center">
                  {/* Logo - ARIQ with no frame, just text */}
                  <div 
                    ref={logoRef} 
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold font-[Outfit] tracking-tighter mb-4 md:mb-6 text-[#fffce1] perspective-1000"
                  >
                    ARIQ Systems
                  </div>
                  
                  {/* Slogan with animated underline */}
                  <div className="relative">
                    <div 
                      ref={sloganRef} 
                      className="text-base sm:text-lg md:text-xl font-medium text-[#fffce1]/80 mb-8 md:mb-12"
                    >
                      Next-Gen Solutions for a Fast-Changing World
                    </div>
                    <motion.div 
                      className="h-[2px] w-0 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
                      animate={{ width: ["0%", "80%", "60%", "70%"] }}
                      transition={{ 
                        duration: 2.5, 
                        delay: 2.5,
                        times: [0, 0.6, 0.8, 1],
                        ease: "easeInOut" 
                      }}
                    />
                  </div>
                  
                  {/* Animated dots to show loading */}
                  <div className="mt-6 md:mt-8 flex justify-center space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#fffce1]"
                        animate={{ 
                          opacity: [0.3, 1, 0.3],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Loading indicator - exactly 6 seconds */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 flex justify-center">
              <div className="relative w-32 sm:w-40 md:w-48 h-0.5 md:h-1 bg-[#fffce1]/10 rounded-full overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Main content - simple conditional rendering */}
      {!loading && children}
    </>
  )
}

export default SplashScreen