// import React from "react";
// import { motion } from "framer-motion";
// import "../styles/Skills.css";

// const skills = [
//   { name: "React", level: "Advanced" },
//   { name: "Node.js", level: "Intermediate" },
//   { name: "MongoDB", level: "Intermediate" },
//   { name: "JavaScript", level: "Advanced" },
//   { name: "HTML & CSS", level: "Advanced" },
//   { name: "Bootstrap", level: "Advanced" },
// ];

// const Skills = () => {
//   return (
//     <section id="skills" className="skills-section py-5">
//       <div className="container text-center">
//         <motion.h2
//           className="skills-title"
//           initial={{ y: -30, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           My <span className="highlight">Skills</span>
//         </motion.h2>

//         <div className="row mt-4">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               className="col-md-4 mb-4"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//             >
//               <div className="card skill-card h-100">
//                 <div className="card-body">
//                   <h5 className="card-title">{skill.name}</h5>
//                   <p className="card-text">{skill.level}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;




import React from "react";
import "../styles/Skills.css";
import { motion } from "framer-motion";

import { FaJava, FaPython, FaJs, FaReact, FaNodeJs, FaDatabase, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiRedux, SiBootstrap, SiPostman, SiExpress, SiVercel, SiRender, SiEclipseide,SiCanva  } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { IoKeySharp,IoGlobeOutline ,IoSettingsOutline  } from "react-icons/io5";
import { GiBreakingChain } from "react-icons/gi";
import { PiTreeStructureBold } from "react-icons/pi";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "Python (Basic)", icon: <FaPython /> },
        { name: "C (Basic)", icon: <span className="text-icon">C</span> },
      ],
    },
    {
      title: "Core",
      skills: [
        { name: "Data Structures & Algorithms (DSA)", icon: <PiTreeStructureBold/>},
        { name: "Object-Oriented Programming (OOP)", icon: <IoSettingsOutline/> },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "REST APIs", icon: <GiBreakingChain/> },
        { name: "JWT", icon: <IoKeySharp/>},
        { name: "Bootstrap", icon: <SiBootstrap /> },
        { name: "API Integration",icon: <IoGlobeOutline/> },
      ],
    },
    {
      title: "Frameworks",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Redux", icon: <SiRedux /> },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "SQL", icon: <FaDatabase /> },
        { name: "MongoDB", icon: <SiMongodb /> },
      ],
    },
    {
      title: "Tools",
      skills: [
         { name: "VS Code", icon: <VscVscodeInsiders/> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "MongoDB Compass", icon: <SiMongodb /> },
        { name: "Eclipse", icon: <SiEclipseide /> },
        // { name: "Scene Builder", icon: <span className="text-icon">🎨</span> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Canva", icon: <SiCanva/> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Render", icon: <SiRender /> },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section container py-5">
      <motion.h2
        className="skills-title"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        My <span className="highlight">Skills</span>
      </motion.h2>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="skill-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="skill-card"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="skill-icon">{skill.icon}</span>
                  <p>{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
