import React from "react";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

export default function Main() {
    return (
        <>
            <div className="container-fluid col-xxl-8 px-4 py-5 bg-image">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://res.cloudinary.com/dom9fvn1q/image/upload/e_brightness:-40/v1675866881/ImagesStreetArt/daligraffiti_iqwqxg.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <img className="mb-2" src="https://res.cloudinary.com/dom9fvn1q/image/upload/v1677696902/products/ccctwtw7ykd43qu9kx6l.png" alt="" style={{ width: '300px' }} />
                            <p><i>“Wine is the only work of art that can be drunk.”</i> Luis Fernando Olaverri</p>
                            <p>We believe a wine club should offer wines that expand your knowledge and teach you about the world.</p>
                            <Link to='/memberships'>
                                <button type="button" className="btn btn-warning btn-lg px-4 me-md-2">Join Us!</button>
                            </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://res.cloudinary.com/dom9fvn1q/image/upload/e_brightness:-40/v1675866881/ImagesStreetArt/vinos_bgx9kp.jpg"
                            alt="second slide"
                        />
                        <Carousel.Caption>
                            <h2>Our Shop</h2>
                            <p>StreetArt Wines buys all wines directly from selected wine estates, territories and private collectors. Our experience with wine testing and assessment and extensive knowledge of our field allow us to ...</p>
                            <Link to='/shop'>
                                <button type="button" className="btn btn-warning btn-lg px-4 me-md-2">Shop now</button>
                            </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://res.cloudinary.com/dom9fvn1q/image/upload/e_brightness:-40/v1675866881/ImagesStreetArt/copas_apaikc.jpg"
                            alt="second slide"
                        />
                        <Carousel.Caption>
                            <h2>Benefits</h2>
                            <p>We like to keep our clients updated on news and developments in the interesting world of fine wine and whiskey. Our daily quest for exclusive bottles takes us to unique cellars, tasting sessions ...</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}


