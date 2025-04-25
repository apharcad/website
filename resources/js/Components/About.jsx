import React from "react";

const AboutSection = () => {
    return (
        <section className="py-20 px-6 bg-gray-100">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold">
                    We’re Partner of Your Innovations
                </h2>
                <p className="mt-4 text-gray-600">
                    Infetech is a provider of IT consulting and software
                    development services.
                </p>
                <div className="flex justify-center gap-6 mt-6">
                    <div className="p-6 bg-white rounded-lg shadow">
                        <h3 className="text-xl font-bold">6800+</h3>
                        <p>Satisfied Clients</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow">
                        <h3 className="text-xl font-bold">300+</h3>
                        <p>IT Senior Professionals</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
