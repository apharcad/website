import React, { useState, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ auth }) {
    const { url } = usePage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    // Change navbar style on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    const navbarClass = isScrolled 
        ? "fixed top-0 left-0 right-0 bg-white shadow-lg z-50 transition-all duration-300 ease-in-out" 
        : "bg-white shadow transition-all duration-300 ease-in-out";
        
    const isActive = (path) => {
        return url.startsWith(path) ? "text-primary font-medium" : "text-gray-700 hover:text-primary";
    };
    
    return (
        <motion.nav 
            className={navbarClass}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <motion.div 
                        className="flex items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link href="/">
                            <div className="flex items-center">
                                <motion.img 
                                    src="/images/logo.jpg" 
                                    alt="Apharcad Technology Logo" 
                                    className="h-10 mr-2" 
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                                />
                                <motion.span 
                                    className="text-primary font-bold text-xl"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    Apharcad Technology
                                </motion.span>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Main Navigation - Desktop */}
                    <div className="hidden md:flex items-center space-x-6">
                        <motion.div 
                            className="flex space-x-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, staggerChildren: 0.1, delayChildren: 0.3 }}
                        >
                            <Link href="/" className={isActive('/')}>
                                <motion.span whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 300 }}>Home</motion.span>
                            </Link>
                            <Link href="/about" className={isActive('/about')}>
                                <motion.span whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 300 }}>About</motion.span>
                            </Link>
                            <Link href="/services" className={isActive('/services')}>
                                <motion.span whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 300 }}>Services</motion.span>
                            </Link>
                            <Link href="/pages" className={isActive('/pages')}>
                                <motion.span whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 300 }}>Pages</motion.span>
                            </Link>
                            {/* <Link href="/blog" className={isActive('/blog')}>
                                <motion.span whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 300 }}>Blog</motion.span>
                            </Link> */}
                            {/* <Link href="/contact" className={isActive('/contact')}>
                                <motion.span whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 300 }}>Contact</motion.span>
                            </Link> */}
                        </motion.div>
                    </div>

                    {/* Contact Button */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link 
                                href="/contact" 
                                className="bg-secondary text-white px-6 py-2 rounded-md hover:bg-primary transition-colors duration-300"
                            >
                                Contact Us
                            </Link>
                        </motion.div>
                    </motion.div>
                    
                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <motion.button
                            className="text-gray-700 focus:outline-none"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            whileTap={{ scale: 0.9 }}
                        >
                            {mobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            )}
                        </motion.button>
                    </div>
                </div>
            </div>
            
            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div 
                        className="md:hidden bg-white shadow-lg"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                            <Link href="/" className={`${isActive('/')} block py-2`} onClick={() => setMobileMenuOpen(false)}>Home</Link>
                            <Link href="/about" className={`${isActive('/about')} block py-2`} onClick={() => setMobileMenuOpen(false)}>About</Link>
                            <Link href="/services" className={`${isActive('/services')} block py-2`} onClick={() => setMobileMenuOpen(false)}>Services</Link>
                            <Link href="/pages" className={`${isActive('/pages')} block py-2`} onClick={() => setMobileMenuOpen(false)}>Pages</Link>
                            <Link href="/blog" className={`${isActive('/blog')} block py-2`} onClick={() => setMobileMenuOpen(false)}>Blog</Link>
                            <Link href="/contact" className={`${isActive('/contact')} block py-2`} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
