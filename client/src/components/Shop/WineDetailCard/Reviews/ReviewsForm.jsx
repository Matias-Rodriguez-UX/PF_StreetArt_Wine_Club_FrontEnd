import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { Form, FormGroup, FormControl, FormLabel, Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import Rating from '@mui/material/Rating'
import { postReview } from "../../../../actions";
import { Loader } from "../../../Loader";
import { getUserInfo } from "../../../../actions/userActions";



export default function ReviewsForm({ idProduct }) {
    const { isLoading, isAuthenticated: auth, user } = useAuth0();
    const dispatch = useDispatch()
    const userInfo = useSelector((state) => state.users.userInfo)
    const [showModalWarning, setShowModalWarning] = useState(false);

    const [review, setReview] = useState({
        review: "",
        rating: 0,
        email: "",
    })
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
        if (review.rating > 0 && review.review) {
            dispatch(postReview(idProduct, review))
            window.location.reload();
        } else {
            setShowModalWarning(true)
        }

    }

    useEffect(() => {
        if (auth) {
            getUserInfo(user.email)
            userEmail = userInfo?.email
        }
    }, [review, userEmail])


    return (
        <>
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
                <Modal show={showModalWarning} onHide={() => setShowModalWarning(false)} >
                    <Modal.Header closeButton>
                        <Modal.Title>We can't post the review</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        You must complete the review and rating
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModalWarning(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </>
    )
}