import React from "react";

export default function Main() {
    return (
        <>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-8">
                        <h2>StreetArt Wine Club</h2>
                        <div className="text">
                            <p><i>“Wine is the only work of art that can be drunk.”</i> Luis Fernando Olaverri</p>
                            <p>We believe a wine club should offer wines that expand your knowledge and teach you about the world.</p>
                        </div>
                        <button type="button" className="btn btn-warning">Join Us!</button>
                    </div>
                    <div className="col-4">
                        <img src="https://i.ibb.co/Fbx63gf/white.jpg" alt="" className="rounded" width={'200px'} height={'300px'} />
                    </div>
                </div>
            </div>
        </>
    )
}