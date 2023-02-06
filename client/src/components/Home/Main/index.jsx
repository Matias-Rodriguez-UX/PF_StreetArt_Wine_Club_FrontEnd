import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
    return (
        <>
            <div className="container-fluid col-xxl-8 px-4 py-5 bg-image">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-2 ">
                    <div className="col-10 col-sm-8 col-lg-6" style={{
                        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1487452066049-a710f7296400?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80)', backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover', borderRadius: '2rem',
                        width: '40%', height: '40%'
                    }}>
                        <img src="https://res.cloudinary.com/dom9fvn1q/image/upload/v1675524349/ImagesStreetArt/logo_kardon.png" alt="" className="rounded d-block mx-lg-auto img-fluid" width={'90%'} height={'90%'} />
                    </div>
                    <div className="col-lg-6 me-5">
                        <h2 className="display-5 fw-bold lh-1 mb-3">StreetArt Wine Club</h2>
                        <p><i>“Wine is the only work of art that can be drunk.”</i> Luis Fernando Olaverri</p>
                        <p>We believe a wine club should offer wines that expand your knowledge and teach you about the world.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                             <Link to='/memberships'>
                                <button type="button" className="btn btn-warning btn-lg px-4 me-md-2">Join Us!</button>
                             </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
