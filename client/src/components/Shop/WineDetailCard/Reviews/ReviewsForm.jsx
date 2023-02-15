import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import Rating from '@mui/material/Rating'
import { postReview } from "../../../../actions";
import { Loader } from "../../../Loader";



export default function ReviewsForm({ idProduct }) {
    const { isLoading, isAuthenticated: auth, user } = useAuth0();
    const dispatch = useDispatch()

    const [review, setReview] = useState({
        review: "",
        rating: 0,
        email: "",
    })
    let userName = ""
    let userEmail = ""
    function handleRating(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setReview({
            ...review,
            [name]: value,
            email: userEmail
        });
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(postReview(idProduct, review))
    }

    useEffect(() => {
        if (auth) {
            userName = user.name
            userEmail = user.email
        }
        console.log("este es el review", review)
    }, [review, userName, userEmail])

    return (
        <>{auth ?
            <div className='border border-3 rounded p-4 bg-light' style={{ height: '272px' }} >
                <Form onSubmit={e => handleSubmit(e)} >
                    <FormGroup>
                        <FormLabel className="fs-4 fw-bold">Review</FormLabel>
                        <FormControl name='review' as="textarea" rows={3} placeholder="It's a great wine..." onChange={(e) => handleRating(e)} />
                    </FormGroup>
                    <FormGroup className="d-flex align-items-center mt-3">
                        <FormLabel className="me-4 fs-5 fw-normal">Rating</FormLabel>
                        <Rating name='rating' max={5} defaultValue={3} onChange={(e) => handleRating(e)} />
                    </FormGroup>
                    <Button variant="warning" type="submit" className="float-end" >Send</Button>
                </Form>
            </div>
            : <Loader />}

        </>
    )
}