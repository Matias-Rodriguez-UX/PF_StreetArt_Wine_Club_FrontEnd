import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2';
import { changeOrder, getOrders } from "../../../actions/ordersAction";
import { getUserAddresses } from "../../../actions/userActions";

export default function FormOrder({ selectedData, setShowModalEdit }) {
    const dispatch = useDispatch()
    const [input, setInput] = useState(selectedData)
    const userAddresses = useSelector((state) => state.users.userAddresses)
    const [showModalUpdate, setShowModalUpdate] = useState(false);
    const [address, setAddress] = useState([]);
    const statusDis = ['cart', 'processing payment', 'processing shipping', 'shipped', 'delivered', 'cancelled']

    useEffect(() => {
        dispatch(getUserAddresses(selectedData.userEmail))
    }, [dispatch, input, selectedData, address])


    function handleSelectOption(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setInput({
            ...input,
            addressId: parseInt(input.addressId)
        })
        setShowModalUpdate(true)
    }

    function handleConfirmUpdate() {
        dispatch(changeOrder(input.id, input.addressId, { status: input.status }));
        addAlertModified(input.id)
        setShowModalEdit(false)
        setTimeout(function () {
            dispatch(getOrders());
        }, 1000);
    }

    const addAlertModified = (id) => {
        Swal.fire({
            title: "THE ORDER WAS CHANGE",
            text: `You chaged the oder ${id}`,
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
                <Form.Group className="mb-2">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="text" name="email" value={input.id} disabled />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Customer Email</Form.Label>
                    <Form.Control type="text" name="userEmail" value={input.userEmail} disabled />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="text" name="date" value={input.date} disabled />
                </Form.Group>
                <Form.Group className="mb-2">
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
                        <Form.Control
                            placeholder="00"
                            aria-label="price"
                            type="number"
                            name="totalPrice" value={input.totalPrice} disabled />
                        <InputGroup.Text>.00</InputGroup.Text>
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-2" >
                    <Form.Label>status</Form.Label>
                    <Form.Control
                        name="status"
                        as="select"
                        value={input.status}
                        onChange={e => handleSelectOption(e)}>
                        {statusDis.map((el, index) => <option key={index} value={el}>{el}</option>)}
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Addresses</Form.Label>
                    <InputGroup>
                        <Form.Control
                            name="addressId"
                            as="select"
                            onChange={(e) => { handleSelectOption(e) }}>
                            <option value="">Select the Address</option>
                            {typeof userAddresses === "string" ? <option value={null}>{userAddresses}</option> : userAddresses?.map((el, index) => <option key={index} value={el.id}>{el.reference}: {el.address}</option>)}
                        </Form.Control>
                    </InputGroup>
                </Form.Group>
                <div className="d-flex flex-row-reverse justify-content-evenly mt-3">
                    <Button variant="warning" type="submit" onClick={e => handleSubmit(e)} style={{ width: '60%' }}>
                        Change status
                    </Button>
                </div>
            </Form>
            <Modal show={showModalUpdate} onHide={() => setShowModalUpdate(false)} className="bg-dark">
                <Modal.Header closeButton>
                    <Modal.Title>Update Order</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure about the changes you are going to make?</Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={() => setShowModalUpdate(false)}>
                        No
                    </Button>
                    <Button variant="outline-success" type="button" onClick={handleConfirmUpdate} >
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
