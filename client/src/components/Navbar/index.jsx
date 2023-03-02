import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginButton from "../Login/LoginButton";
import LogOutButton from "../Login/LogOutButton";
import SignupButton from "../Login/Signup";
import { NavDropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux"
import "./navbar.css"
import { getUserCart } from "../../actions/userActions";

export default function NavigationBar() {
  const { isAuthenticated } = useAuth0();
  let location = useLocation();
  const userInfo = useSelector((state) => state.users.userInfo);
  const cart = useSelector((state) => state.products.cart);

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 8px' }}>
      <Container>
        <Link to='/home' className="me-4"><img src="https://res.cloudinary.com/dom9fvn1q/image/upload/v1677697005/products/pkkcqvdzzhu5graylrzw.png" alt="logo" style={{ width: '110px' }} /> </Link>
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
            <Link to="/memberships" className='text-decoration-none text-reset mt-2 mb-2' >Memberships</Link>
          </Nav>
          <Nav>
            {location.pathname !== '/payment' ? <Link to="/cart" className="d-flex text-reset align-items-center justify-content-center m-0 p-0 text-decoration-none border border-0 bg-transparent me-5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
              {cart.length > 0 &&
                <div className="quan-cart-i">
                  <p style={{ fontSize: "10px" }} >{cart.length}</p>
                </div>}
            </Link> : undefined
            }
            {isAuthenticated ?
              (
                <>
                  <Link to="/userprofile" className="d-flex text-reset align-items-center justify-content-center m-0 p-0 text-decoration-none border border-0 bg-transparent me-5" >Hello, {userInfo.fullname}</Link>
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