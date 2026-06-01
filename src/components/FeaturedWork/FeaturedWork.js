import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import "./FeaturedWork.css";

function FeaturedWork() {
  const [activeProject, setActiveProject] = useState(0);

  const featuredProjects = [
    {
      id: 1,
      title: "Solar EV BMS System",
      category: "Embedded Systems & IoT Development",
      description:
        "An Arduino-based Solar Powered Electric Vehicle integrated with a Battery Management System (BMS). The project monitors battery voltage, current, and temperature in real time while enabling Bluetooth-based motor control and automated safety alerts.",
      technologies: [
        "Arduino",
        "IoT",
        "Embedded Systems",
        "Bluetooth",
        "C/C++",
        "Sensors",
        "Battery Management System",
        "Renewable Energy",
      ],
      highlights: [
        "Real-time battery monitoring",
        "Bluetooth vehicle control using HC-05",
        "LCD live parameter display",
        "Safety alerts using buzzer and LED",
        "4 DC motor control",
        "Solar energy compatibility",
        "Modular embedded code structure",
        "Hardware-software integration",
      ],
      metrics: {
        development: "6 months",
        teamSize: "3 people",
        impact: "Smart EV and battery safety system implementation",
      },
      ghLink: "https://github.com/Developer-Yogeshwaran/smart-solar-ev-management-system",
      color: "#4ecdc4",
      icon: "🔋",
    },
    {
      id: 2,
      title: "Resume Matcher - AI Resume Analysis",
      category: "AI/ML Development",
      description:
        "An intelligent Java-based application that analyzes resumes using AI/ML techniques. Features advanced text processing, keyword extraction, and resume scoring algorithms for accurate job-description matching.",
      technologies: ["Java", "Spring Boot", "NLP", "TensorFlow", "REST APIs"],
      highlights: [
        "Advanced NLP algorithms implementation",
        "Automated resume ranking system",
        "RESTful API architecture",
        "Score optimization engine",
      ],
      metrics: {
        development: "4 months",
        teamSize: "3 people",
        accuracy: "92%+ Match",
      },
      color: "#ff6b9d",
      icon: "🤖",
    },
    {
      id: 3,
      title: "AI Mental Health Chatbot",
      category: "NLP Development",
      description:
        "A compassionate AI-powered chatbot that provides mental health support using advanced NLP. Designed with ethical AI principles and focus on user data privacy and response accuracy.",
      technologies: ["Python", "NLP", "Deep Learning", "NLTK", "TensorFlow"],
      highlights: [
        "Emotion detection algorithms",
        "Conversational AI logic",
        "Data privacy encryption",
        "Stress-relief interaction patterns",
      ],
      metrics: {
        development: "3 months",
        teamSize: "2 people",
        responseTime: "<100ms",
      },
      color: "#4ecdc4",
      icon: "💚",
    },
  ];

  const project = featuredProjects[activeProject];

  return (
    <Container fluid className="featured-work-section">
      <Container>
        <div className="featured-work-header">
          <h2 className="featured-work-title">
            Featured <span className="highlight">Projects</span>
          </h2>
          <p className="featured-work-subtitle">
            Deep dives into my most impactful work
          </p>
        </div>

        <div className="featured-work-container">
          <Row className="align-items-center">
            <Col lg={6} className="featured-details">
              <div className="project-icon">
                {project.icon}
              </div>

              <h3 className="featured-title">{project.title}</h3>
              <span className="featured-category">{project.category}</span>

              <p className="featured-description">{project.description}</p>

              <div className="technologies">
                <h4>Technologies Used</h4>
                <div className="tech-list">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="highlights">
                <h4>Key Highlights</h4>
                <ul>
                  {project.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="metrics">
                {Object.entries(project.metrics).map(([key, value], i) => (
                  <div key={i} className="metric-item">
                    <span className="metric-label">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                    <span className="metric-value">{value}</span>
                  </div>
                ))}
              </div>

              <div className="project-links">
                {project.ghLink ? (
                  <a
                    href={project.ghLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-btn github-btn"
                  >
                    <FaGithub /> View Code
                  </a>
                ) : (
                  <button className="link-btn github-btn" disabled>
                    <FaGithub /> View Code
                  </button>
                )}
              </div>
            </Col>

            <Col lg={6} className="featured-carousel">
              <div className="carousel-wrapper">
                <div className="project-carousel">
                  {featuredProjects.map((proj, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${
                        index === activeProject ? "active" : ""
                      }`}
                      onClick={() => setActiveProject(index)}
                      style={{ "--proj-color": proj.color }}
                    >
                      <div className="carousel-icon">{proj.icon}</div>
                      <h4 className="carousel-title">{proj.title}</h4>
                      <p className="carousel-category">{proj.category}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="all-projects-link">
          <p>Want to see more?</p>
          <a href="/project" className="view-all-btn">
            View All Projects →
          </a>
        </div>
      </Container>
    </Container>
  );
}

export default FeaturedWork;
