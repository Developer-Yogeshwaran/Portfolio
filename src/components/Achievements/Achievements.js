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
      date: "2025",
    },
    {
      icon: <FaMedal />,
      title: "CodeChef Java Certification",
      description: "Completed professional Java certification challenges on CodeChef",
      date: "2026",
    },
    {
      icon: <FaMedal />,
      title: "CodeChef SQL Certification",
      description: "Validated SQL skills through CodeChef professional certification practice",
      date: "2026",
    },
    {
      icon: <FaMedal />,
      title: "CodeChef 100+ Days Challenge",
      description: "Sustained 100+ days of CodeChef practice and reached 2-star rating",
      date: "2026",
    },
    {
      icon: <FaMedal />,
      title: "Introduction to Industry 4.0 and Industrial Internet – NPTEL",
      description: "Score: 83% • Achievement: Elite + Silver",
      date: "Apr 26, 2026",
    },
    {
      icon: <FaMedal />,
      title: "Human Interaction – NPTEL",
      description: "Score: 96% • Achievement: Gold",
      date: "Apr 26, 2026",
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
        <p className="section-subtitle">
          Industry-recognized certifications demonstrating expertise in modern technologies
        </p>

        <Row className="certifications-row">
          {certifications.map((cert, index) => (
            <Col md={6} key={index} className="cert-card">
              <div className="certification-item">
                <div className="cert-icon">{cert.icon}</div>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-desc">{cert.description}</p>
                <p className="cert-date">Completed: {cert.date}</p>
              </div>
            </Col>
          ))}
        </Row>

        {/* Academic Achievements Section */}
        <h1 className="project-heading">
          Academic <strong className="purple">Achievements</strong>
        </h1>

        <Row className="achievement-row">
          {achievements.map((achievement, index) => (
            <Col md={8} key={index} className="academic-column">
              <div className="achievement-card">
                <div className="achievement-card-content">
                  <div className="achievement-icon">
                    <FaMedal />
                  </div>
                  <div className="achievement-text">
                    <h3 className="achievement-title">{achievement.title}</h3>
                    <p className="achievement-desc">{achievement.description}</p>
                    <p className="achievement-detail">{achievement.details}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Skills Summary Section */}
        <h1 className="project-heading section-heading">
          Technical <strong className="purple">Expertise</strong>
        </h1>

        <Row className="skills-row">
          <Col md={10}>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Backend Development</h4>
                <p>Java • Spring Boot • Node.js • RESTful APIs • Database Management</p>
              </div>
              <div className="skill-category">
                <h4>AI & Machine Learning</h4>
                <p>Python • TensorFlow • NLP • Generative AI • Data Analysis</p>
              </div>
              <div className="skill-category">
                <h4>Frontend Development</h4>
                <p>React.js • JavaScript • HTML/CSS • Bootstrap • Responsive Design</p>
              </div>
              <div className="skill-category">
                <h4>Tools & Platforms</h4>
                <p>Git/GitHub • VS Code • MySQL • MongoDB • Cloud Computing</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Achievements;
