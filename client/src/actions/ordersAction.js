import axios from "axios";
import { loadingAction } from ".";
import {
  FILTER_BY_STATUS,
  GET_ORDERS,
  GET_ORDER_BY_ID,
  LOCALSTORAGE_CART,
} from "./allActions";
import { getUserCart, addUserCart, updateUserCart } from "./userActions";

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

export function updateLocalStorageCartGet(storedCart, cart, user) {
  return (dispatch) => {
    try {
      storedCart.forEach((item) =>
        !cart.some((el) => el.id === item.id)
          ? dispatch(
              addUserCart({
                userId: user.id,
                totalPrice: item.price * item.cartQuantity,
                quantity: item.cartQuantity,
                email: user.email,
                productId: item.id,
              })
            )
          : dispatch(
              updateUserCart({
                userId: user.id,
                totalPrice: item.price * item.cartQuantity,
                quantity: item.cartQuantity,
                email: user.email,
                productId: item.id,
              })
            )
      );
    } catch (error) {
      console.log(error);
    }
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
