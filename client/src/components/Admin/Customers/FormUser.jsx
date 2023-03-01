import React, { useEffect, useState } from "react";
import { Badge, Button, Form, Image, InputGroup, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2';
import { assignMemberships, editUserInfo, getAllUsers } from "../../../actions/userActions";
import { getMemberships } from "../../../actions/membershipsActions";

export default function FormUser({ selectedData, setShowModalEdit }) {
    const dispatch = useDispatch()
    const roles = ['common', 'member', 'admin', 'superAdmin']
    const userInfo = useSelector((state) => state.users.userInfo);
    const [input, setInput] = useState(selectedData)
    const allMemberships = useSelector((state) => state.memberships.allMemberships)
    const [membershipList, setMembershipList] = useState();
    const [memberships, setMemberships] = useState(selectedData.memberships?.map(el => el.name) || []);
    const [showModalUpdate, setShowModalUpdate] = useState(false);

    useEffect(() => {
        dispatch(getMemberships())
    }, [dispatch, membershipList, input, memberships, selectedData])

    const usersStatus = ['active', 'inactive', 'suspended']

    function handleSelectOption(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e, name) => {
        e.preventDefault()
        dispatch(editUserInfo(input));
        addAlertModified(name)
        setShowModalEdit(false)
        setTimeout(function () {
            dispatch(getAllUsers());
        }, 1000);
    }
    function handleConfirmUpdate() {
        fromNameToId()
        dispatch(assignMemberships(selectedData.id, { idMembership: membershipsId })).then(() => {
            addAlertModifiedMembership()
            setShowModalUpdate(false)
        })
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
    const addAlertModifiedMembership = () => {
        Swal.fire({
            title: "MEMBERSHIPS CHANDGED",
            text: `You chaged the memberships`,
            icon: 'success',
            timer: '3000',
            timerProgressBar: true,
            allowOutsideClick: true,
            confirmButtonColor: '#ffc107'
        })
    }

    function handleSelectOptionMemberships(e, set, ele) {
        e.preventDefault()
        if (ele.indexOf(e.target.value) < 0) {
            set([...ele, e.target.value])
        }
    }

    const handleOptionRemoveMemberships = (option, set, ele) => {
        set(ele.filter((o) => o !== option));
    };

    function handleUpdate() {
        setShowModalUpdate(true)
    }

    let membershipsId = []

    function fromNameToId() {
        for (const name of memberships) {
            for (const el of allMemberships) {
                { if (el.name === name) membershipsId.push(el.id) }
            }
        }
    }

    return (
        <>

            <Form>
                <Form.Group controlId="formName" className="d-flex mb-2 justify-content-around" >
                    {input.avatar ?
                        <div style={{ width: '100px', height: '100px' }}>
                            <Image rounded src={input.avatar} alt="avatar" fluid />
                        </div> :
                        <div className="spinner-grow" style={{ width: "3rem", height: "3rem" }} role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    }

                    <div>
                        <Form.Label >Name</Form.Label>
                        <Form.Control type="text" name="name" value={input.fullname} disabled />
                    </div>
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" name="email" value={input.email} disabled />
                </Form.Group>
                <Form.Group className="mb-2" >
                    <Form.Label>Role</Form.Label>
                    {(userInfo.role === "superAdmin") ?
                        <Form.Control
                            name="role"
                            as="select"
                            value={input.role}
                            onChange={e => handleSelectOption(e)}>
                            {roles.map((el, index) => <option key={index} value={el}>{el}</option>)}
                        </Form.Control> :
                        <Form.Control type="text" name="role" value={input.role} disabled />
                    }

                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Profile</Form.Label>
                    <Form.Control as="textarea" aria-label="With textarea" type="text" name="profile" value={input.profile} disabled />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>DNI</Form.Label>
                    <Form.Control type="text" name="dni" value={input.dni} disabled />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Memberships</Form.Label>
                    <div className="d-flex align-items-center justify-content-aroud gap-3">
                        {Array.isArray(memberships) ? memberships.map((membership, index) => <Form.Control key={index} type="text" name={membership} value={membership} disabled />) :
                            <Form.Control min={0} max={1000} type="text" name="memberships" value="Dont have Memeberships" disabled />}
                        <Button variant="warning" type="button" onClick={() => handleUpdate()} style={{ height: "auto", width: '60%' }}>
                            Select Memberships
                        </Button>
                    </div>
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Status</Form.Label>
                    <Form.Control
                        name="status"
                        as="select"
                        value={input.status}
                        onChange={e => handleSelectOption(e)}>
                        {usersStatus.map((el, index) => <option key={index} value={el}>{el}</option>)}
                    </Form.Control>
                </Form.Group>
                <div className="d-flex flex-row-reverse justify-content-evenly mt-3">
                    <Button variant="warning" type="submit" onClick={e => handleSubmit(e, input.name)} style={{ width: '60%' }}>
                        Change status
                    </Button>
                </div>
            </Form>
            <Modal show={showModalUpdate} onHide={() => setShowModalUpdate(false)} className="bg-dark">
                <Modal.Header closeButton>
                    <Modal.Title>Update Memberships</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Form.Group controlId="formMemberships">
                        <Form.Label>Memberships</Form.Label>
                        <InputGroup>
                            <Form.Control
                                name="memberships"
                                as="select"
                                onChange={(e) => { handleSelectOptionMemberships(e, setMemberships, memberships) }}>
                                <option value="">Select the Memberships</option>
                                {allMemberships?.map((el, index) => <option key={index} value={el.name}>{el.name}</option>)}
                            </Form.Control>
                        </InputGroup>
                    </Form.Group>
                    {memberships?.map((option, index) => (
                        <Badge style={{ cursor: 'pointer' }} key={option} pill bg="warning" text="dark" className="mb-2 mr-2 mt-2" onClick={() => handleOptionRemoveMemberships(option, setMemberships, memberships)}>
                            {option}  X
                        </Badge>
                    ))}
                </Modal.Body>
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