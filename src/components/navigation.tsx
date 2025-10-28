'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './theme-toggle';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('welcome');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Détection de la section active
      const sections = ['welcome', 'about', 'values', 'goals', 'course'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.querySelector(`.${section}`);
        if (element) {
          const offsetTop = (element as HTMLElement).offsetTop;
          const offsetHeight = (element as HTMLElement).offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionClass: string) => {
    const element = document.querySelector(`.${sectionClass}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'welcome', label: language === 'fr' ? 'Accueil' : 'Home', icon: 'fa-home' },
    { id: 'about', label: language === 'fr' ? 'À propos' : 'About', icon: 'fa-user' },
    { id: 'values', label: language === 'fr' ? 'Valeurs' : 'Values', icon: 'fa-heart' },
    { id: 'goals', label: language === 'fr' ? 'Objectifs' : 'Goals', icon: 'fa-target' },
    { id: 'course', label: language === 'fr' ? 'Parcours' : 'Journey', icon: 'fa-graduation-cap' },
  ];

  const handleMenuItemClick = (sectionClass: string) => {
    scrollToSection(sectionClass);
    setIsMenuOpen(false);
  };

  const handleDownloadCV = () => {
    console.log('Téléchargement du CV');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-bold text-xl"
          >
            FV
          </motion.div>
          
          {/* Bouton hamburger */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-current transition-all"
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-current transition-all"
              />
              <motion.span
                animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-current transition-all"
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Menu mobile plein écran */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />

            {/* Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white dark:bg-gray-900 z-50 shadow-2xl overflow-y-auto"
            >
              <div className="flex flex-col h-full p-6">
                {/* Header avec bouton fermer */}
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold">Menu</h2>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <i className="fas fa-times text-xl"></i>
                  </motion.button>
                </div>

                {/* Navigation items */}
                <nav className="flex-1">
                  <ul className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <button
                          onClick={() => handleMenuItemClick(item.id)}
                          className={`w-full flex items-center space-x-4 px-4 py-3 rounded-lg transition-all ${
                            activeSection === item.id
                              ? 'bg-blue-600 text-white'
                              : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                          }`}
                        >
                          <i className={`fas ${item.icon} text-lg w-6`}></i>
                          <span className="text-lg">{item.label}</span>
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Bouton télécharger CV */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  onClick={handleDownloadCV}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mb-6"
                >
                  <i className="fas fa-download"></i>
                  <span>{language === 'fr' ? 'Télécharger mon CV' : 'Download my CV'}</span>
                </motion.button>

                {/* Langue et Thème */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-4"
                >
                  {/* Sélecteur de langue */}
                  <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <span className="text-sm font-medium">
                      <i className="fas fa-language mr-2"></i>
                      {language === 'fr' ? 'Langue' : 'Language'}
                    </span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setLanguage('fr')}
                        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                          language === 'fr'
                            ? 'bg-blue-600 text-white'
                            : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                      >
                        FR
                      </button>
                      <button
                        onClick={() => setLanguage('en')}
                        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                          language === 'en'
                            ? 'bg-blue-600 text-white'
                            : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                      >
                        EN
                      </button>
                    </div>
                  </div>

                  {/* Sélecteur de thème */}
                  <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <span className="text-sm font-medium">
                      <i className="fas fa-palette mr-2"></i>
                      {language === 'fr' ? 'Thème' : 'Theme'}
                    </span>
                    <ThemeToggle />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}