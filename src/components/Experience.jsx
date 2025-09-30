import React from "react";
import { motion } from "framer-motion";
import "../styles/Experience.css";
import {journeyItems} from "../data/JourneyData" 


const Experience = () => {
  return (
    <section id="experience" className="experience-section py-5">
      <div className="container">
        <motion.h2
          className="experience-title text-center"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          My <span className="highlight">Journey</span>
        </motion.h2>

        <div className="timeline mt-5">
          {journeyItems.map((item, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="timeline-content">
                <h4>{item.year}</h4>
                <h5>{item.title}</h5>
                <p className="place">{item.place}</p>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
