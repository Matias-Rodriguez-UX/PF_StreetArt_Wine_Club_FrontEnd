import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import './Filters.css'


export default function FiltersOrders({ handleFilterStatus }) {

    // setOrders(allOrders.filter(el => el.status === selec))

    const statusDis = ['cart', 'processing payment', 'processing shipping', 'shipped', 'delivered', 'cancelled']

    return (
        <div>
            <div className="d-flex align-items-center p-3 text-white bg-dark mb-3" style={{ width: '100%' }}>
                <ul className="nav nav-pills mb-auto">
                    <li className="nav-item">
                        Status
                        <br />
                        <select name="filterStatus" id="" onChange={(e) => handleFilterStatus(e)} style={{ width: '100%' }} className=" form-select mt-2 mb-2" >
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