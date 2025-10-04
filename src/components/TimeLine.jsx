import React from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    title: "SSLC",
    place: "Rajalakshmi Genguswamy Matric Hr Sec School",
    date: "2019 - 2020",
    description: "Completed SSLC with 81%."
  },
  {
    title: "HSC",
    place: "Rajalakshmi Genguswamy Matric Hr Sec School",
    date: "2021 - 2022",
    description: "Completed HSC with 78.8%."
  },
  {
    title: "B.E Electronics & Communication",
    place: "Sri Eshwar College of Engineering",
    date: "2022 – 2026",
    description: "Currently pursuing engineering with a focus on MERN stack projects and IoT research.With a CGPA of 7.8 (upto 6th semester)"
  },
  {
    title: "Web Development Intern",
    place: "Octanet",
    date: "Jan 2024",
    description: "Worked on responsive UI design using HTML, CSS and JavaScript."
  },
  {
    title: "MERN Intern",
    place: "Better Tomorrow",
    date: "Mar 2024",
    description: "Built secure APIs, integrated MongoDB, JWT auth."
  },
  {
    title: "Advanced MERN (Training)",
    place: "Better Tomorrow",
    date: "Nov 2024",
    description: "Learnt Redux toolkit, built secure APIs, integrated MongoDB, JWT auth, backend logics and integrations."
  },
];

const Timeline = () => {
   return (
    <> 
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <h2 className="section-title">My Journey</h2>
        <p className="section-subtitle">A glimpse into my education and professional experiences</p>
      </motion.div>

      <div className="timeline-container">
        <div className="timeline-line"></div>

        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className={`timeline-item ${isLeft ? "left" : "right"}`}
            >
              <span className="timeline-dot"></span>
              <div className="timeline-card">
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-subtitle">{item.place}</p>
                <p className="timeline-date">{item.date}</p>
                <p className="timeline-detail">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default Timeline;
