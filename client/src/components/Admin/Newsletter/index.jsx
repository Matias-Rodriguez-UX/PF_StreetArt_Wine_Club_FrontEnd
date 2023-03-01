import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loadingAction } from "../../../actions";
import { Loader } from '../../Loader'
import FormNewsPost from "./FormNewsPost";
import FormNewsEdit from "./FormNewsEdit";
import { getNewsletter } from "../../../actions/userActions";


export default function AdminNewsletter() {
    const dispatch = useDispatch()
    const newsletter = useSelector((state) => state.users.newsletter)
    const [showModalPost, setShowModalPost] = useState(false);
    const [selectedData, setSelectedData] = useState({});
    const [showModalEdit, setShowModalEdit] = useState(false);
    const showLoading = useSelector((state) => state.products.showLoading)

    useEffect(() => {
        dispatch(loadingAction(true))
        dispatch(getNewsletter()).then(() => {
            dispatch(loadingAction(false));
        })
    }, [selectedData])

    let headers = []
    if (newsletter.length) {
        headers = Object.keys(newsletter[0]);
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
                    <h1>Newsletter</h1>
                    <Button variant='warning' hover onClick={(e) => handleClickPost(e)}>Add newsletter</Button>
                </div>
                <div className="mt-4 d-flex aiign-items-center jutify-content-center text-center">
                    {newsletter?.length ? <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                {headers.map((header, index) => (
                                    <th key={index}>{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {newsletter.map((item, index) => (
                                <tr key={index} onClick={() => handleClick(item)} style={{ cursor: 'pointer' }}>
                                    {headers.map((header, subIndex) => (
                                        <td key={subIndex} className="ellipsis">{item[header]}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </Table> : <h2>Not newsletter to see</h2>}
                </div>
                <Modal show={showModalPost} onHide={() => setShowModalPost(false)} >
                    <Modal.Header closeButton>
                        <Modal.Title>Create Membership</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormNewsPost setShowModalPost={setShowModalPost} />
                    </Modal.Body>
                </Modal>
                <Modal show={showModalEdit} onHide={() => setShowModalEdit(false)} >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit newsletter</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormNewsEdit selectedData={selectedData} setShowModalEdit={setShowModalEdit} />
                    </Modal.Body>
                </Modal>
            </>
            }
        </>
    )
}