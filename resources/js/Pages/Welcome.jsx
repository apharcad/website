import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Website/Navbar';
import Hero from '@/Components/Website/Hero';
import Services from '@/Components/Website/Services';
import ServicesDetailed from '@/Components/Website/ServicesDetailed';
import Statistics from '@/Components/Website/Statistics';
import Community from '@/Components/Website/Community';
import CaseStudy from '@/Components/Website/CaseStudy';
import Footer from '@/Components/Website/Footer';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Apharcad Technology - IT Services & Solutions">
                <link rel="icon" type="image/png" href="/images/logo.jpg" />
            </Head>

            <div className="min-h-screen bg-white">
                <Navbar auth={auth} />
                <Hero />
                <Services />
                <ServicesDetailed />
                <Statistics />
                <Community />
                <CaseStudy />
                <Footer />
            </div>
        </>
    );
}
