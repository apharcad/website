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
        <div className="bg-primary py-8 text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    {stats.map((stat, index) => (
                        <div key={index} className="w-1/2 md:w-1/4 text-center mb-6 md:mb-0">
                            <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                            <div className="text-xs md:text-sm opacity-75">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
