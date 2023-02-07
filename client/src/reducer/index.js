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
            const names = action.payload
            const matchingWines = state.allProducts.filter(wines => names.includes(wines.name))
            return {
                ...state,
                products: matchingWines
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