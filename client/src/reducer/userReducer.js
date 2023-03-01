import {
  GET_ALL_USERS,
  GET_USER_ADDRESSES,
  GET_USER_INFO,
  CREATE_USER,
  EDIT_USER,
  CREATE_USER_ADDRESS,
  SET_DEFAULT_ADDRESS,
  DELETE_USER_ADDRESS,
  GET_ALL_STATES,
  GET_ALL_CITIES,
  EDIT_USER_ADDRESS,
  GET_WISHLIST,
  POST_WISHLIST,
  DELETE_FAVOURITE,
  POST_NEWSLETTER,
  SET_AGE,
  ASSIGN_MEMBERSHIPS,
  GET_NEWSLETTER,
} from "../actions/allActions";

const initialState = {
  states: [],
  cities: [],
  users: [],
  allUsers: [],
  userInfo: {},
  userAddresses: [],
  defaultAddress: null,
  userWishlist: [],
  ageUser: "",
  newsletter: []
};
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_STATES:
      return {
        ...state,
        states: action.payload,
      };

    case GET_ALL_CITIES:
      return {
        ...state,
        cities: action.payload,
      };

    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
        allUsers: action.payload,
      };

    case GET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };

    case CREATE_USER:
      if (action.payload.id) {
        return {
          ...state,
          userInfo: { status: "User Created" },
        };
      }
      return {
        ...state,
      };
    case EDIT_USER:
      return {
        ...state,
      };

    case GET_USER_ADDRESSES:
      return {
        ...state,
        userAddresses: action.payload,
      };

    case CREATE_USER_ADDRESS:
      return {
        ...state,
      };

    case DELETE_USER_ADDRESS:
      return {
        ...state,
      };
    case EDIT_USER_ADDRESS:
      return {
        ...state,
      };

    case SET_DEFAULT_ADDRESS:
      localStorage.setItem("defaultAddress", JSON.stringify(action.payload));
      return {
        ...state,
        defaultAddress: action.payload,
      };

    case GET_WISHLIST:
      const wishList = action.payload.products?.map((el) => el);
      return {
        ...state,
        userWishlist: wishList,
      };
    case POST_WISHLIST:
      return {
        ...state,
      };
    case DELETE_FAVOURITE:
      return {
        ...state,
      };
    case POST_NEWSLETTER:
      return {
        ...state,
      };
    case SET_AGE:
      return {
        ...state,
        ageUser: action.payload,
      };
    case ASSIGN_MEMBERSHIPS:
      return {
        ...state,
      };
    case GET_NEWSLETTER:
      console.log(action.payload)
      return {
        ...state,
        newsletter: action.payload,
      };

    default:
      return { ...state };
  }
}
