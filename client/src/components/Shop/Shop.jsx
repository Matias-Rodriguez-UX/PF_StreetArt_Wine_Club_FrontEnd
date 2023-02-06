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
import Filter from "./Filter/Filter";


export default function Shop() {
        const [filter, setFilter] = useState("");

        const dispatch = useDispatch();
        const products = useSelector((state) => state.products);

        useEffect(() => {
            dispatch(getProducts());
        }, []);

        const filteredProducts = products.filter(product => 
            product.grapes.find(grape => grape.name === filter) || filter === ""
        );

        function handleFilter(filter) {
            setFilter(filter);
        }

    return (
        <>
            <Banner />
            <NavigationBar />
            <Filter onFilter={handleFilter} />

            {products.length > 0 ? (
                filteredProducts.map((el) => (
                    <Link to={"/shop/" + el.id} key={el.id}>
                        <Winecards
                            image={el.image}
                            name={el.name}
                            winery={el.winery}
                            price={el.price}
                        />
                    </Link>
                ))
            ) : (
                <Loader />
            )}

            <Footer />
        </>
    );
}
