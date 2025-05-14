import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faJava,
  faAws,
  faGitAlt,
  faFigma,
  faAngular,
} from "@fortawesome/free-brands-svg-icons";
import "./Skill.css";

function Skill() {
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

  const skills = [
    {
      name: "HTML",
      icon: faHtml5,
      color: "text-orange-500",
      description: "HyperText Markup Language",
    },
    {
      name: "CSS",
      icon: faCss3Alt,
      color: "text-blue-500",
      description: "Cascading Style Sheets",
    },
    {
      name: "JavaScript",
      icon: faJs,
      color: "text-yellow-500",
      description: "JavaScript",
    },
    {
      name: "React",
      icon: faReact,
      color: "text-blue-400",
      description: "React.js",
    },
    {
      name: "Node.js",
      icon: faNodeJs,
      color: "text-green-500",
      description: "Node.js",
    },
    { name: "Java", icon: faJava, color: "text-red-600", description: "Java" },
    {
      name: "AWS",
      icon: faAws,
      color: "text-yellow-600",
      description: "Amazon Web Services",
    },
    { name: "Git", icon: faGitAlt, color: "text-red-500", description: "Git" },
    {
      name: "Figma",
      icon: faFigma,
      color: "text-purple-500",
      description: "Figma",
    },
    {
      name: "Angular",
      icon: faAngular,
      color: "text-red-600",
      description: "Angular",
    },
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 via-gray-900 to-black text-white py-24 px-6">
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
                words={["Skills & Technologies"]}
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
            My technical toolkit for creating powerful and responsive web
            applications.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8"
          variants={staggerContainer}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              variants={skillVariant}
              whileHover={{
                y: -10,
                scale: 1.05,
                transition: { type: "spring", stiffness: 400 },
              }}
            >
              <div className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl border border-gray-700 flex flex-col items-center text-center h-full">
                <motion.div
                  className={`text-5xl mb-4 ${skill.color}`}
                  animate={{
                    rotateY: [0, 360],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop",
                      repeatDelay: 5,
                    },
                  }}
                >
                  <FontAwesomeIcon icon={skill.icon} className="h-14 w-14" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {skill.name}
                </h3>
                <p className="text-sm text-gray-400">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Skill;
