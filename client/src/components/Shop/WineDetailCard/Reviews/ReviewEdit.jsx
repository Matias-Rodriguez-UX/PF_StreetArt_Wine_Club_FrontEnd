import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import Rating from '@mui/material/Rating'
import { getReviews, postReview, updateReviews } from "../../../../actions";
import { Loader } from "../../../Loader";
import Swal from 'sweetalert2';



export default function ReviewsEdit({ selectedReview, setShowModalEdit, userEmail }) {

    const dispatch = useDispatch()

    const [review, setReview] = useState(selectedReview)
    const [disable, setDisable] = useState(false)

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
        dispatch(updateReviews(review.productId, review.id, review)).then(() => {
            dispatch(getReviews(review.productId)).then(() => {
                changeReview()
            })
        }).then(() => {
            setShowModalEdit(false)
        })
    }
    const changeReview = () => {
        Swal.fire({
            title: "YOU CHANGED THE REVIEW",
            text: 'Your opinion is very valuable to us',
            icon: 'success',
            timer: '3000',
            timerProgressBar: true,
            allowOutsideClick: true,
            confirmButtonColor: '#ffc107'
        })
    }

    useEffect(() => {
        if (review.rating <= 0 || !review.review) {
            setDisable(true)
        } else {
            setDisable(false)
        }

        review.rating = parseInt(review.rating, 10)

    }, [review, disable])

    return (
        <>
            <div className='border border-3 rounded p-4 bg-light' style={{ height: '272px' }} >
                <Form onSubmit={e => handleSubmit(e)} >
                    <FormGroup>
                        <FormLabel className="fs-4 fw-bold">Review</FormLabel>
                        <FormControl name='review' as="textarea" value={review.review} rows={3} placeholder="It's a great wine..." onChange={(e) => handleRating(e)} />
                    </FormGroup>
                    <FormGroup className="d-flex align-items-center mt-3">
                        <FormLabel className="me-4 fs-5 fw-normal">Rating</FormLabel>
                        <Rating name='rating' max={5} value={review.rating} onChange={(e) => handleRating(e)} />
                    </FormGroup>
                    <Button variant="warning" type="submit" className="float-end" disabled={disable}>Change</Button>
                </Form>
            </div>
        </>
    )
}