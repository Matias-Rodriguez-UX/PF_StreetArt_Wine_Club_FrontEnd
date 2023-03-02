import React, { useEffect, useState } from "react";
import { Badge, Button, Form, Image, InputGroup, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { } from "../../../actions";
import Swal from 'sweetalert2';
import { deleteMemberships, getMemberships, postMemberships, updateMemberships } from "../../../actions/membershipsActions";
import validateEmail from "../../../Helpers/emailValidator";
import { getNewsletter, updateSubscription } from "../../../actions/userActions";

export default function FormNewsEdit({ selectedData, setShowModalEdit }) {
    const dispatch = useDispatch()
    const [postSuccess, setPostSuccess] = useState(false);

    const [showModalUpdate, setShowModalUpdate] = useState(false);

    const [input, setInput] = useState(selectedData);

    const [activeButton, setActiveButton] = useState(true)

    // content : null
    // createdAt : "2023-02-27T21:30:26.061Z"
    // discount : null
    // email : "matias@gmail.com"
    // id :  2
    // productId : null
    // status : "sent"
    // title : null
    // updatedAt : "2023-02-27T21:30:26.073Z"
    // userEmail : null
    // userStatus : "subscribed"

    useEffect(() => {

        if (input.email === "" || !validateEmail(input.email)
            || input.status === ""
            || input.userStatus === ""
        ) {
            setActiveButton(true)
        } else {
            setActiveButton(false)
        }


    }, [input])

    function handleChanges(e) {
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = async (e, name) => {
        e.preventDefault()
        try {
            const response = dispatch(updateSubscription({ email: input.email }));
            if (response === 200) {
                setPostSuccess(true);
            }
        } catch (error) {
            console.error(error);
        }
        addAlertCreate(name)
        setShowModalEdit(false)
        setTimeout(function () {
            dispatch(getNewsletter());
        }, 1000);
    }

    const addAlertCreate = (name) => {
        Swal.fire({
            title: "THE MAIL WAS UPDATE",
            text: `You was update the mail: ${name}`,
            icon: 'success',
            timer: '3000',
            timerProgressBar: true,
            allowOutsideClick: true,
            confirmButtonColor: '#ffc107'
        })
    }


    return (
        <>
            <Form>
                <Form.Group controlId="formName">
                    <Form.Label>e-mail</Form.Label>
                    <Form.Control type="email" name="email" value={input.email} onChange={e => handleChanges(e)} required />
                </Form.Group>
                <div className="d-flex flex-row-reverse justify-content-evenly mt-3">
                    <Button variant="warning" type="button" disabled={activeButton} onClick={e => setShowModalUpdate(true)} style={{ width: '40%' }} >
                        Save the Change
                    </Button>
                </div>
            </Form>
            <Modal show={showModalUpdate} onHide={() => setShowModalUpdate(false)} className="bg-dark">
                <Modal.Header closeButton>
                    <Modal.Title>Update mail</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure about the changes you are going to make?</Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={() => setShowModalUpdate(false)}>
                        No
                    </Button>
                    <Button variant="outline-success" type="button" onClick={(e) => handleSubmit(e, input.email)} >
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}