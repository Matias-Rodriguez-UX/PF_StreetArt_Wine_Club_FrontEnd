import React, { useEffect, useState } from "react";
import { Badge, Button, Form, Image, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { } from "../../../actions";
import Swal from 'sweetalert2';
import { getMemberships, postMemberships } from "../../../actions/membershipsActions";

export default function FormMembershipPost({ setShowModalPost, setmembershipList, membershipList }) {
    const dispatch = useDispatch()

    const [postSuccess, setPostSuccess] = useState(false);
    const [visible, setVisible] = useState(false)
    const [newMembership, setnewMembership] = useState(membershipList)

    const [input, setInput] = useState({
        name: "",
        price: 0,
        discount: 0,
        description: "",
    });

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


    }, [input, newMembership, membershipList])

    function handleChanges(e) {
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleSelectOption(e, set, ele) {
        if (ele.indexOf(e) < 0) {
            set([...ele, e])
        }
    }


    const handleSubmit = async (e, name) => {
        e.preventDefault()
        setInput({
            name: input.name.toLowerCase(),
            price: parseInt(input.price, 10),
            discount: parseInt(input.quantity, 10),
            description: input.description
        })
        setnewMembership(input)
        handleSelectOption(newMembership, setmembershipList, membershipList)
        try {
            const response = dispatch(postMemberships(input));
            if (response === 200) {
                setPostSuccess(true);
            }
        } catch (error) {
            console.error(error);
        }
        setInput({
            name: "",
            price: 0,
            discount: 0,
        })
        addAlertCreate(name)
        setShowModalPost(false)
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
                    <Button variant="warning" type="button" disabled={activeButton} onClick={e => handleSubmit(e, input.name)} style={{ width: '60%' }} >
                        Create
                    </Button>
                </div>
            </Form>

        </>
    )
}
