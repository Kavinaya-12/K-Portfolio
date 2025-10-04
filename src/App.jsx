import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Timeline from "./components/TimeLine";

const App = () => {
  return (
    <div>
      <div className="bg-decoration">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <div className="container">
        <Hero />
        <Timeline/>
        <Projects />
        <Skills />
        <Achievements />
      </div>

      <Footer />
    </div>
  );
};

export default App;
