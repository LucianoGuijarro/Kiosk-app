import { cartType } from '../types/index';
import { sumTotal } from '../../utils/index'

const { ADD_TO_CART, REMOVE_TO_CART, RESET_CART } = cartType;

const initialState = {
    items: [],
    total: 0,
}


const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let updatedCart = [];
            if (state.items.find((item) => item.id === action.item.id)) {
                updatedCart = state.items.map((item) => {
                    if (item.id === action.item.id) item.quantity += 1;
                    return item;
                })
            } else {
                const item = { ...action.item, quantity: 1 };
                updatedCart = [...state.items, item]
            }
            return {
                ...state,
                items: updatedCart,
                total: sumTotal(updatedCart),
            }
        case REMOVE_TO_CART:
            const filteredCart = state.items.filter
                ((item) => item.id !== action.id)
            return {
                ...state,
                items: filteredCart,
                total: sumTotal(filteredCart)
            }
        case RESET_CART: return state
        default:
            return state
    }
}

export default cartReducer;