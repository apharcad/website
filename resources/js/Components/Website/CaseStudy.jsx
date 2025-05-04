import React from 'react';
import { Link } from '@inertiajs/react';

export default function CaseStudy() {
    const caseStudies = [
        {
            image: '/images/christina-wocintechchat-com-rg1y72eKw6o-unsplash.jpg',
            title: 'Digital Transformation for RetailCorp',
            description: 'How we helped a retail giant modernize their IT infrastructure'
        },
        {
            image: '/images/ofspace.jpg',
            title: 'Cloud Migration for FinTech',
            description: 'Seamless transition to cloud services for a financial technology company'
        },
        {
            image: '/images/nguyen-dang-hoang-nhu-4-Hx3pGEwt8-unsplash.jpg',
            title: 'Cybersecurity Implementation',
            description: 'Enhanced security protocols for a healthcare provider'
        }
    ];

    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="flex justify-center space-x-4 mb-4">
                        <span className="text-purple-700 text-xl">✻ IT Services</span>
                        <span className="text-purple-700 text-xl">✻ Cyber Security</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">OUR RECENT CASE STUDY</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {caseStudies.map((study, index) => (
                        <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                            <img src={study.image} alt={study.title} className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                                <p className="text-gray-600 mb-4">{study.description}</p>
                                <Link href={`/case-study/${index + 1}`} className="text-purple-700 font-semibold">
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
