import React from 'react';
import { Link } from '@inertiajs/react';

export default function ServicesDetailed() {
    const serviceFeatures = [
        "Expert IT Consultation",
        "Customer Support Hours",
        "Strategic Digital Planning",
        "Software Development",
        "Cloud Service Integration",
        "24/7 Technical Support"
    ];

    return (
        <div className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">WHAT WE'RE OFFERING TO OUR CUSTOMERS</h2>
                        <p className="text-gray-600 mb-8">
                            We aim to be trusted partners for our clients and deliver exceptional value through cutting-edge IT solutions.
                            Our team of experienced professionals is dedicated to providing customized services that meet your specific requirements.
                        </p>
                        
                        <div className="bg-purple-700 text-white p-8 rounded-lg relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="text-5xl font-bold mb-2">13</div>
                                <div className="text-xl mb-4">Years of Experience</div>
                                <p className="mb-4">Trust our experienced team to deliver exceptional IT services for your business</p>
                                <Link href="/about" className="inline-block bg-white text-purple-700 px-6 py-2 rounded-md font-medium">
                                    Learn More
                                </Link>
                            </div>
                            <div className="absolute right-0 top-0 opacity-20 h-full">
                                <img 
                                    src="/images/fredrick-tendong-HVYepJYeHdQ-unsplash.jpg" 
                                    alt="Years of Experience" 
                                    className="h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className="md:w-1/2 md:pl-12">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <ul className="space-y-4">
                                {serviceFeatures.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="bg-purple-100 text-purple-700 p-1 rounded-full mr-3 w-6 h-6 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            <div className="mt-8 flex space-x-4">
                                <Link href="/contact" className="bg-purple-700 text-white px-6 py-3 rounded-md hover:bg-purple-800 transition">
                                    Get a Quote
                                </Link>
                                <Link href="/services" className="border border-purple-700 text-purple-700 px-6 py-3 rounded-md hover:bg-purple-50 transition">
                                    View Services
                                </Link>
                            </div>
                            
                            <div className="mt-8 flex justify-between items-center">
                                <div className="flex items-center">
                                    <img src="/images/avatar.jpg" alt="Support Agent" className="w-12 h-12 rounded-full mr-3" />
                                    <div>
                                        <div className="font-medium text-gray-900">Need Assistance?</div>
                                        <div className="text-gray-500">Contact our support team</div>
                                    </div>
                                </div>
                                <div className="text-purple-700 font-bold">
                                    +1 234 567 8900
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
