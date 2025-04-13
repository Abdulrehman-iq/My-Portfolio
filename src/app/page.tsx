// src/app/page.tsx
'use client'

import { useEffect } from 'react'
import Hero from './components/Hero/Hero'
import Introduction from './components/Introduction/Introduction'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from './components/context/ThemeContext'

export default function Home() {
  const { theme, toggleTheme, isDarkMode, styles } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${styles.mainBg}`}>
      {/* Global Theme Toggle Button */}
      <button 
        onClick={toggleTheme} 
        className={`fixed top-24 right-6 z-50 p-3 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-110 ${styles.shadow}`}
        style={{
          backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(28, 28, 30, 0.05)',
          borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(28, 28, 30, 0.1)',
        }}
      >
        {isDarkMode ? (
          <FaSun className="text-xl text-white" />
        ) : (
          <FaMoon className="text-xl text-slate-800" />
        )}
      </button>

      <Hero />
      <Introduction />
    </div>
  )
}