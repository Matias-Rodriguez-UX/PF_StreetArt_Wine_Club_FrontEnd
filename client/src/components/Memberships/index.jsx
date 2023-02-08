import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Banner from '../Home/Banner';
import Navbar from '../Navbar'
import Footer from '../Footer';
import './Memberships.css'


export default function Memberships() {
    return (
        <>
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
                    <Card className='card-white' style={{ width: '22rem' }}>
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
                                <Card.Text className='d-flex fs-6 m-0'>Shipments 50% OFF</Card.Text>
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
                                <Button variant="warning" size='md'>Get Started</Button>
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
                                <Card.Text className='d-flex fs-6 m-0'>Shipments Free</Card.Text>
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
                                <Button variant="light" size='md'>Get Started</Button>
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
                                <Card.Text className='d-flex fs-6 m-0'>Shipments 50% OFF</Card.Text>
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
                                <Button variant="warning" size='md'>Get Started</Button>
                            </div>
                        </Card.Body>
                    </Card>

                </div>
                <Footer />
            </div>
        </>
    )
}