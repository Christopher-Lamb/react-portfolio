import React from "react";
import Sidebar from "../../components/SideBar";
import { Col, Row, Container } from "react-bootstrap";

function Home() {
  //Display
  return (
    <div>
      <div className="App">
        <Row>
         
          <Col lg={3}>
            <Sidebar></Sidebar>
          </Col>
          <Col lg={9}></Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
