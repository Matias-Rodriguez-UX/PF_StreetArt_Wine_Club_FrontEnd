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
  DELETE_FROM_CART,
  ADD_CART_QUANTITY,
  REMOVE_CART_QUANTITY,
  ADD_CART_TO_LOCALSTORAGE,
  GET_REVIEWS,
  RESET_CART_LOG_OUT,
  UPDATE_REVIEWS,
  POST_PRODUCTS,
  DELETE_PRODUCTS,
  UPDATE_PRODUCTS,
  POST_REVIEW,
  UPDATE_REVIEW,
  DELETE_REVIEW,
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
      let products = await axios.get("/products", headers);
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
      var detail = await axios.get(`/products/${id}`, headers);

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
        `/products/filters?filter=${json}&quantity=${quantity}`
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
  return async function (dispatch) {
    try {
      let info = await axios.post("/products", payload);
      return dispatch({
        type: POST_PRODUCTS,
        payload: info.data,
      }),
        loadingAction(false);
    } catch (error) {
      console.log("ERROR", error);
    }
  };
}

export function deleteProduct(id) {
  return async function (dispatch) {
    try {
      let info = await axios.delete(`/products/${id}`);
      return dispatch({
        type: DELETE_PRODUCTS,
        payload: info.data,
      });
    } catch (error) {
      console.log("ERROR", error);
    }
  };
}

export function updateProduct(id, body) {
  return async function () {
    try {
      let info = await axios.put(`/products/${id}`, body);
      return dispatch({
        type: UPDATE_PRODUCTS,
        payload: info.data,
      });
    } catch (error) {
      console.log("ERROR", error);
    }
  };
}

export function getTypes() {
  return async function (dispatch) {
    try {
      let types = await axios.get("/types", headers);
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
      let regions = await axios.get("/regions", headers);
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
      let states = await axios.get("/states", headers);
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
      let grapes = await axios.get("/grapes", headers);
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

export function deleteFromCart(id) {
  return {
    type: DELETE_FROM_CART,
    payload: id,
  };
}

export function addCartQuantity(id) {
  return {
    type: ADD_CART_QUANTITY,
    payload: id,
  };
}

export function removeCartQuantity(id) {
  return {
    type: REMOVE_CART_QUANTITY,
    payload: id,
  };
}

export function addCartToLs(payload) {
  return {
    type: ADD_CART_TO_LOCALSTORAGE,
    payload,
  };
}

export function addToCart(id, cartQuantity) {
  return {
    type: ADD_TO_CART,
    payload: { id, cartQuantity: parseInt(cartQuantity) },
  };
}

export function resetCart() {
  return {
    type: RESET_CART_LOG_OUT,
  };
}

export function postReview(id, payload) {
  return async function (dispatch) {
    try {
      let info = await axios.post(`/products/${id}/review`, payload);
      return dispatch({
        type: POST_REVIEW,
        payload: info.data,
      });
    } catch (error) {
      console.log("ERROR", error);
    }
  };
}

export function getReviews(id) {
  return async function (dispatch) {
    console.log(id)
    try {
      var detail = await axios.get(`/products/${id}/review`, headers);
      return (
        dispatch({
          type: GET_REVIEWS,
          payload: detail.data,
        }),
        dispatch(loadingAction(false))
      );
    } catch (error) {
      console.log("Error", error);
    }
  };
}

export function updateReviews(idProduct, idReview, info) {
  return async function (dispatch) {

    try {
      var detail = await axios.put(
        `/products/${idProduct}/review/${idReview}`,
        info
      );
      return dispatch({
        type: UPDATE_REVIEW,
        payload: detail.data,
      });
    } catch (error) {
      console.log("Error", error);
    }
  };
}


export function deleteReviews(idProduct, idReview,) {

  return async function (dispatch) {

    try {
      var detail = await axios.delete(
        `/products/${idProduct}/review/${idReview}`
      );
      return dispatch({
        type: DELETE_REVIEW,
        payload: detail.data,
      });
    } catch (error) {
      console.log("Error", error);
    }
  };
}
