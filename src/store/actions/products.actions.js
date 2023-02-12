import { productsType } from '../types/index';

const { FILTER_PRODUCTS, SELECT_PRODUCT} = productsType;

export const selectProduct = (id) => ({
    type: SELECT_PRODUCT,
    productId: id
});

export const filterProducts = (id) => ({
    type: FILTER_PRODUCTS,
    categoryId: id
});