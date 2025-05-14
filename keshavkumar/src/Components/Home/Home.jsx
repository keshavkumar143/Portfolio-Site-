import { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileLines} from '@fortawesome/free-solid-svg-icons';
import resume from '../images/Resume.pdf';
import profile from '../images/imag1.jpg';
import { motion } from 'framer-motion';

function Home() {
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

  const openResume = () => {
    window.open(resume, '_blank');
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };
  
  const slideIn = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
  };
  
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const buttonVariants = {
    hover: { 
      scale: 1.05, 
      boxShadow: "0px 8px 15px rgba(229, 62, 62, 0.3)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">

      <motion.div 
        className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-16"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={fadeIn}
      >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-indigo-400/10"
                style={{
            width: Math.random() * 300 + 50,
            height: Math.random() * 300 + 50,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
                }}
                animate={{
            x: [0, Math.random() * 60 - 30],
            y: [0, Math.random() * 60 - 30],
                }}
                transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="container mx-auto max-w-6xl z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              
              <motion.div 
                className="md:w-1/2 text-center md:text-left"
                variants={staggerChildren}
              >
                <motion.p 
                className="text-indigo-400 font-semibold mb-2"
                variants={slideIn}
                >
                Hello, I&#39;m
                </motion.p>
                
                <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
                variants={slideIn}
                >
                Keshav Kumar
                </motion.h1>
                
                <motion.div 
                className="text-xl md:text-2xl text-gray-300 font-semibold mb-8 h-12 flex items-center justify-center md:justify-start"
                variants={slideIn}
                >
                <span className="mr-2">I&#39;m a</span>
                <span className="text-indigo-400">
                  <Typewriter
                  words={['Coder', 'Software Engineer', 'Full Stack Developer', 'Problem Solver']}
                  loop={Infinity}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  />
                </span>
                </motion.div>
                
                <motion.p 
                className="text-lg text-gray-400 font-semibold mb-8 max-w-lg mx-auto md:mx-0"
                variants={slideIn}
                >
                A dedicated full stack developer adept at crafting seamless web experiences using JavaScript, React, Node.js, and cloud technologies.
                </motion.p>
                
                <motion.div 
                className="flex flex-wrap gap-4 justify-center md:justify-start"
                variants={staggerChildren}
                >
                <motion.button
                  className="border border-indigo-400 text-black bg-indigo-400 hover:bg-indigo-600 hover:text-white py-3 px-8 rounded-full font-semibold flex items-center transition-colors duration-300"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={openResume}
                >
                  <FontAwesomeIcon icon={faFileLines} className="mr-2" />
                  View Resume
                </motion.button>
                
                <motion.a
                  href="/contact"
                  className="border border-indigo-400 text-black bg-indigo-400 hover:bg-indigo-600 hover:text-white py-3 px-8 rounded-full font-semibold flex items-center transition-colors duration-300"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  Contact Me
                </motion.a>
                </motion.div>
                
                <motion.div 
                className="flex justify-center md:justify-start space-x-5 mt-5"
                variants={staggerChildren}
                >
                {[
                  { icon: faGithub, href: "https://github.com/keshavkumar143", label: "GitHub" },
                  { icon: faLinkedin, href: "https://linkedin.com/in/keshavkumar001", label: "LinkedIn" },
                ].map((social, index) => (
                  <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full flex items-center justify-center bg-gray-800 hover:bg-indigo-400 text-gray-300 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                  variants={fadeIn}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  >
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                  </motion.a>
                ))}
                </motion.div>
              </motion.div>
              
              
              <motion.div 
                className="md:w-1/2 flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative">
            {/* Background shape */}
                <motion.div 
                  className="absolute -inset-4 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-300 opacity-70 blur-lg"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                
                {/* Indigo ring */}
                <motion.div 
                  className="absolute -inset-1 rounded-full bg-indigo-400"
                  animate={{ 
                    scale: [1, 1.02, 1],
                    rotate: [0, -3, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                
                {/* Image */}
                <motion.div
                  className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white"
                  whileHover={{ scale: 1.05 }}
                  drag
                  dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                  dragElastic={0.1}
                >
                  <img
                    src={profile}
                    alt="Keshav Kumar"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
       
      </motion.div>
    </div>
  );
}

export default Home;