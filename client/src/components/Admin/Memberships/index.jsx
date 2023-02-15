import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMemberships } from "../../../actions/membershipsActions";


export default function AdminMemberships() {
    const dispatch = useDispatch()
    const allMemberships = useSelector((state) => state.memberships.allMemberships)
    const [membershipList, setmembershipList] = useState(allMemberships);

    useEffect(() => {
        dispatch(getMemberships())
    }, [])

    return (
        <>
            <h1>Memberships</h1>
        </>
    )
}