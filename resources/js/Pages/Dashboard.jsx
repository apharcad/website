// 4. Create React Inertia Pages (resources/js/Pages/Home.jsx)
// ------------------------------------------------------------
import { Head } from "@inertiajs/react";
import Navbar from "../Components/Navbar.jsx";
import Hero from "../Components/Hero.jsx";
import Services from "../Components/About.jsx";
import Footer from "../Components/Footer";

export default function Home() {
    return (
        <>
            <Head title="IT Solutions & Services" />
            <Navbar />
            <Hero />
            <Services />
            <Footer />
        </>
    );
}

// 5. Components (Example: resources/js/Components/Navbar.jsx)
// ------------------------------------------------------------
export function Navbar() {
    return (
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
            <div className="text-xl font-bold">Infetech</div>
            <ul className="flex space-x-4">
                <li>
                    <a href="#" className="text-gray-700 hover:text-purple-500">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" className="text-gray-700 hover:text-purple-500">
                        Services
                    </a>
                </li>
                <li>
                    <a href="#" className="text-gray-700 hover:text-purple-500">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}
