import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Nav from './Components/Navbar/Nav';
import Home from './Components/Home/Home'
import Contact from './Components/Contact/contact'
import Projects from './Components/Projects/Project'
import Skill from './Components/Skills/Skill';
import Experience from './Components/Experience/Experience';
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
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </Router>
    </>
  );
}

export default App