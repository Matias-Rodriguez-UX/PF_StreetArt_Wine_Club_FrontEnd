import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loadingAction } from "../../../actions";
import { getAllUsers } from "../../../actions/userActions";
import { Loader } from "../../Loader";
import FormUser from "./FormUser";


export default function AdminCustomers() {
    const dispatch = useDispatch()
    const allUsers = useSelector((state) => state.users.allUsers)
    const isLoading = useSelector((state) => state.products.showLoading)
    const [userList, setUserList] = useState([]);
    const [selectedData, setSelectedData] = useState({});
    const [showModalEdit, setShowModalEdit] = useState(false);

    useEffect(() => {
        dispatch(getAllUsers())
        dispatch(loadingAction(true))
        setUserList(allUsers)
    }, [isLoading, userList])

    console.log(allUsers)

    function handleClick(item) {
        setSelectedData(item);
        setShowModalEdit(true);
    };

    let headers = []
    if (allUsers.length) {
        headers = Object.keys(allUsers[0]);
    }
    console.log(headers)

    return (
        <>
            <h1>Customers</h1>
            {isLoading ? <Loader /> :
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
                                        <td key={subIndex} className="ellipsis">{item[header]}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </Table> : <h2>Not user to see</h2>}
                </div>
            }
            <Modal show={showModalEdit} onHide={() => setShowModalEdit(false)} >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormUser selectedData={selectedData} setShowModalEdit={setShowModalEdit} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModalEdit(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}