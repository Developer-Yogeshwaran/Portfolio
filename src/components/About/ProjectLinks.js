import React from "react";
import { Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";

function ProjectLinks() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px", paddingTop: "30px" }}>
      <Col md={10}>
        <h1 className="project-heading" style={{ paddingBottom: "30px" }}>
          Project <strong className="purple">Repository & Links</strong>
        </h1>

        <Row style={{ gap: "30px", justifyContent: "center" }}>
          {/* GitHub Repository Card */}
          <Col md={5} style={{
            background: "linear-gradient(135deg, rgba(199, 112, 240, 0.08), rgba(78, 205, 196, 0.05))",
            borderRadius: "15px",
            padding: "30px",
            border: "1px solid rgba(199, 112, 240, 0.2)",
            backdropFilter: "blur(10px)",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(199, 112, 240, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}>
            <div style={{ textAlign: "center" }}>
              <AiFillGithub style={{ fontSize: "3em", color: "#c770f0", marginBottom: "15px" }} />
              <h2 style={{ color: "#fff", fontSize: "1.5em", marginBottom: "15px" }}>
                Github <strong className="purple">Repository</strong>
              </h2>
              <p style={{ color: "#aaa", fontSize: "0.95em", lineHeight: "1.6", marginBottom: "20px" }}>
                This is my personal portfolio website built with React, showcasing my projects, skills, and achievements. The repository contains all the source code and assets for this interactive portfolio.
              </p>
              <ul style={{ textAlign: "left", color: "#ccc", fontSize: "0.9em", lineHeight: "2" }}>
                <li>✨ Built with React & Bootstrap</li>
                <li>🎨 Modern UI with animations</li>
                <li>📱 Fully responsive design</li>
                <li>🚀 GitHub integration for contributions</li>
              </ul>
              <a 
                href="https://github.com/Developer-Yogeshwaran/portfolio" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "20px",
                  padding: "12px 30px",
                  background: "linear-gradient(135deg, #c770f0, #ff6b9d)",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "25px",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px rgba(199, 112, 240, 0.3)"
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 6px 20px rgba(199, 112, 240, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 15px rgba(199, 112, 240, 0.3)";
                }}
              >
                📚 View Repository
              </a>
            </div>
          </Col>

          {/* Portfolio Website Card */}
          <Col md={5} style={{
            background: "linear-gradient(135deg, rgba(78, 205, 196, 0.08), rgba(68, 160, 141, 0.05))",
            borderRadius: "15px",
            padding: "30px",
            border: "1px solid rgba(78, 205, 196, 0.2)",
            backdropFilter: "blur(10px)",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(78, 205, 196, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}>
            <div style={{ textAlign: "center" }}>
              <CgWebsite style={{ fontSize: "3em", color: "#4ecdc4", marginBottom: "15px" }} />
              <h2 style={{ color: "#fff", fontSize: "1.5em", marginBottom: "15px" }}>
                Portfolio <strong className="purple">Website</strong>
              </h2>
              <p style={{ color: "#aaa", fontSize: "0.95em", lineHeight: "1.6", marginBottom: "20px" }}>
                Experience my live portfolio website deployed on Vercel. Explore my projects, achievements, technical skills, and connect with me through various platforms.
              </p>
              <ul style={{ textAlign: "left", color: "#ccc", fontSize: "0.9em", lineHeight: "2" }}>
                <li>🌐 Live on Vercel</li>
                <li>⚡ Fast & optimized</li>
                <li>🎯 Complete project showcase</li>
                <li>📧 Easy contact options</li>
              </ul>
              <a 
                href="https://yogeshwaranportfolio1.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "20px",
                  padding: "12px 30px",
                  background: "linear-gradient(135deg, #4ecdc4, #44a08d)",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "25px",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px rgba(78, 205, 196, 0.3)"
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 6px 20px rgba(78, 205, 196, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 15px rgba(78, 205, 196, 0.3)";
                }}
              >
                🌐 Visit Portfolio
              </a>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default ProjectLinks;
