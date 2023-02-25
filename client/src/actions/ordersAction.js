import axios from "axios";
import { loadingAction } from ".";
import { FILTER_BY_STATUS, GET_ORDERS, GET_ORDER_BY_ID, GET_USER_ORDER } from "./allActions";

const headers = {
  headers: {
    "accept-encoding": null,
  },
};

export function getOrders() {
  return async function (dispatch) {
    console.log("DESPACHANDO PEDIDO DE ORDENES")
    try {
      let orders = await axios.get("/orders", headers);
      console.log(orders.data)
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

export function filterOrderByStatus(status) {
  return async function (dispatch) {
    try {
      return dispatch({
        type: FILTER_BY_STATUS,
        payload: status
      }),
        loadingAction(false);
    } catch (e) {
      return error
    }
  }
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
