import React from "react";
import CartWidget from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar className="navBar" bg="primary" variant="dark" expand="lg">
        <Container>
          <Link to={"/"}>
            <Navbar.Brand href="#home">
              <img
                src="https://static.vecteezy.com/system/resources/previews/010/150/750/original/button-plus-icon-sign-symbol-design-free-png.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Brand href="#home">My e-farmaCommerce</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/Catalogue">
                <Nav.Link>Catalogo</Nav.Link>
              </Link>
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <Link to={`/Category/${"AINEs"}`}>Analgesicos</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <Link to={`/Category/${"Protector gastrico"}`}>
                    Protector gastrico
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  <Link to={`/Category/${"Antiflatulento"}`}>
                    Antiflatulento
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Link to={"/Cart"}>
            <CartWidget />
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
