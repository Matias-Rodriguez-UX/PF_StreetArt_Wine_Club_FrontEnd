import {
    GET_MEMBERSHIPS
} from "./allActions";

const initialState = {
    memberships: [],
    allMemberships: [],
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MEMBERSHIPS:
            return {
                ...state,
                memberships: action.payload,
                allMemberships: action.payload
            };
        default:
            return { ...state }
    };
};