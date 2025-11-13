import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/pg.png";
import agrichain from "../assets/Agreechain.png";
import Metaspace from "../assets/Metaspace.png";
import businessbay from "../assets/Heroimage.png"

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={businessbay}
              isBlog={false}
              title="Business Bay"
              description="Business Bay is an all-in-one digital ecosystem that helps sellers, creators, real-estate professionals, restaurateurs and other small-business owners go fully digital. Business Bay.Digital NFC cards and apps: share your business profile with a tap instead of paper. Business Bay.Built-in storefront and selling tools: create an online store and manage orders, no coding required."
              demoLink="https://businessbay.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agrichain}
              isBlog={false}
              title="AgriChain"
              description="AgriChain is an all-in-one agricultural supply chain management platform that enables growers, traders, and logistics providers to manage inventory, contracts, orders, freight, and invoicing—with integrated real-time truck tracking and container packing features and Transaction by blockchain for transparency and security."
              demoLink="https://agrichain.bastionex.net/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Metaspace}
              isBlog={false}
              title="Metaspacechain Marketplace"
              description="MetaSpace is a space-themed Play-to-Earn (P2E) blockchain game built on the Polygon blockchain that offers an immersive online gaming experience. It features a decentralized NFT marketplace where players fully own, buy, sell, and trade in-game assets such as weapons, characters, and collectibles. The platform combines story mode missions with fast-paced arena battles, allowing players to explore virtual galaxies, engage in combat, and earn real rewards through their gameplay. Beyond gaming, MetaSpace also provides a social hub for players to connect, collaborate, and participate in community events."
              demoLink="https://marketplace.metaspacechain.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Decentralized Document Storage Platform"
              description="This project is a decentralized document storage platform where users can securely store their documents on an IPFS server, with unique content identifiers (CIDs) recorded immutably on the blockchain via smart contracts. Built with a Node.js backend integrated with the Hardhat blockchain development framework, it ensures data integrity and transparency through decentralized storage and blockchain verification. The platform incorporates role-based access control with three user levels—super admin, admin, and user—providing secure and fine-grained permissions. Web3 authentication is integrated for seamless and secure user authorization, empowering users with decentralized identity management while ensuring robust security across the system."
              ghLink="https://github.com/19sajib/mern-blog-app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects