import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Banner from '../Home/Banner';
import Navbar from '../Navbar'
import Footer from '../Footer';
import './Memberships.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../Login/LoginButton';
import { Loader } from '../Loader';
import { getMemberships } from '../../actions/membershipsActions';
import { getUserInfo } from '../../actions/userActions';


export default function Memberships() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { user, isAuthenticated, isLoading } = useAuth0();
    const allMemberships = useSelector((state) => state.memberships.allMemberships)
    const currentUser = useSelector((state) => state.users.userInfo)

    useEffect(() => {
        dispatch(getMemberships())
        if (!currentUser.id && isAuthenticated) {
            dispatch(getUserInfo(user.email))
        }
    }, [dispatch, currentUser.id])


    function hasMembership(name) {
        let cont = 0
        if (currentUser.id) {
            for (const membership of currentUser.memberships) {
                if (membership.name === name) {
                    cont++
                }
            }
        }
        return cont === 0 ? false : true
    }

    function handleClick(name) {
        for (const membership of allMemberships) {
            if (membership.name === name) {
                localStorage.setItem('membership', JSON.stringify(membership))
            }
        }
    }


    return (
        <>{isLoading ? <Loader /> :
            <div>
                <Banner />
                <Navbar />
                <div className="col m-0 p-0 d-flex row gap-3 align-items-center justify-content-center">
                    <h5 className='fs-6 text-center mt-5'>MEMBERSHIPS</h5>
                    <h1 className='fs-1 text-center'>Affordable pricing plans</h1>
                    <p className='w-75 p-0 m-0 fs-6 text-center'>Explore the world of wine with the StreetArt Wine Club! We've curated a delicious selection that will get shipped to your door monthly.</p>
                    <p className='w-75 p-0 m-0 fs-6 text-center'>Packages are available in 2, 4 and 6 pack 750ml mixed bottles.</p>
                </div>
                <div className='row m-0 mt-5 mb-5 p-0 gap-5 align-items-center justify-content-center'>
                    <Card className='card-white' style={{ width: '22rem' }} >
                        <Card.Body>
                            <Card.Title className='mt-3 mb-3'>Stencil</Card.Title>
                            <div className='d-flex h-auto gap-1 mb-3'>
                                <Card.Text className='d-flex fs-1 m-0 align-items-end'>$3000</Card.Text>
                                <Card.Text className='d-flex m-0 pt-3 align-items-center' >/month</Card.Text>
                            </div>
                            <Card.Text className='d-flex fs-6 m-0 mb-4 text-center'>2 Premium Bottles of mixed wines</Card.Text>
                            <hr></hr>
                            <div className='d-flex col gap-3 mb-2 align-items-center'>
                                <img src='https://cdn-icons-png.flaticon.com/512/8335/8335942.png' width={'26px'} height={'26px'} alt='checked-i' />
                                <Card.Text className='d-flex fs-6 m-0'>Free Shipments</Card.Text>
                            </div>
                            <div className='d-flex col mb-2 gap-3 align-items-center'>
                                <img src='https://cdn-icons-png.flaticon.com/512/8335/8335942.png' width={'26px'} height={'26px'} alt='checked-i' />
                                <Card.Text className='d-flex fs-6 m-0'>Up to 800 options </Card.Text>
                            </div>
                            <div className='d-flex col gap-3 mb-2 align-items-center'>
                                <img src='https://cdn-icons-png.flaticon.com/512/8335/8335942.png' width={'26px'} height={'26px'} alt='checked-i' />
                                <Card.Text className='d-flex fs-6 m-0'>White, rosé, sparkling and red</Card.Text>
                            </div>
                            <div className='d-flex col gap-3 mb-2 align-items-center'>
                                <img src='https://cdn-icons-png.flaticon.com/512/8335/8335942.png' width={'26px'} height={'26px'} alt='checked-i' />
                                <Card.Text className='d-flex fs-6 m-0'>10% OFF in our shop</Card.Text>
                            </div>
                            <div className='d-flex col gap-3 mb-5 align-items-center'>
                                <img src='https://cdn-icons-png.flaticon.com/512/8335/8335942.png' width={'28px'} height={'28px'} alt='checked-i' />
                                <Card.Text className='d-flex fs-6 m-0'>Technical sheets</Card.Text>
                            </div>
                            <div className='d-flex align-items-center justify-content-center'>
                                {isAuthenticated && hasMembership('stencil') ? <h6>You are already subscribed</h6> :
                                    <div>
                                        {isAuthenticated ? <Link to="/paymentMemberships">
                                            <Button variant="light" size='md' onClick={() => handleClick('stencil')}>Get Started</Button>
                                        </Link> :
                                            <div>
                                                <h6>You must login first</h6>
                                                <LoginButton></LoginButton>
                                            </div>}
                                    </div>
                                }
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className='card-yellow bg-warning' style={{ width: '22rem' }}>
                        <Card.Body>
                            <div className='d-flex col align-items-center justify-content-between'>
                                <Card.Title className='mt-3 mb-3'>Graffiti</Card.Title>
                                <Card.Text className='bg-light rounded-pill pe-3 ps-3 pt-1 pb-1 font-weight-bolder '>Popular</Card.Text>
                            </div>
                            <div className='d-flex h-auto gap-1 mb-3' >
                                <Card.Text className='d-flex fs-1 m-0 align-items-end'>$5900</Card.Text>
                                <Card.Text className='d-flex m-0 pt-3 align-items-center' >/month</Card.Text>
                            </div>
                            <Card.Text className='d-flex fs-6 m-0 mb-4 text-center'>4 Premium Bottles of mixed wines</Card.Text>
                            <hr></hr>
                            <div className='d-flex col gap-3 mb-2 align-items-center'>
                                <img src='https://cdn-icons-png.flaticon.com/512/8335/8335942.png' width={'26px'} height={'26px'} alt='checked-i' />
                                <Card.Text className='d-flex fs-6 m-0'>Free Shipments</Card.Text>
                            </div>
                            <div className='d-flex col mb-2 gap-3 align-items-center'>
                                <img src='https://cdn-icons-png.flaticon.com/512/8335/8335942.png' width={'26px'} height={'26px'} alt='checked-i' />
                                <Card.Text className='d-flex fs-6 m-0'>Up to 1500 options </Card.Text>
                            </div>
                            <div className='d-flex col gap-3 mb-2 align-items-center'>
                                <img src='https://cdn-icons-png.flaticon.com/512/8335/8335942.png' width={'26px'} height={'26px'} alt='checked-i' />
                                <Card.Text className='d-flex fs-6 m-0'>White, rosé, sparkling and red</Card.Text>
                            </div>
                            <div className='d-flex col gap-3 mb-2 align-items-center'>
                                <img src='https://cdn-icons-png.flaticon.com/512/8335/8335942.png' width={'26px'} height={'26px'} alt='checked-i' />
                                <Card.Text className='d-flex fs-6 m-0'>20% OFF in our shop</Card.Text>
                            </div>
                            <div className='d-flex col gap-3 mb-5 align-items-center'>
                                <img src='https://cdn-icons-png.flaticon.com/512/8335/8335942.png' width={'28px'} height={'28px'} alt='checked-i' />
                                <Card.Text className='d-flex fs-6 m-0'>Technical sheets</Card.Text>
                            </div>
                            <div className='d-flex align-items-center justify-content-center'>
                                {isAuthenticated && hasMembership('graffiti') ? <h6>You are already subscribed</h6> :
                                    <div>
                                        {isAuthenticated ? <Link to="/paymentMemberships">
                                            <Button variant="light" size='md' onClick={() => handleClick('graffiti')}>Get Started</Button>
                                        </Link> :
                                            <div>
                                                <h6>You must login first</h6>
                                                <LoginButton></LoginButton>
                                            </div>}
                                    </div>
                                }
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className='card-white' style={{ width: '22rem' }}>
                        <Card.Body>
                            <Card.Title className='mt-3 mb-3'>Mural</Card.Title>
                            <div className='d-flex h-auto gap-1 mb-3'>
                                <Card.Text className='d-flex fs-1 m-0 align-items-end'>$8000</Card.Text>
                                <Card.Text className='d-flex m-0 pt-3 align-items-center' >/month</Card.Text>
                            </div>
                            <Card.Text className='d-flex fs-6 m-0 mb-4 text-center'>6 Premium Bottles of mixed wines</Card.Text>
                            <hr></hr>
                            <div className='d-flex col gap-3 mb-2 align-items-center'>
                                <img src='https://cdn-icons-png.flaticon.com/512/8335/8335942.png' width={'26px'} height={'26px'} alt='checked-i' />
                                <Card.Text className='d-flex fs-6 m-0'>Free Shipments</Card.Text>
                            </div>
                            <div className='d-flex col mb-2 gap-3 align-items-center'>
                                <img src='https://cdn-icons-png.flaticon.com/512/8335/8335942.png' width={'26px'} height={'26px'} alt='checked-i' />
                                <Card.Text className='d-flex fs-6 m-0'>Up to 2000 options </Card.Text>
                            </div>
                            <div className='d-flex col gap-3 mb-2 align-items-center'>
                                <img src='https://cdn-icons-png.flaticon.com/512/8335/8335942.png' width={'26px'} height={'26px'} alt='checked-i' />
                                <Card.Text className='d-flex fs-6 m-0'>White, rosé, sparkling and red</Card.Text>
                            </div>
                            <div className='d-flex col gap-3 mb-2 align-items-center'>
                                <img src='https://cdn-icons-png.flaticon.com/512/8335/8335942.png' width={'26px'} height={'26px'} alt='checked-i' />
                                <Card.Text className='d-flex fs-6 m-0'>30% OFF in our shop</Card.Text>
                            </div>
                            <div className='d-flex col gap-3 mb-5 align-items-center'>
                                <img src='https://cdn-icons-png.flaticon.com/512/8335/8335942.png' width={'28px'} height={'28px'} alt='checked-i' />
                                <Card.Text className='d-flex fs-6 m-0'>Technical sheets and food pairings</Card.Text>
                            </div>
                            <div className='d-flex align-items-center justify-content-center'>
                                {isAuthenticated && hasMembership('mural') ? <h6>You are already subscribed</h6> :
                                    <div>
                                        {isAuthenticated ? <Link to="/paymentMemberships">
                                            <Button variant="light" size='md' onClick={() => handleClick('mural')}>Get Started</Button>
                                        </Link> :
                                            <div>
                                                <h6>You must login first</h6>
                                                <LoginButton></LoginButton>
                                            </div>}
                                    </div>
                                }
                            </div>
                        </Card.Body>
                    </Card>

                </div>
                <Footer />
            </div>}

        </>
    )
}