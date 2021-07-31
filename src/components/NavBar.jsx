import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar,Container,Nav } from 'react-bootstrap';
import logo from '../assets/logo.png';
import './css/NavBar.css';
const NavBar = () => {
  return(
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <img
              alt="Vitra.ai"
              src={ logo }
              width="90"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <NavLink exact to="/" className="nav-link"  activeStyle={{
                  fontWeight: "bold",
                  color: "#5f18eb"
                }}><span className="navbar-link">PAGE 1</span></NavLink>           
                <NavLink to="/page2" className="nav-link" activeStyle={{
                  fontWeight: "bold",
                  color: "#5f18eb"
                }}><span className="navbar-link">PAGE 2</span></NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>           
    </>
  )
}
export default NavBar;