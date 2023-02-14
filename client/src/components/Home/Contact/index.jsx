import React from "react";
import { Form, Button } from 'react-bootstrap';


export default function Contact() {
    return (
        <section id='contact'>
            <div className="container mb-4">
                <h1>Contact</h1>
                <div className="row">
                    <div className="col-6 me-4">
                        <Form>
                            <Form.Group controlId='formBasicName'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group controlId='formBasicEmail'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control />
                            </Form.Group>
                            <Form.Group controlId='formBasicTextField'>
                                <Form.Label>Message</Form.Label>
                                <Form.Control style={{ "height": '8rem' }} />
                            </Form.Group>
                            <div className="mt-4 float-end">
                                <Button variant='warning' type='submit'>Submit
                                </Button>
                            </div>
                        </Form>
                    </div>
                    <div className="col-4" style={{ justifyContent: 'center' }}>
                        <img
                            width={'70%'}
                            src={"https://images.unsplash.com/photo-1619810490925-e27ba7623459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}
                            alt=""
                            className="rounded float-end" />
                    </div>
                </div>



            </div>
        </section>
    )
}
