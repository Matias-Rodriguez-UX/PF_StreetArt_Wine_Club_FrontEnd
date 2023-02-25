import { FILTER_BY_STATUS, GET_ORDERS } from "../actions/allActions";

const initialState = {
  orders: [],
  allOrders: [],
};

export default function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ORDERS:
      console.log(action.payload)
      return {
        ...state,
        orders: action.payload,
        allOrders: action.payload,
      };
    case FILTER_BY_STATUS:
      const allOrders = state.allOrders
      const ordersFilter = action.payload === "all" ? allOrders : allOrders.filter(el => el.status.includes(action.payload))
      return {
        ...state,
        orders: ordersFilter
      }
    default:
      return { ...state };
  }
}
