import { createStore, combineReducers } from 'redux';

import { productReducer, categoryReducer } from '../store/reducers/index';

const rootReducer = combineReducers({
    products: productReducer,
    category: categoryReducer,
});

export default createStore(rootReducer);