import React from "react";
import { Link } from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



export default function NavigationBar() {

  // const faqRef = useRef(null);

  // const handleClick = () => {
  //     faqRef.current.scrollIntoView({ behavior: 'smooth', block: 'start'})
  // };

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px' }}>
      <Container>
        <Navbar.Brand href='/home'>StreetArt Wine Club</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/home'>Home</Nav.Link>
            <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
              <Nav.Link href="#">About</Nav.Link>
            </Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/memberships">Join</Nav.Link>
            <Link to="FAQs" spy={true} smooth={true} offset={-50} duration={500}>
              <Nav.Link href='#'>FAQs</Nav.Link>
            </Link>
            <Link to="contact" spy={true} smooth={true} offset={-50} duration={500}>
              <Nav.Link href="#">Contact</Nav.Link>
            </Link>
          </Nav>
          <Nav>
            <Nav.Link type="button" className="btn btn-warning btn-sm me-4 ps-3 pe-3" href="/login"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-door-open-fill me-2" viewBox="0 0 16 16">
              <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"></path>
            </svg>Login</Nav.Link>
            <Nav.Link eventKey={2} href="/signup" type="button" className="btn btn-outline-dark btn-sm ms-4 ps-3 pe-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle me-2" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"></path>
            </svg>
              Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}