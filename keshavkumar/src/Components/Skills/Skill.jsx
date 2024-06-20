import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faJava, faAws, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import './Skill.css';

function Skill() {
  const skills = [
    { name: 'HTML', icon: faHtml5, color: 'text-orange-500', description: 'HyperText Markup Language' },
    { name: 'CSS', icon: faCss3Alt, color: 'text-blue-500', description: 'Cascading Style Sheets' },
    { name: 'JavaScript', icon: faJs, color: 'text-yellow-500', description: 'JavaScript' },
    { name: 'React', icon: faReact, color: 'text-blue-400', description: 'React.js' },
    { name: 'Node.js', icon: faNodeJs, color: 'text-green-500', description: 'Node.js' },
    { name: 'Java', icon: faJava, color: 'text-red-600', description: 'Java' },
    { name: 'AWS', icon: faAws, color: 'text-yellow-600', description: 'Amazon Web Services' },
    { name: 'Git', icon: faGitAlt, color: 'text-red-500', description: 'Git' },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 font-bold text-2xl md:text-2xl lg:text-3xl mb-5 block text-center">
        <Typewriter
          words={['Skills']}
          loop={Infinity}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
          className="text-red-500"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 skills-container md:items-center mx-auto ">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item relative">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transition duration-300 transform hover:scale-105 hover:shadow-xl">
              <div className="text-5xl mb-4">
                <FontAwesomeIcon icon={skill.icon} className={`h-16 w-16 ${skill.color} flip-icon`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            </div>
            <div className="absolute top-full left-0 w-full text-center text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {skill.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;