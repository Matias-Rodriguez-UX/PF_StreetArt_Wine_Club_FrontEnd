import React, { useEffect, useState } from "react";
import { Badge, Button, Form, Image, InputGroup, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { } from "../../../actions";
import Swal from 'sweetalert2';
import { deleteMemberships, getMemberships, postMemberships, updateMemberships } from "../../../actions/membershipsActions";

export default function FormMembershipEdit({ selectedData, setShowModalEdit }) {
    const dispatch = useDispatch()
    const [postSuccess, setPostSuccess] = useState(false);
    const [visible, setVisible] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [showModalUpdate, setShowModalUpdate] = useState(false);

    const [input, setInput] = useState(selectedData);

    const [activeButton, setActiveButton] = useState(true)

    useEffect(() => {

        if (input.name === ""
            || input.price <= 0
            || input.discount <= 0
            || input.description === ""
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
        setInput({
            ...input,
            name: input.name.toLowerCase(),
            price: parseInt(input.price, 10),
            discount: parseInt(input.quantity, 10),
            description: input.description
        })
        try {
            const response = dispatch(updateMemberships(input.id, input));
            if (response === 200) {
                setPostSuccess(true);
            }
        } catch (error) {
            console.error(error);
        }
        addAlertCreate(name)
        setShowModalEdit(false)
        setTimeout(function () {
            dispatch(getMemberships());
        }, 1000);
    }

    function handleConfirmDelete(name) {
        dispatch(deleteMemberships(input.id))
        addAlertDelete(name);
        setShowModalEdit(false)
        setTimeout(function () {
            dispatch(getMemberships());
        }, 1000);
    }

    const addAlertCreate = (name) => {
        Swal.fire({
            title: "THE MEMBERSHIPS WAS CREATE",
            text: `You created the Membership ${name}`,
            icon: 'success',
            timer: '3000',
            timerProgressBar: true,
            allowOutsideClick: true,
            confirmButtonColor: '#ffc107'
        })
    }

    const addAlertDelete = (name) => {
        Swal.fire({
            title: "THE MEMBERSHIP WAS DELETE",
            text: `You delete the membership ${name}`,
            icon: 'error',
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
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={input.name} onChange={e => handleChanges(e)} required />
                </Form.Group>
                <Form.Group controlId="formPrice">
                    <Form.Label>Price</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
                        <Form.Control
                            placeholder="00"
                            aria-label="price"
                            type="number"
                            name="price" value={input.price} onChange={e => handleChanges(e)} required />
                        <InputGroup.Text>.00</InputGroup.Text>
                    </InputGroup>
                </Form.Group>
                <Form.Group controlId="formStock">
                    <Form.Label>Discount</Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control min={0} max={100} type="number" name="discount" value={input.discount} onChange={e => handleChanges(e)} required />
                        <InputGroup.Text>%</InputGroup.Text>
                    </InputGroup>
                </Form.Group>
                <Form.Group controlId="formDetails">
                    <Form.Label>Description</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>Membership Details</InputGroup.Text>
                        <Form.Control as="textarea" aria-label="With textarea" type="text" defaultValue={'vino'} name="description" value={input.description} onChange={e => handleChanges(e)} required />
                    </InputGroup>
                </Form.Group>
                <div className="d-flex flex-row-reverse justify-content-evenly mt-3">
                    <Button variant="warning" type="button" disabled={activeButton} onClick={e => setShowModalUpdate(true)} style={{ width: '40%' }} >
                        Save the Change
                    </Button>
                    <Button variant="outline-dark" type="button" disabled={activeButton} onClick={e => setShowModal(true)} style={{ width: '40%' }} >
                        Delete
                    </Button>
                </div>
            </Form>
            <Modal show={showModalUpdate} onHide={() => setShowModalUpdate(false)} className="bg-dark">
                <Modal.Header closeButton>
                    <Modal.Title>Update Membership</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure about the changes you are going to make?</Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={() => setShowModalUpdate(false)}>
                        No
                    </Button>
                    <Button variant="outline-success" type="button" onClick={(e) => handleSubmit(e, input.name)} >
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showModal} onHide={() => setShowModal(false)} className="bg-dark">
                <Modal.Header closeButton>
                    <Modal.Title>Delete Memberships</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete {input.name} membership?</Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={() => setShowModal(false)}>
                        No
                    </Button>
                    <Button variant="outline-danger" type="button" onClick={() => handleConfirmDelete(input.name)} >
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}