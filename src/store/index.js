import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import { productReducer, categoryReducer } from '../store/reducers/index';

const rootReducer = combineReducers({
    products: productReducer,
    category: categoryReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));