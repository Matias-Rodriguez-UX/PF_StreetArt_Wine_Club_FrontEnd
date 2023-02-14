import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../../actions/ordersAction";


export default function AdminOrders() {
    const dispatch = useDispatch()
    const allOrders = useSelector((state) => state.allOrders)
    const [orders, setOrders] = useState(allOrders);

    useEffect(() => {
        dispatch(getOrders())
    }, [])


    return (
        <>
            <h1>Orders</h1>
        </>
    )
}