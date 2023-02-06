import React from "react";
import Footer from "../Footer";
import Banner from "../Home/Banner";
import NavigationBar from "../Navbar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Loader } from "../Loader";
import { getProducts } from "../../actions";
import Winecards from "./WineCard/WineCard";
import './shop.css'
import Filters from "./Filters/Filters";
import { all } from "axios";
import SearchBar from "./SearchBar";

export default function Shop() {

    const dispatch = useDispatch()
    const allProducts = useSelector((state) => state.products)

    const allGrapes = () => {
        let grapes = []
        grapes = allProducts.map(product => product.grapes?.map(grape => grape.name))
        const result = Array.from(new Set(grapes.flat()))
        return result
    }
    const allStates = () => {
        let states = []
        states = allProducts.map(product => product.states?.map(grape => grape.name))
        const result = Array.from(new Set(states.flat()))
        return result
    }
    const allTypes = () => {
        let types = []
        types = allProducts.map(product => product.types?.map(types => types.name))
        const result = Array.from(new Set(types.flat()))
        return result
    }

    const allQuantity = () => {
        let quantities = []
        quantities = allProducts.map(product => product.quantity)
        const result = Array.from(new Set(quantities))
        return result
    }
    const allPrices = () => {
        let prices = []
        prices = allProducts.map(product => product.price)
        const min = Math.min(...prices);
        const max = Math.max(...prices);
        const result = [min, max]
        return result
    }

    const grapes = allGrapes()
    const states = allStates()
    const types = allTypes()
    const quantities = allQuantity()
    const prices = allPrices()

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    return (
        <>
            <Banner />
            <NavigationBar />
            <SearchBar />
            <div className="row g-3 py-2">
                <div className="col-3 col-sm-3 col-lg-3 mt-5 py-4" >
                    <Filters
                        grapes={grapes}
                        states={states}
                        types={types}
                        quantities={quantities}
                        prices={prices}
                    />
                </div>
                <div className="Cards container col mt-4 py-5">
                    {allProducts.length > 0 ? (<>{allProducts?.map((el) => {
                        return (
                            <>
                                <Link to={"/shop/" + el.id} className="text-decoration-none text-reset">
                                    <Winecards
                                        image={el.image}
                                        name={el.name}
                                        winery={el.winery}
                                        price={el.price}
                                        id={el.id}
                                    />
                                </Link>
                            </>
                        )
                    })}</>) : (<Loader />)}
                </div>
            </div>

            <Footer />
        </>
    )
}