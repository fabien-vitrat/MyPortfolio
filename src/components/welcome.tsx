'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Welcome() {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="accueil welcome">
      <div className="content container">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          FABIEN VITRAT
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          ÉTUDIANT • PASSIONNÉ • DÉVELOPPEUR
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 flex space-x-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToNext}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Découvrir mon parcours
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:vitratfabien@gmail.com"
            className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            Me contacter
          </motion.a>
        </motion.div>
      </div>
      
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToNext}
        className="arrow-down cursor-pointer"
      >
        <ChevronDown size={48} />
      </motion.div>
    </section>
  );
}