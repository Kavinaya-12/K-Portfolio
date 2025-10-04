import React from "react";
import { FaCode, FaBrain, FaGlobe, FaLayerGroup, FaDatabase, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";  
import 'C:/Users/portfolio/my-portfolio/src/App.css';

const Skills = () => {
  const skillsData = [
    {
      icon: <FaCode />,
      name: "Languages",
      items: "C (Basic) • Python (Basic) • Java • JavaScript",
    },
    {
      icon: <FaBrain />,
      name: "Core",
      items: "Data Structures & Algorithms • Object-Oriented Programming",
    },
    {
      icon: <FaGlobe />,
      name: "Web Development",
      items: "HTML5 • CSS3 • Node.js • Express.js • REST APIs • JWT • Bootstrap",
    },
    {
      icon: <FaLayerGroup />,
      name: "Frameworks",
      items: "React • Redux",
    },
    {
      icon: <FaDatabase />,
      name: "Databases",
      items: "SQL • MongoDB",
    },
    {
      icon: <FaTools />,
      name: "Tools",
      items: "VS Code • GitHub • MongoDB Compass • Eclipse • Canva",
    },
  ];

  return (
    <section className="section" id="skills">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>
      </motion.div>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }} 
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-items">{skill.items}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
