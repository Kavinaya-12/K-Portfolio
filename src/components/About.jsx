import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import prof from "../assets/profile.jpg";
const About = () => {
  return (
    <section id="about" className="about-section ">
      <div className="row align-items-center">
        {/* Profile Image */}
        <div className="col-md-5 text-center mb-4 mb-md-0">
          <motion.img
            src={prof} // same image as hero, or a different one if you like
            alt="About Me"
            className="about-img"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* About Text */}
        <div className="col-md-7">
          <motion.h2
            className="about-title"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            About <span className="highlight">Me</span>
          </motion.h2>

          <motion.p
            className="about-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Hello! I'm <span className="highlight"> KAVINAYA S</span>, a passionate{" "}
            <span className="highlight">Full Stack Developer</span> with a keen eye
            for design and detail. I enjoy crafting interactive, responsive, and
            user-friendly applications that solve real-world problems.
          </motion.p>

          <motion.p
            className="about-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            I love working with modern technologies like{" "}
            <span className="highlight">React</span>,{" "}
            <span className="highlight">Node.js</span>, and{" "}
            <span className="highlight">MongoDB</span>. I'm always eager to learn
            new tools and frameworks to expand my skillset.
          </motion.p>

          <motion.a
            href="#contact"
            className="btn btn-custom mt-3"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Let's Connect
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default About;
