import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaLinux, FaReact, FaNodeJs, FaApple, FaDatabase, FaGithub, FaCode, FaServer, FaJs, FaAndroid } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiExpress, SiFlutter, SiAndroidstudio } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { useTheme } from '../context/ThemeContext';

const technologies = {
  frontend: [
    { icon: <FaReact className="text-[#61DAFB]" />, name: 'React' },
    { icon: <SiNextdotjs className="text-black dark:text-white" />, name: 'Next.js' },
    { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: 'Tailwind CSS' },
    { icon: <FaJs className="text-[#F7DF1E]" />, name: 'JavaScript' },
    { icon: <SiTypescript className="text-[#3178C6]" />, name: 'TypeScript' },
  ],
  backend: [
    { icon: <FaNodeJs className="text-[#339933]" />, name: 'Node.js' },
    { icon: <SiExpress className="text-gray-800 dark:text-gray-200" />, name: 'Express' },
    { icon: <SiMongodb className="text-[#47A248]" />, name: 'MongoDB' },
    { icon: <SiPostgresql className="text-[#4169E1]" />, name: 'PostgreSQL' },
    { icon: <FaDatabase className="text-indigo-500" />, name: 'SQL' },
  ],
  mobile: [
    { icon: <TbBrandReactNative className="text-[#61DAFB]" />, name: 'React Native' },
    { icon: <SiFlutter className="text-[#02569B]" />, name: 'Flutter' },
    { icon: <FaAndroid className="text-[#3DDC84]" />, name: 'Android' },
    { icon: <FaApple className="text-gray-800 dark:text-gray-200" />, name: 'iOS' },
  ],
  tools: [
    { icon: <FaGithub className="text-gray-800 dark:text-gray-200" />, name: 'GitHub' },
    { icon: <FaCode className="text-blue-500" />, name: 'VS Code' },
    { icon: <SiAndroidstudio className="text-[#3DDC84]" />, name: 'Android Studio' },
    { icon: <FaLinux className="text-[#FCC624]" />, name: 'Linux' },
  ],
};

const Introduction = () => {
  const codeBlockRef = useRef<HTMLDivElement>(null);
  const { isDarkMode, styles } = useTheme();
  
  useEffect(() => {
    // Simulate code typing animation
    const codeLines = [
      "function Developer() {",
      "  const [passion, setPassion] = useState('high');",
      "  const [coffee, setCoffee] = useState('required');",
      "",
      "  useEffect(() => {",
      "    const interval = setInterval(() => {",
      "      solveProblems();",
      "      buildCoolStuff();",
      "    }, 24 * 60 * 60 * 1000); // daily",
      "    ",
      "    return () => clearInterval(interval);",
      "  }, []);",
      "",
      "  return (",
      "    <FullStackDeveloper",
      "      creativeSolutions={true}",
      "      neverStopLearning={true}",
      "    />",
      "  );",
      "}"
    ];
    
    const animateCode = async () => {
      if (!codeBlockRef.current) return;
      
      codeBlockRef.current.innerHTML = '';
      
      for (let line of codeLines) {
        const lineElement = document.createElement('div');
        lineElement.className = 'mb-1 opacity-0 transition-opacity';
        
        if (line === '') {
          lineElement.innerHTML = '&nbsp;';
        } else {
          // Add syntax highlighting
          line = line.replace(/function|const|return|useEffect/g, '<span class="text-purple-500">$&</span>');
          line = line.replace(/useState|setInterval|clearInterval/g, '<span class="text-blue-400">$&</span>');
          line = line.replace(/'[^']*'/g, '<span class="text-green-400">$&</span>');
          line = line.replace(/\{|\}|\(|\)|;|<|>|\[|\]/g, '<span class="text-gray-400">$&</span>');
          line = line.replace(/true/g, '<span class="text-yellow-400">$&</span>');
          
          lineElement.innerHTML = line;
        }
        
        codeBlockRef.current.appendChild(lineElement);
        
        await new Promise(resolve => setTimeout(resolve, 100));
        lineElement.classList.remove('opacity-0');
        lineElement.classList.add('opacity-100');
      }
    };
    
    setTimeout(animateCode, 1000);
  }, []);

  return (
    <section className={`min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-white'} px-4 md:px-0 py-20 font-['Inter']`}>
      {/* Background elements - keep subtle shapes but make them very light */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Abstract shape 1 - reduced opacity */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className={`absolute top-20 -left-20 w-[500px] h-[500px] rounded-full ${
            isDarkMode ? 'bg-blue-600/5' : 'bg-blue-500/3'
          } blur-[80px]`}
        ></motion.div>
        
        {/* Abstract shape 2 - reduced opacity */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className={`absolute -bottom-40 -right-20 w-[600px] h-[600px] rounded-full ${
            isDarkMode ? 'bg-indigo-600/5' : 'bg-indigo-500/3'
          } blur-[100px]`}
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-12">
          {/* Left column - Text content */}
          <motion.div 
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className={`text-4xl md:text-5xl font-extrabold mb-6 ${styles.headingText} leading-tight font-['Poppins']`}>
              <span className={styles.gradient}>
                Hi, I'm Abdulrehman Iqbal
              </span>
            </h1>
            
            <h2 className={`text-xl md:text-2xl font-semibold mb-6 ${styles.accentText}`}>
              Full-Stack Web & Mobile Developer
            </h2>
            
            <div className={`mb-8 ${styles.bodyText} text-lg text-justify`}>
              <p className="mb-4">
                I'm a Full Stack Developer skilled in building both mobile and web applications. I've developed websites for UK-based companies and created several personal projects to stay ahead in tech. From responsive websites to intuitive mobile apps, I focus on clean design and solid performance to help businesses grow and stand out.
              </p>
              <p>
                I'm passionate about building technology that makes a positive impact, focusing on 
                performance, accessibility, and intuitive user experiences. Every project is an opportunity 
                to learn something new and push my creative boundaries.
              </p>
            </div>
            
            <div className="mb-12">
              <div className="space-y-6">
                {Object.entries(technologies).map(([category, techs], categoryIndex) => (
                  <div key={category} className="mb-6">
                    <h3 className={`text-sm uppercase tracking-wider font-medium mb-3 ${styles.mutedText}`}>
                      {category === 'frontend' ? 'FRONTEND' : 
                       category === 'backend' ? 'BACKEND' : 
                       category === 'mobile' ? 'MOBILE DEVELOPMENT' : 'TOOLS & PLATFORMS'}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {techs.map((tech, index) => (
                        <motion.div
                          key={tech.name}
                          className={`flex items-center gap-2 px-4 py-2 rounded-full ${styles.pill}`}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: categoryIndex * 0.1 + index * 0.05, duration: 0.5 }}
                        >
                          <span className="text-xl">{tech.icon}</span>
                          <span className={`text-sm font-medium ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>{tech.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex space-x-4">
              <motion.button 
                className={`px-6 py-3 text-white font-medium rounded-xl shadow-md transition-all duration-200 ${styles.button.primary}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
              <motion.button 
                className={`px-6 py-3 font-medium rounded-xl transition-colors duration-200 ${styles.button.secondary}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>
          
          {/* Right column - Visual content */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative">
              {/* Code Block */}
              <div className="rounded-xl shadow-2xl overflow-hidden bg-gray-900">
                <div className="flex items-center space-x-2 px-4 py-2 bg-gray-800">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-gray-400 text-sm ml-2">Developer.js</span>
                </div>
                <div className="p-5 font-mono text-sm text-gray-300 overflow-hidden h-[400px]" ref={codeBlockRef}>
                  {/* Code content will be populated by the useEffect */}
                </div>
              </div>
              
              {/* Floating elements - keeping these for visual interest but with solid colors */}
              <motion.div 
                className="absolute -top-4 -right-4 w-24 h-24 rounded-lg opacity-50 blur-lg bg-blue-500"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              />
              <motion.div 
                className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-50 blur-xl bg-indigo-500"
                animate={{ 
                  scale: [1, 1.3, 1],
                  x: [0, 10, 0],
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              />
              
              {/* Floating icons */}
              {[
                { Icon: FaReact, color: "#61DAFB", size: 1 }, 
                { Icon: TbBrandReactNative, color: "#61DAFB", size: 0.9 }, 
                { Icon: FaServer, color: "#FF6B6B", size: 1.1 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="absolute text-xl text-white"
                  style={{
                    top: `${20 + index * 25}%`,
                    right: `${-5 - index * 5}%`,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: index * 0.8,
                  }}
                >
                  <div 
                    className="bg-blue-600 p-3 rounded-lg shadow-lg"
                    style={{ transform: `scale(${item.size})` }}
                  >
                    <item.Icon style={{ color: item.color }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;