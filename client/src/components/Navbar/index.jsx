import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginButton from "../Login/LoginButton";
import LogOutButton from "../Login/LogOutButton";
import SignupButton from "../Login/Signup";
import { NavDropdown } from "react-bootstrap";



export default function NavigationBar() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 8px' }}>
      <Container>
        <Navbar.Brand href='/home'>StreetArt Wine Club</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              id="nav-dropdown"
              title="Home"
              menuVariant="light"
            >
              <NavDropdown.Item spy={true} smooth={true} offset={-50} duration={500} href="/home#main">Main</NavDropdown.Item>
              <NavDropdown.Item spy={true} smooth={true} offset={-50} duration={500} href="/home#about">About</NavDropdown.Item>
              <NavDropdown.Item spy={true} smooth={true} offset={-50} duration={500} href="/home#FAQs">FAQs</NavDropdown.Item>
              <NavDropdown.Item spy={true} smooth={true} offset={-50} duration={500} href="/home#contact">Contact</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/memberships">Memberships</Nav.Link>
          </Nav>
          <Nav>
            {isAuthenticated ?
              (
                <>
                  <Nav.Link href="/userprofile">{user.name}</Nav.Link>
                  <LogOutButton />
                </>
              ) :
              (
                <>
                  <LoginButton />
                  <SignupButton />
                </>
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}