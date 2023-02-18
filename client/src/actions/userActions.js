import {
  GET_ALL_STATES,
  GET_ALL_CITIES,
  GET_ALL_USERS,
  GET_USER_INFO,
  CREATE_USER,
  EDIT_USER,
  GET_USER_ADDRESSES,
  CREATE_USER_ADDRESS,
  EDIT_USER_ADDRESS,
  DELETE_USER_ADDRESS,
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

export function getAllStates() {
  return async function (dispatch) {
    let states = await axios.get("/allStates");
    return dispatch({
      type: GET_ALL_STATES,
      payload: states.data,
    });
  };
}

export function getAllCities() {
  return async function (dispatch) {
    let cities = await axios.get("cities");
    return dispatch({
      type: GET_ALL_CITIES,
      payload: cities.data,
    });
  };
}

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
      );
    } catch (error) {
      console.log(error);
    }
  };
}

export function getUserInfo(email) {
  return async function (dispatch) {
    let user = await axios.get(`/users/?email=${email}`);
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
      let user = await axios.post("/users/auth", payload);
      return (
        dispatch({
          type: CREATE_USER,
          payload: user.data,
        }),
        loadingAction(false)
      );
    } catch (error) {
      console.log("ERROR", error);
    }
  };
}

export function editUserInfo(payload) {
  return async function (dispatch) {
    try {
      let updatedUser = await axios.put(`/users`, payload);
      dispatch({
        type: EDIT_USER,
        payload: updatedUser.data,
      }),
        loadingAction(false);
    } catch (e) {
      console.log("Error", e);
    }
  };
}

export function getUserAddresses(email) {
  return async function (dispatch) {
    let addresses = await axios.get(`/users/?email=${email}`);
    dispatch({
      type: GET_USER_ADDRESSES,
      payload: addresses.data,
    });
  };
}

export function createUserAddress(payload) {
  return async function (dispatch) {
    try {
      let address = await axios.post("/users", payload);
      return dispatch({
        type: CREATE_USER_ADDRESS,
        payload: address.data,
      });
    } catch (error) {
      console.log("ERROR", error);
    }
  };
}

export function deleteUserAddress(addressId, userId) {
  return async function () {
    try {
      var address = await axios.delete(`/users/${addressId}`);
      return dispatch({
        type: DELETE_USER_ADDRESS,
        payload: address.data,
      });
    } catch (error) {
      console.log("Error", error);
    }
  };
}

export function editUserAddress(payload) {
  return async function (dispatch) {
    try {
      let updatedAddress = await axios.put(`/users/${addressId}`);
      dispatch({
        type: EDIT_USER_ADDRESS,
        payload: updatedAddress.data,
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
