import {
    GET_ORDERS, GET_USER_ORDER
} from "../actions/allActions";

const initialState = {
    orders: [],
    allOrders: [],
    userOrder: []
};

export default function ordersReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ORDERS:
            return {
                ...state,
                orders: action.payload,
                allOrders: action.payload
            };
            case GET_USER_ORDER:
                return {
                    ...state,
                    userOrder: action.payload
                };
        default:
            return { ...state }
    };
};