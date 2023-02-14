import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Style.css'


export default function UserSideBar({userName, userPicture, setCurrentPage}) {
    return (

        <>
            <Nav variant="pills" defaultActiveKey={'/'} className="d-flex flex-column flex-shrink-0 p-3 text-white bg-lg" style={{ width: '280px', height: '100vh' }}>
                <a href="/home" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-black text-decoration-none">
                    {/* //Idea de que el nombre el usuario se vea al inicio de la sidebar */}
                    <span className="fs-4">StreetArt Wine Club</span>
                </a>
                <hr />
                <div className="">
                    <a href="#" className="d-flex align-items-center text-black text-decoration-none mb-3" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={userPicture} alt="user profile picture" width="32" height="32" className="rounded-circle me-2" />
                        <strong className="ms-3">{userName}</strong>
                    </a>
                    <ul className="list-unstyled" aria-labelledby="dropdownUser1">

                        <li className="mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-right me-3" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                            <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                        </svg><a className="text-black text-decoration-none m-4" href="#">Sign out</a></li>
                    </ul>
                </div>
                <hr/>
                <Nav.Item onClick={() => setCurrentPage('userinfo')}>
                    <Nav.Link title="Home" href="/">
                        <a href="#" className="nav-link text-black" aria-current="page" >
                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="20 " height="20" fill="currentColor" className="bi bi-house-door me-3" viewBox="0 0 16 16">
                                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"></path>
                            </svg>
                            My info
                        </a></Nav.Link>
                </Nav.Item>
                <Nav.Item onClick={() => setCurrentPage('changeinfo')}>
                    <Nav.Link title="Change my Info" href="#changeInfo">
                        <a href="#" className="nav-link text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-earmark-person me-3" viewBox="0 0 16 16">
                            <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                             <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z"/>
                        </svg>
                            Change my Info
                        </a>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item onClick={() => setCurrentPage('orders')}>
                    <Nav.Link title="Products" href="#products">
                        <a href="#" className="nav-link text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-seam me-3" viewBox="0 0 16 16">
                                <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                            </svg>
                            Orders
                        </a>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item onClick={() => setCurrentPage('memberships')}>
                    <Nav.Link title="Orders" href="#memberships">
                        <a href="#" className="nav-link text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star me-3" viewBox="0 0 16 16">
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                        </svg>
                            Membership
                        </a>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item onClick={() => setCurrentPage('wishlist')}>
                    <Nav.Link title="Orders" href="#orders">
                        <a href="#" className="nav-link text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bookmark-heart-fill me-3" viewBox="0 0 16 16">
                            <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
                        </svg>
                            Favs
                        </a>
                    </Nav.Link>
                </Nav.Item>
                
            </Nav>
        </>
    )
}