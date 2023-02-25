import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateSubscription } from "../../../actions/userActions";
import './unsubscribed.css'
import Modal from 'react-bootstrap/Modal';



export default function Unsubcribed(){
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // prevenir el comportamiento predeterminado del evento
        if(email!=='') {dispatch(updateSubscription({ email }))};
        alert('You have been unsubscribed from our newsletter!')
    
      }
    
      const handleOnChange = (e) => {
        setEmail(e.target.value)
      }
    
    
    return (

        <> 
        <div className="main">
            <div className="style">
            <h4>Unsubscribe</h4>
              <Form onSubmit={handleSubmit} className= "formStyle">
                <Form.Group>
                  <Form.Control 
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                    value={email}
                    onChange={(e) => handleOnChange(e)}
                    required />
                </Form.Group>
                <div>
                <Button variant="warning" type="submit" className="btn">Confirm</Button> {/* Agregar botón dentro del formulario */}
                </div>
              </Form>
              
            </div>
            </div>
        
        </>
      );

}

