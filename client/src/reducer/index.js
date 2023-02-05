import { GET_PRODUCT_BY_ID } from "../actions/allActions";


const initialState = {
    detail: []
}

export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        case GET_PRODUCT_BY_ID:
            
          return{
            ...state,
            detail: action.payload 
          }
    
        default:
            return state; //!
    }
}