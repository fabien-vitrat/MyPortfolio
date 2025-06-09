'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('welcome');

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
    { id: 'welcome', label: 'Accueil', icon: 'fa-home' },
    { id: 'about', label: 'À propos', icon: 'fa-user' },
    { id: 'values', label: 'Valeurs', icon: 'fa-heart' },
    { id: 'goals', label: 'Objectifs', icon: 'fa-target' },
    { id: 'course', label: 'Parcours', icon: 'fa-graduation-cap' },
  ];

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
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <i className={`fas ${item.icon}`}></i>
                <span>{item.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Menu mobile */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-gray-100"
            >
              <i className="fas fa-bars"></i>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}