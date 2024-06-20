import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import blogImage from '../images/Blog.png';
import votingImage from '../images/votingapp.png'; 
import quizImage from '../images/quiz.png'
function Project() {
  const projects = [
    {
      name: 'Blog Website',
      description: 'This project is a Blog Website built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to create, read and update blog posts. The application demonstrates CRUD operations and integrates authentication for user management.',
      githubLink: 'https://github.com/keshavkumar143/OUR-BLOG-WEBSITE-USING-MERN-STACK.git',
      image: blogImage
    },
    {
      name: 'Voting Website',
      description: 'The Voting Website is a platform where users can participate in voting activities in real-time. It utilizes JSON Web Tokens (JWT) for authentication, ensuring secure user login and session management. User passwords are hashed using bcrypt for enhanced security. The application includes real-time updates to voting results, providing an interactive experience for users.',
      githubLink: 'https://github.com/keshavkumar143/voting001.git',
      image: votingImage
    },
    
  {
      name: 'Quiz Application',
      description: 'The Quiz Application allows users to participate in quizzes on various topics. It features a responsive frontend interface where users can answer multiple-choice questions in real-time quizzes. The application provides instant feedback on correct answers and may include features for tracking user scores.',
      githubLink: 'https://github.com/keshavkumar143/Quiz-Game.git',
      image: quizImage
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          <Typewriter
            words={['Projects']}
            loop={Infinity}
            cursor
            cursorStyle="|"
            className="text-red-500"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <div className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                {/* Image container */}
                <div className="flex items-center justify-center mb-4 relative aspect-w-16 aspect-h-9">
                  <img src={project.image} alt={project.name} className="object-cover w-full h-full" />
                </div>
               
                <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
               
                <div className="flex space-x-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-gray-600"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
