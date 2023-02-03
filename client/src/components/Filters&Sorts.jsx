import React from "react";
import { useState, UseEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderStates } from "../Redux/Actions";

export default function FiltersSort() {

    const dispatch = useDispatch();

    function handleSort(e) {
        dispatch(orderStates(e.target.value));
        setOrder(e.target.value);
    }

    return(

    )
}