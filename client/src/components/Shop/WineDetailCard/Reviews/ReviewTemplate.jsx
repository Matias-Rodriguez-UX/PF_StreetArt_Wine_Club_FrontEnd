import React, { useEffect, useState } from "react";
import { Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import Rating from '@mui/material/Rating'
import { loadingAction, postReview } from "../../../../actions";
import { Loader } from "../../../Loader";
import { getUserInfo } from "../../../../actions/userActions";



export default function ReviewsTemplate({ review }) {
    const dispatch = useDispatch()
    const userInfo = useSelector((state) => state.users.userInfo)
    const [infoUsr, setInfoUsr] = useState({})
    console.log(review)
    useEffect(() => {
        dispatch(loadingAction(true))
        dispatch(getUserInfo(review.userEmail))
        console.log(userInfo)
    }, [])

    return (
        <>
            <div class="container d-flex mt-3 mb-4 align-items-center justify-content-center">
                <div className="img-avatar">
                    <img src={userInfo.avatar} className="avatar-image" alt="image" />
                </div>
                <div class="ms-3">
                    <h6 class="mb-1">{userInfo.fullname}</h6>
                    <p class="mb-0">{review.review}</p>
                    <div class="d-flex mt-2">
                        <Rating name='rating' max={5} value={review.rating} readOnly />
                    </div>
                </div>
            </div>
        </>
    )
}