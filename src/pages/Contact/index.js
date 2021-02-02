import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import NavBar from "../../components/NavBar";
import Card from "../../components/Card";
import "./style.css";
import LinkedIn from "./assets/linkedIn.png";
import Github from "./assets/Github.png";
import Instagram from "./assets/instagram.jpeg";
import Email from "./assets/mail.png";

function Contact() {
  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <Row>
          <Col lg={4}>
            <Card
              className={"cards-contact shadow-lg p-3 mb-5 bg-white rounded"}
            >
              <a href="https://www.linkedin.com/">
                <img id="linkedIn" src={LinkedIn} alt="LinkedIn" />
              </a>
            </Card>
          </Col>
          <Col lg={4}>
            <Card
              className={"cards-contact shadow-lg p-3 mb-5 bg-white rounded"}
            >
              <a href="resume">
                <img id="email" src="" alt="No resume yet" />
              </a>
            </Card>
          </Col>
          <Col lg={4}>
            <Card
              className={"cards-contact shadow-lg p-3 mb-5 bg-white rounded"}
            >
              <a href="">
                <img
                  action="mailto:chris.lamb13@hotmail.com"
                  id="email"
                  src={Email}
                  alt="Email"
                />
              </a>
              <p className="email-txt">Chris.lamb13@hotmail.com</p>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 4, offset: 2 }}>
            <Card
              className={"cards-contact shadow-lg p-3 mb-5 bg-white rounded"}
            >
              <a href="https://github.com/Christopher-Lamb">
                <img id="github" src={Github} alt="Github" />
              </a>
            </Card>
          </Col>
          <Col lg={4}>
            <Card
              className={"cards-contact shadow-lg p-3 mb-5 bg-white rounded"}
            >
              <a href="https://www.instagram.com/chris_lamb1713/">
                <img id="instagram" src={Instagram} alt="Instagram" />
              </a>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
