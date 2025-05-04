import React from 'react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <div className="relative h-[550px] md:h-[650px] overflow-hidden">
            {/* Hero Background Image */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="/images/thestandingdesk-U6RmGyT-aJ4-unsplash.jpg" 
                    alt="IT professionals working together" 
                    className="w-full h-full object-cover"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-primary/70"></div>
            </div>
            
            {/* Content Container */}
            <div className="container relative z-10 mx-auto px-4 h-full flex items-center">
                <div className="max-w-2xl text-white text-center mx-auto">
                    <p className="text-sm md:text-base text-accent font-semibold mb-3 uppercase tracking-wider">
                        GET TRUSTED BY OUR CLIENTS
                    </p>
                    
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Empower Your Business Journey With IT Expertise
                    </h1>
                    
                    <div className="mt-8">
                        <Link 
                            href="/services" 
                            className="bg-accent text-primary px-8 py-3 rounded-md hover:bg-white transition-colors duration-300 inline-block shadow-md font-medium"
                        >
                            Explore Services
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
