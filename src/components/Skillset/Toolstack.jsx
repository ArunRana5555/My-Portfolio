import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiNetlify
} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{ fontSize: "0.8rem" }}>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{ fontSize: "0.8rem" }}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <p style={{ fontSize: "0.8rem" }}>Vercel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <p style={{ fontSize: "0.8rem" }}>Netlify</p>
      </Col>
    </Row>

  );
}

export default Toolstack;
