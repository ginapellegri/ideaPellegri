import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from "../k-pop.jpg";

function NavBar(props) {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt=""
                />
                Bazar de Kaipi</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#dorama">Doramas</Nav.Link>
                <Nav.Link href="#kpop">K-Pop</Nav.Link>
                <Nav.Link href="#pelicula">Peliculas</Nav.Link>
                <Nav.Link href="#wiki">Wiki POP</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
  }

  export default NavBar