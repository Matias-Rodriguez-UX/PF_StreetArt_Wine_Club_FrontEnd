import React from "react";

export default function Main() {
    return (
        <>
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="https://i.ibb.co/Fbx63gf/white.jpg" alt="" className="rounded d-block mx-lg-auto img-fluid" width={'300px'} height={'450px'} />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="display-5 fw-bold lh-1 mb-3">StreetArt Wine Club</h2>
                        <p><i>“Wine is the only work of art that can be drunk.”</i> Luis Fernando Olaverri</p>
                        <p>We believe a wine club should offer wines that expand your knowledge and teach you about the world.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button type="button" className="btn btn-warning btn-lg px-4 me-md-2">Join Us!</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}