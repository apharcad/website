import { Head } from '@inertiajs/react';
import { useState } from 'react';
import Navbar from '@/Components/Website/Navbar';
import Footer from '@/Components/Website/Footer';
import { 
    MotionDiv, MotionSection, MotionH1, MotionH2, MotionP, MotionImg,
    fadeIn, staggerContainer, slideInLeft, slideInRight, scaleIn, pageTransition
} from '@/Components/Website/Animation';

export default function Contact({ auth }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState({
        status: null,
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would normally submit to a backend API
        console.log('Form submitted:', formData);
        
        // Simulate form submission
        setFormStatus({
            status: 'success',
            message: 'Thank you for your message! We will get back to you shortly.'
        });

        // Reset form after successful submission
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    return (
        <>
            <Head title="Contact Us - Apharcad Technology" />
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
                            Contact Us
                        </MotionH1>
                        <MotionP 
                            className="text-xl max-w-3xl mx-auto"
                            variants={fadeIn}
                        >
                            Have questions or need assistance? We're here to help! Reach out to our 
                            team and we'll get back to you as soon as possible.
                        </MotionP>
                    </div>
                </MotionSection>
                
                {/* Contact Section */}
                <MotionSection className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row">
                            {/* Contact Form */}
                            <MotionDiv 
                                className="lg:w-2/3 lg:pr-10"
                                variants={slideInLeft}
                            >
                                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                                
                                {formStatus.status && (
                                    <MotionDiv
                                        className={`mb-6 p-4 rounded ${
                                            formStatus.status === 'success' 
                                                ? 'bg-green-100 text-green-700' 
                                                : 'bg-red-100 text-red-700'
                                        }`}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        {formStatus.message}
                                    </MotionDiv>
                                )}
                                
                                <form onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label className="block text-gray-700 mb-2" htmlFor="name">
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                                                placeholder="John Doe"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 mb-2" htmlFor="email">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                                                placeholder="john@example.com"
                                                required
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label className="block text-gray-700 mb-2" htmlFor="phone">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                                                placeholder="+1 (123) 456-7890"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 mb-2" htmlFor="subject">
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                                                placeholder="How can we help you?"
                                                required
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="mb-6">
                                        <label className="block text-gray-700 mb-2" htmlFor="message">
                                            Your Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="6"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                                            placeholder="Tell us about your project, questions, or feedback..."
                                            required
                                        ></textarea>
                                    </div>
                                    
                                    <MotionDiv
                                        className="text-center md:text-left"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <button
                                            type="submit"
                                            className="bg-purple-700 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-purple-800 transition"
                                        >
                                            Send Message
                                        </button>
                                    </MotionDiv>
                                </form>
                            </MotionDiv>
                            
                            {/* Contact Information */}
                            <MotionDiv 
                                className="lg:w-1/3 mt-12 lg:mt-0"
                                variants={slideInRight}
                            >
                                <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                                    <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                                    
                                    <div className="space-y-6">
                                        <div className="flex items-start">
                                            <div className="bg-purple-100 p-3 rounded-full mr-4">
                                                <svg className="w-6 h-6 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold mb-1">Our Location</h4>
                                                <p className="text-gray-600">
                                                    123 Business Avenue<br />
                                                    Silicon Valley, CA 94123<br />
                                                    United States
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-start">
                                            <div className="bg-purple-100 p-3 rounded-full mr-4">
                                                <svg className="w-6 h-6 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold mb-1">Call Us</h4>
                                                <p className="text-gray-600">
                                                    +1 234 567 8900<br />
                                                    +1 234 567 8901
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-start">
                                            <div className="bg-purple-100 p-3 rounded-full mr-4">
                                                <svg className="w-6 h-6 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold mb-1">Email Us</h4>
                                                <p className="text-gray-600">
                                                    info@apharcadtech.com<br />
                                                    support@apharcadtech.com
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-start">
                                            <div className="bg-purple-100 p-3 rounded-full mr-4">
                                                <svg className="w-6 h-6 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold mb-1">Business Hours</h4>
                                                <p className="text-gray-600">
                                                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                                                    Saturday: 10:00 AM - 4:00 PM<br />
                                                    Sunday: Closed
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-8">
                                        <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
                                        <div className="flex space-x-4">
                                            <a href="#" className="bg-purple-100 p-3 rounded-full text-purple-700 hover:bg-purple-700 hover:text-white transition">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                                </svg>
                                            </a>
                                            <a href="#" className="bg-purple-100 p-3 rounded-full text-purple-700 hover:bg-purple-700 hover:text-white transition">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                                </svg>
                                            </a>
                                            <a href="#" className="bg-purple-100 p-3 rounded-full text-purple-700 hover:bg-purple-700 hover:text-white transition">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z"/>
                                                </svg>
                                            </a>
                                            <a href="#" className="bg-purple-100 p-3 rounded-full text-purple-700 hover:bg-purple-700 hover:text-white transition">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </MotionDiv>
                        </div>
                    </div>
                </MotionSection>
                
                {/* Map Section */}
                <MotionSection 
                    className="py-16 bg-gray-100"
                    variants={scaleIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    <div className="container mx-auto px-4">
                        <MotionH2 className="text-3xl font-bold text-center mb-10">Find Us on the Map</MotionH2>
                        <div className="rounded-lg overflow-hidden shadow-lg h-96 bg-gray-300">
                            {/* Replace with an actual map */}
                            <div className="h-full w-full flex items-center justify-center bg-gray-200">
                                <p className="text-gray-600">Map will be displayed here</p>
                                {/* You would typically use Google Maps or another map service here */}
                            </div>
                        </div>
                    </div>
                </MotionSection>
                
                <Footer />
            </MotionDiv>
        </>
    );
}
