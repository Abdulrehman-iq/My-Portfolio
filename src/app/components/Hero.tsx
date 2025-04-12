'use client'

import { useRef, useEffect, useState } from "react"
import { FaServer, FaReact, FaMobile, FaCode, FaChevronDown, FaSun, FaMoon, FaArrowRight } from 'react-icons/fa'

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const iconGridRef = useRef<HTMLDivElement>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const impactWords = ["Innovation", "Solutions", "Technology", "Excellence", "Future"];

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Word cycling animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % impactWords.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Initial animations
  useEffect(() => {
    // Heading animation
    const headingElement = headingRef.current;
    const subheadingElement = subheadingRef.current;
    const taglineElement = taglineRef.current;
    const buttonElement = buttonRef.current;
    const iconGridElement = iconGridRef.current;
    
    if (headingElement) {
      headingElement.style.opacity = '0';
      headingElement.style.transform = 'translateY(30px)';
      
      setTimeout(() => {
        headingElement.style.opacity = '1';
        headingElement.style.transform = 'translateY(0)';
        headingElement.style.transition = 'opacity 1s ease, transform 1s ease';
      }, 300);
    }
    
    if (subheadingElement) {
      subheadingElement.style.opacity = '0';
      
      setTimeout(() => {
        subheadingElement.style.opacity = '1';
        subheadingElement.style.transition = 'opacity 1s ease';
      }, 800);
    }

    if (taglineElement) {
      taglineElement.style.opacity = '0';
      taglineElement.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        taglineElement.style.opacity = '1';
        taglineElement.style.transform = 'translateY(0)';
        taglineElement.style.transition = 'opacity 1s ease, transform 1s ease';
      }, 1000);
    }

    if (buttonElement) {
      buttonElement.style.opacity = '0';
      buttonElement.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        buttonElement.style.opacity = '1';
        buttonElement.style.transform = 'translateY(0)';
        buttonElement.style.transition = 'opacity 1s ease, transform 1s ease';
      }, 1200);
    }

    if (iconGridElement) {
      iconGridElement.style.opacity = '0';
      
      setTimeout(() => {
        iconGridElement.style.opacity = '1';
        iconGridElement.style.transition = 'opacity 1s ease';
      }, 1500);
    }
  }, []);

  return (
    <section className={`relative flex items-center justify-center min-h-screen overflow-hidden ${
      darkMode ? 'bg-[#1C1C1E]' : 'bg-gradient-to-b from-[#F5F5F7] to-[#E8F0FE]'
    } px-4 font-['Inter']`}>
      {/* Animated background elements - only in light mode */}
      {!darkMode && (
        <>
          <div className="absolute top-40 left-20 w-28 h-28 rounded-full bg-gradient-to-r from-[#0A84FF]/20 to-[#64D2FF]/20 animate-float-slow"></div>
          <div className="absolute bottom-40 right-20 w-20 h-20 rounded-full bg-gradient-to-r from-[#64D2FF]/20 to-[#0A84FF]/20 animate-float-medium"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-gradient-to-r from-[#64D2FF]/10 to-[#0A84FF]/10 animate-float-fast"></div>
          <div className="absolute bottom-1/3 left-1/4 w-12 h-12 rounded-full bg-gradient-to-r from-[#0A84FF]/10 to-[#64D2FF]/10 animate-float-medium"></div>
        </>
      )}
      
      {/* Dark mode toggle - moved further down */}
      <button 
        onClick={toggleDarkMode} 
        className="absolute top-24 right-6 z-30 p-3 rounded-full backdrop-blur-md border shadow-lg transition-all duration-300 hover:scale-110"
        style={{
          backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(28, 28, 30, 0.05)',
          borderColor: darkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(28, 28, 30, 0.1)',
          boxShadow: darkMode ? '0 8px 32px rgba(0, 0, 0, 0.2)' : '0 8px 32px rgba(10, 132, 255, 0.15)'
        }}
      >
        {darkMode ? (
          <FaSun className="text-xl text-[#F5F5F7]" />
        ) : (
          <FaMoon className="text-xl text-[#1C1C1E]" />
        )}
      </button>
      
      {/* Modern navbar - enhanced with animation */}
      <div className="absolute top-0 left-0 w-full z-20 px-6 py-4 flex justify-between items-center backdrop-blur-md border-b transition-all duration-300"
        style={{
          backgroundColor: darkMode ? 'rgba(28, 28, 30, 0.7)' : 'rgba(255, 255, 255, 0.7)',
          borderColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(10, 132, 255, 0.1)'
        }}
      >
        <div className="text-2xl font-bold tracking-tight relative overflow-hidden group">
          <span className={`${darkMode ? 'text-white' : 'text-[#1C1C1E]'}`}>Abdulrehman Iqbal</span>
          <span className="text-[#0A84FF]">.</span>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0A84FF] group-hover:w-full transition-all duration-300"></div>
        </div>
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Projects', 'Skills', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`font-medium relative overflow-hidden group ${
                darkMode ? 'text-white/80 hover:text-white' : 'text-[#2C2C2E]/80 hover:text-[#2C2C2E]'
              } transition-colors`}
            >
              {item}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0A84FF] group-hover:w-full transition-all duration-300"></div>
            </a>
          ))}
        </nav>
      </div>

      {/* Subtle grid pattern - enhanced for both modes */}
      <div className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, ${darkMode ? '#ffffff10' : '#0A84FF08'} 1px, transparent 1px), linear-gradient(to bottom, ${darkMode ? '#ffffff10' : '#0A84FF08'} 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Minimal decorative elements - enhanced for both modes */}
      <div className={`absolute top-20 left-10 w-64 h-64 rounded-full ${darkMode ? 'bg-[#0A84FF]/5' : 'bg-[#0A84FF]/10'} filter blur-3xl`}></div>
      <div className={`absolute bottom-20 right-10 w-64 h-64 rounded-full ${darkMode ? 'bg-[#64D2FF]/5' : 'bg-[#64D2FF]/10'} filter blur-3xl`}></div>

      <div className="relative z-10 text-center max-w-5xl mx-auto p-8">
        <h1 
          ref={headingRef} 
          className={`text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 ${darkMode ? 'text-white' : 'text-[#1C1C1E]'} font-['Poppins']`}
        >
          Transforming Ideas Into <br />
          <span className={`${darkMode ? 'text-[#0A84FF]' : 'bg-gradient-to-r from-[#0A84FF] to-[#64D2FF] text-transparent bg-clip-text'}`}>
            Digital Reality
          </span>
        </h1>
        
        <div ref={subheadingRef} className="relative h-16 mb-8">
          <div className="relative h-12 flex justify-center">
            {impactWords.map((word, index) => (
              <span 
                key={word} 
                className={`absolute text-3xl md:text-4xl font-semibold ${
                  darkMode ? 'text-[#64D2FF]' : 'text-[#0A84FF]'
                } transition-all duration-500 ease-in-out ${
                  index === currentWordIndex 
                    ? 'opacity-100 transform-none' 
                    : 'opacity-0 translate-y-5'
                } font-['Poppins']`}
              >
                {word}
              </span>
            ))}
          </div>
          <div className={`w-24 h-[3px] ${
            darkMode ? 'bg-[#0A84FF]' : 'bg-gradient-to-r from-[#0A84FF] to-[#64D2FF]'
          } mx-auto mt-2`}></div>
        </div>
        
        <p 
          ref={taglineRef} 
          className={`text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10 ${
            darkMode ? 'text-white/80' : 'text-[#2C2C2E]'
          } font-['Roboto']`}
        >
          Cutting-edge development solutions for the modern digital landscape.
          Building tomorrow's technology with today's best practices.
        </p>
        
        <div ref={buttonRef} className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-16">
          <a 
            href="#services" 
            className={`group px-8 py-3.5 font-medium rounded-lg shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center ${
              darkMode 
                ? 'bg-[#0A84FF] text-white hover:bg-[#0A84FF]/90' 
                : 'bg-gradient-to-r from-[#0A84FF] to-[#64D2FF] text-white'
            }`}
          >
            Discover Services
            <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a 
            href="#showcase" 
            className={`group px-8 py-3.5 border-2 font-medium rounded-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center ${
              darkMode 
                ? 'border-white/20 text-white hover:bg-white/5' 
                : 'border-[#0A84FF]/30 text-[#1C1C1E] hover:border-[#0A84FF] hover:bg-[#0A84FF]/5'
            }`}
          >
            View Showcase.
            <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transform -translate-x-3 group-hover:translate-x-0 transition-all duration-300" />
          </a>
        </div>
        
        <div ref={iconGridRef} className="flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="flex flex-col items-center group">
            <div className={`p-4 rounded-xl mb-3 group-hover:-translate-y-2 group-hover:shadow-lg transition-all duration-300 ${
              darkMode 
                ? 'bg-white/5 group-hover:bg-white/10' 
                : 'bg-white group-hover:bg-gradient-to-br from-[#0A84FF]/5 to-[#64D2FF]/5 border border-[#0A84FF]/10'
            }`}>
              <FaReact className={`text-4xl ${darkMode ? 'text-[#0A84FF]' : 'text-[#0A84FF]'}`} />
            </div>
            <span className={`text-sm font-medium ${darkMode ? 'text-white/70' : 'text-[#2C2C2E]'}`}>Web Apps</span>
          </div>
          <div className="flex flex-col items-center group">
            <div className={`p-4 rounded-xl mb-3 group-hover:-translate-y-2 group-hover:shadow-lg transition-all duration-300 ${
              darkMode 
                ? 'bg-white/5 group-hover:bg-white/10' 
                : 'bg-white group-hover:bg-gradient-to-br from-[#0A84FF]/5 to-[#64D2FF]/5 border border-[#0A84FF]/10'
            }`}>
              <FaMobile className={`text-4xl ${darkMode ? 'text-[#64D2FF]' : 'text-[#64D2FF]'}`} />
            </div>
            <span className={`text-sm font-medium ${darkMode ? 'text-white/70' : 'text-[#2C2C2E]'}`}>Mobile</span>
          </div>
          <div className="flex flex-col items-center group">
            <div className={`p-4 rounded-xl mb-3 group-hover:-translate-y-2 group-hover:shadow-lg transition-all duration-300 ${
              darkMode 
                ? 'bg-white/5 group-hover:bg-white/10' 
                : 'bg-white group-hover:bg-gradient-to-br from-[#0A84FF]/5 to-[#64D2FF]/5 border border-[#0A84FF]/10'
            }`}>
              <FaServer className={`text-4xl ${darkMode ? 'text-[#0A84FF]' : 'text-[#0A84FF]'}`} />
            </div>
            <span className={`text-sm font-medium ${darkMode ? 'text-white/70' : 'text-[#2C2C2E]'}`}>Backend</span>
          </div>
          <div className="flex flex-col items-center group">
            <div className={`p-4 rounded-xl mb-3 group-hover:-translate-y-2 group-hover:shadow-lg transition-all duration-300 ${
              darkMode 
                ? 'bg-white/5 group-hover:bg-white/10' 
                : 'bg-white group-hover:bg-gradient-to-br from-[#0A84FF]/5 to-[#64D2FF]/5 border border-[#0A84FF]/10'
            }`}>
              <FaCode className={`text-4xl ${darkMode ? 'text-[#64D2FF]' : 'text-[#64D2FF]'}`} />
            </div>
            <span className={`text-sm font-medium ${darkMode ? 'text-white/70' : 'text-[#2C2C2E]'}`}>Cloud</span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer group">
        <div className={`w-10 h-10 flex items-center justify-center rounded-full mb-2 group-hover:scale-110 transition-all duration-300 ${
          darkMode 
            ? 'bg-white/10' 
            : 'bg-white border border-[#0A84FF]/20 shadow-md'
        }`}>
          <FaChevronDown className={`${
            darkMode ? 'text-white/70' : 'text-[#0A84FF]'
          } animate-bounce`} />
        </div>
        <span className={`text-sm font-medium tracking-wide ${
          darkMode ? 'text-white/70' : 'text-[#2C2C2E]'
        }`}>Explore</span>
      </div>

      {/* Add animation keyframes in a style tag */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.5; }
          25% { transform: translateY(-20px) translateX(10px); opacity: 0.8; }
          50% { transform: translateY(0) translateX(20px); opacity: 0.6; }
          75% { transform: translateY(20px) translateX(10px); opacity: 0.8; }
        }
        .animate-float {
          animation: float 8s infinite ease-in-out;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(15px); }
        }
        .animate-float-slow {
          animation: float-slow 15s infinite ease-in-out;
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(20px) translateX(-15px); }
        }
        .animate-float-medium {
          animation: float-medium 12s infinite ease-in-out;
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(-20px); }
        }
        .animate-float-fast {
          animation: float-fast 10s infinite ease-in-out;
        }
      `}</style>
    </section>
  )
}