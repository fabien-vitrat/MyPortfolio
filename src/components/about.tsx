'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Portrait from '@/public/portrait.jpeg';

export default function About() {
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
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const passions = ['SPORT', 'AUTOMOBILE', 'PHOTOGRAPHIE', 'VOYAGE', 'INFORMATIQUE'];

    return (
        <section className='about' data-aos="fade-up">
            <div className="container">
                <div className="row">
                    <motion.div 
                        className="col-md-8 col-sm-12 content"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div className="section-title" variants={itemVariants}>
                            <h1>Fabien VITRAT</h1>
                            <h2>A PROPOS DE MOI</h2>
                        </motion.div>
                        
                        <motion.div className="row info" variants={itemVariants}>
                            <div className="col-lg-6">
                                <ul>
                                    <motion.li whileHover={{ x: 5 }}>
                                        <strong>Date de naissance :</strong> <span>1 mai 2007</span>
                                    </motion.li>
                                    <motion.li whileHover={{ x: 5 }}>
                                        <strong>Email :</strong> <span>vitratfabien@gmail.com</span>
                                    </motion.li>
                                    <motion.li whileHover={{ x: 5 }}>
                                        <strong>Téléphone :</strong> <span>+33 7 66 18 07 15</span>
                                    </motion.li>
                                    <motion.li whileHover={{ x: 5 }}>
                                        <strong>Ville :</strong> <span>Marseille, France</span>
                                    </motion.li>
                                </ul>
                            </div>
                            
                            <div className="portrait-mobile">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image 
                                        src={Portrait} 
                                        alt='Portrait'
                                        className='img-fluid'
                                    />
                                </motion.div>
                            </div>
                            
                            <div className="col-lg-6">
                                <ul>
                                    <motion.li whileHover={{ x: 5 }}>
                                        <strong>Age :</strong> <span>17 ans</span>
                                    </motion.li>
                                    <motion.li whileHover={{ x: 5 }}>
                                        <strong>Etablissement :</strong> <span>Lycée de Provence</span>
                                    </motion.li>
                                    <motion.li whileHover={{ x: 5 }}>
                                        <strong>Niveau :</strong> <span>Terminale</span>
                                    </motion.li>
                                    <motion.li whileHover={{ x: 5 }}>
                                        <strong>Langues :</strong> <span>Français, Espagnol, Anglais</span>
                                    </motion.li>
                                </ul>
                            </div>
                        </motion.div>
                        
                        <motion.div variants={itemVariants}>
                            <p>Toujours à la recherche de nouvelles opportunités pour apprendre et évoluer, je m&apos;investis avec passion dans des projets variés. Curieux et déterminé, je m&apos;efforce de mêler rigueur, créativité et esprit d&apos;équipe pour relever chaque défi avec enthousiasme. À travers ce portfolio, je vous invite à plonger dans mon univers, façonné par mes passions, mes aspirations et mon ambition.</p>
                        </motion.div>
                        
                        <motion.div className='passions' variants={itemVariants}>
                            {passions.map((passion, index) => (
                                <motion.p
                                    key={passion}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {passion}
                                </motion.p>
                            ))}
                        </motion.div>
                    </motion.div>
                    
                    <motion.div 
                        className="col-md-4 col-sm-12 img"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={Portrait}
                                alt='Portrait'
                                className='img-fluid'
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}