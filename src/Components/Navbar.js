import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "./img/logo.png";
import contacts from "./img/contacts.png"; 
import question from "./img/question.png"; 
import download from "./img/download.png"; 
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import Contacts from "../Pages/Contacts";
import About from "../Pages/About";
import Downloads from "../Pages/Downloads";
import "./Navbar.css";

class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="md">
          <Container>
            <Navbar.Brand href="/Home">
              <img
                src={logo}
                width="60"
                height="60"
                className="d-inline-block align-top logoShadow"
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav classname="mr-auto">
                <Nav.Link href="/Contacts" className="boxcolor">
                <img src={contacts} width="30" height="30" className="navbarImg"/>
                  <span>Contacts</span>
                </Nav.Link>
                <Nav.Link href="/Downloads" className="boxcolor">
                  <img src={download} width="30" height="30" className="navbarImg"/>
                  <span>Downloads</span>
                </Nav.Link>
                <Nav.Link href="/About" className="boxcolor">
                  <img src={question} width="30" height="30" className="navbarImg"/>
                  <span>About</span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Router>
          <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Contacts" component={Contacts} />
            <Route exact path="/Downloads" component={Downloads} />
            <Route exact path="/About" component={About} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default Header;



