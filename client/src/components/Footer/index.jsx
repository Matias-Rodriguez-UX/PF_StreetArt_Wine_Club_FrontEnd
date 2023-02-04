import React from "react";
import "./footer.css";
import { Link } from "react-scroll";
import Nav from 'react-bootstrap/Nav';

export default function Footer() {
    return (
        <>
            <div className="container-fluid m-0 p-5 h-100 bg-dark text-white ">
                <div className="container d-flex flex-wrap gap-3 align-items-center justify-content-center">
                    <h1 className="fs-1 ms-5 me-5 text-center">StreetArt</h1>
                    <div className="d-flex m-1 gap-3 ms-5 me-5 align-items-center justify-content-center ">
                    <Nav className="me-auto">
                        <Nav.Link className='link-light' href='/home'>Home</Nav.Link>
                        <Link to="about" spy={true} smooth={true} offset={-50} duration={500}>
                            <Nav.Link className='link-light' href="#">About</Nav.Link>
                        </Link>
                        <Nav.Link className='link-light' href="/shop">Shop</Nav.Link>
                        <Nav.Link className='link-light' href="/memberships">Join</Nav.Link>
                        <Link to="FAQs" spy={true} smooth={true} offset={-50} duration={500}>
                            <Nav.Link className='link-light' href='#'>FAQs</Nav.Link>
                        </Link>
                        <Link to="contact" spy={true} smooth={true} offset={-50} duration={500}>
                            <Nav.Link className='link-light' href="#">Contact</Nav.Link>
                        </Link>
                    </Nav>
                    </div>
                    <div className="d-flex gap-2 ms-5 me-5 align-items-center justify-content-center ">
                        <a href="https://www.facebook.com"><img width={'25px'} src="https://cdn-icons-png.flaticon.com/512/4138/4138166.png" alt="img" /></a>
                        <a href="https://www.twitter.com"><img width={'25px'} src="https://cdn-icons-png.flaticon.com/512/4138/4138168.png" alt="img" /></a>
                        <a href="https://www.instagram.com"><img width={'25px'} src="https://cdn-icons-png.flaticon.com/512/3670/3670274.png" alt="img" /></a>
                        <a href="https://www.linkedin.com"><img width={'25px'} src="https://cdn-icons-png.flaticon.com/512/2956/2956131.png" alt="img" /></a>
                    </div>
                </div>
                <hr></hr>
                <div className="fs-6 d-flex align-items-center justify-content-center">
                    <p>Copyright © 2023 StreetArt | All Rights Reserved</p>
                </div>
            </div>
        </>
    )
}