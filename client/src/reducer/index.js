import { GET_PRODUCT_BY_ID } from "../actions/allActions";


const initialState = {
    wineDetail: []
}

export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        case GET_PRODUCT_BY_ID:
            
          return{
            ...state,
            wineDetail: action.payload 
          }
    
        default:
            return state; //!
    }
}