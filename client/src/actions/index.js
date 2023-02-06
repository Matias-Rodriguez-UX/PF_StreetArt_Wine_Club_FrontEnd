import axios from "axios";
import {
  GET_PRODUCTS,
  LOADING_ACTION,
  GET_PRODUCT_BY_ID,
  GET_PRODUCT_BY_NAME,
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
      console.log(products.data);
      return dispatch({
        type: GET_PRODUCTS,
        payload: products.data,
      });
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

      return dispatch({
        type: GET_PRODUCT_BY_ID,
        payload: detail.data,
      });
    } catch (error) {
      console.log("Error", error);
    }
  };
}

// export function getProductsByName(product) {
//   return async function (dispatch) {
//     try {
//       console.log(product);
//       return dispatch({
//         type: GET_PRODUCT_BY_NAME,
//         payload: product[0],
//       });
//     } catch (error) {
//       return error;
//     }
//   };
// }
