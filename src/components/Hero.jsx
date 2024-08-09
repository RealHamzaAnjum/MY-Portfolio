import React from "react";
import TechStack from "./TechStack";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-main">
          <div className="hero-overall">
            <div className="hero-text">
              <h1>
              Full-stack / Web <br /> Developer{" "}
                <span>
                  <img src="assets/wave hand.png" alt="hand"/>
                </span>
              </h1>
              <p>
                Hi, I'm Hamza Anjum (Sameer). A passionate Full-stack Web Developer and a learning AI enthusiast passionate about learning and exploring the field of artificial intelligence (AI). Also keen to integrating or combining artificial intelligence (AI) techniques and tools with the MERN stack (MongoDB, Express, React, Node.js) to create applications
              </p>
              <div className="profile-links">
                <a href="https://github.com/RealHamzaAnjum">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/hamza-anjum-1a7a602a3/">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="profile"><img src="assets/profile1.png" alt="profile" /></div>
          </div>

          <TechStack />
        </div>
      </div>
    </section>
  );
};

export default Hero;
