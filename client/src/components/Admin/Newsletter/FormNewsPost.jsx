import React, { useEffect, useState } from "react";
import { Badge, Button, Form, Image, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { } from "../../../actions";
import Swal from 'sweetalert2';
import { getNewsletter, postNewsletter } from "../../../actions/userActions";
import validateEmail from "../../../Helpers/emailValidator";

export default function FormNewsPost({ setShowModalPost }) {
    const dispatch = useDispatch()

    const [newMail, setnewMail] = useState({ email: "" })


    const [activeButton, setActiveButton] = useState(true)

    useEffect(() => {

        if (newMail.email !== "" &&
            validateEmail(newMail.email)
        ) {
            setActiveButton(false)
        } else {
            setActiveButton(true)
        }


    }, [newMail])

    function handleChanges(e) {
        e.preventDefault()
        setnewMail({
            ...newMail,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = async (e, name) => {
        e.preventDefault()
        try {
            const response = dispatch(postNewsletter(newMail));
            if (response === 200) {
                setPostSuccess(true);
            }
        } catch (error) {
            console.error(error);
        }
        addAlertCreate(name)
        setShowModalPost(false)
        setTimeout(function () {
            dispatch(getNewsletter());
        }, 1000);
    }

    const addAlertCreate = (name) => {
        Swal.fire({
            title: "THE EMAIL WAS ADDED",
            text: `The mail: ${name} was added to the newsletter list`,
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
                    <Form.Control type="email" name="email" value={newMail.email} onChange={e => handleChanges(e)} required />
                </Form.Group>
                <div className="d-flex flex-row-reverse justify-content-evenly mt-3">
                    <Button variant="warning" type="button" disabled={activeButton} onClick={e => handleSubmit(e, newMail.email)} style={{ width: '60%' }} >
                        Create
                    </Button>
                </div>
            </Form>

        </>
    )
}
