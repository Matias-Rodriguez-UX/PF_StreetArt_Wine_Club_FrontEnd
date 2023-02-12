import { GET_ALL_USERS, CREATE_USER, EDIT_USER, CREATE_ADDRESS, EDIT_ADDRESS, DELETE_USER, POST_USER_INFO } from "./allActions";

const initialState = {
    users: [],
    allUsers: [],
    userInfo: [],
};

export default function rootReducer (state = initialState, action){
    switch (action.type){
        case GET_ALL_USERS:
            return{
                ...state,
                users: action.payload,
                allUsers: action.payload
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
            case POST_USER_INFO:
                return{
                    ...state
                };
        
        default:
            return {...state}
    };
};