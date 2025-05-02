import React from 'react';

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

    return (
        <div className="py-16 bg-apharcad-purple-light">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-2">WHAT WE'RE OFFERING TO OUR CUSTOMERS</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We provide a wide range of IT services designed to help your business grow and succeed in the digital world.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {serviceItems.map((service, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300 hover:border-accent border-2 border-transparent">
                            <div className="mb-4 flex justify-center">
                                <img 
                                    src={service.iconSrc} 
                                    alt={service.title} 
                                    className="w-16 h-16 object-cover rounded-full"
                                />
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-primary">{service.title}</h3>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                    ))}

                </div>
                
                <div className="mt-10 text-center">
                    <p className="text-secondary font-medium">
                        Bring Them Together And You Overcome Your Delivery  • <span className="font-bold text-primary hover:text-secondary cursor-pointer transition-colors duration-300">See More Services →</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
