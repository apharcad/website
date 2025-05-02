import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Website/Navbar';
import Footer from '@/Components/Website/Footer';
import { Link } from '@inertiajs/react';
import { 
    MotionDiv, MotionSection, MotionH1, MotionH2, MotionP,
    fadeIn, staggerContainer, slideInLeft, scrollReveal, pageTransition
} from '@/Components/Website/Animation';

export default function PagesIndex({ auth }) {
    const subPages = [
        {
            id: 1,
            title: "Our Team",
            description: "Meet our talented and experienced professionals who make Apharcad Technology a leader in the IT industry.",
            image: "/images/christina-wocintechchat-com-rg1y72eKw6o-unsplash.jpg",
            link: "/team"
        },
        {
            id: 2,
            title: "Careers",
            description: "Join our growing team and build your career in a dynamic and innovative environment.",
            image: "/images/fredrick-tendong-HVYepJYeHdQ-unsplash.jpg",
            link: "/careers"
        },
        {
            id: 3,
            title: "FAQs",
            description: "Find answers to common questions about our services and solutions.",
            image: "/images/nguyen-dang-hoang-nhu-4-Hx3pGEwt8-unsplash.jpg",
            link: "/faqs"
        },
        {
            id: 4,
            title: "Testimonials",
            description: "See what our clients have to say about our services and their experience working with us.",
            image: "/images/ofspace.jpg",
            link: "/testimonials"
        },
        {
            id: 5,
            title: "Privacy Policy",
            description: "Learn about how we collect, use, and protect your personal information.",
            image: "/images/software.jpg",
            link: "/privacy-policy"
        },
        {
            id: 6,
            title: "Terms & Conditions",
            description: "Read our terms and conditions for using our services and website.",
            image: "/images/programming.png",
            link: "/terms-conditions"
        }
    ];

    return (
        <>
            <Head title="Pages - Apharcad Technology" />
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
                    <div className="container mx-auto px-4 text-center">
                        <MotionH1 
                            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                            variants={fadeIn}
                        >
                            Pages
                        </MotionH1>
                        <MotionP 
                            className="text-xl text-gray-600 max-w-3xl mx-auto"
                            variants={fadeIn}
                        >
                            Explore additional resources and information about Apharcad Technology.
                        </MotionP>
                    </div>
                </MotionSection>
                
                {/* Pages Grid */}
                <MotionSection 
                    className="py-16 bg-white"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {subPages.map((page) => (
                                <MotionDiv 
                                    key={page.id} 
                                    className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                                    variants={fadeIn}
                                >
                                    <Link href={page.link}>
                                        <div className="relative h-60 overflow-hidden">
                                            <img 
                                                src={page.image} 
                                                alt={page.title} 
                                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                                <h3 className="text-white text-2xl font-bold p-6">{page.title}</h3>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <p className="text-gray-600">{page.description}</p>
                                            <div className="mt-4 text-purple-700 font-medium">
                                                Learn More →
                                            </div>
                                        </div>
                                    </Link>
                                </MotionDiv>
                            ))}
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
                            Contact us today to learn more about how Apharcad Technology can help your business succeed.
                        </MotionP>
                        <Link 
                            href="/contact" 
                            className="inline-block bg-white text-purple-700 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition"
                        >
                            Contact Us
                        </Link>
                    </div>
                </MotionSection>
                
                <Footer />
            </MotionDiv>
        </>
    );
}
