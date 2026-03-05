import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  MdDesignServices,
  MdSmartToy,
  MdCloud,
  MdAnalytics,
  MdStorefront,
  MdAutoFixHigh,
} from "react-icons/md";
import "./Services.css";

function Services() {
  const handleGetInTouch = () => {
    window.location.href = "mailto:yogeshofficialwork1@gmail.com?subject=Let's Collaborate!&body=Hi Yogeshwaran,%0D%0A%0D%0AI'm interested in collaborating with you on an exciting project.";
  };

  const services = [
    {
      icon: <MdDesignServices />,
      title: "Web Development",
      description:
        "Full-stack web applications using React, Node.js, and modern frameworks. Responsive, performant, and user-focused design.",
      skills: ["React", "Node.js", "MERN", "Spring Boot"],
      color: "#c770f0",
    },
    {
      icon: <MdSmartToy />,
      title: "AI/ML Solutions",
      description:
        "Machine learning models, deep learning, NLP, and computer vision for intelligent automation and data-driven insights.",
      skills: ["TensorFlow", "PyTorch", "Python", "Data Analysis"],
      color: "#ff6b9d",
    },
    {
      icon: <MdCloud />,
      title: "Cloud Deployment",
      description:
        "Scalable cloud infrastructure and deployment on AWS, Heroku, and other platforms with optimization and monitoring.",
      skills: ["AWS", "Heroku", "Docker", "CI/CD"],
      color: "#4ecdc4",
    },
    {
      icon: <MdAnalytics />,
      title: "Data Processing",
      description:
        "Extract, process, and analyze large datasets. Create dashboards and visualizations for actionable insights.",
      skills: ["SQL", "MongoDB", "Data Visualization", "Analytics"],
      color: "#ffbe0b",
    },
    {
      icon: <MdAutoFixHigh />,
      title: "System Optimization",
      description:
        "Performance optimization, code refactoring, and architectural improvements for better efficiency and scalability.",
      skills: ["Optimization", "Architecture", "DevOps", "Testing"],
      color: "#fa5252",
    },
    {
      icon: <MdStorefront />,
      title: "IoT Development",
      description:
        "Internet of Things solutions combining hardware and software for smart devices and automated systems.",
      skills: ["Hardware Integration", "Embedded Systems", "IoT Protocols"],
      color: "#845ef7",
    },
  ];

  return (
    <Container fluid className="services-section">
      <Container>
        <div className="services-header">
          <h2 className="services-title">
            Services & <span className="services-highlight">Expertise</span>
          </h2>
          <p className="services-subtitle">
            Comprehensive solutions across different tech domains
          </p>
        </div>

        <Row className="services-grid">
          {services.map((service, index) => (
            <Col md={6} lg={4} key={index} className="service-card-wrapper">
              <div
                className="service-card"
                style={{
                  "--service-color": service.color,
                }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-skills">
                  {service.skills.map((skill, i) => (
                    <span key={i} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <div className="services-cta">
          <h3>Interested in collaborating?</h3>
          <p>Let's bring your ideas to life with cutting-edge solutions</p>
          <button className="cta-btn" onClick={handleGetInTouch}>Get In Touch</button>
        </div>
      </Container>
    </Container>
  );
}

export default Services;
