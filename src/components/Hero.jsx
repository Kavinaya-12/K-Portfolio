// // import React from "react";
// // import { motion } from "framer-motion";
// // import "../styles/Hero.css";
// // import profile from "../assets/profile.jpg";
// // const Hero = () => {
// //   return (
// //     <section className="hero-section d-flex flex-column align-items-center justify-content-center text-center">
// //       {/* Profile Picture */}
// //       <motion.img
// //         src={profile} // replace with your picture inside /public folder
// //         alt="Profile"
// //         className="profile-pic"
// //         initial={{ scale: 0 }}
// //         animate={{ scale: 1 }}
// //         transition={{ duration: 1 }}
// //       />

// //       {/* Animated Heading */}
// //       {/* <motion.h1
// //         className="hero-title"
// //         initial={{ y: -50, opacity: 0 }}
// //         animate={{ y: 0, opacity: 1 }}
// //         transition={{ duration: 1 }}
// //       >
// //         Hi, I'm <span className="highlight"> KAVINAYA S</span>
// //       </motion.h1> */}
// // <motion.h1
// //   initial={{ y: 50, opacity: 0 }}
// //   animate={{ y: 0, opacity: 1 }}
// //   transition={{ duration: 0.8 }}
// // >
// //   Hi, I'm <span className="highlight"> KAVINAYA S</span>
// // </motion.h1>

// //       {/* Stylish Subtext with Framer Motion */}
// //       <motion.h2
// //         className="hero-subtitle"
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ delay: 1, duration: 1 }}
// //       >
// //         A <span className="typing-text">Full Stack Developer</span>
      
      
// //       </motion.h2>

// //       {/* Buttons */}
// //       <motion.div
// //         className="mt-4"
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ delay: 2, duration: 1 }}
// //       >
// //         <a href="#projects" className="btn btn-custom me-3">
// //           View My Work
// //         </a>
// //         <a href="#contact" className="btn btn-outline-custom">
// //           Contact Me
// //         </a>
// //       </motion.div>
// //     </section>
// //   );
// // };

// // export default Hero;



// // Hero.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import "../styles/Hero.css";
// import profile from "../assets/profile.jpg";
// const Hero = () => {
//   return (
//     <section className="hero-section">
//       <div className="hero-content">
//         <motion.h1
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="hero-title"
//         >
//           Hi, I’m <span className="highlight">Kavinaya</span>
//         </motion.h1>

//         <h2 className="typewriter">Full Stack Developer | Designer | Learner</h2>
//         <p className="hero-subtitle">
//           Crafting engaging, modern, and user-friendly web experiences with React, Node.js, and MongoDB.
          
//         </p>

//         <div className="hero-buttons">
//           <button className="btn-hero">View My Work</button>
//           <button className="btn-outline">Contact Me</button>
//         </div>
//       </div>
//       <div className="hero-image">
//         <img src={profile} alt="profile" />
//       </div>
//     </section>
//   );
// };

// export default Hero;





// Hero.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/Hero.css";
import profile from "../assets/profile.jpg";
import Projects from "./Projects"; 

const Hero = () => {
  const words = ["Full Stack Developer", "MERN Stack", "Enthusiast Learner" , "Java Developer"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    if (index === words.length) return;

    if (
      subIndex === words[index].length + 1 &&
      !isDeleting
    ) {
      setTimeout(() => setIsDeleting(true), 500);
      return;
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting]);

  useEffect(() => {
    const blinkTimeout = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(blinkTimeout);
  }, [blink]);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="hero-title"
        >
          Hi, I’m <span className="highlight">Kavinaya S</span>
        </motion.h1>

        <h2 className="typewriter">
          {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
        </h2>

        <p className="hero-subtitle">
          Crafting with engaging, modern, and user-friendly
           web experiences with React, Node.js, and MongoDB. 
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-hero">View My Work</a>
          <a href="#contact" className="btn-outline">Contact Me</a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profile} alt="profile" />
      </div>
    </section>
  );
};

export default Hero;
