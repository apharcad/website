import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Website/Navbar';
import Footer from '@/Components/Website/Footer';
import { Link } from '@inertiajs/react';
import { 
    MotionDiv, MotionSection, MotionH1, MotionH2, MotionP, MotionImg,
    fadeIn, staggerContainer, slideInLeft, slideInRight, scrollReveal, pageTransition
} from '@/Components/Website/Animation';

export default function Services({ auth }) {
    const servicesList = [
        {
            id: 1,
            icon: '/images/programming.png',
            title: 'UI/UX Website Design',
            description: 'We create beautiful and functional interfaces that engage users and enhance their online experience. Our design team focuses on user-centered design principles.',
            features: [
                'Custom website design',
                'User experience analysis',
                'Responsive design implementation',
                'Interface prototyping',
                'User testing and feedback'
            ]
        },
        {
            id: 2,
            icon: '/images/software.jpg',
            title: 'Digital Marketing',
            description: 'Strategic marketing solutions to grow your online presence and reach your target audience effectively through multiple digital channels.',
            features: [
                'Search engine marketing',
                'Social media campaigns',
                'Email marketing',
                'Content marketing strategy',
                'Analytics and reporting'
            ]
        },
        {
            id: 3,
            icon: '/images/fredrick-tendong-HVYepJYeHdQ-unsplash.jpg',
            title: 'DevOps & Maintenance',
            description: 'Continuous integration and reliable maintenance services to ensure your systems run smoothly and efficiently at all times.',
            features: [
                'CI/CD pipeline implementation',
                'Infrastructure as code',
                'Cloud management',
                'System monitoring',
                '24/7 technical support'
            ]
        },
        {
            id: 4,
            icon: '/images/ofspace.jpg',
            title: 'SEO Optimization',
            description: 'Improve your search rankings and drive more organic traffic to your website with our comprehensive SEO services.',
            features: [
                'Keyword research and analysis',
                'On-page optimization',
                'Content strategy',
                'Link building',
                'Performance monitoring'
            ]
        },
        {
            id: 5,
            icon: '/images/nguyen-dang-hoang-nhu-4-Hx3pGEwt8-unsplash.jpg',
            title: 'Security & Risk Management',
            description: 'Protect your business data and minimize security threats with our comprehensive security solutions and risk assessment services.',
            features: [
                'Security audit and assessment',
                'Vulnerability testing',
                'Data protection strategies',
                'Compliance management',
                'Security training'
            ]
        },
        {
            id: 6,
            icon: '/images/christina-wocintechchat-com-rg1y72eKw6o-unsplash.jpg',
            title: 'Cloud Solutions',
            description: 'Leverage the power of cloud computing to scale your business operations efficiently and reduce infrastructure costs.',
            features: [
                'Cloud migration',
                'Cloud architecture design',
                'AWS/Azure/Google Cloud expertise',
                'Serverless implementation',
                'Cloud cost optimization'
            ]
        }
    ];

    return (
        <>
            <Head title="Services - Apharcad Technology" />
            <MotionDiv 
                className="min-h-screen bg-white"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageTransition}
            >
                <Navbar auth={auth} />
                
                {/* Hero Section */}
                <MotionSection 
                    className="py-20 bg-purple-700 text-white" 
                    variants={fadeIn}
                >
                    <div className="container mx-auto px-4 text-center">
                        <MotionH1 
                            className="text-4xl md:text-5xl font-bold mb-6"
                            variants={fadeIn}
                        >
                            Our Services
                        </MotionH1>
                        <MotionP 
                            className="text-xl max-w-3xl mx-auto"
                            variants={fadeIn}
                        >
                            We provide comprehensive IT solutions designed to help your business 
                            succeed in today's digital landscape.
                        </MotionP>
                    </div>
                </MotionSection>
                
                {/* Services List */}
                <MotionSection 
                    className="py-16 bg-white"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {servicesList.map((service) => (
                                <MotionDiv 
                                    key={service.id} 
                                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                                    variants={fadeIn}
                                >
                                    <div className="flex items-center mb-4">
                                        <img 
                                            src={service.icon} 
                                            alt={service.title} 
                                            className="w-16 h-16 object-cover rounded-full mr-4" 
                                        />
                                        <h3 className="text-xl font-semibold">{service.title}</h3>
                                    </div>
                                    <p className="text-gray-600 mb-4">{service.description}</p>
                                    <h4 className="font-medium text-gray-800 mb-2">Key Features:</h4>
                                    <ul className="list-disc pl-5 mb-4 text-gray-600">
                                        {service.features.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                    <Link 
                                        href={`/services/${service.id}`} 
                                        className="inline-block bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition"
                                    >
                                        Learn More
                                    </Link>
                                </MotionDiv>
                            ))}
                        </div>
                    </div>
                </MotionSection>
                
                {/* Call to Action */}
                <MotionSection 
                    className="py-16 bg-gray-100"
                    variants={scrollReveal}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="container mx-auto px-4 text-center">
                        <MotionH2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</MotionH2>
                        <MotionP className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                            Partner with Apharcad Technology to leverage our expertise and take your 
                            business to the next level with our comprehensive IT solutions.
                        </MotionP>
                        <Link 
                            href="/contact" 
                            className="inline-block bg-purple-700 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-purple-800 transition"
                        >
                            Contact Us Today
                        </Link>
                    </div>
                </MotionSection>
                
                <Footer />
            </MotionDiv>
        </>
    );
}
