import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Col, Container, Row } from "react-bootstrap";
import './style.css'

export default function SuspendedUser() {
    const { logout } = useAuth0();
    useEffect(() => {
        setTimeout(function () {
            logout()
        }, 5000);
    }, [])

    return (
        <>
            <Container fluid>
                <Row>

                    <div className="col-md-8 text-center d-flex flex-column align-items-center justify-content-evenly">
                        <img className="mb-2" src="https://res.cloudinary.com/dom9fvn1q/image/upload/v1677697005/products/pkkcqvdzzhu5graylrzw.png" alt="" style={{ width: '50%' }} />
                        <h1>We sorry!</h1>
                        <div>
                            <h4>Your account has been suspended please contact us at the following email</h4>
                            <h5>help@streetartwineclub.com</h5>
                        </div>
                    </div>
                    <div className="col-md-4 bg-image-Suspended"></div>
                </Row>
            </Container>
        </>
    )
}