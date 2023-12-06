
import { combineReducers } from 'redux';


import productReducer from './productReducer';
import cartReducer from './cartReducer';
import authReducer from './authReducer';



const rootReducer = combineReducers({
    cart: cartReducer,
    products: productReducer,
    customer:authReducer,
});

export default rootReducer;