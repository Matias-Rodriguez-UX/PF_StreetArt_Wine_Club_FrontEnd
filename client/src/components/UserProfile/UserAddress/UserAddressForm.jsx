import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getStates } from "../../../actions";
import { createUserAddress, getAllCities } from "../../../actions/userActions";

export default function UserAddress(){
    const dispatch = useDispatch();
    const history = useHistory();
    const states = useSelector((state) => state.products.states);
    const cities = useSelector((state) => state.users.cities);

    const userInfo = useSelector((state) => state.users.userInfo);
// console.log(userInfo);
    const [ input, setInput ] = useState({
        reference: '',
        address: '',
        zipCode:0,
        telephone: 0,
        stateId: 0,
    });
    // console.log(states);
    input.userEmail = userInfo.email;

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

    // if (cities.length !==0) {cities.sort(function(a,b) {
    //     if (a.name > b.name){
    //         return 1;
    //     }
    //     if (b.name > a.name){
    //         return -1
    //     }
    //     return 0;
    //     })};

    useEffect(() => {
        dispatch(getStates());
    }, [dispatch]);

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        console.log(input);
    };

    const handleSelect =  (e) => {
        if (e.target.name === 'stateId') {
            console.log(e.target.name);
            console.log(e.target.value);
             dispatch(getAllCities(e.target.value));
            setInput({
                ...input,
                [e.target.name] : e.target.value
            });
        }
    };
    console.log(cities);

    // const handleCitySelect =  (e) => {
    //     if (e.target.name === 'regionId') {
    //         console.log(e.target.name);
    //         console.log(e.target.value);
    //         setInput({
    //             ...input,
    //             [e.target.name] : e.target.value
    //         });
    //     }
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        if (input.reference === '' || input.address === '' || input.zipCode === 0 || input.telephone === 0) 
        return alert('You need to complete all the fields');

        dispatch(createUserAddress(input));
        alert ('Address added!');
        setInput({
            reference: '',
            address: '',
            zipCode: 0,
            telephone: 0
        });
        history.push('/userprofile');
    };
    
    return (
        <>
        <div className="container col py-5 mt-5" display='flex'>
          <div class="col-md-8">
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
                                        <Form.Select name='stateId' onChange={(e) => handleSelect(e)}>
                                            <option name='stateId'>State</option>
                                            {orderedStates?.map((el, index) => <option key={index} value={el.id}>{el.name}</option>)}
                                        </Form.Select>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-sm-9 text-secondary">
                                        <Form.Select name='regionId' >
                                            <option>City</option>
                                            {(cities.municipios ? cities.municipios.map((el, index) => <option key={index} value={el.id}>{el.nombre}</option>) : <div>'Error'</div>)}
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
                                    </div>
                                </div> 
                                </div>
                                </div>
                                </div>
                                </div>
                                </>


    )
}