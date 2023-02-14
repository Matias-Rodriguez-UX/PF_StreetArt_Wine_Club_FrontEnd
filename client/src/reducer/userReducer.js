import { GET_ALL_USERS, GET_USER, CREATE_USER, EDIT_USER, CREATE_ADDRESS, EDIT_ADDRESS, DELETE_USER } from "./allActions";

const initialState = {
    users: [],
    allUsers: [],
    authUser: {},
};

export default function rootReducer (state = initialState, action){
    switch (action.type){
        case GET_ALL_USERS:
            return{
                ...state,
                users: action.payload,
                allUsers: action.payload
            };

        case GET_USER:
            return {
                ...state,
                authUser: action.payload
            };

        case CREATE_USER:
            return{
                ...state,
                authUser: action.payload
            };

        case EDIT_USER:
            return{
                ...state,
            }

        case CREATE_ADDRESS:
            return{
                ...state
            };
        
        default:
            return {...state}
    };
};