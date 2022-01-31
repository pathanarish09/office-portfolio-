import * as React from "react";
import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <>
        <Navbar bg="warning" variant="warning">
          <Container>
            <Navbar.Brand href="#home">
              {" "}
              <img
                className="d-block w-100"
                height={70}
                width={70}
                src={require("../Assets/logotp.png").default}
                alt="First slide"
              />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Container>
                <Row>
                  <Col>
                    <Link to="/home">Home</Link>
                  </Col>

                  <Col>
                    <Link to="/about">About</Link>
                  </Col>
                  <Col>
                    <Link to="/product">Product</Link>
                  </Col>
                  <Col></Col>
                </Row>
              </Container>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
}
