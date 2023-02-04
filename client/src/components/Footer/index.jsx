import React from "react";
import "./footer.css";

export default function Footer() {
    return (
        <>
            <div className="container-fluid m-0 p-5 h-100 bg-dark text-white ">
                <div className="container d-flex flex-wrap gap-3 align-items-center justify-content-center">
                    <h1 className="fs-1 ms-5 me-5 text-center w-25">StreetArt</h1>
                    <div className="d-flex m-1 gap-3 ms-5 me-5 align-items-center justify-content-center ">
                        <a className='text-reset text-decoration-none' href="/home">Home</a>
                        <a className='text-reset text-decoration-none' href="/home#about">About</a>
                        <a className='text-reset text-decoration-none' href="/shop">Shop</a>
                        <a className='text-reset text-decoration-none' href="/join">Join</a>
                        <a className='text-reset text-decoration-none' href="/home#FAQs">FAQs</a>
                        <a className='text-reset text-decoration-none' href="/home#contact">Contact</a>
                    </div>
                    <div className="w-25 d-flex gap-2 ms-5 me-5 align-items-center justify-content-center ">
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