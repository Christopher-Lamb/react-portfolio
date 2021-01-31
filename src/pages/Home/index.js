import React from "react";

import { Col, Row, Container } from "react-bootstrap";
import NavBar from "../../components/NavBar";
import Card from "../../components/Card";
import ButtonLink from "../../components/ButtonLink";

function Home() {
  //Display
  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <Row>
          <Card width={"100px"} height={"1000px"}>
            <image src="#" alt="Cover Image" />
            <h1>Full Stack Web Development</h1>
            <p>
              I am a Web developer from Gloucester City, New Jersey. I do both
              front end and back end development, and specalize in creativity
              and problem solving. If you are a business seeking an online
              precense or a employeer looking to hire you can contact me here.
            </p>
            <ButtonLink href={"resume"}>Need a Website</ButtonLink>
            <ButtonLink href={"contact"}>Looking to Hire</ButtonLink>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
