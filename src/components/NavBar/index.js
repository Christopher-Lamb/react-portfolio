import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar(props) {
  //Displayed
  return <nav className="nav">{props.children}</nav>;
}
