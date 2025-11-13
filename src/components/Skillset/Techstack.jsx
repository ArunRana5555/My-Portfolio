import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
} from "react-icons/di";
import {
  SiMaterialui,
  SiRedux,
  SiMongodb,
  SiHtml5,
  SiTailwindcss,
  SiE
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <p style={{ fontSize: "0.8rem" }}>HTML5</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{ fontSize: "0.8rem" }}>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{ fontSize: "0.8rem" }}>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{ fontSize: "0.8rem" }}>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <p style={{ fontSize: "0.8rem" }}>Redux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <p style={{ fontSize: "0.8rem" }}>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialui />
        <p style={{ fontSize: "0.8rem" }}>Material UI</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <p style={{ fontSize: "0.8rem" }}>Tailwind CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiE />
        <p style={{ fontSize: "0.8rem" }}>Express</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={{ fontSize: "0.8rem" }}>Git</p>
      </Col>
    </Row>

  );
}

export default Techstack;
