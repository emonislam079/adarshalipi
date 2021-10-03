import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="bg-info mb-5" >
            <Navbar>
  <Container>
  <Navbar.Brand className="fs-1 fw-bold" > Adarsha Lipi </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mx-4">
    <NavLink className="mx-4 text-decoration-none fs-4 text-dark " to="/home">Home</NavLink>
    <NavLink className="mx-4 text-decoration-none fs-4 text-dark " to="/service">Service</NavLink>
    <NavLink className="mx-4 text-decoration-none fs-4 text-dark " to="/teachers">Teachers</NavLink>
    <NavLink className="mx-4 text-decoration-none fs-4 text-dark " to="/about">About</NavLink>
    </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;