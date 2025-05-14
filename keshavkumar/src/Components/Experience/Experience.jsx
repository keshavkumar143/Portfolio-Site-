import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import CgLogo from "../images/CgLogo.svg";

function Experience() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state after brief delay for entrance animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const experiences = [
    {
      role: "ReactJS Developer",
      company: "CodSoft",
      duration: "January 2024 - February 2024",
      description:
        "Developed and completed five applications using React for the company.",
      svg: null,
    },
    {
      role: "Software Developer",
      company: "CG Infinity",
      duration: "September 2024 - Present",
      description:
        "Focusing on creating user-centric interfaces and building web applications with Next.js, .NET, and Node-RED.",
      svg: CgLogo,
    },
  ];

  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-24 px-6">
      <motion.div
        className="container mx-auto"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <motion.div className="text-center mb-16" variants={fadeIn}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-indigo-400">
              <Typewriter
                words={["Professional Experience"]}
                loop={5}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-2 mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            My journey as a developer across different roles and organizations.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-indigo-500"
            variants={staggerContainer}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative mb-12 last:mb-0"
                variants={fadeIn}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-indigo-500 border-4 border-gray-900"></div>

                {/* Experience card */}
                <div className="ml-8 bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-indigo-500/50 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-3">
                    {exp.svg && (
                      <img
                        src={exp.svg}
                        alt={`${exp.company} logo`}
                        className="w-10 h-10"
                      />
                    )}
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-indigo-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <div className="px-3 py-1 text-sm bg-gray-700/70 text-gray-300 rounded-full">
                      {exp.duration}
                    </div>
                  </div>

                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Experience;
