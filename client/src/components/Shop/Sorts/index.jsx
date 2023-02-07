import React from "react"
import { useDispatch } from "react-redux"
import { orderAtoZ, orderByPrice } from "../../../actions"

export default function Sort({ setSort, handleClick }) {
    const dispatch = useDispatch()

    function handleOrderAlph(e) {
        e.preventDefault()
        dispatch(orderAtoZ(e.target.value))
        setSort(`${e.target.value}`)
    }

    function handleOrderByPrice(e) {
        e.preventDefault()
        dispatch(orderByPrice(e.target.value))
        setSort(`${e.target.value}`)
    }

    return (
        <div className="container-fluid bg-dark row p-3 mt-4">
            <div className="col-8 d-flex justify-content-evenly me-4">
                <h3 className="ms-4 me-4" style={{ color: "white" }}>Sort</h3>
                <select className="form-select me-4" placeholder="Order by Name" name="orderAlph" id="name" onChange={(e) => (handleOrderAlph(e))}>
                    <option value="" disabled selected hidden> by name</option>
                    <option value="a">A to Z</option>
                    <option value="z">Z to A</option>
                </select>
                <select className="form-select me-4" placeholder="Order by price" name="atack" id="price" onChange={(e) => (handleOrderByPrice(e))}>
                    <option value="" disabled selected hidden> by Price</option>
                    <option value="high">Higher Price</option>
                    <option value="low">Lower Price</option>
                </select>
            </div>
            <button type="button" class="col btn btn-outline-warning" onClick={e => handleClick(e)}>Clear filters and sorts</button>
        </div>

    )
}