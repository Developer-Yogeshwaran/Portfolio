import React from "react";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <div className="modern-card glow-effect" style={{ borderRadius: "15px", padding: "30px" }}>
      <blockquote className="blockquote mb-0" style={{ fontSize: "1.05em" }}>
        <p style={{ textAlign: "justify", color: "#fff", lineHeight: "1.8" }}>
          Hi Everyone, I am <span className="text-gradient" style={{ fontWeight: "600" }}>Yogeshwaran A </span>
          <br />A passionate and motivated fresher with a strong foundation in <span className="purple-accent">Java development, Artificial Intelligence, Machine Learning, and Python programming.</span> Certified in <span className="purple-accent">IBM Generative AI</span> and <span className="purple-accent">Google Digital Marketing</span>, with hands-on experience in AI-based academic projects.
          <br />
          <br />
          Seeking an internship to apply problem-solving skills and contribute to innovative solutions!
        </p>
        <ul style={{ marginTop: "20px" }}>
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

        <p style={{ color: "#c770f0", marginTop: "25px", fontStyle: "italic", fontSize: "1.1em" }}>
          "Passionate fresher seeking to build innovative solutions!"{" "}
        </p>
        <footer className="blockquote-footer" style={{ color: "#b19cd9" }}>Yogeshwaran</footer>
      </blockquote>
    </div>
  );
}

export default AboutCard;
