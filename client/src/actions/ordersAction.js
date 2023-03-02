import axios from "axios";
import { loadingAction } from ".";
import {
  FILTER_BY_STATUS,
  GET_ORDERS,
  LOCALSTORAGE_CART,
  GET_USER_ORDER,
  CHANGE_ORDER,
} from "./allActions";

const headers = {
  headers: {
    "accept-encoding": null,
  },
};

export function getOrders() {
  return async function (dispatch) {
    try {
      let orders = await axios.get("/orders", headers);
      return (
        dispatch({
          type: GET_ORDERS,
          payload: orders.data,
        }),
        dispatch(loadingAction(false))
      );
    } catch (error) {
      return error;
    }
  };
}

export function backToCartOrder(orderId) {
  return async function () {
    try {
      console.log(orderId);
      let orders = await axios.put(`/orders/backToCart/${orderId}`);
      console.log(orders);
    } catch (error) {
      return error;
    }
  };
}

export function localStorageCart(payload) {
  return async function (dispatch) {
    try {
      let orders = await axios.post(`/orders/localStorageCart`, payload);
      console.log(orders);
      return dispatch({
        type: LOCALSTORAGE_CART,
        payload: orders,
      });
    } catch (error) {
      return error;
    }
  };
}

export function localStorageAddGet(user, storedCart) {
  return (dispatch) => {
    dispatch(
      localStorageCart({ arrayProducts: storedCart, email: user.email })
    );
  };
}

export function filterOrderByStatus(status) {
  return async function (dispatch) {
    try {
      return (
        dispatch({
          type: FILTER_BY_STATUS,
          payload: status,
        }),
        loadingAction(false)
      );
    } catch (e) {
      return error;
    }
  };
}

export function getUserOrders(email) {
  return async function (dispatch) {
    try {
      let orders = await axios.get(`/orders/byuser?email=${email}`, headers);
      return (
        dispatch({
          type: GET_USER_ORDER,
          payload: orders.data,
        }),
        dispatch(loadingAction(false))
      );
    } catch (error) {
      return error;
    }
  };
}


export function changeOrder(orderId, addressId, status) {
  return async function (dispatch) {
    try {
      let order
      addressId !== null && addressId !== NaN ?
        order = await axios.put(`/orders/update?orderId=${orderId}&addressId=${addressId}`, status) :
        order = await axios.put(`/orders/update?orderId=${orderId}`, status)
      return (
        dispatch({
          type: CHANGE_ORDER,
          payload: order.data,
        }),
        dispatch(loadingAction(false))
      );
    } catch (error) {
      return error;
    }
  };
}

