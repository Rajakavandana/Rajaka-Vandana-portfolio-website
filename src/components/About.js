import React from "react";
import "../App.css";
import aboutImg from "../assets/vandana.jpeg"; // Use your cartoon image path

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-img">
        <img src={aboutImg} alt="About Illustration" />
      </div>
      <div className="about-content">
        <h2>About Me</h2>
       <p>
  I'm Rajaka Vandana, a passionate and motivated fresher aiming to build a career as a Full Stack Developer. I have completed training in MERN stack technologies and PHP development, and I am eager to contribute to innovative and scalable web solutions.
</p>
<p>
  During my academic projects and internships, I gained hands-on experience in Java, MongoDB, Express.js, React.js, Node.js, PHP, and MySQL. I have developed task management systems, portfolio websites, and job portals, focusing on creating responsive and user-friendly applications.
</p>

      </div>
    </section>
  );
}

export default About;