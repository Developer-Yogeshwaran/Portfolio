import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./FeaturedWork.css";

function FeaturedWork() {
  const [activeProject, setActiveProject] = useState(0);

  const featuredProjects = [
    {
      id: 1,
      title: "Smart Shoe Charger IoT Device",
      category: "IoT Development",
      description:
        "An innovative wearable device that combines IoT technology with renewable energy. This project demonstrates mastery in hardware-software integration, demonstrating self-charging capabilities using sustainable energy concepts.",
      technologies: ["IoT", "Hardware", "Python", "Embedded Systems", "Energy Harvesting"],
      highlights: [
        "Self-charging functionality integrated",
        "Health monitoring sensors integrated",
        "Wireless communication protocol",
        "Sustainable energy optimization",
      ],
      metrics: {
        development: "6 months",
        teamSize: "4 people",
        impact: "Patent potential",
      },
      color: "#c770f0",
      icon: "⚡",
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
              <div className="project-icon" style={{ fontSize: "4em" }}>
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
                <button className="link-btn github-btn">
                  <FaGithub /> View Code
                </button>
                <button className="link-btn demo-btn">
                  <FaExternalLinkAlt /> Learn More
                </button>
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
