import { GET_PRODUCT_BY_ID, GET_PRODUCTS, GET_FILTER_PRODUCTS, GET_FILTER_QUANTITIES, GET_ALL_PRODUCTS } from "../actions/allActions";


const initialState = {
    wineDetail: [],
    products: [],
    allProducts: [],
    filtersActive: false,
    showLoading: false,
}

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case GET_PRODUCT_BY_ID:
            return {
                ...state,
                wineDetail: action.payload
            }
        case GET_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload,
                products: action.payload
            }

        case GET_FILTER_PRODUCTS:
            const filterDB = action.payload
            return {
                ...state,
                products: filterDB,
                filtersActive: true
            }

        case GET_FILTER_QUANTITIES:
            const allquantities = state.allProducts
            const quantityFil = state.products
            const filtered = action.payload === "all" ? allquantities : quantityFil.filter(product => product.quantity == action.payload)
            return {
                ...state,
                products: filtered
            }

        default:
            return state; //!
    }

}