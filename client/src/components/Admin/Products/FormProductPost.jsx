import axios from "axios";
import React, { useEffect, useState } from "react";
import { Badge, Button, Form, Image, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getGrapes, getRegions, getStates, getTypes, postProduct } from "../../../actions";


export default function FormProductsPost() {
    const dispatch = useDispatch()
    const types = useSelector((state) => state.types)
    const grapes = useSelector((state) => state.grapes)
    const states = useSelector((state) => state.states)
    const regions = useSelector((state) => state.regions)

    const history = useHistory()

    const [numControls, setNumControls] = useState(1);
    const [error, setError] = useState({})
    const [grape, setGrape] = useState([])
    const [state, setState] = useState([])
    const [region, setRegion] = useState([])
    const [type, setType] = useState([])
    const [visible, setVisible] = useState(false)
    const [winery, setWinery] = useState([''])
    const [loading, setLoading] = useState(false)
    const [input, setInput] = useState({
        name: "",
        price: 0,
        volume: 0,
        quantity: 0,
        stock: 0,
        details: "",
        image: "",
        winerys: [],
        types: [],
        states: [],
        regions: [],
        grapes: [],
    });
    let uploadedUrl


    const [activeButton, setActiveButton] = useState(true)

    const handleAddControl = () => {
        setNumControls(numControls + 1);
        winery.push('')
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
            || grape.length === 0
            || state.length === 0) {
            setActiveButton(true)
        } else {
            setActiveButton(false)
        }


    }, [input, types, grapes, states, regions, winery, grape, type, state])

    function handleChanges(e) {
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

    }

    const handleChangeWinery = (event, index) => {
        const win = event.target.value;
        setWinery(winery.map((el, i) => i == index ? win : el));
    }

    function handleSelectOption(e, set, ele) {
        e.preventDefault()
        set([...ele, e.target.value]);
    }

    const handleOptionRemove = (option, set, ele) => {
        set(ele.filter((o) => o !== option));
    };


    function handleCreate(e) {
        e.preventDefault()
        setInput({
            ...input,
            price: parseInt(input.price, 10),
            volume: parseInt(input.volume, 10),
            quantity: parseInt(input.quantity, 10),
            stock: parseInt(input.stock, 10),
            winerys: winery,
            types: type,
            regions: region,
            states: state,
            grapes: grape
        })
        setVisible(true)
        console.log(input)
    }
    function handleSubmit(e) {
        e.preventDefault()
        console.log(input)
        dispatch(postProduct(input))
        setInput({
            name: "",
            price: 0,
            volume: 0,
            quantity: 0,
            stock: 0,
            details: "",
            image: "",
            winerys: [],
            types: [],
            states: [],
            regions: [],
            grapes: [],
        })
        history.push('/admin')
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

    return (
        <Form>
            <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" value={input.name} onChange={e => handleChanges(e)} required />
            </Form.Group>
            <Form.Group controlId="formPrice">
                <Form.Label>Price</Form.Label>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
                    <Form.Control
                        placeholder="00"
                        aria-label="price"
                        type="number"
                        name="price" value={input.price} onChange={e => handleChanges(e)} required />
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
                    <Form.Control type="number" name="volume" value={input.volume} defaultValue={750} placeholder="750" onChange={e => handleChanges(e)} required />
                    <InputGroup.Text>ml</InputGroup.Text>
                </InputGroup>
            </Form.Group>
            <Form.Group controlId="formQuantity">
                <Form.Label>Quantity of Bottles</Form.Label>
                <Form.Control type="number" name="quantity" value={input.quantity} onChange={e => handleChanges(e)} required />
            </Form.Group>
            <Form.Group controlId="formStock">
                <Form.Label>Stock available</Form.Label>
                <Form.Control type="number" name="stock" value={input.stock} onChange={e => handleChanges(e)} required />
            </Form.Group>
            <Form.Group controlId="formDetails">
                <Form.Label>Details</Form.Label>
                <InputGroup>
                    <InputGroup.Text>Products Details</InputGroup.Text>
                    <Form.Control as="textarea" aria-label="With textarea" type="text" name="details" value={input.details} onChange={e => handleChanges(e)} required />
                </InputGroup>
            </Form.Group>
            <Form.Group controlId="formWinerys">
                <Form.Label>Winerys</Form.Label>
                {winery.map((win, i) => (
                    <Form.Control
                        key={i}
                        type="text"
                        placeholder="Enter a winery"
                        value={win}
                        onChange={(event) => handleChangeWinery(event, i)}
                    />
                ))}
                <Button type="button" variant="warning" className="mt-2 mb-2" onClick={handleAddControl}> Add winery
                </Button>

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
            {grape?.map((option) => (
                <Badge key={option} pill variant="warning" className="mb-2 mr-2 mt-2">
                    {option} <span onClick={() => handleOptionRemove(option, setGrape, grape)}>X</span>
                </Badge>
            ))}
            <Form.Group controlId="formStates">
                <Form.Label>Sates</Form.Label>
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
                <Badge key={option} pill variant="warning" className="mb-2 mr-2 mt-2">
                    {option} <span onClick={() => handleOptionRemove(option, setState, state)}>X</span>
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
                <Badge key={option} pill variant="warning" className="mb-2 mr-2 mt-2">
                    {option} <span onClick={() => handleOptionRemove(option, setRegion, region)}>X</span>
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
                <Badge key={option} pill variant="warning" className="mb-2 mr-2 mt-2">
                    {option} <span onClick={() => handleOptionRemove(option, setType, type)}>X</span>
                </Badge>
            ))}
            <div className="d-flex flex-row-reverse justify-content-evenly mt-3">
                <Button variant="warning" type="button" disabled={activeButton} onClick={e => handleCreate(e)}>
                    Create
                </Button>
                {visible ? <Button variant="success" type="submit" onClick={e => handleSubmit(e)}>
                    Send
                </Button> : null}

            </div>
        </Form>
    )
}
