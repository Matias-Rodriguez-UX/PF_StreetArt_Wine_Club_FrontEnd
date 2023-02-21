import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Rating from '@mui/material/Rating'
import { loadingAction, postReview } from "../../../../actions";
import { Loader } from "../../../Loader";
import { getUserInfo } from "../../../../actions/userActions";
import { useAuth0 } from "@auth0/auth0-react";



export default function ReviewsTemplate({ review, handleClickEditReview, setShowModalDelete, setSelectedReview }) {
    const { isLoading, isAuthenticated, user } = useAuth0()
    const dispatch = useDispatch()
    const userInfo = useSelector((state) => state.users.userInfo)
    const [author, setAuthor] = useState(review.userEmail)

    useEffect(() => {
        dispatch(loadingAction(true))
        if (isAuthenticated) {
            dispatch(getUserInfo(review.userEmail))
        }
    }, [])

    function handleDeletButton() {
        setSelectedReview(review)
        setShowModalDelete(true)
    }

    return (
        <>

            {isLoading ? <Loader /> :
                <div class="d-flex mt-3 mb-4 align-items-center justify-content-center row bg-light p-2">
                    <div className="img-avatar col-2">
                        <img src={userInfo.avatar} className="avatar-image" alt="image" />
                    </div>
                    <div class="col-4">
                        <h6 class="mb-1">{userInfo.fullname}</h6>
                        <p class="mb-0"><i>{review.review}</i></p>
                        <div class="d-flex mt-2">
                            <Rating name='rating' max={5} value={review.rating} readOnly />
                        </div>
                    </div>
                    {isAuthenticated && author === user.email && (
                        <div className="d-flex flex-column align-items-center justify-content-evenly col-2 gap-2">
                            <button type="button" class="btn btn-warning" onClick={() => handleClickEditReview(review)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>
                                </svg>
                            </button>
                            <button type="button" class="btn btn-secondary" onClick={() => handleDeletButton()}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            }
        </>
    )
}