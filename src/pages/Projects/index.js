import React from "react";
import NavBar from "../../components/NavBar";
import Card from "../../components/Card";
import { Col, Row, Container } from "react-bootstrap";
import "./style.css";

function Projects() {
  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <Row>
          <Col lg={4}>
            <Card
              className={"card-project shadow-lg p-3 mb-5 bg-white rounded"}
            >
              <h3>Quakka Marketplace</h3>
              <br />
              <p>Image and link comin when files are updated</p>
            </Card>
          </Col>
          <Col lg={4}>
            <Card
              className={"card-project shadow-lg p-3 mb-5 bg-white rounded"}
            >
              <h3>Covid Testing Locator</h3>
              <br />
              <p>Image and link comin when files are updated</p>
            </Card>
          </Col>
          <Col lg={4}>
            <Card
              className={"card-project shadow-lg p-3 mb-5 bg-white rounded"}
            >
              <h3>Modern Solutiions</h3>
              <br />
              <p>Image and link comin when files are updated</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
