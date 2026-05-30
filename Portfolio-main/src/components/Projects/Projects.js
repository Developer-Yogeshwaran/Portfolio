import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading shimmer-text">
          My Recent <strong className="rainbow-wave" style={{ display: "inline-block", padding: "0 10px", background: "linear-gradient(45deg, #ff6b9d 0%, #c770f0 20%, #4ecdc4 40%, #ffbe0b 60%, #fa5252 80%, #ff6b9d 100%)", backgroundSize: "200% 200%", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", animation: "rainbow-wave 6s ease infinite" }}>Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Clean-Madurai AI"
              description="AI-based civic engagement platform to gamify public cleanliness in Madurai, empowering students and citizens through rewards, AI verification, and impact tracking. A sustainable solution for community environmental improvement."
              ghLink="https://github.com/Developer-Yogeshwaran/Clean-Madurai"
              demoLink="https://clean-madurai-698f3.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Time Table Management System"
              description="Time Table Management System built using Spring Boot and MySQL to manage schedules for students and teachers. Provides comprehensive scheduling features with an intuitive interface for efficient timetable management."
              ghLink="https://github.com/Developer-Yogeshwaran/timetable-system"
              demoLink="https://timetable-system-2.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Bookstore Management System"
              description="A backend Bookstore Management System built with Spring Boot and MySQL that provides REST APIs for adding, updating, retrieving, and deleting books using JPA and Hibernate. Complete inventory management solution."
              ghLink="https://github.com/Developer-Yogeshwaran/bookstore-management"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="AI Resume Analyzer (ATS)"
              description="AI Resume Analyzer is a smart tool that analyzes resumes and matches them with job descriptions using Grok AI API. Helps job seekers optimize resumes and assists recruiters in evaluating candidates efficiently."
              ghLink="https://github.com/Developer-Yogeshwaran/AI-Resume-Analyzer-ATS"
              demoLink="https://ai-resume-analyzer-ats.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="SIT Late Gate Management System"
              description="A Spring Boot-based web application for managing late student entries in a college. Allows staff to record students' late arrivals and provides an admin dashboard to view all entries. Data stored in JSON format for lightweight management."
              ghLink="https://github.com/Developer-Yogeshwaran/sit-lategate-management-system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="FLAMES Pro Max"
              description="An interactive and visually engaging web application that determines relationship compatibility using the classic FLAMES logic. Designed with modern glassmorphism UI, dynamic animations, and immersive background visuals for an enjoyable user experience."
              ghLink="https://github.com/Developer-Yogeshwaran/flames-pro-max"
              demoLink="https://flames-pro.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Dragon Ball Game"
              description="An engaging browser-based action game where you take control of a dragon and battle waves of enemies in an immersive space environment. Built using HTML, CSS, and JavaScript with Canvas API for smooth animations and responsive gameplay."
              ghLink="https://github.com/Developer-Yogeshwaran/dragon-ball-game"
              demoLink="https://dragonballgame11.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="AuroraMind - AI Chatbot"
              description="AuroraMind is a modern mental health chatbot UI that simulates AI-driven emotional support using predefined conversational logic. Built with HTML, Tailwind CSS, and JavaScript for a beautiful and responsive user interface."
              ghLink="https://github.com/Developer-Yogeshwaran/auroramind"
              demoLink="https://auroramind.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
