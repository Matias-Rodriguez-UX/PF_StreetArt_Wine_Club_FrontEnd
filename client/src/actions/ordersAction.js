import axios from "axios";
import { loadingAction } from ".";
import { GET_ORDERS, GET_USER_ORDER } from "./allActions";

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

export function getUserOrders(email) {
  return async function (dispatch) {
    try {
      let orders = await axios.get(`/orders/?email=${email}`, headers);
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
