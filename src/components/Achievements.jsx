import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaTrophy, FaLaptopCode, FaCode, FaAward, FaMedal, FaGraduationCap } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'C:/Users/portfolio/my-portfolio/src/App.css';

const achievementsData = [
  { icon: <FaTrophy />, title: "CodeChef", description: "Solved above 204 problems in C and Java", link:"https://www.codechef.com/users/kavinaya1201", linkText: "Proof" },
  { icon: <FaLaptopCode />, title: "LeetCode", description: "Solved 183 problems, ranked 534,865 globally", link:"https://leetcode.com/kavinaya_subramaniam/", linkText: "Proof" },
  { icon: <FaCode />, title: "SkillRack", description: "Solved 600 problems, ranked 75,400", link:"https://skillrack.com/faces/ui/profile.xhtml", linkText: "Proof" },
  { icon: <FaAward />, title: "Hackcolossus 4.0", description: "Top 17th team among 200 teams", link:"https://drive.google.com/file/d/1px1-86PmUwOyTS3oZLc7ScuyFgeRWWea/view?usp=drivesdk", linkText: "Certificate" },
  { icon: <FaMedal />, title: "Mini Project Expo", description: "Secured 2nd place at college competition" }, // no link
  { icon: <FaGraduationCap />, title: "Certifications", description: "Completed 6+ professional certifications", link:"https://drive.google.com/drive/folders/1Z7nA3jnF1qA98_sJDlNlTmcjJh8BMLk7", linkText: "Certificates" },
];

const AchievementsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="achievements-carousel-section" id="achievements">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="section-title">Achievements</h2>
        <p className="section-subtitle">Recognition and accomplishments</p>
      </motion.div>

      <Slider {...settings}>
        {achievementsData.map((achievement, index) => (
          <motion.div
            className="achievement-card"
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }} 
          >
            <div className="achievement-icon">{achievement.icon}</div>
            <div className="achievement-content">
              <strong>{achievement.title}</strong>
              <p>{achievement.description}</p>
              {achievement.link && (
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="achievement-link"
                >
                  {achievement.linkText}
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </Slider>
    </section>
  );
};

export default AchievementsCarousel;
