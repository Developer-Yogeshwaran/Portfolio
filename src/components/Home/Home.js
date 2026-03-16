import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Statistics from "../Statistics/Statistics";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import FeaturedWork from "../FeaturedWork/FeaturedWork";
import pdf from "../../Assets/A_Yogeshwaran_Resume.pdf";

function Home() {
  const handleResumeDownload = () => {
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
    }
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />

        {/* Glowing Accents */}
        <div className="glowing-accent accent-1"></div>
        <div className="glowing-accent accent-2"></div>
        <div className="glowing-accent accent-3"></div>

        {/* Floating Brackets */}
        <div className="floating-bracket bracket-1">{"{ }"}</div>
        <div className="floating-bracket bracket-2">{"< >"}</div>
        <div className="floating-bracket bracket-3">{"[ ]"}</div>
        <div className="floating-bracket bracket-4">{"( )"}</div>

        {/* Decorative Lines */}
        <div className="decorative-line line-1"></div>
        <div className="decorative-line line-2"></div>
        <div className="decorative-line line-3"></div>

        <Container className="home-content home-content-wrapper">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave float bounce-custom" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <div className="animated-title">
                <span className="word">I'M</span>
                <span className="word gradient-text" style={{ fontSize: "1.1em" }}>
                  YOGESHWARAN
                </span>
              </div>

              <div style={{ padding: "30px 0", textAlign: "left" }}>
                <div className="typewriter-wrapper">
                  <div className="typewriter-text">
                    <Type />
                  </div>
                </div>
              </div>

              <button 
                className="cta-button" 
                onClick={handleResumeDownload}
                style={{ cursor: "pointer", zIndex: 10, position: "relative" }}
              >
                📥 Download Resume
              </button>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} className="home-avatar">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid zoom-in-out"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Statistics />
      <FeaturedWork />
      <Services />
      <Testimonials />
    </section>
  );
}

export default Home;
