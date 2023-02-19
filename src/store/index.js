import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import { productReducer, categoryReducer, cartReducer, orderReducer } from '../store/reducers/index';

const rootReducer = combineReducers({
    products: productReducer,
    category: categoryReducer,
    cart: cartReducer,
    orders: orderReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));