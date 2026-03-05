import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import {
  DiJava,
  DiPython,
  DiNodejs,
  DiReact,
  DiMongodb,
  DiJavascript1,
  DiDocker,
  DiAws,
} from "react-icons/di";
import {
  SiMysql,
  SiTensorflow,
  SiGithub,
  SiSpringboot,
  SiKeras,
  SiPandas,
  SiNumpy,
  SiOpenai,
  SiScikitlearn,
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiHeroku,
  SiJira,
  SiConfluence,
  SiSlack,
  SiFirebase,
} from "react-icons/si";
import "./Skills.css";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("programming");

  const skillsData = {
    programming: {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Java", icon: DiJava, proficiency: 90 },
        { name: "Python", icon: DiPython, proficiency: 85 },
        { name: "JavaScript", icon: DiJavascript1, proficiency: 80 },
        { name: "Node.js", icon: DiNodejs, proficiency: 75 },
      ],
    },
    frontend: {
      title: "Frontend & UI",
      icon: "🎨",
      skills: [
        { name: "React.js", icon: DiReact, proficiency: 85 },
        { name: "JavaScript", icon: DiJavascript1, proficiency: 80 },
        { name: "HTML & CSS", icon: null, proficiency: 90 },
        { name: "Bootstrap", icon: null, proficiency: 85 },
      ],
    },
    backend: {
      title: "Backend & Frameworks",
      icon: "⚙️",
      skills: [
        { name: "Spring Boot", icon: SiSpringboot, proficiency: 85 },
        { name: "Node.js", icon: DiNodejs, proficiency: 80 },
        { name: "RESTful APIs", icon: null, proficiency: 88 },
        { name: "Database Design", icon: null, proficiency: 82 },
      ],
    },
    ai_ml: {
      title: "AI & Machine Learning",
      icon: "🤖",
      skills: [
        { name: "TensorFlow", icon: SiTensorflow, proficiency: 80 },
        { name: "Keras", icon: SiKeras, proficiency: 80 },
        { name: "Scikit-learn", icon: SiScikitlearn, proficiency: 82 },
        { name: "NLP", icon: SiOpenai, proficiency: 78 },
        { name: "Pandas", icon: SiPandas, proficiency: 85 },
        { name: "NumPy", icon: SiNumpy, proficiency: 83 },
      ],
    },
    databases: {
      title: "Databases",
      icon: "🗄️",
      skills: [
        { name: "MySQL", icon: SiMysql, proficiency: 85 },
        { name: "MongoDB", icon: DiMongodb, proficiency: 80 },
        { name: "SQL", icon: null, proficiency: 88 },
        { name: "Data Management", icon: null, proficiency: 82 },
      ],
    },
    tools: {
      title: "Tools & Platforms",
      icon: "🛠️",
      skills: [
        { name: "Git/GitHub", icon: SiGithub, proficiency: 90 },
        { name: "VS Code", icon: SiVisualstudiocode, proficiency: 95 },
        { name: "Postman", icon: SiPostman, proficiency: 85 },
        { name: "Docker", icon: DiDocker, proficiency: 75 },
        { name: "Linux", icon: null, proficiency: 80 },
        { name: "Jira", icon: SiJira, proficiency: 78 },
      ],
    },
    cloud: {
      title: "Cloud & Deployment",
      icon: "☁️",
      skills: [
        { name: "Vercel", icon: SiVercel, proficiency: 85 },
        { name: "Heroku", icon: SiHeroku, proficiency: 80 },
        { name: "AWS", icon: DiAws, proficiency: 70 },
        { name: "Firebase", icon: SiFirebase, proficiency: 80 },
        { name: "Cloud Computing", icon: null, proficiency: 75 },
      ],
    },
    soft: {
      title: "Soft Skills",
      icon: "🎯",
      skills: [
        { name: "Problem Solving", icon: null, proficiency: 90 },
        { name: "Communication", icon: SiSlack, proficiency: 85 },
        { name: "Team Collaboration", icon: SiConfluence, proficiency: 88 },
        { name: "Project Management", icon: null, proficiency: 82 },
        { name: "Leadership", icon: null, proficiency: 80 },
        { name: "Innovation", icon: null, proficiency: 85 },
      ],
    },
  };

  const currentSkills = skillsData[activeCategory];

  return (
    <Container fluid className="skills-section">
      <Container>
        <h1 className="project-heading" style={{ marginBottom: "50px", textAlign: "center" }}>
          Technical <strong className="text-gradient">Skills & Expertise</strong>
        </h1>

        {/* Category Tabs */}
        <Row style={{ justifyContent: "center", marginBottom: "50px" }}>
          <Col md={12}>
            <div className="skills-tabs">
              {Object.keys(skillsData).map((key) => (
                <button
                  key={key}
                  className={`skill-tab ${activeCategory === key ? "active" : ""}`}
                  onClick={() => setActiveCategory(key)}
                >
                  <span className="tab-icon">{skillsData[key].icon}</span>
                  <span className="tab-text">{skillsData[key].title}</span>
                </button>
              ))}
            </div>
          </Col>
        </Row>

        {/* Skills Display */}
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={12}>
            <div className="skills-container">
              <h2 style={{ color: "#c770f0", textAlign: "center", marginBottom: "40px", fontSize: "2em" }}>
                {currentSkills.icon} {currentSkills.title}
              </h2>

              <Row style={{ justifyContent: "center" }}>
                {currentSkills.skills.map((skill, index) => (
                  <Col md={6} key={index} style={{ marginBottom: "30px" }}>
                    <div className="skill-item">
                      <div className="skill-header">
                        <div className="skill-icon-name">
                          {skill.icon && (
                            <div className="skill-icon-box">
                              <skill.icon className="skill-icon" />
                            </div>
                          )}
                          <span className="skill-name">{skill.name}</span>
                        </div>
                      </div>

                      {/* Creative Skill Indicator */}
                      <div className="skill-indicator-container">
                        <div className="skill-dots">
                          {[...Array(5)].map((_, dotIndex) => (
                            <div
                              key={dotIndex}
                              className={`skill-dot ${
                                skill.proficiency >= (dotIndex + 1) * 20 ? "filled" : ""
                              }`}
                              style={{
                                animation: `dotBounce 0.8s ease-in-out ${index * 0.1 + dotIndex * 0.1}s infinite`
                              }}
                            />
                          ))}
                        </div>
                        <span className="skill-label">Expert Level</span>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>

        {/* Skills Summary Cards */}
        <Row style={{ justifyContent: "center", marginTop: "50px", marginBottom: "50px" }}>
          <Col md={10}>
            <h2 style={{ color: "white", textAlign: "center", marginBottom: "30px", fontSize: "1.8em" }}>
              <span className="text-gradient">Skills Overview</span>
            </h2>
            <Row>
              <Col md={3} sm={6} style={{ marginBottom: "20px" }}>
                <div className="overview-card">
                  <div className="overview-icon">📚</div>
                  <h4>8+ Skills</h4>
                  <p>Programming Languages</p>
                </div>
              </Col>
              <Col md={3} sm={6} style={{ marginBottom: "20px" }}>
                <div className="overview-card">
                  <div className="overview-icon">🎓</div>
                  <h4>6+ Frameworks</h4>
                  <p>Modern Development</p>
                </div>
              </Col>
              <Col md={3} sm={6} style={{ marginBottom: "20px" }}>
                <div className="overview-card">
                  <div className="overview-icon">🤖</div>
                  <h4>AI/ML Stack</h4>
                  <p>6+ Technologies</p>
                </div>
              </Col>
              <Col md={3} sm={6} style={{ marginBottom: "20px" }}>
                <div className="overview-card">
                  <div className="overview-icon">⚡</div>
                  <h4>Cloud Platforms</h4>
                  <p>AWS, Vercel, Heroku</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Skills;
