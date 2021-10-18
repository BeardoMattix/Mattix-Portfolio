import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Main = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home" class="text-danger">
        Christopher Mattix
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>

          <NavDropdown title="Explore" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">About Me</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Projects</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Contact Me</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Download My Resume
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Main;
