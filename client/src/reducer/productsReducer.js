import {
  GET_PRODUCT_BY_ID,
  GET_PRODUCTS,
  GET_FILTER_PRODUCTS,
  ORDER_BY_PRICE,
  ORDER_A_TO_Z,
  GET_PRODUCT_BY_NAME,
  ADD_TO_CART,
  DELETE_FROM_CART,
  LOADING_ACTION,
  GET_TYPES,
  GET_REGIONS,
  GET_STATES,
  GET_GRAPES,
  ADD_CART_QUANTITY,
  REMOVE_CART_QUANTITY,
  ADD_CART_TO_LOCALSTORAGE,
  GET_REVIEWS,
  GET_USER_CART,
  RESET_CART_LOG_OUT,
  POST_PRODUCTS,
  DELETE_PRODUCTS,
  UPDATE_PRODUCTS,
  DELETE_REVIEW,
  POST_REVIEW,
  UPDATE_REVIEW,
  LOCALSTORAGE_CART,
} from "../actions/allActions";

const initialState = {
  wineDetail: [],
  products: [],
  allProducts: [],
  filtersActive: false,
  showLoading: false,
  cart: [],
  cartState: "",
  totalCart: 0,
  types: [],
  regions: [],
  states: [],
  grapes: [],
  reviews: [],
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_ACTION:
      return {
        ...state,
        showLoading: action.payload,
      };
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        wineDetail: action.payload,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        products: action.payload,
      };

    case GET_FILTER_PRODUCTS:
      const names = action.payload;
      const matchingWines = state.allProducts.filter((wines) =>
        names.includes(wines.name)
      );
      return {
        ...state,
        products: matchingWines,
      };
    case ORDER_A_TO_Z:
      const productsByName =
        action.payload === "a"
          ? state.products.sort(sortArrayAtoZ)
          : state.products.sort(sortArrayZtoA);
      return {
        ...state,
        products: productsByName,
      };
    case ORDER_BY_PRICE:
      const productsByPrice =
        action.payload === "high"
          ? state.products.sort((b, a) => a.price - b.price)
          : state.products.sort((b, a) => b.price - a.price);
      return {
        ...state,
        products: productsByPrice,
      };

    case GET_PRODUCT_BY_NAME:
      return {
        ...state,
        products:
          action.payload === ""
            ? state.allProducts
            : state.allProducts.filter((el) =>
                el.name
                  .split(" ")
                  .some((el) => el.includes(action.payload.split(" ")[0]))
              ),
      };

    case ADD_TO_CART:
      let { id, cartQuantity } = action.payload;
      let newProduct = state.allProducts.find((product) => product.id === id);
      let addWineBox = { ...newProduct, cartQuantity };
      if (state.cart?.some((product) => product.id === id)) {
        let existingProduct = state.cart?.find((product) => product.id === id);
        let updatedProduct = {
          ...existingProduct,
          cartQuantity: existingProduct.cartQuantity + cartQuantity,
        };
        let upDate = state.cart.map((product) =>
          product.id === id ? updatedProduct : product
        );

        return {
          ...state,
          cart: upDate,
        };
      }
      const resto = [...state.cart, addWineBox];
      return {
        ...state,
        cart: resto,
      };

    case DELETE_FROM_CART:
      const deletFromCart = state.cart.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...state,
        cart: deletFromCart,
      };

    case ADD_CART_TO_LOCALSTORAGE:
      if (state.cart.some((el) => el.id === action.payload.id)) {
        let updateProduct = state.cart.find(
          (el) => el.id === action.payload.id
        );
        const lcSto = [...state.cart];
        return {
          ...state,
          cart: lcSto,
        };
      }
      const rest2 = [...state.cart, action.payload];
      return {
        ...state,
        cart: rest2,
      };

    case GET_USER_CART:
      if (!action.payload) return { ...state };
      return {
        ...state,
        cart: action.payload.map((el) => {
          return {
            id: el.id,
            name: el.name,
            image: el.image,
            cartQuantity: el.shoppingCart.quantity,
            price: el.price,
          };
        }),
      };

    case RESET_CART_LOG_OUT:
      return {
        ...state,
        cart: [],
      };

    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case GET_REGIONS:
      return {
        ...state,
        regions: action.payload,
      };
    case GET_STATES:
      return {
        ...state,
        states: action.payload,
      };
    case GET_GRAPES:
      return {
        ...state,
        grapes: action.payload,
      };

    case ADD_CART_QUANTITY:
      const addProd = state.cart.map((product) =>
        product.id === action.payload
          ? { ...product, cartQuantity: product.cartQuantity + 1 }
          : product
      );
      return {
        ...state,
        cart: addProd,
      };

    case LOCALSTORAGE_CART:
      return {
        ...state,
        cartState: action.payload.data,
      };

    case REMOVE_CART_QUANTITY:
      const remProd = state.cart.map((product) =>
        product.id === action.payload && product.cartQuantity > 0
          ? { ...product, cartQuantity: product.cartQuantity - 1 }
          : product
      );
      return {
        ...state,
        cart: remProd,
      };
    case GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    case POST_PRODUCTS:
      return {
        ...state,
      };
    case DELETE_PRODUCTS:
      return {
        ...state,
      };
    case UPDATE_PRODUCTS:
      return {
        ...state,
      };
    case DELETE_REVIEW:
      return {
        ...state,
      };
    case POST_REVIEW:
      return {
        ...state,
      };
    case UPDATE_REVIEW:
      return {
        ...state,
      };

    default:
      return { ...state }; //!
  }
}

function sortArrayAtoZ(x, y) {
  if (x.name < y.name) {
    return -1;
  }
  if (x.name > y.name) {
    return 1;
  }
  return 0;
}

function sortArrayZtoA(x, y) {
  if (x.name > y.name) {
    return -1;
  }
  if (x.name < y.name) {
    return 1;
  }
  return 0;
}
