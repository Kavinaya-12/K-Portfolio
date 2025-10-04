import React,{useState} from "react";
import 'C:/Users/portfolio/my-portfolio/src/App.css';
import profileimg from '../assets/profile.jpg';
import EmailPopup from "./EmailPopup";


const Hero = () => {

  const [isEmailOpen, setIsEmailOpen] = useState(false);

  return (
    <> 
    <header>
      <div className="hero-content">
        <div className="hero-text">
          <div className="greeting">
            <span>Hello, I'm</span>
<i className="fas fa-handshake "></i>
          </div>
          <h1>
            Kavinaya <span className="gradient-text">S</span>
          </h1>
          <p className="tagline">
            Electronics & Communication Engineering Student | Full Stack Developer
          </p>

          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">
              <i className="fas fa-envelope"></i> Get In Touch
            </a>
            <a href="#projects" className="btn btn-secondary">
              <i className="fas fa-briefcase"></i> View Projects
            </a>
          </div>

   <div className="social-links">
      <a href="tel:+918072768117" className="social-icon" title="Phone">
        <i className="fas fa-phone"></i>
      </a>
      <a onClick={() => setIsEmailOpen(true)} className="social-icon" title="Email">
            <i className="fas fa-envelope"></i>
          </a>
      <a href="https://github.com/Kavinaya-12/" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/kavinaya-subramaniam-4baa16259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
        <i className="fab fa-linkedin"></i>
      </a>
    </div>
  </div>
        <div className="hero-image"> 
          <div className="image-wrapper">
            <div className="img-bg-circle"></div>
            <img
              src={profileimg}        alt="Kavinaya S"
              className="profile-img"
            />
          </div>
        </div>
      </div>
    </header>
      <EmailPopup isOpen={isEmailOpen} onClose={() => setIsEmailOpen(false)} />

    </>
  );
};

export default Hero;
