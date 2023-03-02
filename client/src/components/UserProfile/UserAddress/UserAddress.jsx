import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getStates } from "../../../actions";
import { createUserAddress, deleteUserAddress, editUserAddress, getAllCities, setDefaultAddress } from "../../../actions/userActions";
import { getUserAddresses } from "../../../actions/userActions";
import { Modal, Row, Col, Card, Button } from 'react-bootstrap';
import { Toast } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './address.css';
// import logo from '../../../../public/favicon.ico';


export default function UserAddress() {
    const dispatch = useDispatch();
    const history = useHistory();

    const userInfo = useSelector((state) => state.users.userInfo);
    const states = useSelector((state) => state.products.states);
    const cities = useSelector((state) => state.users.cities);
    const addresses = useSelector(state => state.users.userAddresses);
    const defaultAddress = useSelector((state) => state.users.defaultAddress);
    const localDefaultAddress = JSON.parse(window.localStorage.getItem('defaultAddress'));

    console.log(defaultAddress);

    const [activeButton, setActiveButton] = useState(true)
    const [showToast, setShowToast] = useState(false);
    const [showToastSubmit, setShowToastSubmit] = useState(false);
    const [showToastAddress, setShowToastAddress] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [addressToEdit, setAddressToEdit] = useState(null);
    const [input, setInput] = useState({
        reference: "",
        address: "",
        zipCode: "",
        telephone: "",
        userEmail: "",
        state: "",
        region: "",
    });
    // console.log(states);
    const toggleShowA = () => setShowToast(!showToast);
    const toggleShowSubmit = () => setShowToastSubmit(!showToastSubmit);
    const toggleShowAddress = () => setShowToastAddress(!showToastAddress);

    let orderedStates = states.sort(function (a, b) {
        if (a.name > b.name) {
            return 1;
        }
        if (b.name > a.name) {
            return -1
        }
        return 0;
    });
    //   console.log(orderedStates);

    let orderedCities = cities.municipios?.sort(function (a, b) {
        if (a.nombre > b.nombre) {
            return 1;
        }
        if (b.nombre > a.nombre) {
            return -1
        }
        return 0;
    });

    useEffect(() => {
        dispatch(getStates());
        dispatch(getUserAddresses(userInfo.email))
        if (input.reference === "" ||
            input.address === "" ||
            input.zipCode === "" ||
            input.telephone === "" ||
            input.userEmail === "" ||
            input.state === "" ||
            input.region === "") {
            setActiveButton(true)
        } else {
            setActiveButton(false)
        }
    }, [dispatch, input, addressToEdit]);

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });

    };

    const handleSelect = (e) => {
        if (e.target.name === 'state') {
            dispatch(getAllCities(e.target.value));
            setInput({
                ...input,
                userEmail: userInfo.email,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleCitySelect = (e) => {
        if (e.target.name === 'region') {
            setInput({
                ...input,
                [e.target.name]: e.target.value
            });
        }
    };

    const handleSelectInEdition = (e) => {
        if (e.target.name === 'state') {
            dispatch(getAllCities(e.target.value));
            setAddressToEdit({
                ...addressToEdit,
                state: e.target.value,
            });
        }
    };

    const handleCitySelectInEdition = (e) => {
        if (e.target.name === 'region') {
            setAddressToEdit({
                ...addressToEdit,
                region: e.target.value,
            });
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        if (input.reference === '' || input.address === '' || input.zipCode === 0 || input.telephone === 0)
            return alert('You need to complete all the fields');
        dispatch(createUserAddress(input)).then(() => {
            dispatch(getUserAddresses(userInfo.email))
            toggleShowSubmit()
            setInput({
                reference: '',
                address: '',
                zipCode: '',
                telephone: ''
            });;
        })
    };

    const handleDelete = (e, el) => {
        e.preventDefault()
        dispatch(deleteUserAddress(el.id)).then(() => {
            toggleShowA();
            dispatch(getUserAddresses(userInfo.email))
        })
    };

    const handleEditClick = (address) => {
        console.log(address);
        setAddressToEdit(address);
        setShowEditModal(true);
    };

    const handleSaveChangedAddress = (e) => {
        e.preventDefault();
        console.log(addressToEdit);
        dispatch(editUserAddress(addressToEdit.id, addressToEdit)).then(() => {
            dispatch(getUserAddresses(userInfo.email)).then(() => {
                setShowEditModal(false)
            })
        })
    };

    const handleSetDefaultAddress = (address) => {
        console.log(address)
        dispatch(setDefaultAddress(address)).then(() => {
            dispatch(getUserAddresses(userInfo.email)).then(() => {
                toggleShowAddress();
            })
        });
    }

    return (
        <div className="container col py-5 mt-5" display='flex'>
            <div class="col-md-9">
                <Row className="gap-3 d-flex flex-wrap">
                    {
                        (typeof addresses !== 'string') ?
                            addresses.map((el, index) =>
                            (
                                <>
                                    <Col key={index} xs={12} md={4} className="mb-5 me-5">
                                        <Card className='me-5' border="warning" style={{ width: '15rem' }}>
                                            <Card.Body>
                                                <Form.Check
                                                    type="radio"
                                                    id="custom-switch"
                                                    checked={defaultAddress ? el.id === defaultAddress.id : false}
                                                    label="Main address"
                                                    onClick={(e) => handleSetDefaultAddress(el)}
                                                />

                                                {showToastAddress && (
                                                    <Toast className='toast prefers-reduced-motion: no-preference' show={showToastAddress} onClose={toggleShowAddress} delay={500} autohide>
                                                        <Toast.Header>
                                                            <img src={process.env.PUBLIC_URL + "/favicon.ico"} className="rounded me-2" alt="brand logo" />
                                                            <strong className="me-auto">Street Art Wines Club</strong>
                                                            <small>just now</small>
                                                        </Toast.Header>
                                                        <Toast.Body>Now this is your main address!</Toast.Body>
                                                    </Toast>
                                                )}

                                                <Card.Title>
                                                    {el.reference}
                                                </Card.Title>
                                                <Card.Text className='justify-content-center'>
                                                    {el.address}
                                                    <br />
                                                    {el.telephone}
                                                    <br />
                                                    {el.state}
                                                    <br />
                                                    {el.region}
                                                </Card.Text>
                                                <div class='d-flex justify-content-end'>
                                                    <div>
                                                        <button class="btn btn-warning btn-sm me-2" onClick={() => handleEditClick(el)}>Edit</button>
                                                    </div>
                                                    {/* <div>
                                                        <button class="btn btn-warning btn-sm" onClick={(e) => handleDelete(e, el)}>x</button>
                                                        {showToast && (
                                                            <Toast className='toast prefers-reduced-motion: no-preference' show={showToast} onClose={toggleShowA} delay={100} autohide>
                                                                <Toast.Header>
                                                                    <img src='holder.js/20x20?text=%20' className="rounded me-2" alt="brand logo" />
                                                                    <strong className="me-auto">Street Art Wines Club</strong>
                                                                    <small>just now</small>
                                                                </Toast.Header>
                                                                <Toast.Body>Woohoo, you deleted that address!</Toast.Body>
                                                            </Toast>
                                                        )}
                                                    </div> */}
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <br />
                                </>
                            )) :
                            <div className="address"><p>You don't have registered addresses yet</p></div>
                    }

                    {/* Modal de edición de dirección */}
                    <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit your address</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId="formPhoneAddress">
                                    <Form.Label>Reference</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder={addressToEdit?.reference || 'Insert your reference'}
                                        value={addressToEdit?.reference || ''}
                                        onChange={(e) =>
                                            setAddressToEdit({
                                                ...addressToEdit,
                                                reference: e.target.value,
                                            })
                                        }
                                    />
                                </Form.Group>
                                <Form.Group controlId="formStreetAddress">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder={addressToEdit?.address || 'Insert your address'}
                                        value={addressToEdit?.address || ''}
                                        onChange={(e) =>
                                            setAddressToEdit({
                                                ...addressToEdit,
                                                address: e.target.value,
                                            })
                                        }
                                    />
                                </Form.Group>
                                <Form.Group controlId="formPhoneAddress">
                                    <Form.Label>Contact number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder={addressToEdit?.telephone || 'Insert your contact number'}
                                        value={addressToEdit?.telephone || ''}
                                        onChange={(e) =>
                                            setAddressToEdit({
                                                ...addressToEdit,
                                                telephone: e.target.value,
                                            })
                                        }
                                    />
                                </Form.Group>

                                <Form.Group controlId="formStateAddress">
                                    <Form.Label>State</Form.Label>
                                    <Form.Select name='state' onChange={(e) =>
                                        handleSelectInEdition(e)}>
                                        <option name='state'>State</option>
                                        {orderedStates?.map((el, index) => <option key={index} value={el.name}>{el.name}</option>)}
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group controlId="formRegionAddress">
                                    <Form.Label>City</Form.Label>
                                    <Form.Select name='region' onChange={(e) =>
                                        handleCitySelectInEdition(e)}>
                                        <option name='region'>City</option>
                                        {(orderedCities ? orderedCities.map((el, index) => <option key={index} value={el.nombre}>{el.nombre}</option>) : <div>'Error'</div>)}
                                    </Form.Select>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                                Cancel
                            </Button>
                            <Button variant=" btn-warning" type='submit' onClick={(e) => handleSaveChangedAddress(e)}>
                                Save Change
                            </Button>
                        </Modal.Footer>
                    </Modal>


                </Row>
                <div class="card">
                    <div class="card-body">
                        <h4>Add address</h4>
                        <div class="row mb-3">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Reference (ex. Sam's house)</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                <input type="text" class="form-control" name='reference' value={input.reference} onChange={(e) => handleChange(e)} />
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Complete Address (street & number)</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                <input type="text" class="form-control" name='address' value={input.address} onChange={(e) => handleChange(e)} />
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Zip code</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                <input type="text" class="form-control" name='zipCode' value={input.zipCode} onChange={(e) => handleChange(e)} />
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-sm-9 text-secondary">
                                <Form.Select name='state' onChange={(e) => handleSelect(e)}>
                                    <option name='state'>State</option>
                                    {orderedStates?.map((el, index) => <option key={index} value={el.name}>{el.name}</option>)}
                                </Form.Select>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-sm-9 text-secondary">
                                <Form.Select name='region' onChange={(e) => handleCitySelect(e)}>
                                    <option name='region'>City</option>
                                    {(orderedCities ? orderedCities.map((el, index) => <option key={index} value={el.nombre}>{el.nombre}</option>) : <div>'Error'</div>)}
                                </Form.Select>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Contact number</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                <input type="text" class="form-control" name='telephone' value={input.telephone} onChange={(e) => handleChange(e)} />
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-3">
                                <div class="col-sm-9 text-secondary">
                                    <input type="button" class="btn btn-warning float-end" value="Add" onClick={(e) => handleSubmit(e)} disabled={activeButton} />
                                </div>
                                {showToastSubmit && (
                                    <Toast className='toast prefers-reduced-motion: no-preference' show={showToastSubmit} onClose={toggleShowSubmit} delay={2000} autohide>
                                        <Toast.Header>
                                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                                            <strong className="me-auto">Street Art Wines Club</strong>
                                            <small>just now</small>
                                        </Toast.Header>
                                        <Toast.Body>Woohoo, you added that address!</Toast.Body>
                                    </Toast>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
};

