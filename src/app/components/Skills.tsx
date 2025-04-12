'use client'

import { motion } from 'framer-motion'
import { FaPython, FaDatabase, FaPhp, FaReact, FaNodeJs, FaMobile, FaServer, FaCode, FaLayerGroup, FaGitAlt } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiFlutter, SiFirebase, SiRedux, SiGraphql, SiApple, SiAndroid, SiSwift, SiKotlin, SiAwsamplify } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'

// Core skills and languages
const coreSkills = [
  {
    name: "Languages",
    skills: [
      { name: "Python", icon: <FaPython className="text-3xl md:text-4xl mb-3 text-blue-500" /> },
      { name: "SQL", icon: <FaDatabase className="text-3xl md:text-4xl mb-3 text-blue-500" /> },
      { name: "PHP", icon: <FaPhp className="text-3xl md:text-4xl mb-3 text-blue-500" /> },
      { name: "JavaScript", icon: <FaCode className="text-3xl md:text-4xl mb-3 text-yellow-400" /> }
    ]
  },
  {
    name: "Full-Stack MERN",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-3xl md:text-4xl mb-3 text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-3xl md:text-4xl mb-3 text-gray-400" /> },
      { name: "React.js", icon: <FaReact className="text-3xl md:text-4xl mb-3 text-blue-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-3xl md:text-4xl mb-3 text-green-600" /> }
    ]
  }
]

// Web App Development specific skills
const webSkills = [
  { name: "Next.js", icon: <SiNextdotjs className="text-3xl md:text-4xl mb-3 text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-3xl md:text-4xl mb-3 text-cyan-500" /> },
  { name: "Redux", icon: <SiRedux className="text-3xl md:text-4xl mb-3 text-purple-500" /> },
  { name: "GraphQL", icon: <SiGraphql className="text-3xl md:text-4xl mb-3 text-pink-500" /> },
  { name: "RESTful API", icon: <FaServer className="text-3xl md:text-4xl mb-3 text-indigo-400" /> },
  { name: "Git/GitHub", icon: <FaGitAlt className="text-3xl md:text-4xl mb-3 text-orange-500" /> }
]

// Mobile App Development specific skills
const mobileSkills = [
  { name: "React Native", icon: <TbBrandReactNative className="text-3xl md:text-4xl mb-3 text-blue-400" /> },
  { name: "Flutter", icon: <SiFlutter className="text-3xl md:text-4xl mb-3 text-blue-500" /> },
  { name: "iOS", icon: <SiApple className="text-3xl md:text-4xl mb-3 text-white" /> },
  { name: "Android", icon: <SiAndroid className="text-3xl md:text-4xl mb-3 text-green-500" /> }
]

// Mobile techniques and technologies
const mobileTechniques = [
  { 
    name: "State Management", 
    description: "Redux, Context API, MobX",
    icon: <FaLayerGroup className="text-2xl text-purple-500" />
  },
  { 
    name: "Native APIs", 
    description: "Camera, Geolocation, Push Notifications",
    icon: <SiSwift className="text-2xl text-orange-500" />
  },
  { 
    name: "Offline Data", 
    description: "AsyncStorage, SQLite, Realm",
    icon: <FaDatabase className="text-2xl text-blue-400" />
  },
  { 
    name: "Backend Integration", 
    description: "Firebase, AWS Amplify, GraphQL",
    icon: <SiFirebase className="text-2xl text-yellow-500" />
  },
  { 
    name: "Animation", 
    description: "Animated API, Reanimated, Lottie",
    icon: <SiKotlin className="text-2xl text-purple-400" />
  },
  { 
    name: "CI/CD", 
    description: "Fastlane, CodePush, App Center",
    icon: <SiAwsamplify className="text-2xl text-orange-400" />
  }
]

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const categoryVariants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
}

const Skills = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#1a1d3a] to-[#2a1a45] px-6 py-20 text-white overflow-x-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full bg-white/5 animate-float"
            style={{
              width: `${Math.floor(Math.random() * 8) + 4}px`,
              height: `${Math.floor(Math.random() * 8) + 4}px`,
              left: `${Math.floor(Math.random() * 90) + 5}%`,
              top: `${Math.floor(Math.random() * 90) + 5}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${Math.floor(Math.random() * 10) + 5}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Digital circuit pattern - subtle in background */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M11%2018c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm48%2025c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm-43-7c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zm63%2031c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zM34%2090c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zm56-76c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zM12%2086c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm28-65c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm23-11c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zm-6%2060c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm29%2022c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zM32%2063c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zm57-13c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zm-9-21c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zM60%2091c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zM35%2041c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zM12%2060c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202z%22%20fill%3D%22%235654b3%22%20fill-opacity%3D%220.1%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-purple-300 text-transparent bg-clip-text">Expertise</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto my-4"></div>
          <p className="text-lg text-indigo-200 max-w-2xl mx-auto">
            A comprehensive toolkit of languages, frameworks, and technologies
            that enable me to build end-to-end solutions.
          </p>
        </motion.div>

        {/* Core Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-16 mb-20"
        >
          {coreSkills.map((category, idx) => (
            <motion.div
              key={idx}
              variants={categoryVariants}
              className="mb-12"
            >
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-bold mb-8 text-center"
              >
                {category.name}
                <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-3"></div>
              </motion.h3>
              
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 0 20px rgba(123, 80, 217, 0.4)'
                    }}
                    className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-sm border border-indigo-500/20 rounded-lg p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 h-full"
                  >
                    {skill.icon}
                    <h4 className="text-lg font-medium text-white">{skill.name}</h4>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Web App Development Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-500"></div>
            <h2 className="text-3xl font-bold mb-8 ml-4">Web App Development</h2>
          </div>
          
          <div className="pl-4">
            <p className="text-indigo-200 mb-8 max-w-3xl">
              I create responsive, performant web applications using modern frameworks and best practices.
              My focus is on building scalable front-end architectures with excellent user experiences.
            </p>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-10"
            >
              {webSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-sm border border-indigo-500/20 rounded-lg p-5 flex flex-col items-center justify-center hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
                >
                  {skill.icon}
                  <h4 className="text-base font-medium text-white text-center">{skill.name}</h4>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Web Development Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/10"
            >
              <h3 className="text-xl font-semibold mb-4 text-indigo-300">My Web Development Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 bg-indigo-900/20 rounded-lg border border-indigo-600/20">
                  <span className="text-lg font-bold text-indigo-400">01.</span>
                  <h4 className="font-medium mb-2">Architecture Planning</h4>
                  <p className="text-sm text-indigo-200/80">Component structure, state management, and routing strategy</p>
                </div>
                <div className="p-4 bg-indigo-900/20 rounded-lg border border-indigo-600/20">
                  <span className="text-lg font-bold text-indigo-400">02.</span>
                  <h4 className="font-medium mb-2">Responsive Design</h4>
                  <p className="text-sm text-indigo-200/80">Mobile-first approach with Tailwind CSS and modern layouts</p>
                </div>
                <div className="p-4 bg-indigo-900/20 rounded-lg border border-indigo-600/20">
                  <span className="text-lg font-bold text-indigo-400">03.</span>
                  <h4 className="font-medium mb-2">Performance Optimization</h4>
                  <p className="text-sm text-indigo-200/80">Code splitting, lazy loading, and image optimization</p>
                </div>
                <div className="p-4 bg-indigo-900/20 rounded-lg border border-indigo-600/20">
                  <span className="text-lg font-bold text-indigo-400">04.</span>
                  <h4 className="font-medium mb-2">Testing & Deployment</h4>
                  <p className="text-sm text-indigo-200/80">Comprehensive testing and CI/CD pipeline setup</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Mobile App Development Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="relative">
            <div className="absolute -right-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-indigo-500"></div>
            <h2 className="text-3xl font-bold mb-8 text-right mr-4">Mobile App Development</h2>
          </div>
          
          <div className="pr-4">
            <p className="text-indigo-200 mb-8 max-w-3xl ml-auto text-right">
              I develop cross-platform mobile applications that deliver native-like experiences 
              with the efficiency of sharing code across platforms. My mobile apps are optimized 
              for performance and user experience.
            </p>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10"
            >
              {mobileSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-sm border border-purple-500/20 rounded-lg p-5 flex flex-col items-center justify-center hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
                >
                  {skill.icon}
                  <h4 className="text-base font-medium text-white text-center">{skill.name}</h4>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Mobile Development Techniques */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <h3 className="text-xl font-semibold mb-6 text-purple-300">Mobile Development Techniques</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {mobileTechniques.map((technique, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm rounded-lg p-5 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-purple-900/30 rounded-lg mr-3">
                        {technique.icon}
                      </div>
                      <h4 className="font-semibold text-white">{technique.name}</h4>
                    </div>
                    <p className="text-indigo-200/80 text-sm">{technique.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Mobile App Features Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-14 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Mobile App Features I Implement</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                  <span className="text-indigo-200">Authentication & Authorization</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                  <span className="text-indigo-200">Offline-First Architecture</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                  <span className="text-indigo-200">Push Notifications</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                  <span className="text-indigo-200">In-App Purchases</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                  <span className="text-indigo-200">Social Media Integration</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                  <span className="text-indigo-200">Maps & Geolocation</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                  <span className="text-indigo-200">Real-Time Data Syncing</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                  <span className="text-indigo-200">Analytics & Crash Reporting</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Proficiency Levels */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-10 text-center">
            Proficiency Levels
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-3"></div>
          </h3>
          
          <div className="space-y-6">
            {[
              { name: "Frontend Development", percentage: 95 },
              { name: "Backend Development", percentage: 90 },
              { name: "Mobile App Development", percentage: 85 },
              { name: "Database Management", percentage: 88 },
              { name: "UI/UX Implementation", percentage: 80 }
            ].map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-indigo-200 font-medium">{skill.name}</span>
                  <span className="text-indigo-300">{skill.percentage}%</span>
                </div>
                <div className="h-2 w-full bg-indigo-900/40 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
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
      `}</style>
    </section>
  )
}

export default Skills