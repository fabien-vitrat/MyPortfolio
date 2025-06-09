'use client';

import { motion } from 'framer-motion';

export default function Values() {
    const valeurs = [
        {
            icon: "fa-solid fa-hand-holding-heart",
            title: "BIENVEILLANCE",
            descriptions: [
                "Prends le temps d'écouter les autres",
                "Participation à du bénévolat"
            ],
            side: "left"
        },
        {
            icon: "fa-solid fa-people-group",
            title: "TRAVAIL D'ÉQUIPE",
            descriptions: [
                "Réalisation de projets en équipe",
                "Bonne gestion et réalisation"
            ],
            side: "right"
        },
        {
            icon: "fa-solid fa-handshake-angle",
            title: "ENGAGEMENT",
            descriptions: [
                "Donner du temps aux autres",
                "Course de solidarité, Lourdes..."
            ],
            side: "left"
        },
        {
            icon: "fa-regular fa-lightbulb",
            title: "CURIOSITÉ",
            descriptions: [
                "Découvrir de nouvelles choses",
                "Apprendre et voir de nouvelles choses"
            ],
            side: "right"
        }
    ];

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

    const itemVariantsRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <section className='valeurs' data-aos="fade-up">
            <div className="container">
                <motion.div 
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h1>Fabien VITRAT</h1>
                    <h2>MES VALEURS</h2>
                </motion.div>
                
                <motion.div 
                    className="all"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {valeurs.map((valeur, index) => (
                        <motion.div 
                            key={index}
                            className={`row ${valeur.side === 'left' ? 'gauche' : 'droite'} ${index === valeurs.length - 1 ? 'derniere' : ''}`}
                            variants={valeur.side === 'left' ? itemVariants : itemVariantsRight}
                        >
                            <div className="col-6 valeur">
                                <motion.div 
                                    className="fond"
                                    whileHover={{ 
                                        scale: 1.05,
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <motion.i 
                                        className={valeur.icon}
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    />
                                    <h2>{valeur.title}</h2>
                                </motion.div>
                            </div>
                            <div className="col-6 description">
                                {valeur.descriptions.map((desc, i) => (
                                    <motion.p
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.2 }}
                                        whileHover={{ x: valeur.side === 'left' ? 5 : -5 }}
                                    >
                                        {desc}
                                    </motion.p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}