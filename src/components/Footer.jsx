import React ,{useState} from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import '../App.css';
import EmailPopup from "./EmailPopup";
const Footer = () => {
      const [isEmailOpen, setIsEmailOpen] = useState(false);

  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-content">
          <h2 style={{ color: "white", marginBottom: "20px" }}>Let's Connect!</h2>
          <p style={{ color: "#c2c2c2", marginBottom: "30px", fontSize: "1.1em" }}>
            Feel free to reach out for collaborations or just a friendly chat
          </p>

          <div className="footer-social">
            <a href="tel:+918072768117">
              <FaPhone />
            </a>
              <a onClick={() => setIsEmailOpen(true)} className="social-icon" title="Email">
            <i className="fas fa-envelope"></i>
          </a>




            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </div>

          <p className="footer-text">© 2025 Kavinaya S. Crafted with passion and precision.</p>
        </div>
      </div>
            <EmailPopup isOpen={isEmailOpen} onClose={() => setIsEmailOpen(false)} />

    </footer>


  );
};

export default Footer;
