
// app/context/ThemeContext.tsx
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

// Define theme styles for easy access throughout the app
export interface ThemeStyles {
  // Backgrounds
  mainBg: string;
  cardBg: string;
  glassBg: string;
  accentBg: string;
  
  // Text colors
  headingText: string;
  bodyText: string;
  accentText: string;
  mutedText: string;
  
  // Borders and shadows
  border: string;
  shadow: string;
  
  // Gradients
  gradient: string;
  buttonGradient: string;
  
  // Component specific styles
  pill: string;
  card: string;
  button: {
    primary: string;
    secondary: string;
  }
}

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDarkMode: boolean;
  styles: ThemeStyles;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const isDarkMode = theme === 'dark';
  
  // Define theme styles based on current theme
  const styles: ThemeStyles = {
    // Backgrounds
    mainBg: isDarkMode 
      ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
      : 'bg-gradient-to-br from-slate-50 via-white to-blue-50',
    
    cardBg: isDarkMode 
      ? 'bg-slate-800/80 backdrop-blur-sm border border-slate-700/50' 
      : 'bg-white backdrop-blur-sm border border-slate-100 shadow-sm',
    
    glassBg: isDarkMode
      ? 'bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 shadow-lg shadow-slate-900/30'
      : 'bg-white backdrop-blur-sm shadow-xl border border-slate-100',
    
    accentBg: isDarkMode
      ? 'bg-slate-800 text-blue-400 border border-slate-700'
      : 'bg-blue-50 text-blue-600 border border-blue-100',
    
    // Text colors
    headingText: isDarkMode 
      ? 'text-white' 
      : 'text-slate-900',
    
    bodyText: isDarkMode 
      ? 'text-slate-300' 
      : 'text-slate-700',
    
    accentText: isDarkMode 
      ? 'text-blue-400' 
      : 'text-blue-600',
    
    mutedText: isDarkMode 
      ? 'text-slate-400' 
      : 'text-slate-500',
    
    // Borders and shadows
    border: isDarkMode 
      ? 'border-slate-700/50' 
      : 'border-slate-100',
    
    shadow: isDarkMode 
      ? 'shadow-lg shadow-black/20' 
      : 'shadow-lg shadow-blue-500/10',
    
    // Gradients
    gradient: isDarkMode 
      ? 'text-blue-500' 
      : 'bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600',
    
    buttonGradient: isDarkMode
      ? 'bg-gradient-to-r from-blue-600 to-indigo-700 shadow-blue-500/20'
      : 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-blue-500/20',
    
    // Component specific styles
    pill: isDarkMode
      ? 'bg-slate-800/80 backdrop-blur-sm border border-slate-700/50'
      : 'bg-white backdrop-blur-sm border border-slate-100 shadow-sm',
    
    card: isDarkMode
      ? 'bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 shadow-lg shadow-slate-900/30'
      : 'bg-white backdrop-blur-sm shadow-xl border border-slate-100',
    
    button: {
      primary: isDarkMode
        ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30'
        : 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30',
      
      secondary: isDarkMode
        ? 'border-2 border-blue-500 text-blue-400 hover:bg-blue-900/20'
        : 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50'
    }
  };

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
      try {
        // Load theme from localStorage if available
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
          setTheme(savedTheme);
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          // Fall back to system preference
          setTheme('dark');
        }
      } catch (error) {
        console.error('Error accessing localStorage:', error);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        // Apply theme to document
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        
        // Save theme to localStorage
        localStorage.setItem('theme', theme);
      } catch (error) {
        console.error('Error setting theme:', error);
      }
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkMode, styles }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}