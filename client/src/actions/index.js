import axios from 'axios'
import { GET_PRODUCTS, LOADING_ACTION } from './allActions';


const headers = {
    headers: {
        "accept-encoding": null,
    }
}

export function loadingAction(payload) {
    return {
        type: LOADING_ACTION,
        payload,
    }
}

export function getProducts() {
    return async function (dispatch) {
        try {
            let products = await axios.get('http://localhost:3001/products', headers);
            return (dispatch({
                type: GET_PRODUCTS,
                payload: products.data
            }), dispatch(loadingAction(false))
            )
        } catch (error) {
            return error
        }
    }
}