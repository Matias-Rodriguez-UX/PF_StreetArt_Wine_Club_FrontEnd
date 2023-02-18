import {
  GET_ALL_USERS,
  GET_USER_INFO,
  CREATE_USER,
  EDIT_USER,
  CREATE_ADDRESS,
  EDIT_ADDRESS,
  DELETE_USER,
  ADD_TO_CART,
  GET_USER_CART,
} from "./allActions";
import axios from "axios";
import { loadingAction } from ".";

const headers = {
  headers: {
    "accept-encoding": null,
  },
};

export function getAllUsers() {
  return async function (dispatch) {
    let users = await axios.get("http://localhost:3001/users");
    return dispatch({
      type: GET_ALL_USERS,
      payload: users.data,
    });
  };
}

export function getUserInfo(email) {
  return async function (dispatch) {
    let user = await axios.get(`http://localhost:3001/users/?email=${email}`);
    console.log(user.data);
    return (
      dispatch({
        type: GET_USER_INFO,
        payload: user.data,
      }),
      loadingAction(false)
    );
  };
}

export function createUser(payload) {
  return async function (dispatch) {
    try {
      let user = await axios.post("http://localhost:3001/users/auth", payload);
      return dispatch({
        type: CREATE_USER,
        payload: user.data,
      });
    } catch (error) {
      console.log("ERROR", error);
    }
  };
}

export function editUserInfo(payload) {
  return async function (dispatch) {
    try {
      let updatedUser = await axios.put(`http://localhost:3001/users`, payload);
      dispatch({
        type: EDIT_USER,
        payload: updatedUser.data,
      });
    } catch (error) {
      console.log("Error", error);
    }
  };
}

//USER CART

export function addUserCart(payload) {
  return async function () {
    console.log("PAYLOAD: ", payload);
    try {
      await axios.post(
        `http://localhost:3001/users/${payload.userId}/cart`,
        payload
      );
    } catch (error) {
      console.log("Error", error);
    }
  };
}

export function getUserCart(id) {
  return async function (dispatch) {
    let userCart = await axios.get(`http://localhost:3001/users/${id}/cart`);
    console.log("GET: ", userCart);
    return dispatch({
      type: GET_USER_CART,
      payload: userCart.data.products,
    });
  };
}

export function updateUserCart(payload) {
  return async function () {
    try {
      await axios.put(
        `http://localhost:3001/users/${payload.userId}/cart`,
        payload
      );
    } catch (error) {
      console.log("Error", error);
    }
  };
}
