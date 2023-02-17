import { GET_ALL_USERS, GET_USER_INFO, CREATE_USER, EDIT_USER, CREATE_ADDRESS, EDIT_ADDRESS, DELETE_USER } from "./allActions";
import axios from "axios";
import { loadingAction } from ".";

const headers = {
  headers: {
    "accept-encoding": null,
  },
};

export function getAllUsers() {
  return async function (dispatch) {
    try {
      let users = await axios.get("/users");
      return (
        dispatch({
          type: GET_ALL_USERS,
          payload: users.data,
        }),
        loadingAction(false)
      )
    } catch (error) {
      console.log(error)
    }

  };
};

export function getUserInfo(email) {
  return async function (dispatch) {

    let user = await axios.get(`/users/?email=${email}`);
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
      let user = await axios.post('/users/auth', payload);
      return dispatch({
        type: CREATE_USER,
        payload: user.data
      }),
        loadingAction(false)
    } catch (error) {
      console.log("ERROR", error)
    }
  };
};

export function editUserInfo(payload) {
  return async function (dispatch) {
    try {
      let updatedUser = await axios.put(`/users`, payload);
      dispatch({
        type: EDIT_USER,
        payload: updatedUser.data
      }),
        loadingAction(false)
    } catch (e) {
      console.log("Error", e)
    }
  };
};