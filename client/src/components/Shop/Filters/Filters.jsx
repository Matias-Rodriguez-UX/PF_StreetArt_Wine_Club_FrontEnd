import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getFilterProducts } from "../../../actions";
import './Filters.css'


export default function Filters({ grapes, states, types, quantities, setCurrentPage }) {
    const inSt = 'all'
    const [grape, setGrape] = useState(inSt)
    const [state, setSate] = useState(inSt)
    const [quant, setQuant] = useState(inSt)
    const [type, setType] = useState(inSt)
    const [filters, setFilters] = useState([
        { filter: "Grape", value: inSt },
        { filter: "State", value: inSt },
        { filter: "Type", value: inSt }])

    const dispatch = useDispatch()


    function handleFilterTypes(e) {
        setType(e.target.value)
        setFilters([
            { filter: "Grape", value: grape },
            { filter: "State", value: state },
            { filter: "Type", value: e.target.value }
        ])
    }

    function handleFilterGrapes(e) {
        setGrape(e.target.value)
        setFilters([
            { filter: "Grape", value: e.target.value },
            { filter: "State", value: state },
            { filter: "Type", value: type }
        ])
    }

    function handleFilterStates(e) {
        setSate(e.target.value)
        setFilters([
            { filter: "Grape", value: grape },
            { filter: "State", value: e.target.value },
            { filter: "Type", value: type }
        ])
    }

    function handleFilterQuantity(e) {
        setQuant(e.target.value)
        setFilters([
            { filter: "Grape", value: grape },
            { filter: "State", value: state },
            { filter: "Type", value: type }
        ])
    }

    function handleClick(e) {
        dispatch(getFilterProducts(filters, quant))
        setGrape(inSt)
        setQuant(inSt)
        setSate(inSt)
        setType(inSt)
        setFilters([
            { filter: "Grape", value: inSt },
            { filter: "State", value: inSt },
            { filter: "Type", value: inSt }
        ])
        setCurrentPage(1)
    }


    return (
        <div>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-4">Filters</span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        Grapes
                        <br />
                        <select value={grape} name="filterType" id="" onChange={(e) => (handleFilterGrapes(e))} style={{ width: '80%' }} className=" form-select mt-2 mb-2" >
                            <option value="" disabled selected hidden>{grape}</option>
                            <option value="all">All</option>
                            {
                                grapes?.map((el, index) => <option value={el} key={index}>{el}</option>)
                            }
                        </select>
                    </li>
                    <li>
                        States
                        <br />
                        <select value={state} name="filterType" id="" onChange={(e) => (handleFilterStates(e))} style={{ width: '80%' }} className="form-select mt-2 mb-2" >
                            <option value="" disabled selected hidden>{state}</option>
                            <option value="all">All</option>
                            {
                                states?.map((el, index) => <option value={el} key={index}>{el}</option>)
                            }
                        </select>
                    </li>
                    <li>
                        Types
                        <br />
                        <select value={type} name="filterType" id="" onChange={(e) => (handleFilterTypes(e))} style={{ width: '80%' }} className=" form-select mt-2 mb-2" >
                            <option value="" disabled selected hidden>{type}</option>
                            <option value="all">All</option>
                            {
                                types?.map((el, index) => <option value={el} key={index}>{el}</option>)
                            }
                        </select>
                    </li>
                    <li>
                        Quantity
                        <br />
                        <select value={quant} name="filterQuant" id="" onChange={(e) => (handleFilterQuantity(e))} style={{ width: '80%' }} className="form-select mt-2 mb-2" >
                            <option value="" disabled selected hidden>{quant}</option>
                            <option value="all">All</option>
                            {
                                quantities?.map((el, index) => <option value={el} key={index}>{el}</option>)
                            }
                        </select>
                    </li>
                </ul>
                <hr />
                <div>
                    <button type="submit" className="btn btn-warning float-end me-4" onClick={(e) => handleClick(e)}>Filter</button>
                </div>


            </div>
        </div>

    )
}