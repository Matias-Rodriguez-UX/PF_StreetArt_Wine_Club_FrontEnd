import { GET_PRODUCT_BY_ID, GET_PRODUCTS } from "../actions/allActions";


const initialState = {
    wineDetail: [],
    products: []
}

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case GET_PRODUCT_BY_ID:
            
          return{
            ...state,
            wineDetail: action.payload 
          }
          case GET_PRODUCTS:
            return{
                ...state,
                products: action.payload
            }
    
        default:
            return state; //!
    }

}