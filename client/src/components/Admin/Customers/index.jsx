import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loadingAction } from "../../../actions";
import { getAllUsers } from "../../../actions/userActions";
import { Loader } from "../../Loader";
import WebPagination from "../../Shop/Pagination/Pagination";
import FormUser from "./FormUser";


export default function AdminCustomers() {
    const dispatch = useDispatch()
    const allUsers = useSelector((state) => state.users.allUsers)
    const showLoading = useSelector((state) => state.products.showLoading)
    const [userList, setUserList] = useState(allUsers);
    const [selectedData, setSelectedData] = useState({});
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [customersPerPage, setCustomersPerPage] = useState(8);
    const indexOfLastOrder = currentPage * customersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - customersPerPage;
    const currentcustomers = allUsers.slice(indexOfFirstOrder, indexOfLastOrder);
    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    useEffect(() => {
        dispatch(getAllUsers())
    }, [userList])



    function handleClick(item) {
        setSelectedData(item);
        setShowModalEdit(true);
    };

    let headers = []
    if (allUsers.length) {
        headers = Object.keys(allUsers[0]);
    }
    console.log(allUsers)

    return (
        <>
            {showLoading ? <Loader /> :
                <>
                    <h1>Customers</h1>
                    <div>
                        {allUsers?.length ? <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    {headers.map((header, index) => (
                                        <th key={index}>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {allUsers.map((item, index) => (
                                    <tr key={index} onClick={() => handleClick(item)} style={{ cursor: 'pointer' }}>
                                        {headers.map((header, subIndex) => (
                                            (Array.isArray(item[header])) ?
                                                <td key={subIndex} className="ellipsis"> {item[header].map((el, index) =>
                                                    (typeof el === 'object') ?
                                                        <li key={index} style={{ listStyleType: 'none' }}>{el.name}</li> :
                                                        <li key={index} style={{ listStyleType: 'none' }}>{el}</li>
                                                )}</td> :
                                                <td key={subIndex} className="ellipsis">{item[header]}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </Table> : <Loader />}
                    </div>

                    <Modal show={showModalEdit} onHide={() => setShowModalEdit(false)} >
                        <Modal.Header closeButton>
                            <Modal.Title>Edit User</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <FormUser selectedData={selectedData} setShowModalEdit={setShowModalEdit} />
                        </Modal.Body>
                    </Modal>
                </>
            }
            <WebPagination
                winesPerPage={customersPerPage}
                numberOfWines={allUsers.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pagination={pagination} />
        </>
    )
}
