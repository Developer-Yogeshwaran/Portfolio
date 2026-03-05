import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdPerson, MdSchool, MdEmojiEvents, MdWork } from "react-icons/md";
import "./Experience.css";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", marginTop: "100px" }}>
          <Col md={8}>
            <h1 className="experience-heading shimmer-text">
              My <strong className="gradient-text">Timeline</strong>
            </h1>
            <p className="experience-subtitle">
              A journey through growth, learning, and innovation
            </p>

            <VerticalTimeline lineColor="rgba(199, 112, 240, 0.3)">
              {/* Education */}
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2023 - Present"
                iconStyle={{
                  background: "linear-gradient(135deg, #c770f0, #ff6b9d)",
                  color: "#fff",
                }}
                icon={<MdSchool />}
              >
                <h3 className="timeline-title">
                  B.E. Computer Science (AI/ML)
                </h3>
                <h4 className="timeline-subtitle">
                  Sethu Institute of Technology
                </h4>
                <p className="timeline-description">
                  🎓 Specializing in Artificial Intelligence and Machine Learning with focus on deep learning, natural language processing, and computer vision.
                </p>
                <p className="timeline-content">
                  <strong>CGPA:</strong> 8.50 | <strong>Expected Graduation:</strong> 2027
                </p>
              </VerticalTimelineElement>

              {/* AI/ML Development */}
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2024 - Present"
                iconStyle={{
                  background: "linear-gradient(135deg, #4ecdc4, #ffbe0b)",
                  color: "#fff",
                }}
                icon={<MdWork />}
              >
                <h3 className="timeline-title">AI/ML Developer</h3>
                <h4 className="timeline-subtitle">Self-Directed Learning</h4>
                <p className="timeline-description">
                  Developing expertise in machine learning frameworks, deep learning models, and AI solutions for real-world problems.
                </p>
                <p className="timeline-content">
                  <strong>Skills:</strong> TensorFlow, PyTorch, Python, NLP, Computer Vision, Data Analysis
                </p>
              </VerticalTimelineElement>

              {/* Full Stack Development */}
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2023 - Present"
                iconStyle={{
                  background: "linear-gradient(135deg, #ff6b9d, #c770f0)",
                  color: "#fff",
                }}
                icon={<MdWork />}
              >
                <h3 className="timeline-title">Full Stack Developer</h3>
                <h4 className="timeline-subtitle">Portfolio Projects</h4>
                <p className="timeline-description">
                  Building end-to-end applications using modern tech stack including React, Node.js, Java, and cloud platforms.
                </p>
                <p className="timeline-content">
                  <strong>Tech Stack:</strong> MERN, Spring Boot, AWS, MongoDB, PostgreSQL, Docker
                </p>
              </VerticalTimelineElement>

              {/* Skybrisk Internship */}
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Jan - Apr 2026"
                iconStyle={{
                  background: "linear-gradient(135deg, #00d4ff, #4ecdc4)",
                  color: "#fff",
                }}
                icon={<MdWork />}
              >
                <h3 className="timeline-title">Java Full Stack Developer</h3>
                <h4 className="timeline-subtitle">Skybrisk - 3 Months Internship</h4>
                <p className="timeline-description">
                  💼 Developing full-stack Java applications with focus on backend services, API development, and database management. Contributing to enterprise-level projects and gaining hands-on experience in professional development environments.
                </p>
                <p className="timeline-content">
                  <strong>Responsibilities:</strong> Backend Development, REST APIs, Database Design, Code Optimization | <strong>Duration:</strong> 3 Months
                </p>
              </VerticalTimelineElement>

              {/* Certifications */}
              <VerticalTimelineElement
                className="vertical-timeline-element--achievement"
                date="2024"
                iconStyle={{
                  background: "linear-gradient(135deg, #fa5252, #ffbe0b)",
                  color: "#fff",
                }}
                icon={<MdEmojiEvents />}
              >
                <h3 className="timeline-title">Professional Certifications</h3>
                <h4 className="timeline-subtitle">
                  Multiple Industry-Recognized Programs
                </h4>
                <p className="timeline-description">
                  Completed 6+ certifications including IBM Generative AI, Google Digital Marketing, and NPTEL DSA courses.
                </p>
                <p className="timeline-content">
                  <strong>Focus:</strong> AI, Cloud Computing, Data Structures, Digital Marketing, Task Management
                </p>
              </VerticalTimelineElement>

              {/* Future Goals */}
              <VerticalTimelineElement
                className="vertical-timeline-element--goal"
                date="2025 - 2026"
                iconStyle={{
                  background: "linear-gradient(135deg, #c770f0, #4ecdc4)",
                  color: "#fff",
                }}
                icon={<MdPerson />}
              >
                <h3 className="timeline-title">Internship & Career Growth</h3>
                <h4 className="timeline-subtitle">
                  Professional Development Phase
                </h4>
                <p className="timeline-description">
                  Seeking internship opportunities to apply knowledge in real-world scenarios and contribute to innovative AI/ML projects.
                </p>
                <p className="timeline-content">
                  <strong>Goals:</strong> Contribute to open-source, build production applications, develop industry expertise
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
