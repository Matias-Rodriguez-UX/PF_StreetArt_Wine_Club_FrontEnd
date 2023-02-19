import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from "../../../actions/userActions";


export default function UserInfo({ userName, setCurrentPage }) {
  const dispatch = useDispatch();
  const { isAuthenticated: auth, user } = useAuth0();
  const userInfo = useSelector((state) => state.users.userInfo);
  console.log(userInfo)

  let userEmail = '';
  if(auth){
    userEmail = user.email
  };

  return (
    <div className="container col py-5 mt-5" display='flex'>
      <div class="col-md-8">
        <div class="card mb-3">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Full Name</h6>
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
                <h6 class="mb-0">Phone</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                (239) 816-9029
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Mobile</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                (320) 380-4539
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Address</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                Bay Area, San Francisco, CA
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-12">
                <a class="btn btn-warning  float-end" onClick={() => setCurrentPage('changeinfo')} >Edit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}