import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="text-gradient"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" style={{ fontSize: "1.05em", lineHeight: "1.8" }}>
              I'm passionate about building innovative solutions with cutting-edge technologies! 🚀
              <br />
              <br />I am proficient in
              <i>
                <b className="text-gradient"> Java, Python, and Frontend Technologies. </b>
              </i>
              <br />
              <br />
              With extensive experience in <b className="text-gradient">HTML, CSS, JavaScript, and React.js</b>, I craft responsive and interactive user interfaces that deliver exceptional experiences.
              <br />
              <br />
              My interests include developing scalable &nbsp;
              <i>
                <b className="text-gradient">Applications and Web Technologies </b> with expertise in{" "}
                <b className="text-gradient">
                  Artificial Intelligence, Machine Learning, and Natural Language Processing.
                </b>
              </i>
              <br />
              <br />
              I'm enthusiastic about leveraging <b className="text-gradient">Spring Boot</b> for backend development and{" "}
              <i>
                <b className="text-gradient">
                  {" "}
                  Modern Frontend Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="text-gradient"> React.js, Bootstrap, and Tailwind CSS</b>
              </i>
              {" "} to create impactful, scalable solutions. 💡
              <br />
              <br />
              I thrive in collaborative environments and love solving complex problems with clean, efficient code.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid float" alt="avatar" style={{ borderRadius: "15px" }} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 style={{ fontSize: "2.2em", marginBottom: "30px" }}>
              FIND ME ON <span className="text-gradient">SOCIAL MEDIA</span>
            </h1>
            <p style={{ fontSize: "1.1em", marginBottom: "30px" }}>
              Feel free to <span className="text-gradient">connect </span>with me for collaborations or opportunities!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons icon-float">
                <a
                  href="https://github.com/Developer-Yogeshwaran"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  style={{ fontSize: "2.5em" }}
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons icon-float">
                <a
                  href="https://www.linkedin.com/in/yogeshwaran-a-64655b396"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  style={{ fontSize: "2.5em" }}
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons icon-float">
                <a
                  href="mailto:yogeshofficialwork1@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  style={{ fontSize: "2.5em" }}
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
