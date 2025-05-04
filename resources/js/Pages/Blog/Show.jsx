import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import Navbar from '@/Components/Website/Navbar';
import Footer from '@/Components/Website/Footer';
import { 
    MotionDiv, MotionSection, MotionH1, MotionP, 
    fadeIn, slideInLeft, slideInRight, pageTransition 
} from '@/Components/Website/Animation';

export default function BlogShow({ auth, postId }) {
    // In a real application, you would fetch this data from your backend
    const posts = [
        {
            id: 1,
            title: 'Top 10 UI/UX Design Trends for 2023',
            slug: 'top-10-ui-ux-design-trends-2023',
            excerpt: 'Discover the latest UI/UX design trends that are shaping the digital landscape in 2023.',
            image: '/images/christina-wocintechchat-com-rg1y72eKw6o-unsplash.jpg',
            category: 'Design',
            author: 'Alex Johnson',
            date: 'June 15, 2023',
            content: `
                <p>The world of UI/UX design is constantly evolving. In 2023, we're seeing a significant shift towards more immersive and personalized user experiences. Here are the top 10 trends that are dominating the design landscape this year:</p>
                
                <h2>1. Dark Mode Optimization</h2>
                <p>Dark mode isn't just a preference anymore—it's becoming a standard feature. Designers are now focusing on creating interfaces that look equally stunning in both light and dark modes, with careful consideration of contrast, color choices, and visual hierarchy.</p>
                
                <h2>2. Microinteractions 2.0</h2>
                <p>Microinteractions have evolved beyond simple hover effects. In 2023, we're seeing more sophisticated, contextual microinteractions that provide real-time feedback and guide users through their journey in subtle yet impactful ways.</p>
                
                <h2>3. 3D Elements</h2>
                <p>With improved device performance and WebGL, 3D elements are becoming more common in web interfaces. These elements add depth and interactivity, creating more engaging user experiences when used thoughtfully.</p>
                
                <h2>4. Voice User Interfaces</h2>
                <p>As voice technology continues to improve, more websites and applications are incorporating voice controls and interactions, requiring designers to think beyond visual interfaces.</p>
                
                <h2>5. Augmented Reality Integration</h2>
                <p>AR is breaking out of dedicated apps and finding its way into everyday web experiences, especially in e-commerce and education. Designers are finding creative ways to incorporate AR elements without disrupting the core user experience.</p>
                
                <h2>6. Glassmorphism Evolution</h2>
                <p>The glassmorphism trend is evolving with more subtle and functional implementations, focusing on creating hierarchy and focus rather than just aesthetic appeal.</p>
                
                <h2>7. Accessible Design First</h2>
                <p>Accessibility is no longer an afterthought. In 2023, designers are building with accessibility as a primary consideration, creating more inclusive experiences from the ground up.</p>
                
                <h2>8. Data Visualization</h2>
                <p>With the growing importance of data, creative and interactive data visualization is becoming a critical part of many user interfaces, helping users understand complex information at a glance.</p>
                
                <h2>9. Personalized UI</h2>
                <p>AI-driven personalization is enabling interfaces that adapt to individual user preferences and behaviors, creating more relevant and efficient experiences.</p>
                
                <h2>10. Sustainable Design Practices</h2>
                <p>Designers are becoming more conscious of the environmental impact of digital products, implementing practices that reduce energy consumption and carbon footprints.</p>
                
                <p>As these trends continue to evolve, the focus remains on creating user experiences that are not just visually appealing but also functional, accessible, and aligned with users' needs and expectations. The most successful designs will be those that thoughtfully incorporate these trends in service of a better overall user experience.</p>
            `
        },
        {
            id: 2,
            title: 'How Cloud Computing is Transforming Business Operations',
            slug: 'cloud-computing-transforming-business-operations',
            excerpt: 'Explore how cloud technology is revolutionizing the way businesses operate and scale in the digital era.',
            image: '/images/ofspace.jpg',
            category: 'Cloud Technology',
            author: 'Sarah Chen',
            date: 'May 28, 2023',
            content: `
                <p>Cloud computing has fundamentally changed how businesses operate, enabling unprecedented scalability, flexibility, and efficiency. In this article, we explore the key ways cloud technology is transforming business operations across industries.</p>
                
                <h2>Scalability and Flexibility</h2>
                <p>One of the most significant advantages of cloud computing is the ability to scale resources up or down based on demand. This elasticity allows businesses to respond quickly to changing market conditions without large upfront investments in infrastructure.</p>
                
                <h2>Cost Optimization</h2>
                <p>Cloud computing has shifted IT expenditure from capital expenses (buying hardware and software) to operational expenses (paying for services as needed). This pay-as-you-go model enables businesses to optimize costs and invest resources more strategically.</p>
                
                <h2>Enhanced Collaboration</h2>
                <p>Cloud-based tools and platforms have revolutionized how teams collaborate, enabling real-time document sharing, simultaneous editing, and seamless communication across geographic boundaries.</p>
                
                <h2>Data-Driven Decision Making</h2>
                <p>Cloud services provide advanced analytics capabilities that were previously accessible only to large enterprises. Businesses of all sizes can now leverage data-driven insights to make more informed decisions and stay competitive.</p>
                
                <h2>Business Continuity</h2>
                <p>Cloud solutions offer robust disaster recovery and business continuity options, with automated backups, redundant systems, and geographically distributed data centers ensuring operations can continue even in the face of disruptions.</p>
                
                <h2>Accelerated Innovation</h2>
                <p>By reducing the need to manage infrastructure, cloud computing frees up IT resources to focus on innovation and strategic initiatives. Additionally, cloud providers continuously update their services with the latest technologies, giving businesses access to cutting-edge capabilities without additional investment.</p>
                
                <h2>Remote Work Enablement</h2>
                <p>The events of recent years have highlighted the importance of supporting remote work. Cloud computing provides the foundation for this flexibility, allowing employees to access systems and data securely from anywhere with an internet connection.</p>
                
                <h2>Looking Ahead</h2>
                <p>As cloud technologies continue to evolve, we can expect to see even more transformative impacts on business operations. Edge computing, AI integration, and industry-specific cloud solutions are just a few of the developments that will shape the future of business technology.</p>
                
                <p>For businesses that haven't yet embraced cloud computing, the competitive advantages it offers make it an increasingly essential consideration. And for those already leveraging cloud services, staying abreast of new developments and optimizing their cloud strategy will be key to maintaining their competitive edge.</p>
            `
        }
    ];

    // Find the post by ID
    const post = posts.find(p => p.id === parseInt(postId)) || posts[0];

    // Related posts (exclude current post)
    const relatedPosts = posts.filter(p => p.id !== parseInt(postId)).slice(0, 2);

    return (
        <>
            <Head title={`${post.title} - Apharcad Technology Blog`} />
            <MotionDiv 
                className="min-h-screen bg-white"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageTransition}
            >
                <Navbar auth={auth} />
                
                {/* Blog Post Header */}
                <MotionSection 
                    className="py-16 bg-gray-50"
                    variants={fadeIn}
                >
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="mb-4">
                                <Link href="/blog" className="text-purple-600 hover:text-purple-800 inline-flex items-center">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                                    </svg>
                                    Back to Blog
                                </Link>
                            </div>
                            <MotionH1 
                                className="text-3xl md:text-4xl font-bold mb-4"
                                variants={fadeIn}
                            >
                                {post.title}
                            </MotionH1>
                            <div className="flex flex-wrap items-center text-gray-600 mb-6">
                                <span className="mr-4 mb-2">{post.date}</span>
                                <span className="mr-4 mb-2">By {post.author}</span>
                                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm mb-2">
                                    {post.category}
                                </span>
                            </div>
                        </div>
                    </div>
                </MotionSection>
                
                {/* Featured Image */}
                <div className="w-full bg-gray-200 h-96 md:h-[500px] relative">
                    <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                    />
                </div>
                
                {/* Article Content */}
                <MotionSection className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row">
                            <MotionDiv 
                                className="lg:w-2/3 lg:pr-12"
                                variants={slideInLeft}
                            >
                                <div 
                                    className="prose prose-lg max-w-none" 
                                    dangerouslySetInnerHTML={{ __html: post.content }}
                                />
                                
                                {/* Share and Tags */}
                                <div className="mt-12 pt-6 border-t border-gray-200">
                                    <div className="flex flex-wrap items-center justify-between">
                                        <div className="mb-4 lg:mb-0">
                                            <h4 className="text-lg font-semibold mb-2">Share this article</h4>
                                            <div className="flex space-x-3">
                                                <a href="#" className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                                <a href="#" className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center hover:bg-blue-500">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                                <a href="#" className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700">
                                                    <i className="fab fa-pinterest"></i>
                                                </a>
                                                <a href="#" className="w-10 h-10 rounded-full bg-blue-800 text-white flex items-center justify-center hover:bg-blue-900">
                                                    <i className="fab fa-linkedin-in"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold mb-2">Tags</h4>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                                                    Technology
                                                </span>
                                                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                                                    {post.category}
                                                </span>
                                                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                                                    Trends
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </MotionDiv>
                            
                            <MotionDiv 
                                className="lg:w-1/3 mt-12 lg:mt-0"
                                variants={slideInRight}
                            >
                                <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
                                    <h3 className="text-xl font-semibold mb-6">Related Articles</h3>
                                    <div className="space-y-6">
                                        {relatedPosts.map(relatedPost => (
                                            <div key={relatedPost.id} className="flex">
                                                <div className="w-24 h-24 shrink-0">
                                                    <img 
                                                        src={relatedPost.image} 
                                                        alt={relatedPost.title} 
                                                        className="w-full h-full object-cover rounded"
                                                    />
                                                </div>
                                                <div className="ml-4">
                                                    <Link 
                                                        href={`/blog/${relatedPost.id}`} 
                                                        className="font-medium hover:text-purple-700"
                                                    >
                                                        {relatedPost.title}
                                                    </Link>
                                                    <p className="text-sm text-gray-500 mt-1">{relatedPost.date}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="bg-purple-50 p-8 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold mb-4">Subscribe to Newsletter</h3>
                                    <p className="text-gray-600 mb-6">Stay updated with our latest news and articles.</p>
                                    <form>
                                        <div className="mb-4">
                                            <input 
                                                type="email" 
                                                placeholder="Your email address" 
                                                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                                required
                                            />
                                        </div>
                                        <button 
                                            type="submit" 
                                            className="w-full bg-purple-700 text-white py-3 rounded-md hover:bg-purple-800 transition"
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
