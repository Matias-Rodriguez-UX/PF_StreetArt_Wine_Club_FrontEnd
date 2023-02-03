import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <div className="container-fluid m-0 p-5 h-100 bg-dark text-white ">
                <div className="d-flex flex-wrap gap-3 align-items-center justify-content-center">
                    <h1 className="fs-1 ms-5 me-5 text-center">StreetArt</h1>
                    <div className="d-flex m-1 gap-3 ms-5 me-5 align-items-center justify-content-center ">
                        <Link to="/home" className="text-reset text-decoration-none">Home</Link>
                        <Link to="/about" className="text-reset text-decoration-none">About</Link>
                        <Link to="/join" className="text-reset text-decoration-none">Join</Link>
                        <Link to="/shop" className="text-reset text-decoration-none">Shop</Link>
                        <a href="#" className="text-reset text-decoration-none">FAQs</a>
                        <Link to="/contact" className="text-reset text-decoration-none">Contact</Link>
                    </div>
                    <div className="d-flex gap-2 ms-5 me-5 align-items-center justify-content-center ">
                        <a href="https://www.facebook.com"><img width={'25px'} src="https://cdn-icons-png.flaticon.com/512/4138/4138166.png" alt="img"/></a>
                        <a href="https://www.twitter.com"><img width={'25px'} src="https://cdn-icons-png.flaticon.com/512/4138/4138168.png" alt="img"/></a>
                        <a href="https://www.instagram.com"><img width={'25px'} src="https://cdn-icons-png.flaticon.com/512/3670/3670274.png" alt="img"/></a>
                        <a href="https://www.linkedin.com"><img width={'25px'} src="https://cdn-icons-png.flaticon.com/512/2956/2956131.png" alt="img"/></a>
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