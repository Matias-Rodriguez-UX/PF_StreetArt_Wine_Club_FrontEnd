import { GET_PRODUCT_BY_ID, GET_PRODUCTS, GET_FILTER_PRODUCTS, GET_FILTER_QUANTITIES, GET_ALL_PRODUCTS,GET_FILTER_TYPES, GET_FILTER_GRAPES, GET_FILTER_STATES } from "../actions/allActions";


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
        
            case GET_FILTER_STATES:
            const allStates = state.allProducts
            const statesFil = state.products
            const filteredstate = action.payload === "all" ? allStates : statesFil.filter((c)=>{ return c.states.some((a)=> a.name === action.payload)})
            return {
                ...state,
                products: filteredstate
            }

            case GET_FILTER_GRAPES:
                const allGrapes = state.allProducts
                const grapesFil = state.products
                const filteredgrapes = action.payload === "all" ? allGrapes : grapesFil.filter((c)=>{ return c.grapes.some((a)=> a.name === action.payload)})
                return {
                    ...state,
                    products: filteredgrapes
                }

            case GET_FILTER_TYPES:
            const allTypes = state.allProducts
            const typesFil = state.products
            const filteredtype = action.payload === "all" ? allTypes : typesFil.filter((c)=>{ return c.types.some((a)=> a.name === action.payload)})
            return {
                ...state,
                products: filteredtype
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