import React from "react";
import avatar from "../assets/vandana.jpeg";
import resume from "../assets/Rajaka-Vandana.pdf";
import "../App.css";

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>👋 Hi, I’m Rajaka Vandana</h1>
          <h2>Building Scalable & User-Centric Web Apps</h2>
          <p>
            A passionate B.Tech Engineering graduate (2023) turned full-stack developer. Skilled in Java, React.js, HTML, CSS, and JavaScript, I build responsive and user-friendly web applications. Eager to apply problem-solving skills and UI/UX design knowledge in a dynamic environment and grow as a software professional.
          </p>
          <div className="hero-buttons">
            <a href="#projects">
              <button className="outline-btn">View My Work</button>
            </a>
            <a href={resume} download>
              <button className="filled-btn">Download Resume</button>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img
            src={avatar}
            alt="Anjaneyulu Ravi - Full Stack Developer"
            className="floating"
          />
          <div className="tech-icons" aria-label="Technology stack icons">
            <span title="React">⚛️</span>
            <span title="Node.js">💻</span>
            <span title="MongoDB">🌐</span>
            <span title="Express.js">📦</span>
          </div>
        </div>
      </section>

<section className="profile-boxes"> 
  <div className="box">
    <h3>Experience</h3>
    <p>Fresher with academic projects and training in software development, eager to contribute to real-world IT solutions.</p>
  </div>
  <div className="box">
    <h3>Skills</h3>
    <p>
      Java, React.js, HTML5, CSS3, JavaScript, Bootstrap, MySQL, REST APIs, problem-solving, debugging, version control (Git)
    </p>
  </div>
  <div className="box">
    <h3>Projects</h3>
    <p>
      Completed academic and personal projects such as Job portal and portfolio websites, focusing on frontend development and responsive design.
    </p>
  </div>
  <div className="box">
    <h3>Education</h3>
    <p>Bachelor's Degree in Civil Engineering, with software development training and certifications in full-stack technologies.</p>
  </div>
</section>

    </>
  );
}

export default Hero;
