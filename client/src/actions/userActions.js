import { useAuth0 } from "@auth0/auth0-react";
// const { isLoading, isAuthenticated: auth, user } = useAuth0();
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
  GET_WISHLIST,
  POST_WISHLIST,
  DELETE_FAVOURITE,
  ADD_TO_CART,
  GET_USER_CART,
  POST_NEWSLETTER,
  SET_AGE,
  ASSIGN_MEMBERSHIPS,
  SET_DEFAULT_ADDRESS,
  GET_DEFAULT_ADDRESS,
  GET_NEWSLETTER,
} from "./allActions";
import axios from "axios";
import { loadingAction } from ".";
import { instance } from "../axiosInstance.jsx";

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

export function getAllCities(id) {
  return async function (dispatch) {
    let cities = await axios.get(
      `https://apis.datos.gob.ar/georef/api/municipios?provincia=${id}&campos=id,nombre&max=1000`
    );
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
      return (
        dispatch({
          type: EDIT_USER,
          payload: updatedUser.data,
        }),
        loadingAction(false)
      )
    } catch (e) {
      console.log("Error", e);
    }
  };
}

export function getUserAddresses(email) {
  return async function (dispatch) {
    try {
      let addresses = await axios.get(`/addresses?email=${email}`);
      return (
        dispatch({
          type: GET_USER_ADDRESSES,
          payload: addresses.data,
        }),
        loadingAction(false)
      )
    } catch (e) {
      console.log(e)
    }

  };
}

export function createUserAddress(payload) {
  return async function (dispatch) {
    console.log(payload)
    try {
      let address = await axios.post("/addresses", payload);
      return (
        dispatch({
          type: CREATE_USER_ADDRESS,
          payload: address.data,
        }),
        loadingAction(false)
      );
    } catch (error) {
      console.log("ERROR", error);
    }
  };
}

export function deleteUserAddress(addressId, userId) {
  return async function () {
    try {
      var address = await axios.delete(`/addresses/${addressId}`);
      return (
        dispatch({
          type: DELETE_USER_ADDRESS,
          payload: address.data,
        }),
        loadingAction(false)
      );
    } catch (error) {
      console.log("Error", error);
    }
  };
}

export function editUserAddress(id, payload) {
  return async function (dispatch) {
    try {
      let updatedAddress = await axios.put(`/addresses/${id}`, payload);
      return (
        dispatch({
          type: EDIT_USER_ADDRESS,
          payload: updatedAddress.data,
        }),
        loadingAction(false)
      )
    } catch (error) {
      console.log("Error", error);
    }
  };
}

export function setDefaultAddress(address) {
  return async function (dispatch) {
    return (
      dispatch({
        type: SET_DEFAULT_ADDRESS,
        payload: address,
      }),
      loadingAction(false)
    )
  };
}

export function getDefaultAddress() {
  return (dispatch) => {
    const defaultAddress = JSON.parse(localStorage.getItem("defaultAddress"));
    dispatch(setDefaultAddress(defaultAddress));
  };
}

//USER CART

export function addUserCart(payload) {
  return async function () {
    /* console.log("PAYLOAD: ", payload); */
    try {
      console.log("PAYLOAD addUserCart: ", payload);
      const result = await axios.post(
        `/users/${payload.userId}/cart`,
        payload
      );
      console.log("result addUserCart: ", result);
    } catch (error) {
      console.log("Error", error);
    }
  };
}

export function getUserCart(id) {
  return async function (dispatch) {
    let userCart = await axios.get(`/users/${id}/cart`);
    return (
      dispatch({
        type: GET_USER_CART,
        payload: userCart.data.products,
      }),
      loadingAction(false)
    );
  };
}

export function updateUserCart(payload) {
  return async function () {
    try {
      const result = await axios.put(
        `/users/${payload.userId}/cart`,
        payload
      );
    } catch (error) { }
  };
}

export function deleteUserCart(userId, productId) {
  return async function () {
    try {
      let result = await axios.delete(
        `/users/${userId}/cart/${productId}`
      );
    } catch (error) {
      console.log("Error", error);
    }
  };
}

export function statusCart(payload) {
  return async function () {
    try {
      let result = await axios.put(
        `/orders/checkout`,
        payload
      );
    } catch (error) {
      console.log("Error", error);
    }
  };
}

export function statusPayment(payload) {
  console.log(payload);
  return async function () {
    try {
      if (payload.addressId) {
        let result = await axios.put(
          `/orders/checkout?addressId=${payload.addressId}`,
          payload
        );
      } else {
        let result = await axios.put(
          `/orders/checkout`,
          payload
        );
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
}

export function deleteCart(userId) {
  return async function () {
    try {
      let result = await axios.delete(
        `/users/${userId}/cart`
      );
    } catch (error) {
      console.log("Error", error);
    }
  };
}

export function getUserWishlist(email) {
  return async function (dispatch) {
    try {
      let wishlist = await axios.get(`/users/favourites/${email}`);
      return (
        dispatch({
          type: GET_WISHLIST,
          payload: wishlist.data,
        }),
        loadingAction(false)
      )
    } catch (e) {
      console.log("Error", e);
    }
  };
}

export function postFavourite(id, email) {
  return async function (dispatch) {
    try {
      console.log(email);
      let wishlist = await axios.post(`/users/fav/${email}/${id}`);
      return (
        dispatch({
          type: POST_WISHLIST,
          payload: wishlist.data,
        }),
        loadingAction(false)
      );
    } catch (error) {
      console.log("ERROR", error);
    }
  };
}

export function deleteFavourite(id, email) {
  return async function (dispatch) {
    try {
      var wishlist = await axios.delete(`/users/deleteFav/${email}/${id}`);
      return (
        dispatch({
          type: DELETE_FAVOURITE,
          payload: wishlist.data,
        }),
        loadingAction(false)
      );
    } catch (error) {
      console.log("Error", error);
    }
  };
}

export function postNewsletter(email) {
  return async function (dispatch) {
    try {
      console.log(email);
      let newsletter = await axios.post("/newsletter", email);
      return (
        dispatch({
          type: POST_NEWSLETTER,
          payload: newsletter.data,
        }),
        loadingAction(false)
      );
    } catch (error) {
      console.log("ERROR", error);
    }
  };
}

export function setAge(age) {
  return async function (dispatch) {
    try {
      return (
        dispatch({
          type: SET_AGE,
          payload: age,
        }),
        loadingAction(false)
      );
    } catch (error) {
      console.log(error);
    }
  };
}

export function assignMemberships(idUser, idMembership) {
  return async function (dispatch) {
    try {
      let memeberships = await axios.put(
        `users/${idUser}/membership`, idMembership
      );
      return (
        dispatch({
          type: ASSIGN_MEMBERSHIPS,
          payload: memeberships.result,
        }),
        loadingAction(false)
      );
    } catch (error) {
      console.log("ERROR", error);
    }
  };
}

export function deleteUserCartGet(userId, productId) {
  return (dispatch) => {
    dispatch(deleteUserCart(userId, productId));
    dispatch(getUserCart(userId));
  };
}

export function updateSubscription(email) {
  return async function () {
    try {
      await axios.put(`/newsletter`, email);
    } catch (error) { }
  };
}

export function getNewsletter() {
  return async function (dispatch) {
    try {
      let newsletter = await axios.get(`/newsletter`,);
      return (
        dispatch({
          type: GET_NEWSLETTER,
          payload: newsletter.data
        }),
        loadingAction(false)
      )
    } catch (error) { }
  };
}
