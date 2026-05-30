import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  MdCode,
  MdEmojiEvents,
  MdLightbulb,
  MdTrendingUp,
} from "react-icons/md";
import "./Statistics.css";

function Statistics() {
  const [count, setCount] = useState({
    projects: 0,
    skills: 0,
    certifications: 0,
    contributions: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => ({
        projects: prev.projects < 15 ? prev.projects + 1 : 15,
        skills: prev.skills < 40 ? prev.skills + 2 : 40,
        certifications: prev.certifications < 6 ? prev.certifications + 1 : 6,
        contributions: prev.contributions < 200 ? prev.contributions + 5 : 200,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: <MdCode />,
      value: count.projects,
      title: "Projects Built",
      description: "From IoT to AI Solutions",
      color: "#c770f0",
    },
    {
      icon: <MdTrendingUp />,
      value: count.skills,
      title: "Skills Mastered",
      description: "Across multiple domains",
      color: "#ff6b9d",
    },
    {
      icon: <MdEmojiEvents />,
      value: count.certifications,
      title: "Certifications",
      description: "Industry-recognized",
      color: "#4ecdc4",
    },
    {
      icon: <MdLightbulb />,
      value: count.contributions,
      title: "Code Contributions",
      description: "Open-source & personal",
      color: "#ffbe0b",
    },
  ];

  return (
    <section className="statistics-section">
      <Container>
        <div className="statistics-header">
          <h2 className="statistics-title">
            Impact & <span className="highlight">Achievements</span>
          </h2>
          <p className="statistics-subtitle">
            Quantifying growth, innovation, and continuous learning
          </p>
        </div>

        <Row className="statistics-grid">
          {stats.map((stat, index) => (
            <Col md={6} lg={3} key={index} className="stat-card-wrapper">
              <div
                className="stat-card"
                style={{
                  "--stat-color": stat.color,
                }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-content">
                  <div className="stat-value">{stat.value}+</div>
                  <h3 className="stat-title">{stat.title}</h3>
                  <p className="stat-description">{stat.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <div className="stats-features">
          <Row>
            <Col md={6} className="feature-item">
              <div className="feature-icon">🎓</div>
              <h4>Continuous Learner</h4>
              <p>Always expanding knowledge in AI, ML, and full-stack development</p>
            </Col>
            <Col md={6} className="feature-item">
              <div className="feature-icon">🚀</div>
              <h4>Problem Solver</h4>
              <p>Innovative approaches to complex technical challenges</p>
            </Col>
            <Col md={6} className="feature-item">
              <div className="feature-icon">💻</div>
              <h4>Full Stack Developer</h4>
              <p>End-to-end development from frontend to deployment</p>
            </Col>
            <Col md={6} className="feature-item">
              <div className="feature-icon">🎯</div>
              <h4>Goal Oriented</h4>
              <p>Focused on delivering quality solutions on time</p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Statistics;
