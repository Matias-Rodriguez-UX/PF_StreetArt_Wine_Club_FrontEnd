import React from "react";
import Footer from "../Footer";
import Banner from "../Home/Banner";
import NavigationBar from "../Navbar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Loader } from "../Loader";
import { getProducts, loadingAction } from "../../actions";
import Winecards from "./WineCard/WineCard";
import './shop.css'
import Filters from "./Filters/Filters";


export default function Shop() {

    const dispatch = useDispatch()

    const showLoading = useSelector((state) => state.showLoading)
    const allProducts = useSelector((state) => state.allProducts)
    const Products = useSelector((state) => state.products)
    const [sort, setSort] = useState('')

    function handleClick(e) {
        e.preventDefault()
        dispatch(loadingAction(true))
        dispatch(getProducts())
    }


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
        dispatch(loadingAction(true))
        dispatch(getProducts());

    }, []);

    return (
        <>
            <Banner />
            <NavigationBar />
            <div className="row g-3 py-2">
                <div className="col-3 col-sm-3 col-lg-3 py-4" >
                    <Filters
                        grapes={grapes}
                        states={states}
                        types={types}
                        quantities={quantities}
                        prices={prices}
                    />
                </div>

                {showLoading ? <Loader /> :
                    <div className="Cards container col py-5">
                        {Products.length ? Products?.map((el) => {
                            return (
                                <Link to={"/shop/" + el.id}>
                                    <Winecards
                                        image={el.image}
                                        name={el.name}
                                        winery={el.winery}
                                        price={el.price}
                                        id={el.id}
                                    />
                                </Link>
                            )
                        }) : <h1>Wines not Found</h1>}
                    </div>}
            </div>

            <Footer />
        </>
    )
}