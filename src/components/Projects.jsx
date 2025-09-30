import React from "react";
import { motion } from "framer-motion";
import "../styles/Projects.css";

const projects = [
  {
    title: "BioBazaar",
    description: "An organic e-commerce platform built with MERN stack.",
    image: "/public/bb.png",
    demo: "https://biobazaar-backend.onrender.com",
    code: "https://github.com/Kavinaya-12/bio-bazaar",
  },
  {
    title: "Weather App",
    description: "Real-time weather forecast using React + API integration.",
    image: "/projects/weather.png",
    demo: "https://weather-prediction-sand.vercel.app/",
    code: "https://github.com/Kavinaya-12/weather_prediction",
  },
  {
    title: "Link in bio ",
    description: "Full-stack MERN Link-in-Bio app with custom URLs, secure JWT auth, and a responsive dashboard to manage social/professional links.",
    image: "/projects/student.png",
    demo: "https://your-demo-link.com",
    code: "https://github.com/yourusername/student-for-student",
  },
 {
  title: "Gemini Chatbot",
  description: "AI chatbot using React, Bootstrap frontend, Spring Boot backend, and Gemini API for real-time, context-aware conversations.",
  image: "/projects/gemini.png",
  demo: "https://your-demo-link.com",
  code: "https://github.com/yourusername/gemini-chatbot",
},
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section py-5">
      <div className="container text-center">
        <motion.h2
          className="projects-title"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          My <span className="highlight">Projects</span>
        </motion.h2>

        <div className="row mt-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="col-md-4 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="card project-card h-100">
                <img
                  src={project.image}
                  className="card-img-top project-img"
                  alt={project.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="d-flex justify-content-center gap-2 mt-3">
                    <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-custom">
                      Live Demo
                    </a>
                    <a href={project.code} target="_blank" rel="noreferrer" className="btn btn-outline-custom">
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
