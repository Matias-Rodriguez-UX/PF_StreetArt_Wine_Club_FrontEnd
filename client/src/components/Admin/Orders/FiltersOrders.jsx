import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import './Filters.css'


export default function FiltersOrders() {

    const statusDis = ['cart', 'processing payment', 'processing shipping', 'shipped', 'delivered', 'cancelled']

    const dispatch = useDispatch()


    function handleFilterStatus(e) {

    }


    return (
        <div>
            <div className="d-flex align-items-center p-3 text-white bg-dark mb-3" style={{ width: '100%' }}>
                <ul className="nav nav-pills mb-auto">
                    <li className="nav-item">
                        Status
                        <br />
                        <select value={status} name="filteStatus" id="" onChange={(e) => (handleFilterStatus(e))} style={{ width: '80%' }} className=" form-select mt-2 mb-2" >
                            <option value="" disabled selected hidden>{status}</option>
                            <option value="all">All</option>
                            {
                                statusDis?.map((el, index) => <option value={el} key={index}>{el}</option>)
                            }
                        </select>
                    </li>
                </ul>
            </div>
        </div>

    )
}