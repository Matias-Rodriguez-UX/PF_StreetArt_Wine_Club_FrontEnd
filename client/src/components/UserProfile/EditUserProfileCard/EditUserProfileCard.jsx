import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector} from 'react-redux';
import { getUserInfo, editUserInfo, editUserAddress } from "../../../actions/userActions";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Image} from "react-bootstrap";
import { useHistory } from "react-router-dom";




export default function EditUserProfileCard() {
    const { isAuthenticated: auth, user } = useAuth0();
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.users.userInfo);
	const userId = userInfo.id;
	// console.log(userId)
	const addressSelect = userInfo.addresses.length - 1
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState({
		fullname: userInfo.fullname,
		profile: userInfo.profile? userInfo.profile: '',
        avatar: userInfo.avatar,
		status: 'active',
		reference:userInfo.addresses.length? userInfo.addresses[addressSelect].reference: '' ,
        telephone: userInfo.addresses.length? userInfo.addresses[addressSelect].telephone: '' ,
        address:userInfo.addresses.length? userInfo.addresses[addressSelect].address: '' ,
        state:userInfo.addresses.length? userInfo.addresses[addressSelect].state: '' ,
        region:userInfo.addresses.length? userInfo.addresses[addressSelect].region: '' ,
        zipCode: userInfo.addresses.length? userInfo.addresses[addressSelect].zipCode: '' ,
		userEmail: userInfo.email
    });
	input.id=userId;
	input.email=userInfo.email;
	// console.log(input.id);
    let userEmail = '';

    if(auth){
        userEmail = user.email
    };

    useEffect(() => {
        dispatch(getUserInfo(userEmail))
    }, [dispatch, user])

	

    //Método para cargar las imágenes a cloudinary
    const uploadImage = async (event) => {
        event.preventDefault();
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        console.log(file);
        formData.append("upload_preset", "user_profile_pictures");
        formData.append('api_key', 757917398541782);
        setLoading(true);
        const res = await fetch("https://api.cloudinary.com/v1_1/dom9fvn1q/image/upload",{
            method: "POST",
            body: formData
        })

        const resFile = await res.json();
        let uploadedUrl = resFile.secure_url;
        setLoading(false)
        setInput({
            ...input,
            avatar: uploadedUrl
        });
    };


        //Modificar inputs
        const handleChange = (e) => {
            setInput({
                ...input,
                [e.target.name]: e.target.value
            });
           
        };
 console.log(input);
        //Send info to change db
        const handleSubmit = (e) => {
            // e.preventDefault();
            dispatch(editUserInfo(input));
			dispatch(editUserAddress(userInfo.addresses[addressSelect].id,input))
			dispatch(getUserInfo(userEmail))
			
            alert('Info modified!');
            setInput({
                fullname: '',
                email:'',
                phone:'',
                reference:'',
                address:'',
                state:'',
                city:'',
                zipCode: '',
                profile:''
            })
			window.location.reload()
        };

    return(
        <div  className="container col py-3 mt-5" display='flex'>
        <div class="col-lg-8">
					<div class="card">
						<div class="card-body">
                             <div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Image</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="file" class="form-control" name='avatar' onChange={(event) => {uploadImage(event)}}/>
								</div>
                                <div class="col-sm-9 text-secondary">
									{loading ? (<p>Loading image</p>) : (<Image src={input.avatar} width='100px' height='100px' />)}
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Full Name</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" name='fullname' value={input.fullname} onChange={(e) => handleChange(e)}/>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Email</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" readOnly class="form-control" name='userEmail' value={input.userEmail} onChange={(e) => handleChange(e)}/>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Phone</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" name='telephone' value={input.telephone} onChange={(e) => handleChange(e)}/>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Address</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" name='address' value={input.address} onChange={(e) => handleChange(e)}/>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Address reference</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" name='reference' value={input.reference} onChange={(e) => handleChange(e)}/>
								</div>
							</div>
							
                            <div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">State</h6>
								</div>
							
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" name='state' value={input.state} onChange={(e) => handleChange(e)}/>
								</div>
							</div>
                            <div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">City</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" name='region' value={input.region} onChange={(e) => handleChange(e)}/>
								</div>
							</div>
                            <div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">ZIP code</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" name='zipCode' value={input.zipCode} onChange={(e) => handleChange(e)}/>
								</div>
							</div>
                            <div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">About you</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" name='profile' value={input.profile} onChange={(e) => handleChange(e)}/>
								</div>
							</div>
							<div class="row">
								<div class="col-sm-3"></div>
								<div class="col-sm-9 text-secondary">
									<input type="button" class="btn btn-warning btn-sm" value="Save Changes" onClick={(e) => handleSubmit(e)}/>
								</div>
							</div>
						</div>
					</div>
                </div>
            </div>
    )
};

