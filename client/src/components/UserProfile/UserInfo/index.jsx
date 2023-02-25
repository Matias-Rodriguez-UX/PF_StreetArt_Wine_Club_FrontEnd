import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from 'react-redux';
import { getDefaultAddress, getUserInfo } from "../../../actions/userActions";


export default function UserInfo({ userName, setCurrentPage }) {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.users.userInfo);
  const defaultAddress = useSelector((state) => state.users.defaultAddress);
  // const addressSelect = userInfo.addresses.length - 1

  useEffect(() => {
    dispatch(getDefaultAddress());
  }, [dispatch]);

  return (
    <div className="col py-5">
      <div class="col-md-8">
        <div class="card mb-3">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Full Name</h6>
                <div>

                  
                </div>
              </div>
              <div class="col-sm-9 text-secondary">
                {userInfo.fullname}
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Email</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                {userInfo.email}
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">About you</h6>
              </div>
              <div class="col-sm-9 text-secondary">
              {userInfo.profile}
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Phone</h6>
              </div>
              <div class="col-sm-9 text-secondary">
              {defaultAddress ? defaultAddress.telephone :"You didn't pick your main address & contact number yet"}
              </div>
            </div>
           <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Address</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                {defaultAddress ? defaultAddress.address :"You didn't pick your main address & contact number yet"}
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Reference</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                {defaultAddress ? defaultAddress.reference :"You didn't pick your main address & contact number yet"}
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">State</h6>
              </div>
              <div class="col-sm-9 text-secondary">
              {defaultAddress ? defaultAddress.state :" "}
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">City</h6>
              </div>
              <div class="col-sm-9 text-secondary">
              {defaultAddress ? defaultAddress.region :" "}
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-12">
                <div className='float-end'>
                <a class="btn btn-warning" onClick={() => setCurrentPage('changeinfo')} >Edit personal info</a>
              </div>
              <a class="btn btn-warning btn-margin" onClick={() => setCurrentPage('addresses')} >Edit address & contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}