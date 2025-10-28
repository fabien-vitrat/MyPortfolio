'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      document.body.className = savedTheme === 'dark' ? 'dark_theme' : 'light_theme';
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    const themeClass = newTheme ? 'dark_theme' : 'light_theme';
    document.body.className = themeClass;
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-gray-300 dark:bg-gray-600 transition-colors"
    >
      <motion.div
        animate={{ x: isDark ? 28 : 2 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="absolute top-1 w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center"
      >
        {isDark ? (
          <Moon className="w-3 h-3 text-blue-600" />
        ) : (
          <Sun className="w-3 h-3 text-yellow-500" />
        )}
      </motion.div>
    </motion.button>
  );
}