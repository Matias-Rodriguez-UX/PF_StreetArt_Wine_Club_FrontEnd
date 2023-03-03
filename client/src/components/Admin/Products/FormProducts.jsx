import React, { useEffect, useState } from "react";
import { Modal, Button, Form, InputGroup, Badge, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getGrapes, getProducts, getRegions, getStates, getTypes, updateProduct } from "../../../actions";
import Swal from 'sweetalert2';
const cloudKey = process.env.REACT_APP_API_KEY_CLOUD;

export default function FormProducts({ selectedData, setShowModalEdit }) {
    const dispatch = useDispatch()

    const types = useSelector((state) => state.products.types)
    const grapes = useSelector((state) => state.products.grapes)
    const states = useSelector((state) => state.products.states)
    const regions = useSelector((state) => state.products.regions)

    const [showModal, setShowModal] = useState(false);
    const [showModalUpdate, setShowModalUpdate] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);
    const [productToUpdate, setProductToUpdate] = useState(null);

    const [numControls, setNumControls] = useState(selectedData.winery.length);
    const [grape, setGrape] = useState(selectedData.grapes.map(el => el.name))
    const [state, setState] = useState(selectedData.states.map(el => el.name))
    const [region, setRegion] = useState(selectedData.regions.map(el => el.name))
    const [type, setType] = useState(selectedData.types.map(el => el.name))
    const [winery, setWinery] = useState(selectedData.winery)
    const [loading, setLoading] = useState(false)
    const [input, setInput] = useState({
        name: selectedData.name,
        price: selectedData.price,
        volume: selectedData.volume,
        quantity: selectedData.quantity,
        stock: selectedData.stock,
        details: selectedData.details,
        image: selectedData.image,
        winery: selectedData.winery,
        types: selectedData.types.map(el => el.name),
        state: selectedData.states.map(el => el.name),
        regions: selectedData.regions.map(el => el.name),
        grapes: selectedData.grapes.map(el => el.name)
    });
    let uploadedUrl
    const vols = [187, 375, 750, 1500, 3000, 6000]
    const boxsQ = [1, 2, 3, 4, 6, 12, 18, 24]

    function handleDelete(id) {
        setProductToDelete(id)
        setShowModal(true)
    }

    const addAlertUpdate = (name) => {
        Swal.fire({
            title: "YOUR PRODUCT WAS UPDATE",
            text: `You modified the product ${name}`,
            icon: 'success',
            timer: '3000',
            timerProgressBar: true,
            allowOutsideClick: true,
            confirmButtonColor: '#ffc107'
        })
    }

    const addAlertDelete = (name) => {
        Swal.fire({
            title: "YOUR PRODUCT WAS DELETE",
            text: `You delete the product ${name}`,
            icon: 'error',
            timer: '3000',
            timerProgressBar: true,
            allowOutsideClick: true,
            confirmButtonColor: '#ffc107'
        })
    }

    function handleUpdate(id) {
        setInput({
            ...input,
            price: parseInt(input.price, 10),
            volume: parseInt(input.volume, 10),
            quantity: parseInt(input.quantity, 10),
            stock: parseInt(input.stock, 10),
            winery: winery,
            types: type,
            regions: region,
            state: state,
            grapes: grape
        })
        setProductToUpdate(id)
        setShowModalUpdate(true)
    }

    function handleConfirmDelete(name) {
        dispatch(deleteProduct(productToDelete))
        addAlertDelete(name);
        setShowModalEdit(false)
        setTimeout(function () {
            dispatch(getProducts());
        }, 2000);

    }

    function handleConfirmUpdate(name) {
        dispatch(updateProduct(productToUpdate, input))
        addAlertUpdate(name);
        setShowModalEdit(false)
        setTimeout(function () {
            dispatch(getProducts());
        }, 2000);
    }

    function handleChanges(e) {
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

    }

    const upLoadImage = async (e) => {
        e.preventDefault();
        const file = e.target.files[0]
        console.log(file)
        const formData = new FormData();
        console.log(file)
        formData.append('file', file);
        formData.append('upload_preset', 'products')
        formData.append('api_key', 757917398541782);
        setLoading(true)
        const res = await fetch('https://api.cloudinary.com/v1_1/dom9fvn1q/image/upload',
            {
                method: "POST",
                body: formData
            })
        const resFile = await res.json()
        console.log(res)
        uploadedUrl = resFile.secure_url
        console.log(uploadedUrl)
        setLoading(false)
        setInput({
            ...input,
            image: uploadedUrl
        })
    }
    const [activeButton, setActiveButton] = useState(true)

    const handleAddControl = () => {
        setNumControls(numControls + 1);
        winery.push('')
    };

    const handleRemoveControl = () => {
        setNumControls(numControls - 1);
        winery.pop()
    };

    useEffect(() => {
        if (!types.length || !grapes.length || !states.length || !regions.length) {
            dispatch(getTypes())
            dispatch(getGrapes())
            dispatch(getRegions())
            dispatch(getStates())
        }
        ;
        if (type.length === 0
            || input.name === ""
            || input.price <= 0
            || input.quantity <= 0
            || winery.length === 0
            || region.length === 0
            || grape.length === 0
            || state.length === 0) {
            setActiveButton(true)
        } else {
            setActiveButton(false)
        }


    }, [input, types, grapes, states, regions, winery, grape, type, state])

    const handleChangeWinery = (event, index) => {
        const win = event.target.value;
        setWinery(winery.map((el, i) => i == index ? win : el));
    }

    function handleSelectOption(e, set, ele) {
        e.preventDefault()
        if (ele.indexOf(e.target.value) < 0) {
            set([...ele, e.target.value])
        }
    }

    const handleOptionRemove = (option, set, ele) => {
        set(ele.filter((o) => o !== option));
    };

    return (
        <>
            <Form>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" defaultValue={input.name} value={input.name} onChange={e => handleChanges(e)} />
                </Form.Group>
                <Form.Group controlId="formPrice">
                    <Form.Label>Price</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
                        <Form.Control
                            placeholder="00"
                            aria-label="price"
                            type="number"
                            name="price" value={input.price} defaultValue={input.price} onChange={e => handleChanges(e)} required />
                        <InputGroup.Text>.00</InputGroup.Text>
                    </InputGroup>
                </Form.Group>
                <Form.Group controlId="formImg">
                    <Form.Label>Upload image</Form.Label>
                    <Form.Control type="file" name="image" multiple onChange={upLoadImage} />
                    {loading ? (<p>Loading Image</p>) : (<Image src={input.image} width='100px' height='100px' />)}
                </Form.Group>
                <Form.Group controlId="formVolume">
                    <Form.Label>Volume</Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control
                            name="volume"
                            as="select"
                            defaultValue={input.quantity}
                            onChange={e => handleChanges(e)}>
                            <option value="">Enter the volume</option>
                            {vols.map((el, index) => <option key={index} value={el}>{el}</option>)}
                        </Form.Control>
                        <InputGroup.Text>ml</InputGroup.Text>
                    </InputGroup>
                </Form.Group>
                <Form.Group controlId="formQuantity">
                    <Form.Label>Quantity of Bottles</Form.Label>
                    <Form.Control
                        name="quantity"
                        as="select"
                        defaultValue={input.quantity}
                        onChange={e => handleChanges(e)}>
                        <option value="">Enter the size of the box</option>
                        {boxsQ.map((el, index) => <option key={index} value={el}>{el}</option>)}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formStock">
                    <Form.Label>Stock available</Form.Label>
                    <Form.Control min={0} max={1000} type="number" name="stock" defaultValue={1} value={input.stock} onChange={e => handleChanges(e)} required />
                </Form.Group>
                <Form.Group controlId="formDetails">
                    <Form.Label>Details</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>Products Details</InputGroup.Text>
                        <Form.Control as="textarea" aria-label="With textarea" type="text" defaultValue={input.details} name="details" value={input.details} onChange={e => handleChanges(e)} required />
                    </InputGroup>
                </Form.Group>
                <Form.Group controlId="formWinerys">
                    <Form.Label>Winerys</Form.Label>
                    <InputGroup>
                        {winery.map((win, i) => (
                            <Form.Control
                                key={i}
                                type="text"
                                placeholder="Enter a winery"
                                value={win}
                                onChange={(event) => handleChangeWinery(event, i)}
                            />
                        ))}
                    </InputGroup>
                    <div className="d-flex align-items-center justify-content-evenly">
                        <Button type="button" variant="outline-warning" className="mt-2 mb-2 text-dark" onClick={handleRemoveControl}> Remove winery
                        </Button>
                        <Button type="button" variant="warning" className="mt-2 mb-2" onClick={handleAddControl}> Add winery
                        </Button>
                    </div>

                </Form.Group>
                <Form.Group controlId="formGrapes">
                    <Form.Label>Grapes</Form.Label>
                    <InputGroup>
                        <Form.Control
                            name="grapes"
                            as="select"
                            onChange={(e) => { handleSelectOption(e, setGrape, grape) }}>
                            <option value="">Select the grapes</option>
                            {grapes?.map((el, index) => <option key={index} value={el.name}>{el.name}</option>)}
                        </Form.Control>
                    </InputGroup>
                </Form.Group>
                {grape?.map((option, index) => (
                    <Badge style={{ cursor: 'pointer' }} key={option} pill bg="warning" text="dark" className="mb-2 mr-2 mt-2" onClick={() => handleOptionRemove(option, setGrape, grape)}>
                        {option}  X
                    </Badge>
                ))}
                <Form.Group controlId="formStates">
                    <Form.Label>States</Form.Label>
                    <InputGroup>
                        <Form.Control
                            name="states"
                            as="select"
                            onChange={(e) => { handleSelectOption(e, setState, state) }}>
                            <option value="">Select the states</option>
                            {states?.map((el, index) => <option key={index} value={el.name}>{el.name}</option>)}
                        </Form.Control>
                    </InputGroup>
                </Form.Group>
                {state?.map((option) => (
                    <Badge style={{ cursor: 'pointer' }} key={option} pill bg="warning" text="dark" className="mb-2 mr-2 mt-2" onClick={() => handleOptionRemove(option, setState, state)}>
                        {option}   X
                    </Badge>
                ))}
                <Form.Group controlId="formRegions">
                    <Form.Label>Regions</Form.Label>
                    <InputGroup>
                        <Form.Control
                            name="regions"
                            as="select"
                            onChange={(e) => { handleSelectOption(e, setRegion, region) }}>
                            <option value="">Select the regions</option>
                            {regions?.map((el, index) => <option key={index} value={el.name}>{el.name}</option>)}
                        </Form.Control>
                    </InputGroup>
                </Form.Group>
                {region?.map((option) => (
                    <Badge style={{ cursor: 'pointer' }} key={option} pill bg="warning" text="dark" className="mb-2 mr-2 mt-2" onClick={() => handleOptionRemove(option, setRegion, region)}>
                        {option}  X
                    </Badge>
                ))}
                <Form.Group controlId="formTypes">
                    <Form.Label>Types</Form.Label>
                    <InputGroup>
                        <Form.Control
                            name="type"
                            as="select"
                            onChange={(e) => { handleSelectOption(e, setType, type) }}>
                            <option value="">Select the types</option>
                            {types?.map((el, index) => <option key={index} value={el.name}>{el.name}</option>)}
                        </Form.Control>
                    </InputGroup>
                </Form.Group>
                {type?.map((option) => (
                    <Badge style={{ cursor: 'pointer' }} key={option} pill bg="warning" text="dark" className="mb-2 mr-2 mt-2" onClick={() => handleOptionRemove(option, setType, type)}>
                        {option}   X
                    </Badge>
                ))}
                <div className="d-flex flex-row-reverse justify-content-evenly mt-3">
                    <Button variant="warning" type="button" onClick={() => handleUpdate(selectedData.id)} disabled={activeButton} >
                        Save the change
                    </Button>
                    <Button variant="outline-dark" type="button" onClick={() => setShowModalEdit(false)}>
                        Cancel
                    </Button>
                    <Button variant="outline-danger" type="button" onClick={() => handleDelete(selectedData.id)}>
                        Delete
                    </Button>
                </div>

            </Form>
            <Modal show={showModal} onHide={() => setShowModal(false)} className="bg-dark">
                <Modal.Header closeButton>
                    <Modal.Title>Delete Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={() => setShowModal(false)}>
                        No
                    </Button>
                    <Button variant="outline-danger" type="button" onClick={() => handleConfirmDelete(input.name)} >
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showModalUpdate} onHide={() => setShowModalUpdate(false)} className="bg-dark">
                <Modal.Header closeButton>
                    <Modal.Title>Update Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure about the changes you are going to make?</Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={() => setShowModalUpdate(false)}>
                        No
                    </Button>
                    <Button variant="outline-success" type="button" onClick={() => handleConfirmUpdate(input.name)} >
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}