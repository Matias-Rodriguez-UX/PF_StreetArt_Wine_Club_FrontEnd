import React, { useEffect, useState } from "react";
import { Badge, Button, Form, Image, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { } from "../../../actions";
import Swal from 'sweetalert2';
import { editUserInfo, getAllUsers } from "../../../actions/userActions";

export default function FormUser({ selectedData, setShowModalEdit }) {
    const dispatch = useDispatch()

    const [postSuccess, setPostSuccess] = useState(false);
    const [input, setInput] = useState(selectedData)

    const [activeButton, setActiveButton] = useState(true)

    useEffect(() => {

    }, [input])

    const usersStatus = ['active', 'inactive', 'suspended']

    function handleSelectOption(e) {
        setInput({
            ...input,
            status: e.target.value
        })
    }
    console.log(input)
    const handleSubmit = async (e, name) => {
        e.preventDefault()
        try {
            const response = dispatch(editUserInfo(input));
            if (response === 200) {
                setPostSuccess(true);
            }
        } catch (error) {
            console.error(error);
        }
        addAlertModified(name)
        setShowModalEdit(false)
        setTimeout(function () {
            dispatch(getAllUsers());
        }, 1000);
    }

    const addAlertModified = (name) => {
        Swal.fire({
            title: "THE USER WAS CHANGE",
            text: `You chaged the user ${name}`,
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
                <Form.Group controlId="formName" className="d-flex ">
                    <div style={{ width: '100px', height: '100px' }}>
                        <Image rounded src={input.avatar} alt="avatar" fluid />
                    </div>
                    <div>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={input.fullname} disabled />
                    </div>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" name="email" value={input.email} disabled />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Role</Form.Label>
                    <Form.Control type="text" name="role" value={input.role} disabled />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Profile</Form.Label>
                    <Form.Control as="textarea" aria-label="With textarea" type="text" name="profile" value={input.profile} disabled />
                </Form.Group>
                <Form.Group>
                    <Form.Label>DNI</Form.Label>
                    <Form.Control type="text" name="dni" value={input.dni} disabled />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Memberships</Form.Label>
                    {Array.isArray(input.memberships) ? input.memberships.map((membership, index) => <Form.Control key={index} type="text" name={membership} value={membership} disabled />) :
                        <Form.Control min={0} max={1000} type="text" name="dni" value={input.memberships} disabled />}
                </Form.Group>
                <Form.Label>Status</Form.Label>
                <Form.Control
                    name="status"
                    as="select"
                    value={input.status}
                    onChange={e => handleSelectOption(e)}>
                    {usersStatus.map((el, index) => <option key={index} value={el}>{el}</option>)}
                </Form.Control>
                <div className="d-flex flex-row-reverse justify-content-evenly mt-3">
                    <Button variant="warning" type="submit" onClick={e => handleSubmit(e, input.name)} style={{ width: '60%' }}>
                        Change status
                    </Button>
                </div>
            </Form>

        </>
    )
}