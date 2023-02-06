import {
  GET_PRODUCT_BY_ID,
  GET_PRODUCTS,
  GET_PRODUCT_BY_NAME,
} from "../actions/allActions";

const initialState = {
  wineDetail: [],
  products: [],
  productByName: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        wineDetail: action.payload,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_PRODUCT_BY_NAME:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state; //!
  }
}
