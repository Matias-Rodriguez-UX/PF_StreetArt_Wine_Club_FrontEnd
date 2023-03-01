import React from "react";

export default function SpinnerCard() {
    return (
        <div className="spinner-grow text-secondary" style={{ width: '3rem', height: "3rem" }} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}