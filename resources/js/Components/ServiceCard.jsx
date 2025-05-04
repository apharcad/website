import React from "react";

const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <div className="text-purple-500 text-4xl">{icon}</div>
            <h3 className="mt-4 text-xl font-bold">{title}</h3>
            <p className="mt-2 text-gray-600">{description}</p>
        </div>
    );
};

export default ServiceCard;
