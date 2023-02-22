import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import { productReducer, categoryReducer, cartReducer, orderReducer, authReducer } from '../store/reducers/index';

const rootReducer = combineReducers({
    products: productReducer,
    category: categoryReducer,
    cart: cartReducer,
    orders: orderReducer,
    auth: authReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));