import React, { useState } from 'react';
import { Github, Mail, Linkedin, ExternalLink, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from './assets/chiru_1.jpg';
import face from './assets/Face.jpg';
import emp from './assets/Employee.jpg';
import siri from './assets/Siri.jpg';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};


const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const SKILLS = [
  { 
    name: 'Frontend',
    skills: [
      { name: 'React', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
      { name: 'TypeScript', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
      { name: 'JavaScript', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
      { name: 'HTML5', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg' },
      { name: 'CSS3', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg' },
      { name: 'Tailwind', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg' },
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
      { name: 'Python', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
      { name: 'PostgreSQL', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
    ]
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Git', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg' },
      { name: 'Docker', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg' },
      { name: 'VS Code', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg' },
    ]
  }
];

const PROJECTS = [
  {
    title: 'Project 1',
    description: 'Face Recognition\nUsing Face-api.js',
    image: face,
    github: 'https://github.com/Chiru2123/FaceRecog-master',
    live: 'https://face-recog-master.vercel.app/',
    tech: ['React', 'face-api.js','Nodejs']
  },
  {
    title: 'Project 2',
    description: 'Employee Management System CRUD Operations Using MERN',
    image: emp,
    github: 'https://github.com/Chiru2123/EMPLOYEEMANAGEMENTSYSTEMMERN',
    live: emp,
    tech: ['React', 'Nodejs', 'MongoDB']
  }
];

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header/Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 tech-gradient"></div>
        <nav className="relative max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center">
          <motion.h1 
            className="text-2xl font-bold mb-4 sm:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Sirisha R
          </motion.h1>
          <motion.div 
            className="space-x-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </motion.div>
        </nav>
        
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="flex flex-col-reverse md:flex-row items-center">
            <motion.div 
              className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
<h2 className="text-4xl sm:text-5xl font-bold mb-4 typing-animation">
  Software Developer
</h2>


              <p className="text-xl mb-8 text-blue-200">Passionate about Building beautiful and functional applications</p>
              <div className="flex justify-center md:justify-start space-x-4">
                <motion.a 
                  href="https://github.com/Sirisha2123" 
                  className="p-2 hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/r-sirisha/" 
                  className="p-2 hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  href="mailto:ravillasirisha21@gmail.com" 
                  className="p-2 hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-6 h-6" />
                </motion.a>
              </div>
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={siri}
                alt="Your Profile"
                className="rounded-full w-48 h-48 sm:w-64 sm:h-64 object-cover border-4 border-blue-500 shadow-lg shadow-blue-500/50"
              />
            </motion.div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 tech-gradient opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            {...fadeInUp}
          >
            About Me
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="w-full md:w-1/3"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={siri}
                alt="Working"
                className="rounded-lg shadow-lg w-full h-auto object-cover shadow-blue-500/50"
              />
            </motion.div>
            <motion.div 
              className="w-full md:w-2/3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-300 leading-relaxed text-lg">
              I am a recent graduate in Computer Science and Engineering with a CGPA of 8.24 from Siddharth Institute of Engineering and Technology, Puttur. With a strong passion for software development, I have honed my skills in full-stack web development, building modern and scalable applications.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg mt-4">
              I enjoy solving complex problems by creating intuitive and efficient solutions. My expertise spans both frontend and backend development, ensuring seamless user experiences and robust architectures. Additionally, I actively explore new technologies and contribute to open-source projects to stay updated with industry trends.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg mt-4">
              I am currently seeking an opportunity to apply my technical knowledge and development skills in a dynamic and supportive team environment, where I can grow while delivering innovative solutions.
</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20">
        <div className="absolute inset-0 tech-gradient opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            {...fadeInUp}
          >
            Skills
          </motion.h2>
          <motion.div 
            className="space-y-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {SKILLS.map((category, index) => (
              <motion.div 
                key={index} 
                className="glass-effect rounded-lg p-8"
                variants={fadeInUp}
              >
                <h3 className="text-2xl font-semibold mb-6 text-center text-blue-400">{category.name}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex} 
                      className="skill-card flex flex-col items-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <img 
                        src={skill.logo}
                        alt={skill.name}
                        className="w-16 h-16 mb-2"
                      />
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20">
        <div className="absolute inset-0 tech-gradient opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            {...fadeInUp}
          >
            Projects
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {PROJECTS.map((project, index) => (
              <motion.div 
                key={index} 
                className="glass-effect rounded-lg overflow-hidden"
                variants={fadeInUp}
              >
                <div className="relative group">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <motion.a 
                      href={project.github}
                      className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5" />
                      <span>GitHub</span>
                    </motion.a>
                    <motion.a 
                      href={project.live}
                      className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20">
        <div className="absolute inset-0 tech-gradient opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            {...fadeInUp}
          >
            Get in Touch
          </motion.h2>
          <div className="max-w-2xl mx-auto">
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="w-full flex justify-center items-center space-x-2 py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8">
        <div className="absolute inset-0 tech-gradient opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="mb-4 sm:mb-0 text-gray-300">&copy; {new Date().getFullYear()} Ravilla. All rights reserved.</p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://github.com/Sirisha2123" 
                className="text-gray-300 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/r-sirisha/" 
                className="text-gray-300 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="mailto:ravillasirisha21@gmail.com" 
                className="text-gray-300 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;