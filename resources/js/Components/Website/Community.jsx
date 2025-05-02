import React from 'react';
import { Link } from '@inertiajs/react';

export default function Community() {
    const services = [
        {
            icon: '🌐',
            title: 'Business Strategy',
            description: 'Strategic planning to achieve your business goals'
        },
        {
            icon: '📊',
            title: 'Development Center',
            description: 'Custom software development for your specific needs'
        },
        {
            icon: '📱',
            title: 'Innovative Marketing',
            description: 'Creative marketing solutions for brand growth'
        }
    ];

    return (
        <div className="bg-gray-900 py-16 text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-6">BUSINESS CONSULTANT JOURNEY</h2>
                    <h3 className="text-4xl font-bold mb-8">GROW COMMUNITY & EXPERIENCE<br />ENDLESS POSSIBILITIES</h3>
                    <Link 
                        href="/services" 
                        className="bg-purple-700 text-white px-8 py-3 rounded-md hover:bg-purple-800 transition inline-block"
                    >
                        Discover More →
                    </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    {services.map((service, index) => (
                        <div key={index} className="bg-gray-800 p-8 rounded-lg text-center">
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                            <p className="text-gray-300">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
