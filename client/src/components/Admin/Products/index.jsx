import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts, loadingAction } from "../../../actions";
import { Loader } from "../../Loader";
import WebPagination from "../../Shop/Pagination/Pagination";
import TableProducts from "./TableProducts";


export default function AdminProducts() {

    const dispatch = useDispatch()

    const showLoading = useSelector((state) => state.products.showLoading)
    const allProducts = useSelector((state) => state.products.allProducts)


    const [currentPage, setCurrentPage] = useState(1);
    const [winesPerPage, setWinesPerPage] = useState(5);
    const indexOfLastWine = currentPage * winesPerPage;
    const indexOfFirstWine = indexOfLastWine - winesPerPage;
    const currentWines = allProducts.slice(indexOfFirstWine, indexOfLastWine);
    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    };


    useEffect(() => {
        dispatch(loadingAction(true))
        dispatch(getProducts());

    }, [dispatch]);

    return (
        <><div>
            {showLoading ? <div className="container col py-5 mt-5"> <Loader /> </div> :
                <div className="mt-3 mb-3">
                    {currentWines.length ?
                        <TableProducts currentWines={currentWines} />
                        : <h1>Wines not Found</h1>}
                </div>}
            <WebPagination
                winesPerPage={winesPerPage}
                numberOfWines={allProducts.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pagination={pagination} />
        </div>
        </>
    )
}