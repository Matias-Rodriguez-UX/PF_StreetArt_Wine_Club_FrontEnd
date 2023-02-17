import {
    DELETE_MEMBERSHIPS,
    GET_MEMBERSHIPS, POST_MEMBERSHIP, UPDATE_MEMBERSHIPS
} from "../actions/allActions";

const initialState = {
    memberships: [],
    allMemberships: [],
};

export default function membershipsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MEMBERSHIPS:
            return {
                ...state,
                memberships: action.payload,
                allMemberships: action.payload
            };
        case POST_MEMBERSHIP:
            return {
                ...state,
            };
        case DELETE_MEMBERSHIPS:
            return {
                ...state,
            };
        case UPDATE_MEMBERSHIPS:
            return {
                ...state,
            };
        default:
            return { ...state }
    };
};