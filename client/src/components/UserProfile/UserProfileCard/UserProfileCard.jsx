import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function UserProfileCard({ userName, userPicture, userEmail }) {

    return (
        <>
        <div class="col-xs-12 col-sm-9" display='flex'>
            <h1 className="text-center">My info</h1>
            <div className="container Form">
                <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name </Form.Label>
                    <Form.Control type="text" placeholder="Enter your name"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label>Lastname </Form.Label>
                    <Form.Control type="text" placeholder="Enter your lastname"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicId">
                    <Form.Label>Id number </Form.Label>
                    <Form.Control type="text" placeholder="Enter your id"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                     We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="text" placeholder="Enter your phone number"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter your address"/>
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicCP">
                    <Form.Label>CP</Form.Label>
                    <Form.Control type="text" placeholder="Enter your CP"/>
                </Form.Group>

                <Button className="btn btn-warning btn-sm" variant="primary" type="submit">
                    Save Profile
                </Button>
                </Form>
            </div>
            </div>
        </>
    )
}