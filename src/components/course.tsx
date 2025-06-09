'use client';

import { motion } from 'framer-motion';
import { experiences } from '../data/parcoursProAca';

export default function Course() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <section className="course" data-aos="fade-up">
            <div className="container">
                <motion.div 
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h1>Fabien VITRAT</h1>
                    <h2>MES PARCOURS</h2>
                </motion.div>

                <div className="row">
                    <motion.div 
                        className="parcours-separation parcours parcours-colonnes"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {experiences.map((experience, index) => (
                            <motion.div 
                                key={index} 
                                className="parcours-experience"
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.span 
                                    className="parcours-icon"
                                    whileHover={{ 
                                        scale: 1.1,
                                        rotate: 360 
                                    }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <i className={`${experience.Icon}`}></i>
                                </motion.span>
                                <motion.div 
                                    className="parcours-infos"
                                    whileHover={{ 
                                        boxShadow: "0 15px 30px rgba(0,0,0,0.15)" 
                                    }}
                                >
                                    <div className="parcours-fleche"></div>
                                    <div>
                                        <motion.h3 
                                            className="ecole-entreprise"
                                            whileHover={{ color: "#2563eb" }}
                                        >
                                            {experience.Diplome
                                                ? experience.Diplome
                                                : experience.IntitulePoste
                                            }
                                        </motion.h3>
                                        <motion.p 
                                            className="diplome-entreprise"
                                            initial={{ opacity: 0.8 }}
                                            whileHover={{ opacity: 1 }}
                                        >
                                            {experience.Ecole 
                                                ? experience.Ecole 
                                                : `${experience.Entreprise} - ${experience.TypeEmploi}`
                                            }
                                        </motion.p>
                                        <motion.p 
                                            className="lieu-mention"
                                            initial={{ opacity: 0.6 }}
                                            whileHover={{ opacity: 0.8 }}
                                        >
                                            {experience.Lieu
                                                ? experience.Lieu
                                                : `Mention : ${experience.Mention}`
                                            }
                                        </motion.p>
                                    </div>
                                    <motion.div 
                                        className="parcours-date"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <p>{experience.Dates}</p>
                                    </motion.div>
                                </motion.div> 
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}