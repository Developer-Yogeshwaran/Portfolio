import React from "react";
import Card from "react-bootstrap/Card";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card 
      className="project-card-view modern-card glow-effect magical-hover" 
      style={{ 
        border: "none", 
        borderRadius: "12px",
        transition: "all 0.3s ease"
      }}
    >
      <div style={{ overflow: "hidden", borderRadius: "12px 12px 0 0" }}>
        <Card.Img 
          variant="top" 
          src={props.imgPath} 
          alt="card-img" 
          style={{ 
            borderRadius: "12px 12px 0 0",
            transition: "transform 0.4s ease, filter 0.4s ease",
            width: "100%",
            height: "200px",
            objectFit: "cover"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.filter = "brightness(0.9)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.filter = "brightness(1)";
          }}
          onError={(e) => {
            e.currentTarget.style.backgroundColor = "#1a1a2e";
            e.currentTarget.style.display = "flex";
            e.currentTarget.style.alignItems = "center";
            e.currentTarget.style.justifyContent = "center";
            e.currentTarget.innerHTML = "📷";
          }}
        />
      </div>
      <Card.Body>
        <Card.Title style={{ color: "#c770f0", fontSize: "1.2em", fontWeight: "600" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", color: "#ddd", lineHeight: "1.6" }}>
          {props.description}
        </Card.Text>
        
        <a 
          href={props.ghLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary btn-modern"
          style={{ marginRight: "10px", textDecoration: "none", display: "inline-block" }}
        >
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </a>

        {!props.isBlog && props.demoLink && (
          <a
            href={props.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-modern"
            style={{ textDecoration: "none", display: "inline-block" }}
          >
            <CgWebsite /> &nbsp;
            Demo
          </a>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
