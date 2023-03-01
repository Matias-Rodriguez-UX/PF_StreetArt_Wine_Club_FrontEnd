import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateSubscription } from "../../../actions/userActions";
import './unsubscribed.css'
import Modal from 'react-bootstrap/Modal';



export default function Unsubcribed() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevenir el comportamiento predeterminado del evento
    if (email !== '') { dispatch(updateSubscription({ email })) };
    alert('You have been unsubscribed from our newsletter!')

  }

  const handleOnChange = (e) => {
    setEmail(e.target.value)
  }


  return (

    <>
      <div className="main">
        <div className="style text-center">
          <h4><strong>We hate to see you go!</strong></h4>
          <h5>Keep your love for street art and fine wines alive by staying subscribed to our club.</h5>
          <Form onSubmit={handleSubmit} className="formStyle">
            <Form.Group>
              <div className="photo">
                <img src="https://community.akamai.steamstatic.com/economy/image/IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdB2ozio1RrlIWFK3UfvMYB8UsvjiMXojflsZalyxSh31CIyHz2GZ-KuFpPsrTzBGp8bPUU3blZzzBISncHUx8Iu8Pdz-M4Df04rzBQjjJQbkuRA5WLqIEpmIfNciBbkY11dQI8jzvwxQuSEd_c8YIYAG8jHccPbI3xTQeMcISxW39dJXd0Vs2aGPy2xc/360fx360f" alt="" />
              </div>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                value={email}
                onChange={(e) => handleOnChange(e)}
                required />
            </Form.Group>
            <div>
              <Button variant="warning" type="submit" className="btn btn-warning mt-4">Confirm</Button> {/* Agregar botón dentro del formulario */}
            </div>
          </Form>

        </div>
      </div>

    </>
  );

}

