import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

function Experience() {
    const experiences = [
        {
            role: 'SDE Intern',
            company: 'CG Infinity',
            duration: 'Sept 2024 - Aug 2025',
            description: 'Designing user-centric interfaces and working on the development of web applications using Nextjs and .NET.',
        },
    ];

    return (
        <div className="py-12">
            <div className="container mx-auto px-4">
                <div className="font-bold text-2xl md:text-3xl lg:text-4xl mb-10 text-center">
                    <div className="text-red-500">
                        <Typewriter
                            words={['Experience']}
                            loop={Infinity}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300 ease-in-out"
                            whileHover={{ scale: 1.05 }}
                        >
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{exp.role}</h3>
                            <h4 className="text-lg font-medium text-gray-600 mb-1">{exp.company}</h4>
                            <p className="text-sm text-gray-500 mb-3">{exp.duration}</p>
                            <p className="text-gray-700 text-base">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;
