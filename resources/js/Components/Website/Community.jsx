import React from 'react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function Community() {
    const services = [
        {
            icon: '/images/icons/globe-icon.svg',
            iconFallback: 'https://img.icons8.com/material-rounded/96/ffffff/globe--v1.png',
            title: 'Business Strategy',
            description: 'Strategic planning to achieve your business goals'
        },
        {
            icon: '/images/icons/presentation-icon.svg',
            iconFallback: 'https://img.icons8.com/material-rounded/96/ffffff/presentation.png',
            title: 'Development Center',
            description: 'Custom software development for your specific needs'
        },
        {
            icon: '/images/icons/marketing-icon.svg',
            iconFallback: 'https://img.icons8.com/material-rounded/96/ffffff/commercial.png',
            title: 'Innovative Marketing',
            description: 'Creative marketing solutions for brand growth'
        }
    ];

    // Animation variants
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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="bg-gray-900 py-12 text-white">
            <div className="container mx-auto px-4">
                <motion.div 
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center justify-center mb-1">
                        <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd"></path>
                        </svg>
                        <p className="text-sm text-accent uppercase tracking-wider">BUSINESS CONSULTANT JOURNEY</p>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">GROW COMMUNITY & EXPERIENCE<br />ENDLESS POSSIBILITIES</h2>
                    <div className="mt-4">
                        <Link 
                            href="/services" 
                            className="bg-primary text-white px-6 py-2 rounded-md text-sm hover:bg-primary/90 transition inline-flex items-center group"
                        >
                            Discover More
                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </Link>
                    </div>
                </motion.div>
                
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {services.map((service, index) => (
                        <motion.div 
                            key={index} 
                            className="text-center"
                            variants={itemVariants}
                        >
                            <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group hover:bg-primary/30 transition-all duration-300 hover:scale-110 cursor-pointer">
                                <img 
                                    src={service.icon} 
                                    alt={service.title} 
                                    className="w-7 h-7 group-hover:animate-pulse"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = service.iconFallback;
                                    }}
                                />
                            </div>
                            <h3 className="text-sm font-semibold mb-2 text-white">{service.title}</h3>
                            <p className="text-gray-400 text-xs max-w-xs mx-auto">{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
           
            </div>
        </div>
    );
}
