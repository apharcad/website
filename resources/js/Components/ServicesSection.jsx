import React from "react";
import ServiceCard from "./ServiceCard";
import { FaCode, FaNetworkWired, FaCloud } from "react-icons/fa";

const ServicesSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold">Our IT Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    <ServiceCard
                        icon={<FaCode />}
                        title="Website Development"
                        description="Building high-quality web applications."
                    />
                    <ServiceCard
                        icon={<FaNetworkWired />}
                        title="Internal Networking"
                        description="Optimizing business network solutions."
                    />
                    <ServiceCard
                        icon={<FaCloud />}
                        title="Cloud Solutions"
                        description="Providing scalable cloud infrastructure."
                    />
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
