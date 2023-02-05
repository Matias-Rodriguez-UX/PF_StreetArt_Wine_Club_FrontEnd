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


export default function Shop() {

        const dispatch = useDispatch()
        const allProducts = useSelector((state) => state.products)

        useEffect(()=> {
            dispatch(getProducts());
        },[]);

    return (
        <>
            <Banner />
            <NavigationBar />
            
            {allProducts.length > 0 ? (<>{allProducts?.map((el) => {
                return(
                    <> 
                        <Link to={"/shop/" + el.id} />
                        <Winecards
                            image={el.image}
                            name = {el.name}
                            winery = {el.winery}
                            price = {el.price}
                        />
                    </>
                )
            })}</>) : (<Loader />)}
            <h1>Shop</h1>
            <h3>SearchBar</h3>
            <h5>filters/sorts</h5>
            <h5>Products</h5>
            <h6>Pagination</h6>
            <h7>Winecard</h7>
            <Footer />
        </>
    )
}