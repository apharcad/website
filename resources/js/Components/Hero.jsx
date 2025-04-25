import React from "react";
import { Link } from "@inertiajs/react";

const HeroSection = () => {
    return (
        <section className="relative h-[60vh] bg-black text-white py-20">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h1 className="text-5xl font-bold">
                    IT SOLUTIONS <span className="text-purple-400">&</span>{" "}
                    SERVICES
                </h1>
                <p className="mt-4 text-lg">
                    Experience the best IT solutions.
                </p>
                <Link
                    href="/about"
                    className="mt-6 inline-block bg-purple-500 px-6 py-3 text-lg rounded-lg"
                >
                    Learn More
                </Link>
            </div>
        </section>
    );
};

export default HeroSection;
