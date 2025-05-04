import React from 'react';
import { Link } from '@inertiajs/react';

export default function ServicesDetailed() {
    const serviceFeatures = [
        {
            icon: "https://img.icons8.com/material-rounded/96/ffffff/headset.png",
            title: "Customer Support Hours",
            description: "24/7 support available"
        },
        {
            icon: "https://img.icons8.com/material-rounded/96/ffffff/growth-good.png",
            title: "Business Growth Planning",
            description: "Strategic planning services"
        },
        {
            icon: "https://img.icons8.com/material-rounded/96/ffffff/design.png",
            title: "Creative Design Solutions",
            description: "Professional design teams"
        },
        {
            icon: "https://img.icons8.com/material-rounded/96/ffffff/technical-support.png",
            title: "Technical Support",
            description: "Expert technical assistance"
        },
        {
            icon: "https://img.icons8.com/material-rounded/96/ffffff/code.png",
            title: "Development Services",
            description: "Custom software development"
        },
        {
            icon: "https://img.icons8.com/material-rounded/96/ffffff/commercial.png",
            title: "Marketing Strategy",
            description: "Digital marketing solutions"
        }
    ];

    return (
        <div className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <div className="mb-4 uppercase text-primary font-bold text-sm tracking-wider flex items-center">
                            <svg className="w-5 h-5 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                            </svg>
                            DETAILED BRIEF ABOUT US
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            WHAT WE'RE OFFERING<br />
                            TO OUR CUSTOMERS
                        </h2>
                        
                        <div className="relative">
                            <img 
                                src="/images/fredrick-tendong-HVYepJYeHdQ-unsplash.jpg" 
                                alt="Team Meeting" 
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                            
                            {/* Experience Circle */}
                            <div className="absolute left-8 -bottom-10 bg-primary text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-lg">
                                <div className="text-3xl font-bold">13</div>
                                <div className="text-xs">Years Experience</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="lg:w-1/2 lg:pl-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {serviceFeatures.map((feature, index) => (
                                <div key={index} className="flex items-start group hover:bg-gray-50 p-3 rounded-lg transition-colors duration-300">
                                    <div className="bg-primary text-white p-2 rounded-lg mr-3 flex items-center justify-center shadow-md group-hover:bg-accent group-hover:rotate-3 transition-all duration-300">
                                        <img 
                                            src={feature.icon} 
                                            alt={feature.title} 
                                            className="w-5 h-5"
                                        />
                                    </div>
                                    <div>
                                        <span className="text-sm font-semibold text-gray-800 block mb-1">{feature.title}</span>
                                        <span className="text-xs text-gray-500">{feature.description}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-8 flex space-x-4">
                            <Link href="/contact" className="bg-primary text-white px-6 py-3 rounded-md text-sm font-medium flex items-center transition-transform duration-300 hover:translate-y-[-2px] shadow-md">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                                </svg>
                                Consult Us
                            </Link>
                            <Link href="/services" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md text-sm font-medium flex items-center hover:bg-gray-50 transition-all duration-300">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                                </svg>
                                Our Services
                            </Link>
                        </div>
                        
                        <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
                            <div className="flex items-center">
                                <div className="relative mr-4">
                                    <img src="/images/contact us 1.jpg" alt="Support Agent" className="w-12 h-12 rounded-full border-2 border-primary object-cover" />
                                    <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
                                </div>
                                <div>
                                    <div className="font-medium text-gray-800 text-sm flex items-center">
                                        <svg className="w-4 h-4 mr-1 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                                        </svg>
                                        Need Assistance?
                                    </div>
                                    <div className="text-gray-500 text-xs">Contact our team</div>
                                </div>
                            </div>
                            <div className="text-primary font-bold flex items-center">
                                <svg className="w-5 h-5 mr-2 animate-pulse" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                +1 234 567 8900
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
