import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducer/combineReducers";
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

