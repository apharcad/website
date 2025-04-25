import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import Services from "@/Components/About";
import Footer from "@/Components/Footer";

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
