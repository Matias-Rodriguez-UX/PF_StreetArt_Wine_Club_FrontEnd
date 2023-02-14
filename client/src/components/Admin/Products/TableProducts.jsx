import React, { useEffect, useState } from 'react';
import { Table, Modal, Form, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../actions';
import FormProductsPost from './FormProductPost';
import FormProducts from './FormProducts';
import './Style.css'

function TableProducts({ currentWines }) {
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalPost, setShowModalPost] = useState(false);
    const [selectedData, setSelectedData] = useState({});

    const handleClick = (item) => {
        setSelectedData(item);
        setShowModalEdit(true);
    };
    const handleClickPost = (e) => {
        e.preventDefault()
        setShowModalPost(true)
    }



    const headers = Object.keys(currentWines[0]);
    console.log(headers)
    return (
        <>
            <div className='container d-flex align-items-center justify-content-evenly'>
                <h1>Catalogue</h1>
                <Button variant='warning' hover onClick={(e) => handleClickPost(e)}>Add Product</Button>
            </div>

            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentWines.map((item, index) => (
                        <tr key={index} onClick={() => handleClick(item)} style={{ cursor: 'pointer' }}>
                            {headers.map((header, subIndex) => (
                                (typeof item[header] !== "object") ?
                                    <td key={subIndex} className="ellipsis">{item[header]}</td> :
                                    <td key={subIndex} className="ellipsis"> {item[header].map((el, index) =>
                                        (typeof el !== 'object') ?
                                            <li key={index} style={{ listStyleType: 'none' }}>{el}</li> :
                                            <li key={index} style={{ listStyleType: 'none' }}>{el.name}</li>
                                    )}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Modal show={showModalEdit} onHide={() => setShowModalEdit(false)} >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormProducts selectedData={selectedData} setShowModalEdit={setShowModalEdit} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModalEdit(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showModalPost} onHide={() => setShowModalPost(false)} >
                <Modal.Header closeButton>
                    <Modal.Title>Create Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormProductsPost setShowModalPost={setShowModalPost} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModalPost(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>


    )
}


export default TableProducts;