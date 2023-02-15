import { cartType } from '../types/index';

const { ADD_TO_CART, CONFIRM_ORDER, REMOVE_TO_CART } = cartType

export const addToCart = (item) => ({
    type: ADD_TO_CART,
    item,
})

export const confirmOrder = (order) => ({
    type: CONFIRM_ORDER,
    order,
})

export const removeFromCart = (id) => ({
    type: REMOVE_TO_CART,
    id,
})