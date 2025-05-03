import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Website/Navbar';
import Hero from '@/Components/Website/Hero';
import Services from '@/Components/Website/Services';
import ServicesDetailed from '@/Components/Website/ServicesDetailed';
import Statistics from '@/Components/Website/Statistics';
import Community from '@/Components/Website/Community';
import CaseStudy from '@/Components/Website/CaseStudy';
import Footer from '@/Components/Website/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

export default function Welcome({ auth }) {
    // Scroll tracking for reveal animations
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.reveal-section');
            
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (sectionTop < windowHeight * 0.75) {
                    section.classList.add('revealed');
                }
            });
        };
        
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call once on load
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    // Animation variants
    const pageVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.5
            }
        }
    };
    
    // For staggered children animations
    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };
    
    // Fade-up animation
    const fadeUpItem = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
            >
                <Head title="Apharcad Technology - IT Services & Solutions">
                    <link rel="icon" type="image/png" href="/images/logo.jpg" />
                    <style>{`
                        .reveal-section {
                            opacity: 0;
                            transform: translateY(30px);
                            transition: opacity 0.8s ease, transform 0.8s ease;
                        }
                        .reveal-section.revealed {
                            opacity: 1;
                            transform: translateY(0);
                        }
                        
                        /* Add a smooth scroll behavior */
                        html {
                            scroll-behavior: smooth;
                        }
                    `}</style>
                </Head>

                <div className="min-h-screen bg-white overflow-hidden">
                    <Navbar auth={auth} />
                    
                    <motion.section
                        className="hero-section"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Hero />
                    </motion.section>
                    
                    <motion.section
                        className="reveal-section"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <Services />
                    </motion.section>
                    
                    <motion.section
                        className="reveal-section"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <ServicesDetailed />
                    </motion.section>
                    
                    <motion.section
                        className="reveal-section"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <Statistics />
                    </motion.section>
                    
                    <motion.section
                        className="reveal-section"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Community />
                    </motion.section>
                    
                    <motion.section
                        className="reveal-section"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <CaseStudy />
                    </motion.section>
                    
                    <motion.footer
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Footer />
                    </motion.footer>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
