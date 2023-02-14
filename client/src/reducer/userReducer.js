import { GET_ALL_USERS, GET_USER_INFO, CREATE_USER, EDIT_USER, CREATE_ADDRESS, EDIT_ADDRESS, DELETE_USER } from "./allActions";

const initialState = {
    users: [],
    allUsers: [],
    userInfo: {}
};

export default function rootReducer (state = initialState, action){
    switch (action.type){
        case GET_ALL_USERS:
            return{
                ...state,
                users: action.payload,
                allUsers: action.payload
            };

        case GET_USER_INFO:
            return{
                ...state,
                userInfo: action.payload
            };

        case CREATE_USER:
            return{
                ...state
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