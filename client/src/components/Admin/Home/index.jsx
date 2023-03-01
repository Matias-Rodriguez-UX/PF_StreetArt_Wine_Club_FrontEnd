import React from "react";
import { Link } from "react-router-dom";

import './Style.css'


export default function HomeAdmin({ setCurrentPage }) {

    return (
        <>
            <h1 className="text-center">Welcome to StreetArt wine club</h1>
            <div className="container Cards">

                <div onClick={() => setCurrentPage('products')} className="card text-center bg-dark text-white cardAdmin" style={{ width: "14rem", height: '14rem', textDecoration: 'none' }}>
                    <div className="card-body d-flex flex-column align-items-center justify-content-evenly">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-box-seam" viewBox="0 0 16 16">
                            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                        </svg>
                        <a href="#products" className="btn btn-warning btn-lg" onClick={() => setCurrentPage('products')} >Products</a>
                    </div>
                </div>


                <div onClick={() => setCurrentPage('orders')} className="card text-center bg-dark text-white cardAdmin" style={{ width: "14rem", height: '14rem' }}>
                    <div className="card-body d-flex flex-column align-items-center justify-content-evenly">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                        <a href="#orders" className="btn btn-warning btn-lg" onClick={() => setCurrentPage('orders')}>Orders</a>
                    </div>
                </div>


                <div onClick={() => setCurrentPage('memberships')} className="card text-center bg-dark text-white cardAdmin" style={{ width: "14rem", height: '14rem' }}>
                    <div className="card-body d-flex flex-column align-items-center justify-content-evenly">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-ui-checks-grid" viewBox="0 0 16 16">
                            <path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-3zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2z" />
                        </svg>
                        <a href="#memberships" className="btn btn-warning btn-lg" onClick={() => setCurrentPage('memberships')}>Memberships</a>
                    </div>
                </div>


                <div onClick={() => setCurrentPage('customers')} className="card text-center bg-dark text-white cardAdmin" style={{ width: "14rem", height: '14rem' }}>
                    <div className="card-body d-flex flex-column align-items-center justify-content-evenly">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                        </svg>
                        <a href="#customers" className="btn btn-warning btn-lg" onClick={() => setCurrentPage('customers')}>Customers</a>
                    </div>
                </div>

                <div onClick={() => setCurrentPage('newsletter')} className="card text-center bg-dark text-white cardAdmin" style={{ width: "14rem", height: '14rem' }}>
                    <div className="card-body d-flex flex-column align-items-center justify-content-evenly">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-envelope-paper" viewBox="0 0 16 16">
                            <path d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2H4Zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6v-2.55Zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5.417Zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267v2.55Zm13 .566v5.734l-4.778-2.867L15 7.383Zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083l6.965 4.18ZM1 13.116V7.383l4.778 2.867L1 13.117Z" />
                        </svg>
                        <a href="#newsletter" className="btn btn-warning btn-lg" onClick={() => setCurrentPage('newsletter')}>Newsletter</a>
                    </div>
                </div>



            </div>
        </>
    )
}