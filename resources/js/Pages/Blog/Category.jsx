import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import Navbar from '@/Components/Website/Navbar';
import Footer from '@/Components/Website/Footer';
import { 
    MotionDiv, MotionSection, MotionH1, MotionP,
    fadeIn, staggerContainer, slideInLeft, slideInRight, pageTransition
} from '@/Components/Website/Animation';

export default function BlogCategory({ auth, category }) {
    // Sample blog post data - in a real app, you would fetch this from your backend
    const allPosts = [
        {
            id: 1,
            title: 'Top 10 UI/UX Design Trends for 2023',
            slug: 'top-10-ui-ux-design-trends-2023',
            excerpt: 'Discover the latest UI/UX design trends that are shaping the digital landscape in 2023.',
            image: '/images/christina-wocintechchat-com-rg1y72eKw6o-unsplash.jpg',
            category: 'Design',
            author: 'Alex Johnson',
            date: 'June 15, 2023'
        },
        {
            id: 2,
            title: 'How Cloud Computing is Transforming Business Operations',
            slug: 'cloud-computing-transforming-business-operations',
            excerpt: 'Explore how cloud technology is revolutionizing the way businesses operate and scale in the digital era.',
            image: '/images/ofspace.jpg',
            category: 'Cloud Technology',
            author: 'Sarah Chen',
            date: 'May 28, 2023'
        },
        {
            id: 3,
            title: 'Cybersecurity Best Practices for Small Businesses',
            slug: 'cybersecurity-best-practices-small-businesses',
            excerpt: 'Learn essential security measures to protect your small business from cyber threats and data breaches.',
            image: '/images/nguyen-dang-hoang-nhu-4-Hx3pGEwt8-unsplash.jpg',
            category: 'Security',
            author: 'Michael Rodriguez',
            date: 'April 17, 2023'
        },
        {
            id: 4,
            title: 'The Rise of Progressive Web Apps',
            slug: 'rise-of-progressive-web-apps',
            excerpt: 'Why PWAs are becoming the preferred approach for delivering seamless mobile web experiences.',
            image: '/images/programming.png',
            category: 'Web Development',
            author: 'David Park',
            date: 'March 22, 2023'
        },
        {
            id: 5,
            title: 'Artificial Intelligence in Customer Service',
            slug: 'ai-in-customer-service',
            excerpt: 'How AI is revolutionizing customer support and enhancing user satisfaction.',
            image: '/images/fredrick-tendong-HVYepJYeHdQ-unsplash.jpg',
            category: 'AI & ML',
            author: 'Lisa Wong',
            date: 'February 14, 2023'
        },
        {
            id: 6,
            title: 'Choosing the Right Tech Stack for Your Startup',
            slug: 'choosing-right-tech-stack-for-startup',
            excerpt: 'A comprehensive guide to selecting technologies that will support your business growth.',
            image: '/images/software.jpg',
            category: 'Technology',
            author: 'James Wilson',
            date: 'January 30, 2023'
        }
    ];
    
    // Filter posts by category
    const categoryPosts = allPosts.filter(post => 
        post.category.toLowerCase() === category.toLowerCase() || 
        // If no specific category matches, show all posts under "Technology" category
        (category.toLowerCase() === 'technology' && !allPosts.some(p => p.category.toLowerCase() === category.toLowerCase()))
    );
    
    // Get all unique categories for the sidebar
    const categories = [...new Set(allPosts.map(post => post.category))];
    
    // Format category name for display (e.g., "web-development" to "Web Development")
    const formatCategoryName = (cat) => {
        return cat
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <>
            <Head title={`${formatCategoryName(category)} Articles - Apharcad Technology Blog`} />
            <MotionDiv 
                className="min-h-screen bg-white"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageTransition}
            >
                <Navbar auth={auth} />
                
                {/* Category Header */}
                <MotionSection 
                    className="py-16 bg-gray-50"
                    variants={fadeIn}
                >
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="mb-4">
                                <Link href="/blog" className="text-purple-600 hover:text-purple-800 inline-flex items-center">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                                    </svg>
                                    Back to All Articles
                                </Link>
                            </div>
                            <MotionH1 
                                className="text-3xl md:text-4xl font-bold mb-4"
                                variants={fadeIn}
                            >
                                {formatCategoryName(category)} Articles
                            </MotionH1>
                            <MotionP 
                                className="text-xl text-gray-600"
                                variants={fadeIn}
                            >
                                Browse our latest articles and insights about {formatCategoryName(category)}
                            </MotionP>
                        </div>
                    </div>
                </MotionSection>
                
                {/* Blog Content */}
                <MotionSection className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row">
                            {/* Main Content - Blog Posts */}
                            <MotionDiv 
                                className="lg:w-2/3 lg:pr-12"
                                variants={slideInLeft}
                            >
                                {categoryPosts.length > 0 ? (
                                    <div 
                                        className="grid md:grid-cols-2 gap-8"
                                        initial="initial"
                                        animate="animate"
                                        variants={staggerContainer}
                                    >
                                        {categoryPosts.map(post => (
                                            <MotionDiv 
                                                key={post.id} 
                                                className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-xl"
                                                variants={fadeIn}
                                            >
                                                <Link href={`/blog/${post.id}`}>
                                                    <div className="h-48 overflow-hidden">
                                                        <img 
                                                            src={post.image} 
                                                            alt={post.title} 
                                                            className="w-full h-full object-cover transition duration-300 hover:scale-105"
                                                        />
                                                    </div>
                                                </Link>
                                                <div className="p-6">
                                                    <div className="flex items-center text-gray-500 text-sm mb-2">
                                                        <span>{post.date}</span>
                                                        <span className="mx-2">•</span>
                                                        <span className="text-purple-600">{post.category}</span>
                                                    </div>
                                                    <Link href={`/blog/${post.id}`}>
                                                        <h3 className="text-xl font-bold mb-2 hover:text-purple-700 transition">{post.title}</h3>
                                                    </Link>
                                                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                                    <Link 
                                                        href={`/blog/${post.id}`} 
                                                        className="text-purple-700 font-medium inline-flex items-center hover:text-purple-800"
                                                    >
                                                        Read More
                                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                                        </svg>
                                                    </Link>
                                                </div>
                                            </MotionDiv>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-12">
                                        <h3 className="text-2xl font-semibold mb-4">No articles found</h3>
                                        <p className="text-gray-600 mb-6">We couldn't find any articles in this category.</p>
                                        <Link 
                                            href="/blog" 
                                            className="bg-purple-700 text-white px-6 py-3 rounded-md hover:bg-purple-800 transition"
                                        >
                                            Browse All Articles
                                        </Link>
                                    </div>
                                )}
                                
                                {/* Pagination - Static for now */}
                                {categoryPosts.length > 0 && (
                                    <div className="mt-12 flex justify-center">
                                        <nav className="inline-flex rounded-md shadow">
                                            <a href="#" className="py-2 px-4 bg-white border border-gray-300 rounded-l-md text-gray-700 hover:bg-gray-50">
                                                Previous
                                            </a>
                                            <a href="#" className="py-2 px-4 bg-purple-700 text-white border border-purple-700">
                                                1
                                            </a>
                                            <a href="#" className="py-2 px-4 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                                                2
                                            </a>
                                            <a href="#" className="py-2 px-4 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                                                3
                                            </a>
                                            <a href="#" className="py-2 px-4 bg-white border border-gray-300 rounded-r-md text-gray-700 hover:bg-gray-50">
                                                Next
                                            </a>
                                        </nav>
                                    </div>
                                )}
                            </MotionDiv>
                            
                            {/* Sidebar */}
                            <MotionDiv 
                                className="lg:w-1/3 mt-12 lg:mt-0"
                                variants={slideInRight}
                            >
                                {/* Search */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
                                    <h3 className="text-lg font-semibold mb-4">Search</h3>
                                    <div className="relative">
                                        <input 
                                            type="text" 
                                            placeholder="Search articles..." 
                                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        />
                                        <button className="absolute right-3 top-2">
                                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                
                                {/* Categories */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
                                    <h3 className="text-lg font-semibold mb-4">Categories</h3>
                                    <ul className="space-y-2">
                                        <li>
                                            <Link 
                                                href="/blog" 
                                                className={`flex items-center justify-between hover:text-purple-700`}
                                            >
                                                <span>All Categories</span>
                                                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
                                                    {allPosts.length}
                                                </span>
                                            </Link>
                                        </li>
                                        {categories.map((cat, index) => (
                                            <li key={index}>
                                                <Link 
                                                    href={`/blog/category/${cat.toLowerCase().replace(' ', '-')}`} 
                                                    className={`flex items-center justify-between ${cat.toLowerCase() === category.toLowerCase() ? 'text-purple-700 font-medium' : 'hover:text-purple-700'}`}
                                                >
                                                    <span>{cat}</span>
                                                    <span className={`${cat.toLowerCase() === category.toLowerCase() ? 'bg-purple-100 text-purple-700' : 'bg-gray-200 text-gray-700'} px-2 py-1 rounded-full text-xs`}>
                                                        {allPosts.filter(post => post.category === cat).length}
                                                    </span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                
                                {/* Recent Posts */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
                                    <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
                                    <div className="space-y-4">
                                        {allPosts.slice(0, 3).map(post => (
                                            <div key={post.id} className="flex">
                                                <div className="w-20 h-20 shrink-0">
                                                    <img 
                                                        src={post.image} 
                                                        alt={post.title} 
                                                        className="w-full h-full object-cover rounded"
                                                    />
                                                </div>
                                                <div className="ml-4">
                                                    <Link 
                                                        href={`/blog/${post.id}`} 
                                                        className="font-medium hover:text-purple-700 text-sm leading-tight block"
                                                    >
                                                        {post.title}
                                                    </Link>
                                                    <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Newsletter Subscribe */}
                                <div className="bg-purple-50 p-6 rounded-lg shadow-md">
                                    <h3 className="text-lg font-semibold mb-4">Subscribe to Newsletter</h3>
                                    <p className="text-gray-600 mb-4 text-sm">Stay updated with our latest articles and news.</p>
                                    <form>
                                        <div className="mb-3">
                                            <input 
                                                type="email" 
                                                placeholder="Your email address" 
                                                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                                required
                                            />
                                        </div>
                                        <button 
                                            type="submit" 
                                            className="w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800 transition"
                                        >
                                            Subscribe Now
                                        </button>
                                    </form>
                                </div>
                            </MotionDiv>
                        </div>
                    </div>
                </MotionSection>
                
                <Footer />
            </MotionDiv>
        </>
    );
}
