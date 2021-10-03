import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="bg-info" >
            <Navbar>
  <Container>
  <Navbar.Brand href="/home" className="fs-1 fw-bold" > Adarsha Lipi </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mx-4">
    <NavLink className="mx-4 text-decoration-none fs-4 " to="/home">Home</NavLink>
    <NavLink className="mx-4 text-decoration-none fs-4 " to="/about">About</NavLink>
    <NavLink className="mx-4 text-decoration-none fs-4 " to="/service">Service</NavLink>
    <NavLink className="mx-4 text-decoration-none fs-4 " to="/teacher">Teachers</NavLink>
    <NavLink className="mx-4 text-decoration-none fs-4 " to="/Photo">Photo Galary</NavLink>
    </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;