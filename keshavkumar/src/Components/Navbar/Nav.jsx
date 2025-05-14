import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Nav.css";
import logoImage from "../images/logo.png";

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.2 }}
    >
      <div className="NavContainer flex justify-between items-center container mx-auto px-6">
        <motion.div
          className="logo cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <Link to="/">
            <img src={logoImage} className="h-12 md:h-16" alt="Logo" />
          </Link>
        </motion.div>
        <div className="components">
          <ul className="list flex justify-evenly md:gap-8 gap-3 cursor-pointer text-lg md:text-xl mr-3 hover:text-indigo-800">
            {["Home", "Skills", "Projects", "Experience", "Contact"].map(
              (item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-indigo-500 transition-colors"
                  >
                    {item}
                  </Link>
                </motion.li>
              )
            )}
          </ul>
        </div>
        <motion.a></motion.a>
      </div>
    </motion.nav>
  );
}

export default Nav;
