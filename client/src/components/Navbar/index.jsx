import React, { useRef } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavigationBar({FAQsRef}) {

    const myRef = useRef(null);

    const handleClick = () => {
        myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start'})
    };

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href='/home'>StreetArt Wine Club</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/home'>Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/memberships">Join</Nav.Link>
            <Nav.Link href='#' onClick={ handleClick }>FAQs</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link eventKey={2} href="/signup">
              Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}