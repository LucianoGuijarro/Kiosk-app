import { cartType } from '../types/index';
import { REALTIME_DATABASE_URL } from '../../constant/firebase/index';
const { ADD_TO_CART, CONFIRM_ORDER, REMOVE_TO_CART, RESET_CART } = cartType

export const addToCart = (item) => ({
    type: ADD_TO_CART,
    item,
})

export const removeFromCart = (id) => ({
    type: REMOVE_TO_CART,
    id,
})

export const resetCart = () => ({
    type: RESET_CART
})

export const confirmOrder = (items, total, address, email) => {
    return async (dispatch) => {
        try {
            const response = fetch(`${REALTIME_DATABASE_URL}/ordes.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    date: Date.now(),
                    items,
                    total,
                    address,
                    email,
                })
            });
            const result = await response.json();
            dispatch({
                type: CONFIRM_ORDER,
                result,
            })
        } catch (error) {
            dispatch({
                type: CONFIRM_ORDER,
                error,
            })
        }
    }
}

