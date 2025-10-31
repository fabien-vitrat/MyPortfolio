'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string;
}

export default function Portfolio() {
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Les ressources humaines',
      description:
        'Site internet servant à rien mais qui a été fait pour le plaisir et faire semblant d\'aider les personnes dans le besoin d\'un site pour les ressources humaines. C\'est un blague ! Il faut mettre une courte présentation de ce qu\'est ce projet !',
      link: '#',
      image: '/etudes.jpg',
    },
    {
      id: 2,
      title: 'Les ressources humaines',
      description:
        'Site internet servant à rien mais qui a été fait pour le plaisir et faire semblant d\'aider les personnes dans le besoin d\'un site pour les ressources humaines. C\'est un blague ! Il faut mettre une courte présentation de ce qu\'est ce projet !',
      link: '#',
      image: '/ingenieur.jpg',
    },
    {
      id: 3,
      title: 'Les ressources humaines',
      description:
        'Site internet servant à rien mais qui a été fait pour le plaisir et faire semblant d\'aider les personnes dans le besoin d\'un site pour les ressources humaines. C\'est un blague ! Il faut mettre une courte présentation de ce qu\'est ce projet !',
      link: '#',
      image: '/voyage.jpg',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="portfolio py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold text-center mb-2 relative">
            <span className="text-gray-200 absolute inset-0 blur-sm">
              PORTFOLIO
            </span>
            <span className="relative">PORTFOLIO</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-20"
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`flex items-center gap-8 ${
                index % 2 === 1 ? 'flex-row-reverse' : ''
              }`}
            >
              {/* Image Container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="flex-1"
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Content Container */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="flex-1"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold mb-6"
                  >
                    {item.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-700 dark:text-gray-300 text-justify mb-6 leading-relaxed"
                  >
                    {item.description}
                  </motion.p>

                  <motion.a
                    href={item.link}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    Lien du Site
                    <i className="fas fa-arrow-right ml-2"></i>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
