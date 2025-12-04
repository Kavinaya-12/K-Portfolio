import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { motion } from "framer-motion";  
import '../App.css';

const Projects = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    if (window.innerWidth <= 1024) {
      setFlippedIndex(flippedIndex === index ? null : index);
    }
  };

  const projectsData = [
    {
      title: "Weather App",
      tech: "HTML • CSS • JavaScript",
      detail: "Real-time weather forecast using HTML, CSS, and JS + API integration.",
      demoLink: "https://weather-prediction-sand.vercel.app/",
      gitLink: "https://github.com/Kavinaya-12/weather_prediction",
    },
    {
      title: "BioBazaar",
      tech: "MERN Stack • JWT Authentication",
      detail: "MERN-based e-commerce platform with authentication, cart, and orders.",
      demoLink: "https://biobazaar-backend.onrender.com",
      gitLink: "https://github.com/Kavinaya-12/bio-bazaar",
    },
    {
      title: "Link-in-Bio Platform",
      tech: "MERN Stack • Custom URL Shortening",
      detail: "Web app where users create profile pages with custom short URLs.",
      demoLink: "https://linkinbio-mern.vercel.app/",
      gitLink: "https://github.com/Kavinaya-12/linkinbio-mern",
    },
    {
      title: "AI-Powered Chatbot",
      tech: "Spring Boot • React.js • Gemini AI API • Bootstrap",
      detail: "AI-powered chatbot system to handle user queries in real time.",
      demoLink: "https://demo-chatbot.com",
      gitLink: "https://github.com/Kavinaya-12/Gemini_chatbot/tree/main/gemini-chat",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Innovative solutions and applications I've built
        </p>
      </motion.div>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className={`projects-card ${flippedIndex === index ? "is-flipped" : ""}`}
            onClick={() => handleFlip(index)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="projects-card-inner">
              <div className="projects-card-front">
                <h3 className="projects-card-title">{project.title}</h3>
                <p className="projects-card-tech">{project.tech}</p>
                <span className="projects-flip-hint">
                  <FaInfoCircle /> Tap to flip
                </span>
              </div>
              <div className="projects-card-back">
                <p className="projects-card-detail">{project.detail}</p>
                <div className="projects-card-links">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects-btn projects-btn-primary"
                  >
                    Demo
                  </a>
                  <a
                    href={project.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects-btn projects-btn-secondary"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;