import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { postNewsletter } from "../../../actions/userActions";
import "./RegisterModal.css"

export default function RegisterModal() {
  const { isAuthenticated } = useAuth0();
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevenir el comportamiento predeterminado del evento
    if (email !== '') { dispatch(postNewsletter({ email })) };
    handleClose(); // cerrar el modal después de enviar el formulario
  }

  const handleOnChange = (e) => {
    setEmail(e.target.value)
  }


  return (
    <>
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
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="ControlInput1">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                value={email}
                onChange={(e) => handleOnChange(e)}
                required />
            </Form.Group>
            <div className="join-btn">
              <Button variant="warning" type="submit">Join!</Button> {/* Agregar botón dentro del formulario */}
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>

    </>
  );
}