import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <Col md={10}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Days I <strong className="purple">Code</strong>
        </h1>
        <p style={{ 
          textAlign: "center", 
          color: "#aaa", 
          fontSize: "1.1em",
          marginBottom: "30px",
          animation: "fadeIn 0.8s ease-in-out"
        }}>
          📊 My GitHub contribution graph showing my daily coding activity and commitment to development
        </p>
        <div style={{ 
          display: "flex", 
          justifyContent: "center",
          padding: "20px",
          background: "linear-gradient(135deg, rgba(199, 112, 240, 0.08), rgba(76, 205, 196, 0.05))",
          borderRadius: "15px",
          border: "1px solid rgba(199, 112, 240, 0.2)",
          backdropFilter: "blur(10px)"
        }}>
          <GitHubCalendar
            username="yogeshwaran-a"
            blockSize={15}
            blockMargin={5}
            color="#c084f5"
            fontSize={16}
          />
        </div>
        <p style={{ 
          textAlign: "center", 
          color: "#888", 
          fontSize: "0.9em",
          marginTop: "20px",
          fontStyle: "italic"
        }}>
          💻 Consistent coder | Always learning | One commit at a time
        </p>
      </Col>
    </Row>
  );
}

export default Github;
