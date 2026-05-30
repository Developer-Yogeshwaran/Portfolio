import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import cleanMadurai from "../../Assets/Projects/CLEAN MADURAI.png";
import timeTable from "../../Assets/Projects/TIME TABLE.png";
import bookstore from "../../Assets/Projects/BOOKSTORE.png";
import ats from "../../Assets/Projects/ATS.png";
import erp from "../../Assets/Projects/ERP.png";
import intern from "../../Assets/Projects/intern.png";
import beacon from "../../Assets/Projects/beacon.png";
import ecommerce from "../../Assets/Projects/E commerce.png";
import cleanInsight from "../../Assets/Projects/clean insight.png";
import employeeManagement from "../../Assets/Projects/employee managment.png";
import solar from "../../Assets/Projects/solar.png";
import sitLate from "../../Assets/Projects/sit late.png";
import flames from "../../Assets/Projects/flames.png";
import dragon from "../../Assets/Projects/dragon.png";
import chatbot from "../../Assets/Projects/chatbot.png";

function Projects() {
  // Image mapping for projects
  const projectImages = {
    "Clean-Madurai AI": cleanMadurai,
    "Time Table Management System": timeTable,
    "Bookstore Management System": bookstore,
    "AI Resume Analyzer (ATS)": ats,
    "ERP System": erp,
    "Internship Tracker System": intern,
    "Beacon Finance – Personal Finance Experience": beacon,
    "E-commerce Product Analysis": ecommerce,
    "Madurai Insights Hub": cleanInsight,
    "Employee Management Web App": employeeManagement,
    "Solar EV BMS System": solar,
    "SIT Late Gate Management System": sitLate,
    "FLAMES Pro Max": flames,
    "Dragon Ball Game": dragon,
    "AuroraMind - AI Chatbot": chatbot,
  };

  const getProjectImage = (title) => projectImages[title] || leaf;

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
              imgPath={getProjectImage("Clean-Madurai AI")}
              isBlog={false}
              title="Clean-Madurai AI"
              description="AI-based civic engagement platform to gamify public cleanliness in Madurai, empowering students and citizens through rewards, AI verification, and impact tracking. A sustainable solution for community environmental improvement."
              ghLink="https://github.com/Developer-Yogeshwaran/Clean-Madurai"
              demoLink="https://clean-madurai-698f3.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={getProjectImage("Time Table Management System")}
              isBlog={false}
              title="Time Table Management System"
              description="Time Table Management System built using Spring Boot and MySQL to manage schedules for students and teachers. Provides comprehensive scheduling features with an intuitive interface for efficient timetable management."
              ghLink="https://github.com/Developer-Yogeshwaran/timetable-system"
              demoLink="https://timetable-system-2.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={getProjectImage("Bookstore Management System")}
              isBlog={false}
              title="Bookstore Management System"
              description="A backend Bookstore Management System built with Spring Boot and MySQL that provides REST APIs for adding, updating, retrieving, and deleting books using JPA and Hibernate. Complete inventory management solution."
              ghLink="https://github.com/Developer-Yogeshwaran/bookstore-management"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={getProjectImage("AI Resume Analyzer (ATS)")}
              isBlog={false}
              title="AI Resume Analyzer (ATS)"
              description="AI Resume Analyzer is a smart tool that analyzes resumes and matches them with job descriptions using Grok AI API. Helps job seekers optimize resumes and assists recruiters in evaluating candidates efficiently."
              ghLink="https://github.com/Developer-Yogeshwaran/AI-Resume-Analyzer-ATS"
              demoLink="https://ai-resume-analyzer-ats.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={getProjectImage("ERP System")}
              isBlog={false}
              title="ERP System"
              description="A full-stack ERP starter template built using Spring Boot and React for managing products, customers, inventory, sales, and purchases with JWT auth and role-based access control."
              ghLink="https://github.com/Developer-Yogeshwaran/ERP-System-for-Inventory-and-Sales-Management"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={getProjectImage("Internship Tracker System")}
              isBlog={false}
              title="Internship Tracker System"
              description="A professional intern and batch management system supporting intern registration, batch management, autogenerated ID cards, filtering, search, and CRUD workflows."
              ghLink="https://github.com/Developer-Yogeshwaran/Internship-tracker-system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={getProjectImage("Beacon Finance – Personal Finance Experience")}
              isBlog={false}
              title="Beacon Finance – Personal Finance Experience"
              description="A premium personal finance dashboard built with React, TypeScript, and Tailwind CSS, featuring modern responsive UI and advanced interactive state management."
              ghLink="https://github.com/Developer-Yogeshwaran/Personal-Finance-Experience"
              demoLink="https://personal-finance-experience.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={getProjectImage("E-commerce Product Analysis")}
              isBlog={false}
              title="E-commerce Product Analysis"
              description="A Python-based AI project for scraping product listings, analyzing customer reviews, and recommending top products via a Streamlit sentiment analysis dashboard."
              ghLink="https://github.com/Developer-Yogeshwaran/E-commerce-Product-Analysis-using-Web-Scraping-and-Sentiment-Analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={getProjectImage("Madurai Insights Hub")}
              isBlog={false}
              title="Madurai Insights Hub"
              description="A smart city telemetry dashboard and ML prediction platform for traffic, pollution, energy, and waste monitoring with real-time visualization analytics."
              ghLink="https://github.com/Developer-Yogeshwaran/madurai-insights-hub"
              demoLink="https://madurai-insights-hub.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={getProjectImage("Employee Management Web App")}
              isBlog={false}
              title="Employee Management Web App"
              description="A full-featured employee management system using JsonPowerDB with search, sorting, filtering, CRUD workflows, and dark mode support."
              ghLink="https://github.com/Developer-Yogeshwaran/Employee-Management-Web-App-JsonPowerDB-"
              demoLink="https://employee-management-web-app-json-po.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={getProjectImage("Solar EV BMS System")}
              isBlog={false}
              title="Solar EV BMS System"
              description="Arduino-based Solar EV with integrated BMS for real-time battery monitoring, Bluetooth motor control, LCD display, and automated safety alerts."
              ghLink="https://github.com/Developer-Yogeshwaran/smart-solar-ev-management-system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={getProjectImage("SIT Late Gate Management System")}
              isBlog={false}
              title="SIT Late Gate Management System"
              description="A Spring Boot-based web application for managing late student entries in a college. Allows staff to record students' late arrivals and provides an admin dashboard to view all entries. Data stored in JSON format for lightweight management."
              ghLink="https://github.com/Developer-Yogeshwaran/sit-lategate-management-system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={getProjectImage("FLAMES Pro Max")}
              isBlog={false}
              title="FLAMES Pro Max"
              description="An interactive and visually engaging web application that determines relationship compatibility using the classic FLAMES logic. Designed with modern glassmorphism UI, dynamic animations, and immersive background visuals for an enjoyable user experience."
              ghLink="https://github.com/Developer-Yogeshwaran/flames-pro-max"
              demoLink="https://flames-pro.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={getProjectImage("Dragon Ball Game")}
              isBlog={false}
              title="Dragon Ball Game"
              description="An engaging browser-based action game where you take control of a dragon and battle waves of enemies in an immersive space environment. Built using HTML, CSS, and JavaScript with Canvas API for smooth animations and responsive gameplay."
              ghLink="https://github.com/Developer-Yogeshwaran/dragon-ball-game"
              demoLink="https://dragonballgame11.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={getProjectImage("AuroraMind - AI Chatbot")}
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
