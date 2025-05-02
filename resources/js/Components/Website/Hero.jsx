import React from 'react';
import { Link } from '@inertiajs/react';

export default function Hero() {
    return (
        <div className="bg-apharcad-yellow-light py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <div className="max-w-lg">
                            <p className="text-sm text-secondary font-semibold mb-2">GET TRUSTED BY OUR CLIENTS</p>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Empower Your Business Journey With IT Expertise
                            </h1>
                            <p className="text-gray-600 mb-8">
                                We provide comprehensive IT solutions to help your business grow and thrive
                                in today's digital landscape.
                            </p>
                            <Link 
                                href="/services" 
                                className="bg-primary text-white px-8 py-3 rounded-md hover:bg-secondary transition-colors duration-300 inline-block shadow-md"
                            >
                                Explore Services →
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <img 
                            src="/images/hero image.jpg" 
                            alt="IT professionals working together" 
                            className="rounded-lg shadow-lg w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
