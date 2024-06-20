import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import AnimatedCursor from "react-animated-cursor";
import Nav from './Components/Navbar/Nav';
import Home from './Components/Home/Home'
import Contact from './Components/Contact/contact'
import Projects from './Components/Projects/Project'
import Skill from './Components/Skills/Skill';
import Cursor from './Components/Cursor'

function App() {
  return (
    <>
     
      <Router>
      <Cursor/>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App