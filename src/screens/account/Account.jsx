import React, { useState, useReducer } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native';
import { styles } from './styles';
import { colors } from '../../constant/index';
import { useDispatch } from 'react-redux';
import { signIn, register } from '../../store/actions/index';
import { Input } from '../../components/index';
import { UPDATE_FORM, onInputChange } from '../../utils/form/index';


const initialState = {
    email: { value: '', error: '', touched: false, hasError: true },
    password: { value: '', error: '', touched: false, hasError: true },
    isFormValid: false,
}

const formReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_FORM: 
        const { name, value, hasError, error, touched, isFormValid } = action.data;
        return {
            ...state,
            [name]: {
                ...state[name],
                value,
                hasError,
                touched,
                error,
            },
            isFormValid,
        };
        default:
            return state
    }
}

const Account = () => {
    const dispatch = useDispatch();
    const [isLogin, setIsLogin] = useState(true);
    const [formState, dispatchFormState] = useReducer(formReducer, initialState)
    const title = isLogin ? 'Login' : 'Register';
    const messageButton = isLogin ? 'Login' : 'Register';
    const massage = isLogin ? `You don't have account?` : 'Already have an account?';
    const textButton = isLogin ? 'Register!' : 'Login';
    const onHandleSubmit = () => {
        dispatch(isLogin ? signIn(formState.email.value, formState.password.value) : register(formState.email.value, formState.password.value))
    }
    const onHandleInputChange = (value, type) => {
        onInputChange(type, value, dispatchFormState, formState)
    }
    return (
        <KeyboardAvoidingView style={styles.keyboardContainer}>
            <View style={styles.container} >
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Input
                        label='Email'
                        placeholder='enter your email'
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(text) => onHandleInputChange(text, 'email')}
                        value={formState.email.value}
                        error={formState.email.error}
                        hasError={formState.email.hasError}
                        touched={formState.email.touched}
                    />
                    <Input
                        label='Password'
                        placeholder='enter your password'
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry
                        onChangeText={(text) => onHandleInputChange(text, 'password')}
                        value={formState.password.value}
                        error={formState.password.error}
                        hasError={formState.password.hasError}
                        touched={formState.password.touched}
                    />
                    <View style={styles.containerButton}>
                        <Button color={colors.secondary} title={messageButton} onPress={onHandleSubmit} />
                        <View style={styles.containerFooter}>
                            <Text style={styles.textFooter}>{massage}</Text>
                            <TouchableOpacity onPress={() => setIsLogin(!isLogin)}><Text style={styles.textRegister}>{textButton}</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Account