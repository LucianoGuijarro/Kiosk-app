import { URL_AUTH_REGISTER, URL_AUTH_SIGN_IN } from '../../constant/firebase';
import { authType } from '../types/index';

const { REGISTER, SIGN_IN } = authType;

export const signIn = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await fetch(URL_AUTH_SIGN_IN, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true,
                })
            });
            const data = await response.json();
            dispatch({
                type: SIGN_IN,
                token: data.idToken,
                userId: data.localId,
                email: data.email,
            })
        } catch (error) {
            throw error
        }
    }
};

export const register = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await fetch(URL_AUTH_REGISTER, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true,
                })
            });
            if (!response.ok) {
                throw new Error('Something went wrong!')
            }
            const data = await response.json();
            dispatch({
                type: REGISTER,
                token: data.idToken,
                userId: data.localId,
            })
        } catch (error) {
            throw error
        }
    }
};