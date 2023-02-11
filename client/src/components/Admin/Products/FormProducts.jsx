import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";


export default function FormProducts({ selectedData }) {

    return (
        <Form>
            <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" defaultValue={selectedData.name} />
            </Form.Group>
            <Form.Group controlId="formPrice">
                <Form.Label>Price</Form.Label>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
                    <Form.Control
                        placeholder="pricr"
                        aria-label="price"
                        defaultValue={selectedData.price}
                    />
                    <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>
            </Form.Group>
            <Form.Group controlId="formImg">
                <Form.Label>Image</Form.Label>
                <Form.Control type="url" defaultValue={selectedData.image} />
            </Form.Group>
            <Form.Group controlId="formVolume">
                <Form.Label>Volume</Form.Label>
                <InputGroup className="mb-3">
                    <Form.Control type="text" defaultValue={selectedData.volume} />
                    <InputGroup.Text>ml</InputGroup.Text>
                </InputGroup>
            </Form.Group>
            <Form.Group controlId="formQuantity">
                <Form.Label>Quantity of Bottles</Form.Label>
                <Form.Control type="text" defaultValue={selectedData.quantity} />
            </Form.Group>
            <Form.Group controlId="formStock">
                <Form.Label>Stock available</Form.Label>
                <Form.Control type="text" defaultValue={selectedData.stock} />
            </Form.Group>
            <Form.Group controlId="formDetails">
                <Form.Label>Details</Form.Label>
                <InputGroup>
                    <InputGroup.Text>Products Details</InputGroup.Text>
                    <Form.Control as="textarea" aria-label="With textarea" defaultValue={selectedData.details} />
                </InputGroup>
            </Form.Group>
            <Form.Group controlId="formWinerys">
                <Form.Label>Winerys</Form.Label>
                <InputGroup>
                    {selectedData.winery?.map(
                        (win, index) => (<Form.Control className="mb-2" key={index} type="text" defaultValue={win} controlId={`wineryControl-${index}`} />)
                    )}
                </InputGroup>
            </Form.Group>
            <Form.Group controlId="formGrapes">
                <Form.Label>Grapes</Form.Label>
                <InputGroup>
                    {selectedData.grapes?.map(
                        (grape, index) => (<Form.Control key={index} type="text" defaultValue={grape.name} controlId={`grapeControl-${index}`} />)
                    )}
                </InputGroup>
            </Form.Group>
            <Form.Group controlId="formStates">
                <Form.Label>Sates</Form.Label>
                <InputGroup>
                    {selectedData.states?.map(
                        (state, index) => (<Form.Control key={index} type="text" defaultValue={state.name} controlId={`stateControl-${index}`} />)
                    )}
                </InputGroup>
            </Form.Group>
            <Form.Group controlId="formRegions">
                <Form.Label>Regions</Form.Label>
                <InputGroup>
                    {selectedData.regions?.map(
                        (region, index) => (<Form.Control type="text" key={index} defaultValue={region.name} controlId={`regionControl-${index}`} />)
                    )}
                </InputGroup>
            </Form.Group>
            <Form.Group controlId="formTypes">
                <Form.Label>Types</Form.Label>
                <InputGroup>
                    {selectedData.types?.map(
                        (type, index) => (<Form.Control key={index} type="text" defaultValue={type.name} controlId={`typeControl-${index}`} />)
                    )}
                </InputGroup>
            </Form.Group>
            <div className="d-flex flex-row-reverse justify-content-evenly mt-3">
                <Button variant="warning" type="submit">
                    Save the change
                </Button>
                <Button variant="outline-dark" type="submit">
                    Cancel
                </Button>
            </div>

        </Form>
    )
}

// {
//     "id": 1,
//     "name": "C215",
//     "price": 6500,
//     "image": "https://res.cloudinary.com/dom9fvn1q/image/upload/v1675445853/ImagesStreetArt/5_hp7hkk.png",
//     "volume": 750,
//     "quantity": 4,
//     "stock": 19,
//     "details": "tanins, blueberry, spices",
//     "winery": [
//         "Revancha",
//         "Gauchezco"
//     ],
//     "grapes": [
//         {
//             "id": 8,
//             "name": "Cabernet Franc",
//             "Product_Grape": {
//                 "productId": 1,
//                 "grapeId": 8
//             }
//         },
//         {
//             "id": 22,
//             "name": "Malbec",
//             "Product_Grape": {
//                 "productId": 1,
//                 "grapeId": 22
//             }
//         }
//     ],
//     "states": [
//         {
//             "id": 50,
//             "name": "Mendoza",
//             "Product_State": {
//                 "productId": 1,
//                 "stateId": 50
//             }
//         }
//     ],
//     "regions": [],
//     "types": [
//         {
//             "id": 1,
//             "name": "red",
//             "Product_Type": {
//                 "productId": 1,
//                 "typeId": 1
//             }
//         }
//     ]
// }