import React from "react";
import SideBar from "../SideBar";


export default function HomeAdmin() {
    return (
        <>
            <div className="row">
                <SideBar className="col" />
                <div className="container col d-flex flex-column">
                    <h1 className="">Welcome to StreetArt wine club</h1>
                </div>
            </div>
        </>
    )
}