import axios from 'axios'
import { GET_PRODUCTS, LOADING_ACTION, GET_PRODUCT_BY_ID, GET_FILTERS, GET_FILTERED_PRODUCTS } from './allActions';


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
};

export function getProducts() {
    return async function (dispatch) {
        try {
            let products = await axios.get('http://localhost:3001/products', headers);
            console.log(products.data)
            return (dispatch({
                type: GET_PRODUCTS,
                payload: products.data
            })
            )
        } catch (error) {
            return error
        }
    }
};

export function getDetail(id) {
    return async function (dispatch) {
        try{
            var detail = await axios.get(`http://localhost:3001/products/${id}`
, headers);
            
            return dispatch({
                type: GET_PRODUCT_BY_ID,
                payload: detail.data
            })

        } catch (error) {
            console.log("Error", error)
        }

    }
<<<<<<< HEAD
};
=======
    
}

export function getFilter(filter, value){
    return async function (dispatch) {
        try{
            var filter = await axios.get("http://localhost:3001/products/filters", headers);
            return dispatch({
                type: GET_FILTERS,
                payload: filter.data
            })
        }
        catch (error){
            console.log("Error", error)
        }
    } 
}

export function getFilteredProducts(filter) {
    return async function (dispatch) {
        try {
            let filteredProducts = await axios.get(`http://localhost:3001/products?filter=${filter}`, headers);
            return dispatch({
                type: GET_FILTERED_PRODUCTS,
                payload: filteredProducts.data
            });
        } catch (error) {
            console.log("Error", error);
        }
    };
}
>>>>>>> 6f4ae89decf5bd6a4d8f5fa9873b35ef7d501b1f
