import React, { useRef } from "react";
import { BrowserRouter } from "react-router-dom";
// import { HashLink as Link } from 'react-router-hash-link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



export default function NavigationBar() {

    // const faqRef = useRef(null);

    // const handleClick = () => {
    //     faqRef.current.scrollIntoView({ behavior: 'smooth', block: 'start'})
    // };

    return (
        <BrowserRouter>
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
                <Nav.Link href='#'>FAQs</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link type="button" className="btn btn-warning btn-sm" href="/login">Login</Nav.Link>
            <Nav.Link eventKey={2} href="/signup" type="button" className="btn btn-warning btn-sm">
              Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </BrowserRouter>
    )
}