import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Wrapper from "./components/Wrapper";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/Contact" component={Contact} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
