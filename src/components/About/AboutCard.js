import React from "react";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <div className="modern-card glow-effect about-card">
      <blockquote className="blockquote mb-0 about-card-blockquote">
        <p className="about-card-text">
          Hi Everyone, I am <span className="text-gradient about-name">Yogeshwaran A </span>
          <br />A passionate and motivated fresher with a strong foundation in <span className="purple-accent">Java development, Artificial Intelligence, Machine Learning, and Python programming.</span> Certified in <span className="purple-accent">IBM Generative AI</span> and <span className="purple-accent">Google Digital Marketing</span>, with hands-on experience in AI-based academic projects.
          <br />
          <br />
          Seeking an internship to apply problem-solving skills and contribute to innovative solutions!
        </p>
        <ul className="about-card-list">
          <li className="about-activity">
            <ImPointRight /> AI & Machine Learning Enthusiast
          </li>
          <li className="about-activity">
            <ImPointRight /> Problem Solving & Innovation
          </li>
          <li className="about-activity">
            <ImPointRight /> Continuous Learning
          </li>
        </ul>

        <p className="about-card-quote">
          "Passionate fresher seeking to build innovative solutions!"
        </p>
        <footer className="blockquote-footer about-card-footer">Yogeshwaran</footer>
      </blockquote>
    </div>
  );
}

export default AboutCard;
