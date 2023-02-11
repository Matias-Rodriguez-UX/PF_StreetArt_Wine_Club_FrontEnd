import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getGrapes, getRegions, getStates, getTypes } from "../../../actions";


export default function FormProductsPost() {
    const dispatch = useDispatch()
    const types = useSelector((state) => state.types)
    const grapes = useSelector((state) => state.grapes)
    const states = useSelector((state) => state.states)
    const regions = useSelector((state) => state.regions)
    const history = useHistory()

    const [error, setError] = useState({})
    const [input, setInput] = useState({
        name: "",
        price: 0,
        volume: 0,
        quantity: 0,
        stock: 0,
        details: "",
        image: "",
        winery: [''],
        types: [],
        regions: [],
        grapes: [],
    });

    const [activeButton, setActiveButton] = useState(false)


    useEffect(() => {
        dispatch(getTypes())
        dispatch(getGrapes())
        dispatch(getRegions())
        dispatch(getStates())
            ;
        if (input.types.length === 0
            || input.name === ""
            || input.price <= 0
            || input.quantity <= 0
            || input.winery.length === 0
            || input.types.length === 0
            || input.grapes.length === 0) {
            setActiveButton(false)
        } else {
            setActiveButton(true)
        }

    }, [input, dispatch])

    function handleChanges(e) {
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleCheck(e) {
        e.preventDefault()
        if (e.target.checked) {
            if (!input.types.includes(e.target.value)) {
                setInput({
                    ...input,
                    types: [...input.types, e.target.value]
                })
            } else {
                setInput({
                    ...input,
                    types: input.types.filter(el => el !== e.target.value)
                })
            }
        } else {
            setInput({
                ...input,
                types: input.types.filter(el => el !== e.target.value)
            })
        }


    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(postProduct(input))
        setInput({
            name: "",
            price: 0,
            volume: 0,
            quantity: 0,
            stock: 0,
            details: "",
            image: "",
            winery: [''],
            types: [],
            regions: [],
            grapes: [],
        })
        history.push('/admin')

    }

    return (
        <Form>
            <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" value={input.name} handleChanges={e => handleChanges(e)} required />
            </Form.Group>
            <Form.Group controlId="formPrice">
                <Form.Label>Price</Form.Label>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
                    <Form.Control
                        placeholder="00"
                        aria-label="price"
                        type="number"
                        name="price" value={input.price} handleChanges={e => handleChanges(e)} required />
                    <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>
            </Form.Group>
            <Form.Group controlId="formImg">
                <Form.Label>Image</Form.Label>
                <Form.Control type="url" name="image" value={input.image} handleChanges={e => handleChanges(e)} required />
            </Form.Group>
            <Form.Group controlId="formVolume">
                <Form.Label>Volume</Form.Label>
                <InputGroup className="mb-3">
                    <Form.Control type="number" name="valume" value={input.valume} handleChanges={e => handleChanges(e)} required />
                    <InputGroup.Text>ml</InputGroup.Text>
                </InputGroup>
            </Form.Group>
            <Form.Group controlId="formQuantity">
                <Form.Label>Quantity of Bottles</Form.Label>
                <Form.Control type="number" name="quantity" value={input.quantity} handleChanges={e => handleChanges(e)} required />
            </Form.Group>
            <Form.Group controlId="formStock">
                <Form.Label>Stock available</Form.Label>
                <Form.Control type="number" name="stock" value={input.stock} handleChanges={e => handleChanges(e)} required />
            </Form.Group>
            <Form.Group controlId="formDetails">
                <Form.Label>Details</Form.Label>
                <InputGroup>
                    <InputGroup.Text>Products Details</InputGroup.Text>
                    <Form.Control as="textarea" aria-label="With textarea" type="text" name="details" value={input.details} handleChanges={e => handleChanges(e)} required />
                </InputGroup>
            </Form.Group>
            <Form.Group controlId="formWinerys">
                <Form.Label>Winerys</Form.Label>
                {input.winery.map((el, index) =>
                    <Form.Control className="mb-2" type="text" name="winery" value={input.winery[index]} handleChanges={e => {
                        setInput({
                            ...input,
                            winery: [...input.winery, e.target.value]
                        })
                    }} required />)
                }
                <Button
                    type="button"

                    onClick={() => {
                        setInput({
                            ...input,
                            winery: [...input.winery, '']
                        })
                            ;
                    }}
                >
                    Add another winery
                </Button>
            </Form.Group>
            <Form.Group controlId="formGrapes">
                <Form.Label>Grapes</Form.Label>
                <InputGroup>
                    <Form.Control type="text" />
                </InputGroup>
            </Form.Group>
            <Form.Group controlId="formStates">
                <Form.Label>Sates</Form.Label>
                <InputGroup>
                    <Form.Control type="text" />
                </InputGroup>
            </Form.Group>
            <Form.Group controlId="formRegions">
                <Form.Label>Regions</Form.Label>
                <InputGroup>
                    <Form.Control type="text" />
                </InputGroup>
            </Form.Group>
            <Form.Group controlId="formTypes">
                <Form.Label>Types</Form.Label>
                <InputGroup>
                    <Form.Control type="text" />
                </InputGroup>
            </Form.Group>
            <div className="d-flex flex-row-reverse justify-content-evenly mt-3">
                <Button variant="warning" type="submit">
                    Create
                </Button>
                <Button variant="outline-dark" type="submit">
                    Cancel
                </Button>
            </div>

        </Form>
    )
}
