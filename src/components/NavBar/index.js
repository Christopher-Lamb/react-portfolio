import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  ));
  //Displayed
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <div className="brand-div">
            <p className="brand-top">Christopher Lamb</p>
            <p className="brand-bottom">Fullstack Developer</p>
          </div>
        </a>

        <Dropdown className="d-md-none d-xl-block">
          <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
            <span class="navbar-toggler-icon"></span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} eventKey={"1"} to={"/"}>
              Home
            </Dropdown.Item>
            <Dropdown.Item as={Link} eventKey={"2"} to={"/projects"}>
              Projects
            </Dropdown.Item>
            <Dropdown.Item as={Link} eventKey={"3"} to={"/contact"}>
              Contact
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <a className="nav-link active" ariaCurrent="page" href="/">
              Home
            </a>
            <a className="nav-link active" href="/projects">
              Projects
            </a>
            <a className="nav-link active" href="/contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
