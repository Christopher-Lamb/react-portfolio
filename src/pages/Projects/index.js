import React from "react";
import NavBar from "../../components/NavBar";
import Card from "../../components/Card";
import { Col, Row, Container } from "react-bootstrap";

const marginTopPx = 20;
const heightPx = 200;
const widthPercent = 100;

function Projects() {
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
              Quakka Marketplace
            </Card>
          </Col>
          <Col lg={4}>
            <Card
              marginTopPx={marginTopPx}
              heightPx={heightPx}
              width={widthPercent}
            >
              Covid Testing Locator
            </Card>
          </Col>
          <Col lg={4}>
            <Card
              marginTopPx={marginTopPx}
              heightPx={heightPx}
              width={widthPercent}
            >
              Modern Solutiions
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
