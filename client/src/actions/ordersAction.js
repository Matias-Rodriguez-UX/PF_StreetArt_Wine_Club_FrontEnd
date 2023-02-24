import axios from "axios";
import { loadingAction } from ".";
import { GET_ORDERS, GET_ORDER_BY_ID } from "./allActions";

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
