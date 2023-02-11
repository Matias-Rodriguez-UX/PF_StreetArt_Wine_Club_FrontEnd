import axios from "axios";
import {
  GET_PRODUCTS,
  LOADING_ACTION,
  GET_PRODUCT_BY_ID,
  GET_FILTER_PRODUCTS,
  ORDER_BY_PRICE,
  ORDER_A_TO_Z,
  GET_PRODUCT_BY_NAME,
  GET_FILTER_QUANTITIES,
  ADD_TO_CART,
  GET_TYPES,
  GET_REGIONS,
  GET_STATES,
  GET_GRAPES,
} from "./allActions";

const headers = {
  headers: {
    "accept-encoding": null,
  },
};

export function loadingAction(payload) {
  return {
    type: LOADING_ACTION,
    payload,
  };
}

export function getProducts() {
  return async function (dispatch) {
    try {
      let products = await axios.get("http://localhost:3001/products", headers);
      return (
        dispatch({
          type: GET_PRODUCTS,
          payload: products.data,
        }),
        dispatch(loadingAction(false))
      );
    } catch (error) {
      return error;
    }
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      var detail = await axios.get(
        `http://localhost:3001/products/${id}`,
        headers
      );

      return (
        dispatch({
          type: GET_PRODUCT_BY_ID,
          payload: detail.data,
        }),
        dispatch(loadingAction(false))
      );
    } catch (error) {
      console.log("Error", error);
    }
  };
}

export function getFilterProducts(filters, quantity) {
  let json = JSON.stringify(filters);
  return async function (dispatch) {
    try {
      let info = await axios.get(
        `http://localhost:3001/products/filters?filter=${json}&quantity=${quantity}`
      );
      return (
        dispatch({
          type: GET_FILTER_PRODUCTS,
          payload: info.data,
        }),
        dispatch(loadingAction(false))
      );
    } catch (error) {
      console.log("Error", error);
    }
  };
}

export function getFilterQuantities(payload) {
  return {
    type: GET_FILTER_QUANTITIES,
    payload,
  };
}
export function orderAtoZ(payload) {
  return {
    type: ORDER_A_TO_Z,
    payload,
  };
}

export function orderByPrice(payload) {
  return {
    type: ORDER_BY_PRICE,
    payload,
  };
}

export function getProductByName(payload) {
  return {
    type: GET_PRODUCT_BY_NAME,
    payload,
  };
}

export function postProduct(payload) {
  return async function () {
    try {
      let info = await axios.post("http://localhost:3001/products", payload);
      return info;
    } catch (error) {
      console.log("ERROR", error);
    }
  };
}

export function addToCart(id, cartQuantity) {
  return {
    type: ADD_TO_CART,
    payload: { id, cartQuantity: parseInt(cartQuantity) },
  };
}

export function getTypes() {
  return async function (dispatch) {
    try {
      let types = await axios.get("http://localhost:3001/types", headers);
      return (
        dispatch({
          type: GET_TYPES,
          payload: types.data,
        }),
        dispatch(loadingAction(false))
      );
    } catch (error) {
      return error;
    }
  };
}

export function getRegions() {
  return async function (dispatch) {
    try {
      let regions = await axios.get("http://localhost:3001/regions", headers);
      return (
        dispatch({
          type: GET_REGIONS,
          payload: regions.data,
        }),
        dispatch(loadingAction(false))
      );
    } catch (error) {
      return error;
    }
  };
}
export function getStates() {
  return async function (dispatch) {
    try {
      let states = await axios.get("http://localhost:3001/states", headers);
      return (
        dispatch({
          type: GET_STATES,
          payload: states.data,
        }),
        dispatch(loadingAction(false))
      );
    } catch (error) {
      return error;
    }
  };
}

export function getGrapes() {
  return async function (dispatch) {
    try {
      let grapes = await axios.get("http://localhost:3001/grapes", headers);
      return (
        dispatch({
          type: GET_GRAPES,
          payload: grapes.data,
        }),
        dispatch(loadingAction(false))
      );
    } catch (error) {
      return error;
    }
  };
}
