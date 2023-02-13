import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

export default function RegisterModal() {
    const { isAuthenticated } = useAuth0();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(true);

    return (<>
        <Modal
            show={show} onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Join our newsletter
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p><strong>Get weekly access to our best deals, tips and tricks</strong></p>
                <Form>
                    <Form.Group className="mb-3" controlId="ControlInput1">
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            autoFocus
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="warning" onClick={handleClose}>Join!</Button>
            </Modal.Footer>
        </Modal>
    </>
    );
}