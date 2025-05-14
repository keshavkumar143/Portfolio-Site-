import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faUser,
  faEnvelope,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
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

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!formData.name || !formData.email || !formData.message) {
        toast.error("Please fill in all fields");
        setLoading(false);
        return;
      }
      const response = await axios.post(
        "https://portfolio-site-3.onrender.com/send-email",
        formData
      );
      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "coloindigo",
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      console.log("Email sent:", response.data);
    } catch (error) {
      if (error.response) {
        toast.error(`Error: ${error.response.data.message}`);
      } else if (error.request) {
        toast.error("Network error. Please try again later.");
      } else {
        toast.error("An unexpected error occurindigo.");
      }
    } finally {
      setLoading(false);
    }
  };

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

  const formItemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 8px 15px rgba(129, 140, 248, 0.3)",

      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.95 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-24 px-6">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="coloindigo"
      />

      <motion.div
        className="container mx-auto max-w-6xl"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={fadeIn}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-indigo-600/10"
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

        <motion.div className="text-center mb-16" variants={fadeIn}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-indigo-400">
              <Typewriter
                words={["Get In Touch"]}
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
            Have a question or want to work together? Send me a message!
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          {/* Contact Info */}
          <motion.div className="w-full md:w-1/3" variants={staggerContainer}>
            <motion.div
              className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl border border-gray-700 h-full"
              variants={formItemVariant}
              whileHover={{
                y: -5,
                transition: { type: "spring", stiffness: 400 },
              }}
            >
              <h3 className="text-2xl font-bold mb-6 text-indigo-500">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-600/20 flex items-center justify-center mr-4">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-indigo-500 text-xl"
                    />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">
                      keshavkumar21167@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-600/20 flex items-center justify-center mr-4">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="text-indigo-500 text-xl"
                    />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">Noida, India</p>
                  </div>
                </div>

                <motion.div
                  className="mt-8 p-4 bg-gradient-to-r from-indigo-500/20 to-indigo-700/20 rounded-lg"
                  animate={{
                    boxShadow: [
                      "0px 0px 0px rgba(229, 62, 62, 0)",
                      "0px 0px 20px rgba(199, 216, 254)",
                      "0px 0px 0px rgba(229, 62, 62, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  <p className="text-center text-gray-300">
                    Let&#39;s collaborate on your next project!
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="w-full md:w-2/3" variants={staggerContainer}>
            <motion.div
              className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
              variants={formItemVariant}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div className="mb-6" variants={formItemVariant}>
                  <label
                    className="block text-sm font-bold mb-2 text-gray-300"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="text-gray-400"
                      />
                    </div>
                    <input
                      className="bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 text-sm rounded-lg focus:border-indigo-500 focus:ring-indigo-500 block w-full pl-10 p-3 transition-all duration-300"
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </motion.div>

                <motion.div className="mb-6" variants={formItemVariant}>
                  <label
                    className="block text-sm font-bold mb-2 text-gray-300"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-gray-400"
                      />
                    </div>
                    <input
                      className="bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 text-sm rounded-lg focus:border-indigo-500 focus:ring-indigo-500 block w-full pl-10 p-3 transition-all duration-300"
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </motion.div>

                <motion.div className="mb-6" variants={formItemVariant}>
                  <label
                    className="block text-sm font-bold mb-2 text-gray-300"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                      <FontAwesomeIcon
                        icon={faMessage}
                        className="text-gray-400"
                      />
                    </div>
                    <textarea
                      className="bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 text-sm rounded-lg focus:border-indigo-500 focus:ring-indigo-500 block w-full pl-10 p-3 h-40 resize-none transition-all duration-300"
                      id="message"
                      placeholder="Your message here..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </motion.div>

                <motion.div
                  className="flex justify-center"
                  variants={formItemVariant}
                >
                  <motion.button
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full flex items-center"
                    type="submit"
                    disabled={loading}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
