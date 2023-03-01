import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from 'react-redux';
import Accordion from 'react-bootstrap/Accordion';
import { Nav, Button, Card } from "react-bootstrap";
import './Style.css'
import { getUserInfo } from "../../../actions/userActions";
import UserInfo from "../UserInfo";


export default function UserSideBar({ userName, userPicture, setCurrentPage }) {
    const dispatch = useDispatch();
    const { logout, user, isAuthenticated: auth } = useAuth0();
    const userInfo = useSelector((state) => state.users.userInfo);

    // let userEmail = '';

    // if(auth){
    //     userEmail = user.email
    // };

    // useEffect(() => {
    //     dispatch(getUserInfo(userEmail))
    // }, [dispatch, user]);

    return (
        <>
            <Nav variant="pills" defaultActiveKey={'/'} className="d-flex flex-column flex-shrink-5 p-1 text-white bg-lg" style={{ width: '400px', height: 'auto' }}>
                <a href="/home" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-black text-decoration-none">
                    {/* //Idea de que el nombre el usuario se vea al inicio de la sidebar */}

                    {/* <span className="fs-4">StreetArt Wine Club</span> */}
                </a>
                <hr />
                <div className="mb-2 d-flex align-items-center justify-content-center mt-2">
                    <div>
                        <a href="#" className="d-flex align-items-center justify-content-center text-black text-decoration-none mb-3" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={userPicture} alt="user profile picture" width="50" height="50" className="rounded-circle" />
                        </a>

                    </div>
                    <div style={{ height: '50px' }} className="mb-4">
                        <a className="text-black text-decoration-none m-4" href="#" onClick={() => setCurrentPage('userinfo')}>
                            <div className="name">
                                <p className="ms-3">Hello,
                                    <strong>   {userName}</strong></p>
                            </div>

                        </a>
                    </div>

                </div>

                <Accordion className="mb-2">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='nav-link text-black'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person float right me-3" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                        </svg>Account settings
                        </Accordion.Header>
                        <Accordion.Body>
                            <Nav.Item onClick={() => setCurrentPage('userinfo')}>
                                <Nav.Link title="userinfo" href="/">
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
                                            <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z" />
                                        </svg>
                                        Change my Info
                                    </a>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item onClick={() => setCurrentPage('addresses')}>
                                <Nav.Link title="Manage Addresses" href="#addresses">
                                    <a href="#" className="nav-link text-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-geo-alt me-3" viewBox="0 0 16 16">
                                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg>
                                        Manage addresses
                                    </a>
                                </Nav.Link>
                            </Nav.Item>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Nav.Item onClick={() => setCurrentPage('orders')} className="mb-1">
                    <Nav.Link title="Orders" href="#orders">
                        <a href="#" className="nav-link text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-seam me-3" viewBox="0 0 16 16">
                                <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                            </svg>
                            My orders
                        </a>
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item onClick={() => setCurrentPage('memberships')} className="mb-1">
                    <Nav.Link title="Memberships" href="#memberships">
                        <a href="#" className="nav-link text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star me-3" viewBox="0 0 16 16">
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                            Membership
                        </a>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item onClick={() => setCurrentPage('wishlist')}>
                    <Nav.Link title="Favs" href="#favs">
                        <a href="#" className="nav-link text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart me-3" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                            </svg>
                            Favs
                        </a>
                    </Nav.Link>
                </Nav.Item>

            </Nav>
        </>
    )
}


