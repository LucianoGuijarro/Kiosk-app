import { PRODUCTS } from '../../constant/index';

const initialState = {
    products: PRODUCTS,
    filteredProducts: [],
    selected: null,
};

const productReducer = (state = initialState, action) => {
    return state
};

export default productReducer;