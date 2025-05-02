import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import Navbar from '@/Components/Website/Navbar';
import Footer from '@/Components/Website/Footer';
import { 
    MotionDiv, MotionSection, MotionH1, MotionH2, MotionP, MotionImg,
    fadeIn, staggerContainer, slideInLeft, slideInRight, scrollReveal, pageTransition
} from '@/Components/Website/Animation';

export default function ServiceShow({ auth, serviceId }) {
    // In a real application, you would fetch this data from your backend
    const services = [
        {
            id: 1,
            title: 'UI/UX Website Design',
            icon: '/images/programming.png',
            image: '/images/christina-wocintechchat-com-rg1y72eKw6o-unsplash.jpg',
            description: 'We create beautiful and functional interfaces that engage users and enhance their online experience. Our design team focuses on user-centered design principles.',
            fullDescription: `
                <p>Our UI/UX Website Design service is focused on creating digital experiences that are both visually stunning and highly functional. We believe that great design is about more than just aesthetics – it's about creating intuitive, user-friendly interfaces that help your customers achieve their goals quickly and easily.</p>
                
                <p>Our design process starts with understanding your business goals and user needs. We conduct thorough research to identify pain points and opportunities, then create wireframes and prototypes to test our solutions. Once we have a solid foundation, our designers add visual elements that reflect your brand identity and create a cohesive look and feel.</p>
                
                <p>Throughout the process, we focus on creating responsive designs that work seamlessly across all devices, from desktop computers to smartphones and tablets. We also ensure that accessibility is built in from the ground up, making your website usable for everyone.</p>
            `,
            features: [
                'Custom website design',
                'User experience analysis',
                'Responsive design implementation',
                'Interface prototyping',
                'User testing and feedback',
                'Accessibility compliance',
                'Brand integration',
                'Interactive elements'
            ],
            benefits: [
                'Increased user engagement',
                'Higher conversion rates',
                'Reduced bounce rates',
                'Improved brand perception',
                'Enhanced user satisfaction'
            ],
            process: [
                { step: 1, title: 'Discovery', description: 'Understanding your business goals and user needs' },
                { step: 2, title: 'Research', description: 'Identifying pain points and opportunities' },
                { step: 3, title: 'Wireframing', description: 'Creating low-fidelity designs to establish layout and structure' },
                { step: 4, title: 'Prototyping', description: 'Building interactive models to test user flows' },
                { step: 5, title: 'Visual Design', description: 'Adding brand elements and visual polish' },
                { step: 6, title: 'Testing', description: 'Ensuring usability and refining the experience' },
                { step: 7, title: 'Implementation', description: 'Bringing the design to life through development' }
            ]
        },
        {
            id: 2,
            title: 'Digital Marketing',
            icon: '/images/software.jpg',
            image: '/images/ofspace.jpg',
            description: 'Strategic marketing solutions to grow your online presence and reach your target audience effectively through multiple digital channels.',
            fullDescription: `
                <p>In today's digital landscape, having a strong online presence is crucial for business success. Our Digital Marketing services help you navigate the complex world of online marketing to reach your target audience, generate leads, and drive conversions.</p>
                
                <p>We take a data-driven approach to marketing, starting with thorough research to understand your industry, competition, and target audience. From there, we develop comprehensive strategies that leverage the most effective channels for your specific goals, whether that's search engine optimization (SEO), pay-per-click advertising (PPC), social media marketing, email marketing, or content marketing.</p>
                
                <p>Our team of marketing specialists continuously monitors and optimizes your campaigns to ensure you're getting the best possible return on investment. We provide regular reports with clear metrics so you can see exactly how your marketing efforts are performing.</p>
            `,
            features: [
                'Search engine optimization (SEO)',
                'Pay-per-click advertising (PPC)',
                'Social media marketing',
                'Email marketing campaigns',
                'Content strategy and creation',
                'Analytics and reporting',
                'Conversion rate optimization',
                'Marketing automation'
            ],
            benefits: [
                'Increased website traffic',
                'Higher search engine rankings',
                'Greater brand awareness',
                'More qualified leads',
                'Improved ROI on marketing spend'
            ],
            process: [
                { step: 1, title: 'Analysis', description: 'Analyzing your current marketing efforts and identifying opportunities' },
                { step: 2, title: 'Strategy', description: 'Developing a comprehensive marketing plan' },
                { step: 3, title: 'Implementation', description: 'Executing the marketing strategy across selected channels' },
                { step: 4, title: 'Monitoring', description: 'Tracking performance and gathering data' },
                { step: 5, title: 'Optimization', description: 'Refining tactics based on performance data' },
                { step: 6, title: 'Reporting', description: 'Providing clear, actionable insights on results' }
            ]
        },
        {
            id: 3,
            title: 'DevOps & Maintenance',
            icon: '/images/fredrick-tendong-HVYepJYeHdQ-unsplash.jpg',
            image: '/images/fredrick-tendong-HVYepJYeHdQ-unsplash.jpg',
            description: 'Continuous integration and reliable maintenance services to ensure your systems run smoothly and efficiently at all times.',
            fullDescription: `
                <p>Our DevOps & Maintenance services bridge the gap between development and operations, creating a streamlined process for software delivery and infrastructure management. We help organizations implement DevOps practices to increase efficiency, reduce time-to-market, and improve overall system reliability.</p>
                
                <p>Our approach focuses on automation, continuous integration and delivery, and proactive monitoring. We set up robust CI/CD pipelines that automate the testing and deployment process, ensuring that new code can be released quickly and reliably. We also implement infrastructure as code practices, allowing for consistent, repeatable environment setups.</p>
                
                <p>Beyond implementation, our maintenance services ensure that your systems continue to operate at peak performance. We provide 24/7 monitoring, regular updates and patches, performance optimization, and rapid incident response to minimize downtime and keep your business running smoothly.</p>
            `,
            features: [
                'CI/CD pipeline implementation',
                'Infrastructure as code',
                'Cloud management',
                'System monitoring',
                '24/7 technical support',
                'Performance optimization',
                'Security patching',
                'Backup and disaster recovery'
            ],
            benefits: [
                'Faster software delivery',
                'Reduced deployment failures',
                'Improved system reliability',
                'Lower infrastructure costs',
                'Enhanced security posture'
            ],
            process: [
                { step: 1, title: 'Assessment', description: 'Evaluating current processes and infrastructure' },
                { step: 2, title: 'Planning', description: 'Developing a DevOps strategy tailored to your needs' },
                { step: 3, title: 'Implementation', description: 'Setting up tools, processes, and infrastructure' },
                { step: 4, title: 'Automation', description: 'Creating CI/CD pipelines and automated workflows' },
                { step: 5, title: 'Monitoring', description: 'Implementing proactive system monitoring' },
                { step: 6, title: 'Optimization', description: 'Continuously improving performance and processes' }
            ]
        },
        {
            id: 4,
            title: 'SEO Optimization',
            icon: '/images/ofspace.jpg',
            image: '/images/programming.png',
            description: 'Improve your search rankings and drive more organic traffic to your website with our comprehensive SEO services.',
            fullDescription: `
                <p>Our SEO Optimization services are designed to improve your website's visibility in search engine results, driving more organic traffic and helping potential customers find your business. We take a comprehensive approach that addresses both on-page and off-page factors that influence search rankings.</p>
                
                <p>We start with thorough keyword research to identify the terms and phrases your target audience is searching for. Then, we analyze your website's current performance and technical health to identify opportunities for improvement. Our team implements strategic optimizations to your website content, metadata, structure, and backend code to make it more search-engine friendly.</p>
                
                <p>Beyond on-site optimization, we help build your website's authority through ethical link-building strategies, content marketing, and local SEO tactics. Throughout the process, we monitor performance metrics and make data-driven adjustments to continually improve your search rankings and organic traffic.</p>
            `,
            features: [
                'Keyword research and analysis',
                'On-page optimization',
                'Technical SEO audits',
                'Content strategy',
                'Link building',
                'Local SEO',
                'Performance monitoring',
                'Competitor analysis'
            ],
            benefits: [
                'Higher search engine rankings',
                'Increased organic traffic',
                'Better quality leads',
                'Enhanced brand credibility',
                'Improved user experience'
            ],
            process: [
                { step: 1, title: 'Audit', description: 'Assessing current SEO performance and technical health' },
                { step: 2, title: 'Research', description: 'Identifying valuable keywords and analyzing competition' },
                { step: 3, title: 'Strategy', description: 'Developing a comprehensive SEO plan' },
                { step: 4, title: 'On-Page Optimization', description: 'Implementing content and technical improvements' },
                { step: 5, title: 'Off-Page Optimization', description: 'Building authority through backlinks and citations' },
                { step: 6, title: 'Monitoring', description: 'Tracking rankings, traffic, and conversions' },
                { step: 7, title: 'Refinement', description: 'Making ongoing adjustments based on performance data' }
            ]
        },
        {
            id: 5,
            title: 'Security & Risk Management',
            icon: '/images/nguyen-dang-hoang-nhu-4-Hx3pGEwt8-unsplash.jpg',
            image: '/images/nguyen-dang-hoang-nhu-4-Hx3pGEwt8-unsplash.jpg',
            description: 'Protect your business data and minimize security threats with our comprehensive security solutions and risk assessment services.',
            fullDescription: `
                <p>In today's digital landscape, cybersecurity threats are constantly evolving. Our Security & Risk Management services help protect your business data, systems, and reputation from these threats through a proactive, multi-layered approach to security.</p>
                
                <p>We begin with comprehensive security audits and vulnerability assessments to identify potential weaknesses in your systems and processes. Our team then implements robust security measures tailored to your business needs, from network security and data encryption to access controls and employee training.</p>
                
                <p>Beyond implementation, we provide ongoing monitoring and threat detection to quickly identify and respond to potential security incidents. We also help you develop and test incident response plans so you're prepared in the event of a security breach. Our risk management approach ensures that your security measures align with your business objectives and compliance requirements.</p>
            `,
            features: [
                'Security audit and assessment',
                'Vulnerability testing',
                'Data protection strategies',
                'Compliance management',
                'Security training',
                'Incident response planning',
                'Continuous monitoring',
                'Risk assessment and mitigation'
            ],
            benefits: [
                'Reduced security vulnerabilities',
                'Enhanced data protection',
                'Improved regulatory compliance',
                'Minimized risk of data breaches',
                'Increased customer trust'
            ],
            process: [
                { step: 1, title: 'Assessment', description: 'Evaluating current security posture and identifying vulnerabilities' },
                { step: 2, title: 'Planning', description: 'Developing a comprehensive security strategy' },
                { step: 3, title: 'Implementation', description: 'Deploying security solutions and controls' },
                { step: 4, title: 'Training', description: 'Educating staff on security best practices' },
                { step: 5, title: 'Monitoring', description: 'Implementing continuous threat detection' },
                { step: 6, title: 'Response', description: 'Creating and testing incident response procedures' },
                { step: 7, title: 'Review', description: 'Regularly reassessing security measures and updating as needed' }
            ]
        },
        {
            id: 6,
            title: 'Cloud Solutions',
            icon: '/images/christina-wocintechchat-com-rg1y72eKw6o-unsplash.jpg',
            image: '/images/software.jpg',
            description: 'Leverage the power of cloud computing to scale your business operations efficiently and reduce infrastructure costs.',
            fullDescription: `
                <p>Our Cloud Solutions help businesses harness the power of cloud computing to improve scalability, flexibility, and efficiency while reducing costs. Whether you're looking to migrate existing applications to the cloud, build new cloud-native solutions, or optimize your current cloud environment, our team has the expertise to help you succeed.</p>
                
                <p>We work with all major cloud platforms, including AWS, Microsoft Azure, and Google Cloud, to design and implement solutions tailored to your specific business needs. Our services span the entire cloud journey, from strategy and architecture to migration, implementation, and ongoing management.</p>
                
                <p>We take a security-first approach to cloud computing, ensuring that your data and applications are protected with industry best practices. We also focus on cost optimization, helping you make the most of your cloud investment by right-sizing resources, implementing automation, and taking advantage of cloud-native services.</p>
            `,
            features: [
                'Cloud migration',
                'Cloud architecture design',
                'AWS/Azure/Google Cloud expertise',
                'Serverless implementation',
                'Cloud cost optimization',
                'Hybrid cloud solutions',
                'Disaster recovery planning',
                'Managed cloud services'
            ],
            benefits: [
                'Increased scalability',
                'Reduced infrastructure costs',
                'Improved business agility',
                'Enhanced disaster recovery',
                'Better performance and reliability'
            ],
            process: [
                { step: 1, title: 'Assessment', description: 'Evaluating current infrastructure and defining cloud objectives' },
                { step: 2, title: 'Strategy', description: 'Developing a cloud adoption roadmap' },
                { step: 3, title: 'Architecture', description: 'Designing secure, scalable cloud solutions' },
                { step: 4, title: 'Migration', description: 'Moving applications and data to the cloud' },
                { step: 5, title: 'Optimization', description: 'Enhancing performance and reducing costs' },
                { step: 6, title: 'Management', description: 'Providing ongoing monitoring and support' }
            ]
        }
    ];

    // Find the service by ID
    const service = services.find(s => s.id === parseInt(serviceId)) || services[0];

    return (
        <>
            <Head title={`${service.title} - Apharcad Technology`} />
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
                    className="py-20 bg-purple-50" 
                    variants={fadeIn}
                >
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center">
                            <MotionDiv 
                                className="md:w-1/2 mb-10 md:mb-0"
                                variants={slideInLeft}
                            >
                                <div className="max-w-lg">
                                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                        {service.title}
                                    </h1>
                                    <p className="text-gray-600 mb-8">
                                        {service.description}
                                    </p>
                                    <div className="flex space-x-4">
                                        <Link 
                                            href="/contact" 
                                            className="bg-purple-700 text-white px-6 py-3 rounded-md hover:bg-purple-800 transition"
                                        >
                                            Get Started
                                        </Link>
                                        <Link 
                                            href="/contact" 
                                            className="border border-purple-700 text-purple-700 px-6 py-3 rounded-md hover:bg-purple-50 transition"
                                        >
                                            Request Quote
                                        </Link>
                                    </div>
                                </div>
                            </MotionDiv>
                            <MotionDiv 
                                className="md:w-1/2"
                                variants={slideInRight}
                            >
                                <img 
                                    src={service.image} 
                                    alt={service.title} 
                                    className="rounded-lg shadow-xl w-full"
                                />
                            </MotionDiv>
                        </div>
                    </div>
                </MotionSection>
                
                {/* Service Details */}
                <MotionSection className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row">
                            <div className="lg:w-2/3 lg:pr-12">
                                <MotionH2 
                                    className="text-3xl font-bold mb-6"
                                    variants={fadeIn}
                                >
                                    Service Overview
                                </MotionH2>
                                <MotionDiv 
                                    className="prose prose-lg max-w-none mb-10"
                                    variants={fadeIn}
                                    dangerouslySetInnerHTML={{ __html: service.fullDescription }}
                                />
                                
                                <MotionH2 
                                    className="text-3xl font-bold mb-6"
                                    variants={fadeIn}
                                >
                                    Our Process
                                </MotionH2>
                                <MotionDiv
                                    className="mb-12"
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                    variants={staggerContainer}
                                >
                                    <div className="relative">
                                        {/* Timeline Line */}
                                        <div className="absolute left-6 top-5 bottom-5 w-1 bg-purple-200"></div>
                                        
                                        {/* Process Steps */}
                                        {service.process.map((step, index) => (
                                            <MotionDiv 
                                                key={step.step} 
                                                className="flex mb-8 relative"
                                                variants={fadeIn}
                                            >
                                                <div className="bg-purple-700 text-white rounded-full w-12 h-12 flex items-center justify-center shrink-0 z-10">
                                                    {step.step}
                                                </div>
                                                <div className="ml-6">
                                                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                                    <p className="text-gray-600">{step.description}</p>
                                                </div>
                                            </MotionDiv>
                                        ))}
                                    </div>
                                </MotionDiv>
                            </div>
                            
                            <div className="lg:w-1/3">
                                <MotionDiv 
                                    className="bg-gray-50 p-8 rounded-lg shadow-md mb-8"
                                    variants={slideInRight}
                                >
                                    <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                                    <ul className="space-y-3">
                                        {service.features.map((feature, index) => (
                                            <li key={index} className="flex items-start">
                                                <svg className="w-5 h-5 text-purple-700 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </MotionDiv>
                                
                                <MotionDiv 
                                    className="bg-gray-50 p-8 rounded-lg shadow-md"
                                    variants={slideInRight}
                                >
                                    <h3 className="text-xl font-semibold mb-4">Benefits</h3>
                                    <ul className="space-y-3">
                                        {service.benefits.map((benefit, index) => (
                                            <li key={index} className="flex items-start">
                                                <svg className="w-5 h-5 text-green-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    <div className="mt-8">
                                        <Link 
                                            href="/contact" 
                                            className="block w-full bg-purple-700 text-white text-center px-6 py-3 rounded-md hover:bg-purple-800 transition"
                                        >
                                            Contact Us for Details
                                        </Link>
                                    </div>
                                </MotionDiv>
                            </div>
                        </div>
                    </div>
                </MotionSection>
                
                {/* Call to Action */}
                <MotionSection 
                    className="py-16 bg-purple-700 text-white"
                    variants={scrollReveal}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="container mx-auto px-4 text-center">
                        <MotionH2 className="text-3xl font-bold mb-6">Ready to Get Started?</MotionH2>
                        <MotionP className="text-xl mb-8 max-w-3xl mx-auto">
                            Contact us today to learn how our {service.title} service can benefit your business.
                        </MotionP>
                        <Link 
                            href="/contact" 
                            className="inline-block bg-white text-purple-700 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition"
                        >
                            Request a Consultation
                        </Link>
                    </div>
                </MotionSection>
                
                <Footer />
            </MotionDiv>
        </>
    );
}
