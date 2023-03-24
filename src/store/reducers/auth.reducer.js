import { authType } from '../types/index';

const { REGISTER, SIGN_IN, ADD_PICTURE } = authType;

const initialState = {
    token: null,
    userId: null,
    email: null,
    picture: null,
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
                email: action.email,
            }
            case ADD_PICTURE: 
            picture = action.picture;
            return {
                ...state,
                picture: action.picture
            }
        default:
            return state
    }
};

export default authReducer;