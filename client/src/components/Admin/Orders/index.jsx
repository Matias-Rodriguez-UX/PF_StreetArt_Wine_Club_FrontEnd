import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadingAction } from "../../../actions";
import { getOrders } from "../../../actions/ordersAction";
import { Loader } from '../../Loader/index'
import WebPagination from "../../Shop/Pagination/Pagination";
import FiltersOrders from "./FiltersOrders";
import TableOrders from "./TableOrders";


export default function AdminOrders() {
    const dispatch = useDispatch()
    const showLoading = useSelector((state) => state.products.showLoading)
    const allOrders = useSelector((state) => state.orders.allOrders)
    const [orders, setOrders] = useState(allOrders);

    const [currentPage, setCurrentPage] = useState(1);
    const [ordersPerPage, setOrdersPerPage] = useState(5);
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    };
    useEffect(() => {
        dispatch(loadingAction(true))
        dispatch(getOrders())
    }, [dispatch, orders])


    return (
        <>
            <div className='container d-flex align-items-center justify-content-evenly mt-3 bg-dark'>
                <h1 className="text-white">Orders</h1>
                <FiltersOrders allOrders={allOrders} setOrders={setOrders} />
            </div>
            {showLoading ? <div className="container col py-5 mt-5"> <Loader /> </div> :
                <div className="mt-3 mb-3">
                    {currentOrders.length ?
                        <TableOrders currentOrders={currentOrders} />
                        : <h1>Orders not Found</h1>}
                </div>}
            <WebPagination
                orderPerPage={ordersPerPage}
                numberOfOrders={allOrders.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pagination={pagination} />
        </>
    )
}