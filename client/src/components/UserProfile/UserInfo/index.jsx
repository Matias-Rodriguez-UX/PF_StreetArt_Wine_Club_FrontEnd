import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from "../../../actions/userActions";


export default function UserInfo({ userName, setCurrentPage }) {
  // const dispatch = useDispatch();
  // const { isAuthenticated: auth, user } = useAuth0();
  const userInfo = useSelector((state) => state.users.userInfo);
  console.log(userInfo)
  const addressSelect = userInfo.addresses.length - 1
  console.log(addressSelect)
  // let userEmail = '';
  // if(auth){
  //   userEmail = user.email
  // };

//   useEffect(() => {
//     if(user.email){
//       dispatch(getUserInfo(user.email))
//       console.log('userInfo: ', user.email)
//   }
// }, [dispatch, user.email]);

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
                <h6 class="mb-0">Phone</h6>
              </div>
              <div class="col-sm-9 text-secondary">
              {userInfo.addresses.length?userInfo.addresses[addressSelect].telephone:"You don't have registered telephone yet"}
              </div>
            </div>
           <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Address</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                {userInfo.addresses.length?userInfo.addresses[addressSelect].address:"You don't have registered addresses yet"}
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">State</h6>
              </div>
              <div class="col-sm-9 text-secondary">
              {userInfo.addresses.length?userInfo.addresses[addressSelect].state:""}
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">City</h6>
              </div>
              <div class="col-sm-9 text-secondary">
              {userInfo.addresses.length?userInfo.addresses[addressSelect].region:""}
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