import React, { Suspense, lazy } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Type from "./Type";
import pdf from "../../Assets/A_Yogeshwaran_Resume.pdf";

const Particle = lazy(() => import("../Particle"));
const Home2 = lazy(() => import("./Home2"));
const Statistics = lazy(() => import("../Statistics/Statistics"));
const Services = lazy(() => import("../Services/Services"));
const Testimonials = lazy(() => import("../Testimonials/Testimonials"));
const FeaturedWork = lazy(() => import("../FeaturedWork/FeaturedWork"));

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Suspense fallback={null}>
          <Particle />
        </Suspense>

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

              <a
                href={pdf}
                download="A_Yogeshwaran_Resume.pdf"
                className="cta-button"
                style={{ cursor: "pointer", zIndex: 10, position: "relative" }}
              >
                📥 Download Resume
              </a>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} className="home-avatar">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid zoom-in-out"
                style={{ maxHeight: "450px" }}
                loading="lazy"
                decoding="async"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Suspense fallback={<div className="section-loading"><span className="loading-spinner" aria-hidden="true"></span>Loading about section...</div>}>
        <Home2 />
      </Suspense>
      <Suspense fallback={<div className="section-loading"><span className="loading-spinner" aria-hidden="true"></span>Loading statistics...</div>}>
        <Statistics />
      </Suspense>
      <Suspense fallback={<div className="section-loading"><span className="loading-spinner" aria-hidden="true"></span>Loading featured work...</div>}>
        <FeaturedWork />
      </Suspense>
      <Suspense fallback={<div className="section-loading"><span className="loading-spinner" aria-hidden="true"></span>Loading services...</div>}>
        <Services />
      </Suspense>
      <Suspense fallback={<div className="section-loading"><span className="loading-spinner" aria-hidden="true"></span>Loading testimonials...</div>}>
        <Testimonials />
      </Suspense>
    </section>
  );
}

export default Home;
