import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getFilterProducts,getFilterProductsTypes, getFilterQuantities,getFilterProductsStates,getFilterProductsGrapes } from "../../../actions";
import './Filters.css'


export default function Filters({ grapes, states, types, quantities, prices }) {
    const dispatch = useDispatch()

    const [filter, setFilter] = useState({grapes:'',state:'', types:'', quantity:''})
    const todoslosproductos = useSelector((state)=> state.products)
    const productos = useSelector((state)=> state.allProducts)

    console.log(productos)
    console.log(todoslosproductos)

    // function handleFilterTypes(e) {
    //     e.preventDefault()
    //     dispatch(getFilterProductsTypes(e.target.value))
    // }
    function handleFilterTypes(e) {
        e.preventDefault()
        setFilter({...filter,types: e.target.value})
    }
    function handleFilterGrapes(e) {
        e.preventDefault()
        setFilter({...filter,grapes: e.target.value})
    }
    function handleFilterStates(e) {
        e.preventDefault()
        setFilter({...filter,state: e.target.value})
    }
    function handleFilterQuantity(e) {
        e.preventDefault()
        setFilter({...filter,quantity: e.target.value})
    }
    // function handleFilterQuantity(e) {
    //     e.preventDefault()
    //     dispatch(getFilterQuantities(e.target.value))
    // }
    function handleSubmit(e) {
        e.preventDefault()
        let {grapes,state, types, quantity} = filter
        console.log(types)
        console.log(filter.types)
        if(quantity !== ''){dispatch(getFilterQuantities(quantity))}
        if(types !== ''){dispatch(getFilterProductsTypes(types))}
        if(state !== ''){dispatch(getFilterProductsStates(state))}
        if(grapes !== ''){dispatch(getFilterProductsGrapes(grapes))}
        setFilter({grapes:'',state:'', types:'', quantity:''})
    }
    


    console.log(filter)
    return (
        <div>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-4">Filters</span>
                </a>
                <hr />
                <form action="" onSubmit={(e) => (handleSubmit(e))}>
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            Grapes
                            <br />
                            <select name="filterType" id="" onChange={(e) => (handleFilterGrapes(e))} style={{ width: '80%' }} className="mt-2 mb-2" >
                                <option value="" disabled selected hidden>All</option>
                                <option value="all">All</option>
                                {
                                    grapes?.map((el, index) => <option value={el} key={index}>{el}</option>)
                                }
                            </select>
                        </li>
                        <li>
                            States
                            <br />
                            <select name="filterType" id="" onChange={(e) => (handleFilterStates(e))} style={{ width: '80%' }} className="mt-2 mb-2" >
                                <option value="" disabled selected hidden>All</option>
                                <option value="all">All</option>
                                {
                                    states?.map((el, index) => <option value={el} key={index}>{el}</option>)
                                }
                            </select>
                        </li>
                        <li>
                            Price
                            <div className="mb-2" style={{ width: '80%' }}>
                                <div className="d-flex justify-content-between mb-2"><span>From</span>
                                    <input className="ms-4" type="number" name="" id="" placeholder={`$${prices[0]}`} style={{ width: '50%' }}
                                        onChange={(e) => (handleFilterPriceMin(e))} />
                                </div>
                                <div className="d-flex justify-content-between"><span>To</span>
                                    <input className="ms-4" type="number" name="" id="" placeholder={`$${prices[1]}`} style={{ width: '50%' }}
                                        onChange={(e) => (handleFilterPriceMax(e))} />
                                </div>
                            </div>
                        </li>
                        <li>
                            Types
                            <br />
                            <select name="filterType" id="" onChange={(e) => (handleFilterTypes(e))} style={{ width: '80%' }} className="mt-2 mb-2" >
                                <option value="" disabled selected hidden>All</option>
                                <option value="all">All</option>
                                {
                                    types?.map((el, index) => <option value={el} key={index}>{el}</option>)
                                }
                            </select>
                        </li>
                        <li>
                            Quantity
                            <br />
                            <select name="filterType" id="" onChange={(e) => (handleFilterQuantity(e))} style={{ width: '80%' }} className="mt-2 mb-2" >
                                <option value="" disabled selected hidden>All</option>
                                <option value="all">All</option>
                                {
                                    quantities?.map((el, index) => <option value={el} key={index}>{el}</option>)
                                }
                            </select>
                        </li>
                    </ul>
                    <hr />
                    <div>
                        <button className="btn btn-warning float-end me-4"> <strong>Filter</strong></button>
                    </div>
                </form>

            </div>
        </div>

    )
}