import React from "react";

import { Row, Container } from "react-bootstrap";
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
          <Card className={"card-home shadow p-3 mb-5 bg-white rounded"}>
            <image src="#" alt="Cover Image" />
            <h1>Full Stack Web Development</h1>
            <p>
              I am a Web developer from Gloucester City, New Jersey. I do both
              front end and back end development, and specalize in creativity
              and problem solving. My web applications are developed using
              Node.js, Express.js, and React.js. If you are a business seeking
              an online precense or a employeer looking to hire you can contact
              me here.
            </p>
            <ButtonLink href={"contact"}>Need a Website</ButtonLink>
            <ButtonLink href={"resume"}>Looking to Hire</ButtonLink>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
