import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Website/Navbar';
import Footer from '@/Components/Website/Footer';
import { Link } from '@inertiajs/react';
import { 
    MotionDiv, MotionSection, MotionH1, MotionH2, MotionP,
    fadeIn, staggerContainer, slideInLeft, scrollReveal, pageTransition
} from '@/Components/Website/Animation';

export default function Blog({ auth }) {
    const blogPosts = [
        {
            id: 1,
            title: "10 Ways to Improve Your Website's Security",
            excerpt: "Learn the essential steps to protect your website from security threats and vulnerabilities.",
            image: "/images/nguyen-dang-hoang-nhu-4-Hx3pGEwt8-unsplash.jpg",
            author: "Michael Brown",
            date: "May 1, 2025",
            category: "Security"
        },
        {
            id: 2,
            title: "The Future of Cloud Computing in 2025",
            excerpt: "Explore the latest trends and innovations in cloud technology and how they will shape business operations.",
            image: "/images/fredrick-tendong-HVYepJYeHdQ-unsplash.jpg",
            author: "NK",
            date: "April 28, 2025",
            category: "Cloud"
        },
        {
            id: 3,
            title: "Why UX Design Matters for Business Growth",
            excerpt: "Discover how user experience design directly impacts customer satisfaction and business performance.",
            image: "/images/christina-wocintechchat-com-rg1y72eKw6o-unsplash.jpg",
            author: "Louis",
            date: "April 25, 2025",
            category: "Design"
        },
        {
            id: 4,
            title: "Implementing DevOps in Your Organization",
            excerpt: "Learn practical strategies for adopting DevOps methodologies to improve your development pipeline.",
            image: "/images/software.jpg",
            author: "Michael Brown",
            date: "April 22, 2025",
            category: "DevOps"
        },
        {
            id: 5,
            title: "The Impact of AI on Digital Marketing",
            excerpt: "Explore how artificial intelligence is revolutionizing marketing strategies and customer engagement.",
            image: "/images/ofspace.jpg",
            author: "NK",
            date: "April 19, 2025",
            category: "Marketing"
        },
        {
            id: 6,
            title: "How to Build a Successful Mobile App",
            excerpt: "Step-by-step guide to creating mobile applications that users love and businesses benefit from.",
            image: "/images/programming.png",
            author: "Louis",
            date: "April 16, 2025",
            category: "Development"
        }
    ];

    const categories = [
        "All Categories",
        "Security",
        "Cloud",
        "Design",
        "DevOps",
        "Marketing",
        "Development"
    ];

    return (
        <>
            <Head title="Blog - Apharcad Technology" />
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
                    className="py-16 bg-gray-100" 
                    variants={fadeIn}
                >
                    <div className="container mx-auto px-4 text-center">
                        <MotionH1 
                            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                            variants={fadeIn}
                        >
                            Our Blog
                        </MotionH1>
                        <MotionP 
                            className="text-xl text-gray-600 max-w-3xl mx-auto"
                            variants={fadeIn}
                        >
                            Stay updated with the latest insights, tips, and news in technology and business.
                        </MotionP>
                    </div>
                </MotionSection>
                
                {/* Blog Content */}
                <MotionSection className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row">
                            {/* Main Content */}
                            <div className="md:w-3/4 md:pr-8">
                                <MotionDiv
                                    className="mb-8"
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                    variants={staggerContainer}
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {blogPosts.map((post) => (
                                            <MotionDiv 
                                                key={post.id} 
                                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                                                variants={fadeIn}
                                            >
                                                <Link href={`/blog/${post.id}`}>
                                                    <img 
                                                        src={post.image} 
                                                        alt={post.title} 
                                                        className="w-full h-48 object-cover" 
                                                    />
                                                    <div className="p-6">
                                                        <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
                                                            <span>{post.date}</span>
                                                            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">
                                                                {post.category}
                                                            </span>
                                                        </div>
                                                        <h3 className="text-xl font-semibold mb-2 hover:text-purple-700 transition">
                                                            {post.title}
                                                        </h3>
                                                        <p className="text-gray-600 mb-4">
                                                            {post.excerpt}
                                                        </p>
                                                        <div className="flex items-center">
                                                            <div className="text-gray-600">
                                                                By <span className="font-medium">{post.author}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </MotionDiv>
                                        ))}
                                    </div>
                                </MotionDiv>
                                
                                {/* Pagination */}
                                <div className="flex justify-center mt-10">
                                    <nav className="flex items-center space-x-2">
                                        <Link className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50">
                                            Prev
                                        </Link>
                                        <Link className="px-3 py-1 rounded border bg-purple-700 text-white">
                                            1
                                        </Link>
                                        <Link className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50">
                                            2
                                        </Link>
                                        <Link className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50">
                                            3
                                        </Link>
                                        <Link className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50">
                                            Next
                                        </Link>
                                    </nav>
                                </div>
                            </div>
                            
                            {/* Sidebar */}
                            <MotionDiv 
                                className="md:w-1/4 mt-10 md:mt-0"
                                variants={slideInLeft}
                            >
                                {/* Search */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
                                    <h3 className="text-lg font-semibold mb-4">Search</h3>
                                    <div className="flex">
                                        <input
                                            type="text"
                                            placeholder="Search posts..."
                                            className="flex-1 px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-purple-600"
                                        />
                                        <button className="bg-purple-700 text-white px-4 py-2 rounded-r hover:bg-purple-800">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                
                                {/* Categories */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
                                    <h3 className="text-lg font-semibold mb-4">Categories</h3>
                                    <ul>
                                        {categories.map((category, index) => (
                                            <li key={index} className="mb-2">
                                                <Link 
                                                    href={`/blog/category/${category.toLowerCase()}`}
                                                    className={`block px-3 py-2 rounded ${index === 0 ? 'bg-purple-700 text-white' : 'hover:bg-gray-100'}`}
                                                >
                                                    {category}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                
                                {/* Recent Posts */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                                    <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
                                    <ul>
                                        {blogPosts.slice(0, 3).map((post) => (
                                            <li key={post.id} className="mb-4 pb-4 border-b border-gray-200 last:border-0 last:mb-0 last:pb-0">
                                                <Link href={`/blog/${post.id}`} className="flex items-center">
                                                    <img 
                                                        src={post.image} 
                                                        alt={post.title}
                                                        className="w-16 h-16 object-cover rounded mr-3"
                                                    />
                                                    <div>
                                                        <h4 className="font-medium hover:text-purple-700 transition">{post.title}</h4>
                                                        <span className="text-sm text-gray-500">{post.date}</span>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </MotionDiv>
                        </div>
                    </div>
                </MotionSection>
                
                {/* Subscribe Section */}
                <MotionSection 
                    className="py-16 bg-purple-700 text-white"
                    variants={scrollReveal}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="container mx-auto px-4 text-center">
                        <MotionH2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</MotionH2>
                        <MotionP className="text-lg mb-8 max-w-3xl mx-auto">
                            Get the latest technology insights and updates delivered directly to your inbox.
                        </MotionP>
                        <div className="max-w-md mx-auto">
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="flex-1 px-4 py-3 rounded-l-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
                                />
                                <button className="bg-gray-900 text-white px-6 py-3 rounded-r-md hover:bg-gray-800 transition">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </MotionSection>
                
                <Footer />
            </MotionDiv>
        </>
    );
}
