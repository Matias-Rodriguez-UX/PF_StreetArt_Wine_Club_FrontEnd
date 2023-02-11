import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginButton from "../Login/LoginButton";
import LogOutButton from "../Login/LogOutButton";
import SignupButton from "../Login/Signup";
import { NavDropdown } from "react-bootstrap";



export default function NavigationBar() {
  const { user, isAuthenticated } = useAuth0();

  let location = useLocation();

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 8px' }}>
      <Container>
        <Link to='/home' className="text-decoration-none text-reset fs-5">StreetArt Wine Club</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto gap-3 align-items-center ">
            {location.pathname === '/home' 
              ? <NavDropdown
                id="nav-dropdown"
                title="Home"
                menuVariant="light"
                className="ms-2"
              >
                <NavDropdown.Item spy={true} smooth={true} offset={-50} duration={500} href="/home#main">Main</NavDropdown.Item>
                <NavDropdown.Item spy={true} smooth={true} offset={-50} duration={500} href="/home#about">About</NavDropdown.Item>
                <NavDropdown.Item spy={true} smooth={true} offset={-50} duration={500} href="/home#FAQs">FAQs</NavDropdown.Item>
                <NavDropdown.Item spy={true} smooth={true} offset={-50} duration={500} href="/home#contact">Contact</NavDropdown.Item>
              </NavDropdown> 
              : <Link to='/home' className='text-decoration-none text-reset ms-3 mt-1 mb-1'>Home</Link>}
            <Link to="/shop" className='text-decoration-none text-reset mt-2 mb-2'>Shop</Link>
            <Link to="/memberships"  className='text-decoration-none text-reset mt-2 mb-2' >Memberships</Link>
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