import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/A_Yogeshwaran_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const handleDownload = () => {
    try {
      const link = document.createElement("a");
      link.href = pdf;
      link.download = "A_Yogeshwaran_Resume.pdf";
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        document.body.removeChild(link);
      }, 100);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to download resume. Please try again.");
    }
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <button
            onClick={handleDownload}
            style={{ 
              maxWidth: "250px",
              padding: "10px 20px",
              backgroundColor: "#c770f0",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "1em",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#ff6b9d";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#c770f0";
              e.target.style.transform = "scale(1)";
            }}
            className="pulsing-ring"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <button
            onClick={handleDownload}
            style={{ 
              maxWidth: "250px",
              padding: "10px 20px",
              backgroundColor: "#c770f0",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "1em",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#ff6b9d";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#c770f0";
              e.target.style.transform = "scale(1)";
            }}
            className="pulsing-ring"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
