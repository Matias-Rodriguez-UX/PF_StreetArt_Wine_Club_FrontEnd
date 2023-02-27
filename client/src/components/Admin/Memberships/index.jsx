import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loadingAction } from "../../../actions";
import { getMemberships } from "../../../actions/membershipsActions";
import FormMembershipEdit from "./FormMembershipEdit";
import FormMembershipPost from "./FormMembershipPost";
import { Loader } from '../../Loader'


export default function AdminMemberships() {
    const dispatch = useDispatch()
    const allMemberships = useSelector((state) => state.memberships.allMemberships)
    const [membershipList, setmembershipList] = useState(allMemberships);
    const [showModalPost, setShowModalPost] = useState(false);
    const [selectedData, setSelectedData] = useState({});
    const [showModalEdit, setShowModalEdit] = useState(false);
    const showLoading = useSelector((state) => state.products.showLoading)

    useEffect(() => {
        dispatch(loadingAction(true))
        dispatch(getMemberships())
    }, [membershipList])

    let headers = []
    if (allMemberships.length) {
        headers = Object.keys(allMemberships[0]);
    }

    function handleClick(item) {
        setSelectedData(item);
        setShowModalEdit(true);
    };

    const handleClickPost = (e) => {
        e.preventDefault()
        setShowModalPost(true)
    }

    return (
        <>
            {showLoading ? <Loader /> : <>
                <div className='container d-flex align-items-center justify-content-evenly mt-4'>
                    <h1>Memberships</h1>
                    <Button variant='warning' hover onClick={(e) => handleClickPost(e)}>Add Memberships</Button>
                </div>
                <div>
                    {allMemberships?.length ? <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                {headers.map((header, index) => (
                                    <th key={index}>{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {allMemberships.map((item, index) => (
                                <tr key={index} onClick={() => handleClick(item)} style={{ cursor: 'pointer' }}>
                                    {headers.map((header, subIndex) => (
                                        <td key={subIndex} className="ellipsis">{item[header]}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </Table> : <h2>Not memberships to see</h2>}
                </div>
                <Modal show={showModalPost} onHide={() => setShowModalPost(false)} >
                    <Modal.Header closeButton>
                        <Modal.Title>Create Membership</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormMembershipPost setShowModalPost={setShowModalPost} setmembershipList={setmembershipList} membershipList={membershipList} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModalPost(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={showModalEdit} onHide={() => setShowModalEdit(false)} >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Memberships</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormMembershipEdit selectedData={selectedData} setShowModalEdit={setShowModalEdit} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModalEdit(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
            }
        </>
    )
}