import React from "react";

import { Row, Container, Col } from "react-bootstrap";
import NavBar from "../../components/NavBar";
import Card from "../../components/Card";
import ButtonLink from "../../components/ButtonLink";
import "./style.css";

function Home() {
  //Display
  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <Row>
          <Card className={"card-home shadow-lg p-3 mb-5 bg-white rounded"}>
            <Row>
              <Col lg={8}>
                <div className="info-box">
                  <h1 className="info-header">Full Stack Web Development</h1>

                  <p className="info-text">
                    I am a Web developer from Gloucester City, New Jersey. I do
                    both front end and back end development, and specalize in
                    creativity and problem solving. My web applications are
                    developed using Node.js, Express.js, and React.js. If you
                    are a business seeking an online presence or a employeer
                    looking to hire you can contact me here.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={({ span: 6 }, { offset: 2 })}>
                <ButtonLink
                  id={"contact-button"}
                  className={"button"}
                  href={"contact"}
                >
                  Need a Website
                </ButtonLink>
              </Col>
              <Col lg={8}>
                <ButtonLink
                  id={"resume-button"}
                  className={"button"}
                  href={"resume"}
                >
                  Looking to Hire
                </ButtonLink>
              </Col>
            </Row>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
