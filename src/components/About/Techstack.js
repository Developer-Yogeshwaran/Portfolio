import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJava,
  DiPython,
  DiNodejs,
  DiGit,
  DiReact,
  DiMongodb,
} from "react-icons/di";
import {
  SiMysql,
  SiTensorflow,
  SiGithub,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons icon-float" style={{ fontSize: "2.5em" }}>
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons icon-float" style={{ fontSize: "2.5em" }}>
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons icon-float" style={{ fontSize: "2.5em" }}>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons icon-float" style={{ fontSize: "2.5em" }}>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons icon-float" style={{ fontSize: "2.5em" }}>
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons icon-float" style={{ fontSize: "2.5em" }}>
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons icon-float" style={{ fontSize: "2.5em" }}>
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons icon-float" style={{ fontSize: "2.5em" }}>
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons icon-float" style={{ fontSize: "2.5em" }}>
        <SiGithub />
      </Col>
    </Row>
  );
}

export default Techstack;
