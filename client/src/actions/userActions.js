import { GET_ALL_USERS, GET_USER_INFO, CREATE_USER, EDIT_USER, CREATE_ADDRESS, EDIT_ADDRESS, DELETE_USER } from "./allActions";
import axios from "axios";
import { loadingAction } from "./index";

const headers = {
  headers: {
    "accept-encoding": null,
  },
};

export function getAllUsers() {
  return async function (dispatch) {

    let users = await axios.get("http://localhost:3001/users");
    return (
      dispatch({
        type: GET_ALL_USERS,
        payload: users.data,
      }),
      loadingAction(false)
    )
  };
};

export function getUserInfo(email) {
  return async function (dispatch) {

    let user = await axios.get(`http://localhost:3001/users/?email=${email}`);
    console.log(user.data)
    return (
      dispatch({
        type: GET_USER_INFO,
        payload: user.data,
      }),
      loadingAction(false)
    )
  };
};


export function createUser(payload) {
  return async function (dispatch) {
    try {
      let user = await axios.post('http://localhost:3001/users/auth', payload);
      return dispatch({
        type: CREATE_USER,
        payload: user.data
      });
    } catch (error) {
      console.log("ERROR", error)
    }
  };
};

export function editUserInfo(payload) {
  return async function (dispatch) {
    try {
      let updatedUser = await axios.put(`http://localhost:3001/users`, payload);
      console.log(updatedUser.data)
      dispatch({
        type: EDIT_USER,
        payload: updatedUser.data
      });
    } catch (e) {
      console.log("Error", e)
    }
  };
};