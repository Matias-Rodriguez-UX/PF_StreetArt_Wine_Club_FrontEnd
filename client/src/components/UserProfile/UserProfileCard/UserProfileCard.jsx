import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import { CloudinaryContext, Image, Transformation } from 'cloudinary-react';

// const cloudinaryConfig = {
//   cloud_name: 'dom9fvn1q',
//   api_key: '757917398541782',
//   api_secret: '2uqjwgL1ZZuqdoTN-YT-Kpc0aLY'
// };

export default function UserProfileCard({ userName, userPicture, userEmail }) {
    // const [selectedFile, setSelectedFile] = useState(null);

    // const onFileChange = event => {
    //     setSelectedFile(event.target.files[0]);
    //  };

    return (
        <>
        <div className="container col py-5 mt-5" display='flex'>
            <h1 className="text-center">My info</h1>
                <Form>   
                {/* <CloudinaryContext cloudName={cloudinaryConfig.cloud_name}>   */}
                <Form.Group controlId="formImg">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" accept="image/png, image/jpeg" name="image" />
                </Form.Group>
                {/* </CloudinaryContext> */}
                <div className="form-row">
                <Form.Group className=" col mb-3" controlId="formBasicName">
                    <Form.Label>Name </Form.Label>
                    <Form.Control type="text" placeholder="Enter your name"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label>Lastname </Form.Label>
                    <Form.Control type="text" placeholder="Enter your lastname"/>
                </Form.Group>
                </div>

                <Form.Group className="mb-3" controlId="formBasicId">
                    <Form.Label>Id number </Form.Label>
                    <Form.Control type="text" placeholder="Enter your id"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                     We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="text" placeholder="Enter your phone number"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter your address"/>
                </Form.Group>

                
                <Form.Group className="mb-3" controlId="formBasicState">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="Enter your state"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Enter your city"/>
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicCP">
                    <Form.Label>CP</Form.Label>
                    <Form.Control type="text" placeholder="Enter your CP"/>
                </Form.Group>

                <Button className="btn btn-warning btn-sm" variant="primary" type="submit">
                    Save Profile
                </Button>
                </Form>
            </div>
        </>
    );
};