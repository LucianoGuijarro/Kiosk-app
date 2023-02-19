import { orderTypes } from '../types/index';

const { DELETE_ORDER, GET_ORDERS } = orderTypes;

const initialState = {
    listOrders: [],
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS:
            return {
                ...state,
                listOrders: action.orders
            };
        case DELETE_ORDER:
            return {
                ...state,
                listOrders: state.listOrders.filter(
                    (order) => order.id !== action.id
                )
            }
        default:
            return state
    }
};

export default orderReducer;

