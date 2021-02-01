import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import NavBar from "../../components/NavBar";
import Card from "../../components/Card";
import "./style.css";

function Contact() {
  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <Row>
          <Col lg={4}>
            <Card className={"cards-contact"}>Linkedin</Card>
          </Col>
          <Col lg={4}>
            <Card className={"cards-contact"}>Resume</Card>
          </Col>
          <Col lg={4}>
            <Card className={"cards-contact"}>Email</Card>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 4, offset: 2 }}>
            <Card className={"cards-contact"}>GitHub</Card>
          </Col>
          <Col lg={4}>
            <Card className={"cards-contact"}>Instagram</Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
