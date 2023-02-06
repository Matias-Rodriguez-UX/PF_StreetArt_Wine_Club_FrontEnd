import React from "react";
import { Link } from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginButton from "../Login/LoginButton";
import LogOutButton from "../Login/LogOutButton";



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
            <LoginButton/>
            <LogOutButton/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}