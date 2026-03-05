import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { DiCode } from "react-icons/di";
import { SiAmazonaws, SiGooglecloud } from "react-icons/si";
import { FaMedal } from "react-icons/fa";
import "./Achievements.css";

function Achievements() {
  const certifications = [
    {
      icon: <SiAmazonaws />,
      title: "IBM Certified - Generative AI Fundamentals",
      description: "Expertise in Large Language Models (LLMs), Prompt Engineering, and AI Ethics",
      date: "2025",
    },
    {
      icon: <SiGooglecloud />,
      title: "Google Digital Marketing Certification",
      description: "Digital Marketing fundamentals and online marketing strategies",
      date: "2025",
    },
    {
      icon: <DiCode />,
      title: "NPTEL Certification - Data Structures and Algorithms",
      description: "Advanced DSA concepts using Java",
      date: "2024",
    },
    {
      icon: <DiCode />,
      title: "Infosys Springboard - Networking & Web Technology",
      description: "Web development and networking fundamentals",
      date: "2024",
    },
    {
      icon: <FaMedal />,
      title: "Deloitte Virtual Task Management Program",
      description: "Hands-on experience in workflow organization and professional task management",
      date: "2024",
    },
    {
      icon: <DiCode />,
      title: "CodeVibez Learning Hub - AI Course Completion",
      description: "Comprehensive AI fundamentals and applications",
      date: "2025",
    },
  ];

  const achievements = [
    {
      title: "Full Stack Development - Honors",
      description: "Completed with Honors from Sethu Institute of Technology",
      details: "Demonstrated excellence in full-stack web and application development",
    },
    {
      title: "B.E. Computer Science & Engineering (AI & ML)",
      description: "Sethu Institute of Technology | CGPA: 8.50",
      details: "Specialization in Artificial Intelligence and Machine Learning with strong academic performance",
    },
    {
      title: "Stellantis Automotive Workshop",
      description: "Attended at NIT Trichy",
      details: "Hands-on exposure to automotive industry innovations and IoT applications",
    },
  ];

  return (
    <Container fluid className="achievements-section">
      <Particle />
      <Container>
        {/* Certifications Section */}
        <h1 className="project-heading">
          Professional <strong className="purple">Certifications</strong>
        </h1>
        <p style={{ color: "white", marginBottom: "40px" }}>
          Industry-recognized certifications demonstrating expertise in modern technologies
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {certifications.map((cert, index) => (
            <Col md={6} key={index} className="cert-card" style={{ marginBottom: "30px" }}>
              <div className="certification-item">
                <div className="cert-icon" style={{ fontSize: "2.5em", color: "#c770f0", marginBottom: "15px" }}>
                  {cert.icon}
                </div>
                <h3 style={{ color: "white", marginBottom: "10px" }}>{cert.title}</h3>
                <p style={{ color: "#b19cd9", marginBottom: "10px" }}>{cert.description}</p>
                <p style={{ color: "#666", fontSize: "0.9em" }}>Completed: {cert.date}</p>
              </div>
            </Col>
          ))}
        </Row>

        {/* Academic Achievements Section */}
        <h1 className="project-heading" style={{ marginTop: "60px" }}>
          Academic <strong className="purple">Achievements</strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {achievements.map((achievement, index) => (
            <Col md={8} key={index} style={{ marginBottom: "30px" }}>
              <div className="achievement-card">
                <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
                  <div style={{ fontSize: "2em", color: "#c770f0", marginTop: "5px" }}>
                    <FaMedal />
                  </div>
                  <div>
                    <h3 style={{ color: "white", marginBottom: "8px" }}>{achievement.title}</h3>
                    <p style={{ color: "#b19cd9", marginBottom: "8px" }}>{achievement.description}</p>
                    <p style={{ color: "#888", fontSize: "0.95em" }}>{achievement.details}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Skills Summary Section */}
        <h1 className="project-heading" style={{ marginTop: "60px", marginBottom: "40px" }}>
          Technical <strong className="purple">Expertise</strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={10}>
            <div className="skills-grid">
              <div className="skill-category">
                <h4 style={{ color: "#c770f0", marginBottom: "15px" }}>Backend Development</h4>
                <p style={{ color: "white" }}>Java • Spring Boot • Node.js • RESTful APIs • Database Management</p>
              </div>
              <div className="skill-category">
                <h4 style={{ color: "#c770f0", marginBottom: "15px" }}>AI & Machine Learning</h4>
                <p style={{ color: "white" }}>Python • TensorFlow • NLP • Generative AI • Data Analysis</p>
              </div>
              <div className="skill-category">
                <h4 style={{ color: "#c770f0", marginBottom: "15px" }}>Frontend Development</h4>
                <p style={{ color: "white" }}>React.js • JavaScript • HTML/CSS • Bootstrap • Responsive Design</p>
              </div>
              <div className="skill-category">
                <h4 style={{ color: "#c770f0", marginBottom: "15px" }}>Tools & Platforms</h4>
                <p style={{ color: "white" }}>Git/GitHub • VS Code • MySQL • MongoDB • Cloud Computing</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Achievements;
