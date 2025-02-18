// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import resume from '../images/Resume.pdf'
import profile from '../images/imag1.jpg'
import { motion } from 'framer-motion';
function Home() {

  const openResume = () => {
    window.open(resume, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white">
      <div className="max-w-4xl px-6 py-12 rounded-lg shadow-lg text-center">
        <div className="flex flex-col md:flex-row items-center justify-center mb-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          whileDrag={{ scale: 0.9, rotate: 10 }}
          drag
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }} 
        >
          <img
            src={profile}
            alt="Keshav Kumar"
            className="rounded-full h-40 w-40 mb-6 md:mb-0 md:mr-8 hover:animate-bounce"
          />
        </motion.button>
          <div className="text-left">
            <h1 className="text-6xl text-red-600 font-bold mb-4">Keshav Kumar</h1>
            <div className="font-bold text-xl md:text-3xl lg:text-4xl text-red-400 mb-8">
              <Typewriter
                words={['Coder', 'Software Engineer', 'Full Stack Developer']}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
          </div>
        </div>

        <p className="text-xl leading-relaxed mb-8">
          A dedicated full stack developer adept at crafting seamless web experiences using JavaScript, React, Node.js, and cloud technologies.
        </p>


        <button
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md text-lg transition-all duration-300 ease-in-out"
          onClick={openResume}
        >
          My Resume
        </button>

        <div className="flex justify-center space-x-4 my-8">
          <a
            href="https://github.com/keshavkumar143"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faGithub} className="fa-2x animate-bounce" />
          </a>
          <a
            href="https://linkedin.com/in/keshavkumar001"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} className="fa-2x animate-bounce" />
          </a>
        </div>

        <hr className="w-16 border-t-2 border-red-400 mb-8 mx-auto" />

      </div>
    </div>
  );
}

export default Home;
