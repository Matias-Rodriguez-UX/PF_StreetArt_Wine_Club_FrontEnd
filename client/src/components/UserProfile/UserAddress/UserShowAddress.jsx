import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAddresses } from "../../../actions/userActions";
import UserAddress from "./UserAddressForm";
import Form from 'react-bootstrap/Form';
import { getStates } from "../../../actions";

export default function UserShowAddress(){
    const dispatch = useDispatch();
    const userInfo = useSelector((state => state.users.userInfo));
    console.log(userInfo);
    const addresses = useSelector(state => state.users.userAddresses);
    const states = useSelector((state) => state.products.states);
    const cities = useSelector((state) => state.users.cities);

    useEffect(() => {
        dispatch(getStates());
        dispatch(getUserAddresses(userInfo.email))
    }, [dispatch]);
    console.log(addresses)

    return(
    <div className="container col py-5 mt-5" display='flex'>
        <div class="col-md-8">
            {
                (addresses ? addresses.map((el, index) => 
                <Form>
                <div class="card">
                    <div class="card-body">
                    <Form.Check 
                     type="switch"
                     id="custom-switch"
                     label="Main address"
                     />
                        <div class="row-sm-5">
                            <h6 class="mb-0">{el.reference}</h6>
                            <h6 class="mb-0">{el.address}</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            <h6 class="mb-0">{el.telephone}</h6>
                        </div>
                    </div>
                </div>
                </Form>) : 
                
                <p>error</p>)
            }
            <UserAddress userInfo={userInfo} addresses={addresses} states={states} cities={cities} />
            </div>
        </div>

    );
};