import React, { useEffect, useState } from "react";
import { Badge, Button, Form, Image, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getGrapes, getProducts, getRegions, getStates, getTypes, postProduct } from "../../../actions";
import Swal from 'sweetalert2';
const cloudKey = process.env.REACT_APP_API_KEY_CLOUD;

export default function FormProductsPost({ setShowModalPost }) {
    const dispatch = useDispatch()
    const types = useSelector((state) => state.products.types)
    const grapes = useSelector((state) => state.products.grapes)
    const states = useSelector((state) => state.products.states)
    const regions = useSelector((state) => state.products.regions)

    const [numControls, setNumControls] = useState(1);
    const [postSuccess, setPostSuccess] = useState(false);
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
        winery: [],
        types: [],
        state: [],
        regions: [],
        grapes: [],
    });
    let uploadedUrl
    const vols = [187, 375, 750, 1500, 3000, 6000]
    const boxsQ = [1, 2, 3, 4, 6, 12, 18, 24]

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
            || region.length === 0
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
        if (ele.indexOf(e.target.value) < 0) {
            set([...ele, e.target.value])
        }
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
            winery: winery,
            types: type,
            regions: region,
            state: state,
            grapes: grape
        })
        setVisible(true)
    }
    const handleSubmit = async (e, name) => {
        e.preventDefault()
        try {
            const response = dispatch(postProduct(input));
            if (response === 200) {
                setPostSuccess(true);
            }
        } catch (error) {
            console.error(error);
        }
        setInput({
            name: "",
            price: 0,
            volume: 0,
            quantity: 0,
            stock: 0,
            details: "",
            image: "",
            winery: [],
            types: [],
            state: [],
            regions: [],
            grapes: [],
        })
        addAlertCreate(name)
        setShowModalPost(false)
        setTimeout(function () {
            dispatch(getProducts());
        }, 3000);
    }

    const addAlertCreate = (name) => {
        Swal.fire({
            title: "YOUR PRODUCT WAS CREATE",
            text: `You created the product ${name}`,
            icon: 'success',
            timer: '3000',
            timerProgressBar: true,
            allowOutsideClick: true,
            confirmButtonColor: '#ffc107'
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

    return (
        <>

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
                        defaultValue={750}
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
                        <Form.Control as="textarea" aria-label="With textarea" type="text" defaultValue={'vino'} name="details" value={input.details} onChange={e => handleChanges(e)} required />
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
                        {option}  X
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
                        {option}  X
                    </Badge>
                ))}
                <div className="d-flex flex-row-reverse justify-content-evenly mt-3">
                    {visible && !activeButton ? <Button variant="success" type="submit" onClick={e => handleSubmit(e, input.name)} style={{ width: '60%' }}>
                        Send
                    </Button> : null}
                    {!visible || activeButton ? <Button variant="warning" type="button" disabled={activeButton} onClick={e => handleCreate(e)} style={{ width: '60%' }} >
                        Create
                    </Button> : null}
                </div>
            </Form>

        </>
    )
}
