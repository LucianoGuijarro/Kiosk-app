import { authType } from '../types/index';

const { REGISTER, SIGN_IN } = authType;

const initialState = {
    token: null,
    userId: null,
    email: null,
};

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case REGISTER: 
        return {
            ...state,
            token: action.token,
            userId: action.userId,

        }
        case SIGN_IN:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
            }
        default:
            return state
    }
};

export default authReducer;