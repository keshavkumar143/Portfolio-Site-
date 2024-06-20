import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import logoImage from '../images/download.png'


function Nav() {
  return (
    <div className="NavContainer flex justify-between p-4">
      <div className="logo cursor-pointer md:block hidden">
        <Link to="/">
          <img src={logoImage} className="h-20 w-18" alt="Logo" />
        </Link>
      </div>
      <div className="components">
        <ul className="list flex justify-evenly gap-8 cursor-pointer text-2xl mr-3 sm:gap-4">
          <li>
            <Link to="/" className="hover:text-red-400">Home</Link>
          </li>
          <li>
            <Link to="/skills" className="hover:text-red-400">Skills</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-red-400">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-red-400">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;