import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Website/Navbar';
import Footer from '@/Components/Website/Footer';
import { 
    MotionDiv, MotionSection, MotionH1, MotionH2, MotionP, MotionImg,
    fadeIn, staggerContainer, slideInLeft, slideInRight, scrollReveal, pageTransition
} from '@/Components/Website/Animation';

export default function About({ auth }) {
    return (
        <>
            <Head title="About Us - Apharcad Technology" />
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
                    className="py-20 bg-gray-100" 
                    variants={fadeIn}
                >
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center">
                            <MotionDiv 
                                className="md:w-1/2 mb-10 md:mb-0"
                                variants={slideInLeft}
                            >
                                <MotionH1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                    About Apharcad Technology
                                </MotionH1>
                                <MotionP className="text-gray-600 mb-6">
                                    We are a team of passionate technology experts dedicated to helping businesses 
                                    reach their full potential through innovative IT solutions. With over a decade 
                                    of experience, we have helped hundreds of companies transform their digital presence.
                                </MotionP>
                            </MotionDiv>
                            <MotionDiv 
                                className="md:w-1/2"
                                variants={slideInRight}
                            >
                                <MotionImg 
                                    src="/images/christina-wocintechchat-com-rg1y72eKw6o-unsplash.jpg" 
                                    alt="About Apharcad Technology" 
                                    className="rounded-lg shadow-lg w-full h-auto"
                                />
                            </MotionDiv>
                        </div>
                    </div>
                </MotionSection>
                
                {/* Our Mission */}
                <MotionSection 
                    className="py-16 bg-white"
                    variants={scrollReveal}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="container mx-auto px-4">
                        <MotionH2 className="text-3xl font-bold text-center mb-12">Our Mission</MotionH2>
                        <div className="max-w-3xl mx-auto text-center">
                            <MotionP className="text-lg text-gray-700 leading-relaxed">
                                At Apharcad Technology, our mission is to empower businesses with cutting-edge 
                                technology solutions that drive growth, enhance productivity, and create competitive 
                                advantages. We believe in building long-term relationships with our clients, 
                                becoming strategic partners in their journey to digital excellence.
                            </MotionP>
                        </div>
                    </div>
                </MotionSection>
                
                {/* Our Values */}
                <MotionSection 
                    className="py-16 bg-gray-100"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <div className="container mx-auto px-4">
                        <MotionH2 
                            className="text-3xl font-bold text-center mb-12"
                            variants={fadeIn}
                        >
                            Our Core Values
                        </MotionH2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <MotionDiv 
                                className="bg-white p-8 rounded-lg shadow-md"
                                variants={fadeIn}
                            >
                                <div className="text-purple-700 text-4xl mb-4">01</div>
                                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                                <p className="text-gray-600">
                                    We constantly push the boundaries of what's possible, embracing new technologies 
                                    and methodologies to deliver innovative solutions.
                                </p>
                            </MotionDiv>
                            <MotionDiv 
                                className="bg-white p-8 rounded-lg shadow-md"
                                variants={fadeIn}
                            >
                                <div className="text-purple-700 text-4xl mb-4">02</div>
                                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                                <p className="text-gray-600">
                                    We are committed to delivering excellence in everything we do, from customer 
                                    service to technical implementation and support.
                                </p>
                            </MotionDiv>
                            <MotionDiv 
                                className="bg-white p-8 rounded-lg shadow-md"
                                variants={fadeIn}
                            >
                                <div className="text-purple-700 text-4xl mb-4">03</div>
                                <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                                <p className="text-gray-600">
                                    We conduct our business with the highest ethical standards, fostering trust 
                                    and transparency in all client relationships.
                                </p>
                            </MotionDiv>
                        </div>
                    </div>
                </MotionSection>
                
                {/* Team Section */}
                <MotionSection 
                    className="py-16 bg-white"
                    variants={scrollReveal}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="container mx-auto px-4">
                        <MotionH2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</MotionH2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <MotionDiv className="text-center">
                                <img 
                                    src="/images/fredrick-tendong-HVYepJYeHdQ-unsplash.jpg" 
                                    alt="CEO" 
                                    className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
                                />
                                <h3 className="text-xl font-semibold">Louis</h3>
                                <p className="text-gray-600">CEO & Founder</p>
                            </MotionDiv>
                            <MotionDiv className="text-center">
                                <img 
                                    src="/images/christina-wocintechchat-com-rg1y72eKw6o-unsplash.jpg" 
                                    alt="CTO" 
                                    className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
                                />
                                <h3 className="text-xl font-semibold">NK</h3>
                                <p className="text-gray-600">CTO</p>
                            </MotionDiv>
                            <MotionDiv className="text-center">
                                <img 
                                    src="/images/nguyen-dang-hoang-nhu-4-Hx3pGEwt8-unsplash.jpg" 
                                    alt="COO" 
                                    className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
                                />
                                <h3 className="text-xl font-semibold">Michael Brown</h3>
                                <p className="text-gray-600">COO</p>
                            </MotionDiv>
                        </div>
                    </div>
                </MotionSection>
                
                <Footer />
            </MotionDiv>
        </>
    );
}
