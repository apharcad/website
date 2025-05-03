import React from 'react';
import { motion } from 'framer-motion';

export default function Services() {
    const serviceItems = [
        {
            iconSrc: '/images/programming.png',
            title: 'UI/UX Website Design',
            description: 'We create beautiful and functional interfaces that engage users.'
        },
        {
            iconSrc: '/images/software.jpg',
            title: 'Digital Marketing',
            description: 'Strategic marketing solutions to grow your online presence.'
        },
        {
            iconSrc: '/images/fredrick-tendong-HVYepJYeHdQ-unsplash.jpg',
            title: 'DevOps & Maintenance',
            description: 'Continuous integration and reliable maintenance services.'
        },
        {
            iconSrc: '/images/ofspace.jpg',
            title: 'SEO Optimization',
            description: 'Improve your search rankings and drive more organic traffic.'
        },
        {
            iconSrc: '/images/nguyen-dang-hoang-nhu-4-Hx3pGEwt8-unsplash.jpg',
            title: 'Security & Risk Management',
            description: 'Protect your business data and minimize security threats.'
        }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1, 
            transition: { 
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                type: "spring", 
                stiffness: 100 
            }
        }
    };

    return (
        <div className="py-16 bg-apharcad-purple-light">
            <div className="container mx-auto px-4">
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center justify-center mb-2">
                        <div className="h-1 w-10 bg-primary mr-3"></div>
                        <h2 className="text-2xl font-bold text-primary uppercase tracking-wider">WHAT WE'RE OFFERING TO</h2>
                        <div className="h-1 w-10 bg-primary ml-3"></div>
                    </div>
                    <h2 className="text-2xl font-bold text-primary uppercase tracking-wider mb-4">OUR CUSTOMERS</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We provide a wide range of IT services designed to help your business grow and succeed in the digital world.
                    </p>
                </motion.div>
                
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {serviceItems.map((service, index) => (
                        <motion.div 
                            key={index} 
                            className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300 hover:border-accent border-2 border-transparent"
                            variants={itemVariants}
                            whileHover={{ 
                                scale: 1.03,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <div className="mb-4 flex justify-center relative group">
                                <div className="absolute inset-0 bg-primary rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                <img 
                                    src={service.iconSrc} 
                                    alt={service.title} 
                                    className="w-16 h-16 object-cover rounded-full z-10 shadow-md"
                                />
                                <div className="absolute -bottom-1 -right-1 bg-accent w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 shadow-sm">
                                    <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-primary">{service.title}</h3>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
                
                <div className="mt-10 text-center">
                    <p className="text-secondary font-medium flex items-center justify-center">
                        <span>Bring Them Together And You Overcome Your Delivery</span>
                        <span className="mx-2 text-accent">•</span>
                        <span className="font-bold text-primary hover:text-secondary cursor-pointer transition-colors duration-300 flex items-center group">
                            See More Services
                            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
