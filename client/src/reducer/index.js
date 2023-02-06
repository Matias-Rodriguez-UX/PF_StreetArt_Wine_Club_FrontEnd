import { GET_PRODUCTS, LOADING_ACTION, GET_PRODUCT_BY_ID, GET_FILTERED_PRODUCTS } from '../actions/allActions';

const initialState = {
    products: [],
    product: {},
    loading: true,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOADING_ACTION:
            return {
                ...state,
                loading: true,
            };
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false,
            };
        case GET_PRODUCT_BY_ID:
            return {
                ...state,
                product: action.payload,
                loading: false,
            };
        case GET_FILTERED_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false,
            };
        default:
            return state;
    }
}
