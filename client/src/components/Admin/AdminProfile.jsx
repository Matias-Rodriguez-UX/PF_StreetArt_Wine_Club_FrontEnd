import React, { useState } from "react";
import SideBar from "./SideBar";
import HomeAdmin from "./Home";
import AdminProducts from "./Products";
import AdminMemberships from "./Memberships";
import AdminCustomers from "./Customers";
import AdminOrders from "./Orders";
import AdminNewsletter from "./Newsletter";

export default function AdminProfile() {
    const [currentPage, setCurrentPage] = useState('home')

    return (
        <>
            <div className="row">
                <SideBar className='col-3'
                    setCurrentPage={setCurrentPage}
                />
                <div className="container col-9">
                    {currentPage === "home" && <HomeAdmin setCurrentPage={setCurrentPage} />}
                    {currentPage === "products" && <AdminProducts setCurrentPage={setCurrentPage} />}
                    {currentPage === "memberships" && <AdminMemberships />}
                    {currentPage === "customers" && <AdminCustomers />}
                    {currentPage === "orders" && <AdminOrders />}
                    {currentPage === "newsletter" && <AdminNewsletter />}
                </div>
            </div>
        </>
    )
}