import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import NavBar from "../../components/NavBar";
import Card from "../../components/Card";

const marginTopPx = 20;
const heightPx = 200;
const widthPercent = 100;

function Contact() {
  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <Row>
          <Col lg={4}>
            <Card
              marginTopPx={marginTopPx}
              heightPx={heightPx}
              width={widthPercent}
            >
              Linkedin
            </Card>
          </Col>
          <Col lg={4}>
            <Card
              marginTopPx={marginTopPx}
              heightPx={heightPx}
              width={widthPercent}
            >
              Resume
            </Card>
          </Col>
          <Col lg={4}>
            <Card
              marginTopPx={marginTopPx}
              heightPx={heightPx}
              width={widthPercent}
            >
              Email
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 4, offset: 2 }}>
            <Card
              marginTopPx={marginTopPx}
              heightPx={heightPx}
              width={widthPercent}
            >
              GitHub
            </Card>
          </Col>
          <Col lg={4}>
            <Card
              marginTopPx={marginTopPx}
              heightPx={heightPx}
              width={widthPercent}
            >
              Instagram
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
