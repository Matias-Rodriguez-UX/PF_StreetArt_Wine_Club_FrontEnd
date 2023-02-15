import { combineReducers } from 'redux';
import usersReducer from './userReducer';
import productsReducer from './productsReducer';
import membershipsReducer from './membershipsReducer';
import ordersReducer from './ordersReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    users: usersReducer,
    memberships: membershipsReducer,
    orders: ordersReducer,
});

export default rootReducer;