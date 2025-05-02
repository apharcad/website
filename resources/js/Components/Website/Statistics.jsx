import React from 'react';

export default function Statistics() {
    const stats = [
        {
            value: '50k+',
            label: 'Satisfied Customers'
        },
        {
            value: '5k+',
            label: 'Projects Completed'
        },
        {
            value: '3k+',
            label: 'Team Members'
        },
        {
            value: '85+',
            label: 'Awards Winning'
        }
    ];

    return (
        <div className="bg-purple-800 py-16 text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    {stats.map((stat, index) => (
                        <div key={index} className="w-1/2 md:w-1/4 text-center mb-8 md:mb-0">
                            <div className="text-4xl font-bold mb-2">{stat.value}</div>
                            <div className="text-purple-200">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
