import React from "react";
import { Link } from "react-router-dom";
import "./banner.css";

export default function Banner() {
    return (
        <>
            <div className="container-banner">
                <div className="d-flex flex-wrap gap-3 align-items-center justify-content-center">
                    <p className="fs-6 m-0 px-2 py-2 text-white" >FREE SHIPPING ON ALL MEMBERSHIPS</p>
                    <Link to='/memberships'>
                        <button type="button" className="btn btn-warning btn-sm" >Join Now!</button>
                    </Link>
                </div>
                
            </div>
        </>
    )
}