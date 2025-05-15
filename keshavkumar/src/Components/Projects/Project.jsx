import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import blogImage from "../images/Blog.png";
import votingImage from "../images/votingapp.png";
import quizImage from "../images/quiz.png";

function Project() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const projects = [
    {
      name: "Blog Website",
      description:
        "This project is a Blog Website built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to create, read and update blog posts. The application demonstrates CRUD operations and integrates authentication for user management.",
      githubLink:
        "https://github.com/keshavkumar143/OUR-BLOG-WEBSITE-USING-MERN-STACK.git",
      image: blogImage,
    },
    {
      name: "Voting Website",
      description:
        "The Voting Website is a platform where users can participate in voting activities in real-time. It utilizes JSON Web Tokens (JWT) for authentication, ensuring secure user login and session management. User passwords are hashed using bcrypt for enhanced security. The application includes real-time updates to voting results, providing an interactive experience for users.",
      githubLink: "https://github.com/keshavkumar143/voting001.git",
      image: votingImage,
    },
    {
      name: "Quiz Application",
      description:
        "The Quiz Application allows users to participate in quizzes on various topics. It features a responsive frontend interface where users can answer multiple-choice questions in real-time quizzes. The application provides instant feedback on correct answers and may include features for tracking user scores.",
      githubLink: "https://github.com/keshavkumar143/Quiz-Game.git",
      image: quizImage,
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
        staggerChildren: 0.2,
      },
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
                words={["Projects"]}
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
            Explore my latest development projects that showcase my technical
            skills and problem-solving abilities.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700"
              variants={fadeIn}
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(199, 210, 254, 0.5)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative overflow-hidden h-48">
                <motion.img
                  src={project.image}
                  alt={project.name}
                  className="object-cover w-full h-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {project.name}
                </h3>
                <p className="text-gray-300 mb-6 text-sm line-clamp-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="text-xl" />
                    <span className="text-white">View Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Project;
