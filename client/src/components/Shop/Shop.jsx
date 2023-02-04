import React from "react";
import Footer from "../Footer";
import Banner from "../Home/Banner";
import NavigationBar from "../Navbar";


export default function Shop() {
    return (
        <>
            <Banner/>
            <NavigationBar/>
            <h1>Shop</h1>
            <h3>SearchBar</h3>
            <h5>filters/sorts</h5>
            <h5>Products</h5>
            <h6>Pagination</h6>
            <h7>Winecard</h7>
            <Footer/>
        </>
    )
}