import axios from "axios";
import { loadingAction } from ".";
import { GET_ORDERS, GET_ORDER_BY_ID, LOCALSTORAGE_CART } from "./allActions";

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
  return async function () {
    try {
      console.log("action locaStorageCart");
      let orders = await axios.post(`/orders/localStorageCart`, payload);
      console.log("result localStorageCart: ", orders);
      return dispatch({
        type: LOCALSTORAGE_CART,
        payload: orders,
      });
    } catch (error) {
      return error;
    }
  };
}
