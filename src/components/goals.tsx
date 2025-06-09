'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Ingenieur from '@/public/ingenieur.jpg';
import Passions from '@/public/passions.jpg';
import Etudes from '@/public/etudes.jpg';
import Experiences from '@/public/voyage.jpg';

const valeurs = [
  {
    titre: 'ÉTUDES',
    image: Etudes,
    textes: [
      "Intégrer une classe préparatoire scientifique",
      'Réaliser le concours des grandes écoles d'ingénieurs'
    ]
  },
  {
    titre: "INGÉNIEUR",
    image: Ingenieur,
    textes: [
      'Contribuer des solutions innovantes',
      'Obtenir un diplôme d'ingénieur'
    ]
  },
  {
    titre: 'PASSIONS',
    image: Passions,
    textes: [
      'Jeux vidéo, sport, photographie et voyages',
      'Apprendre de nouvelles choses et m'épanouir'
    ]
  },
  {
    titre: 'EXPÉRIENCES',
    image: Experiences,
    textes: [
      'Explorer le monde',
      "Ressentir l'adrénaline",
    ]
  }
];

export default function Goals() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="goals" data-aos="fade-up">
        <div className="container">
            <motion.div 
                className="section-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h1>Fabien VITRAT</h1>
                <h2>MES OBJECTIFS</h2>
            </motion.div>
            
            <div className="row">
                <motion.div 
                    className="goal"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {valeurs.map((valeur, index) => (
                        <motion.div 
                            className="goal-item" 
                            key={index}
                            variants={itemVariants}
                            whileHover={{ 
                                scale: 1.02,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div 
                                className="image-container"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Image 
                                    src={valeur.image}
                                    alt={valeur.titre} 
                                    className='img-fluid'
                                />
                                <motion.div 
                                    className="overlay"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.span
                                        initial={{ y: 20 }}
                                        whileHover={{ y: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {valeur.titre}
                                    </motion.span>
                                </motion.div>
                            </motion.div>
                            <div className="goal-text">
                                {valeur.textes.map((line, i) => (
                                    <motion.p 
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        {line}
                                    </motion.p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    </section>
  );
}