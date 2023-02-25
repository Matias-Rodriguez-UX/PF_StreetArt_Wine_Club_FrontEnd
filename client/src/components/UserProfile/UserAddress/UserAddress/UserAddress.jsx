import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getStates } from "../../../../actions";
import { createUserAddress, deleteUserAddress, editUserAddress, getAllCities } from "../../../../actions/userActions";
import { getUserAddresses } from "../../../../actions/userActions";
import { Modal, Row, Col, Card, Button } from 'react-bootstrap';
import { Toast } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './address.css';
// import logo from '../../../../public/favicon.ico';


export default function UserAddress(){
    const dispatch = useDispatch();
    const history = useHistory();
    
    const userInfo = useSelector((state) => state.users.userInfo);
    const states = useSelector((state) => state.products.states);
    const cities = useSelector((state) => state.users.cities);
    const addresses = useSelector(state => state.users.userAddresses);
    console.log(addresses);

    const [shouldRender, setShouldRender] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [showToastSubmit, setShowToastSubmit] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [addressToEdit, setAddressToEdit] = useState(null);
    const [ input, setInput ] = useState({
        reference: '',
        address: '',
        zipCode:"",
        telephone: "",
        state: "",
        region: ""
    });
    // console.log(states);
    input.userEmail = userInfo.email; 
    const toggleShowA = () => setShowToast(!showToast);
    const toggleShowSubmit = () => setShowToastSubmit(!showToastSubmit);

    let orderedStates = states.sort(function(a,b) {
        if (a.name > b.name){
            return 1;
        }
        if (b.name > a.name){
            return -1
        }
        return 0;
    });
    //   console.log(orderedStates);
   
    let orderedCities = cities.municipios?.sort(function(a,b) {
        if (a.nombre > b.nombre){
            return 1;
        }
        if (b.nombre > a.nombre){
            return -1
        }
        return 0;
        });

    useEffect(() => {
        dispatch(getStates());
        dispatch(getUserAddresses(userInfo.email))
    }, [dispatch]);

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
       
    };
//  console.log(input);
    const handleSelect =  (e) => {
        if (e.target.name === 'state') {
             dispatch(getAllCities(e.target.value));
            setInput({
                ...input,
                [e.target.name] : e.target.value
            });
        }
    };
    // console.log(orderedCities);

    const handleCitySelect =  (e) => {
        if (e.target.name === 'region') {
            // console.log(e.target.name);
            console.log(e.target.value);
            setInput({
                ...input,
                [e.target.name] : e.target.value
            });
        }
    };
    // console.log(input);

    const handleSelectInEdition = (e) => {
            if (e.target.name === 'state') {
                console.log(e.target.value);
                 dispatch(getAllCities(e.target.value));
                 setAddressToEdit({
                    ...addressToEdit,
                    state: e.target.value,
                });
            }
    };

    const handleCitySelectInEdition =  (e) => {
        if (e.target.name === 'region') {
            console.log(e.target.name);
            console.log(e.target.value);
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
        dispatch(createUserAddress(input));
        toggleShowSubmit();
        setInput({
            reference: '',
            address: '',
            zipCode: '',
            telephone: ''
        });
        window.location.reload();
    };

    const handleDelete = (e, el) => {
        e.preventDefault()
        dispatch(deleteUserAddress(el.id));
        toggleShowA();
        window.location.reload();
    };

    const handleEditClick = (address) => {
        console.log(address);
        setAddressToEdit(address);
        setShowEditModal(true);
      };

    const handleSaveChangedAddress = (e) => {
        e.preventDefault();
        console.log(addressToEdit);
        // if (input.reference === '' || input.address === '' || input.zipCode === 0 || input.telephone === 0) 
        // return alert('You need to complete all the fields');
        dispatch(editUserAddress(addressToEdit));
        setShowEditModal(false);
        setShouldRender(true);
    };
    
    return (
        <div className="container col py-5 mt-5" display='flex'>
          <div class="col-md-9">
          <Row>
                {
                    (typeof addresses !== 'string') ?
                addresses.map((el, index) => 
                    ( 
                    <>
                    <Col key={index} xs={12} md={4} className="mb-5 me-5">
                    <Card className='me-5' border="warning" style={{ width: '15rem' }}>
                    <Card.Body>
                    <Form.Check 
                            type="switch"
                            id="custom-switch"
                            label=""
                            /> 
                      <Card.Title>                            
                        {el.reference}
                     </Card.Title>
                      <Card.Text className='justify-content-center'>
                        {el.address}
                        <br/>
                        {el.telephone}
                        <br/>
                        {el.state}
                        <br/>
                        {el.region}
                      </Card.Text> 
                      <div class='d-flex justify-content-end'>  
                      <div>                   
                        <button class="btn btn-warning btn-sm me-2" onClick={() => handleEditClick(el)}>Edit</button>
                        </div>
                        <div>
                        <button class="btn btn-warning btn-sm" onClick={(e) => handleDelete(e, el)}>x</button>
                        {showToast && (
                            <Toast className='toast prefers-reduced-motion: no-preference' show={showToast} onClose={toggleShowA}  delay={100} autohide>
                            <Toast.Header>
                                <img src='holder.js/20x20?text=%20' className="rounded me-2" alt="brand logo" />
                                <strong className="me-auto">Street Art Wines Club</strong>
                                <small>just now</small>
                            </Toast.Header>
                            <Toast.Body>Woohoo, you deleted that address!</Toast.Body>
                            </Toast>
                        )}
                        </div>
                    </div>
                    </Card.Body>
                    </Card>
                    </Col>
                    <br />  
                    </> 
                )): 
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
                            Cancelar
                        </Button>
                        <Button variant=" btn-warning" type='submit' onClick={(e) => handleSaveChangedAddress(e)}>
                            Guardar cambios
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
                                        <input type="text" class="form-control" name='address' value={input.address} onChange={(e) => handleChange(e)}/>
                                    </div>
                                </div>
                                
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Zip code</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="text" class="form-control" name='zipCode' value={input.zipCode} onChange={(e) => handleChange(e)}/>
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
                                        <input type="text" class="form-control" name='telephone' value={input.telephone} onChange={(e)=>handleChange(e)}/>
                                    </div>
                                </div>
    
                                <div class="row">
                                    <div class="col-sm-3">
                                    <div class="col-sm-9 text-secondary">
                                        <input type="button" class="btn btn-warning btn-sm" value="Add" onClick={(e) => handleSubmit(e)}/>
                                    </div>
                                        {showToastSubmit && (
                                        <Toast className='toast prefers-reduced-motion: no-preference' show={showToastSubmit} onClose={toggleShowSubmit}  delay={150} autohide>
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

