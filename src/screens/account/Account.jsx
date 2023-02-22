import React, { useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native';
import { styles } from './styles';
import { colors } from '../../constant/index';
import { useDispatch } from 'react-redux';
import { signIn, register } from '../../store/actions/index';
const Account = () => {
    const dispatch = useDispatch();
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const title = isLogin ? 'Login' : 'Register';
    const messageButton = isLogin ? 'Login' : 'Register';
    const massage = isLogin ? `You don't have account?` : 'Already have an account?';
    const textButton = isLogin ? 'Register!' : 'Login';
    const onHandleSubmit = () => {
        dispatch( isLogin ? signIn(email, password) : register(email, password))
    }
    return (
        <KeyboardAvoidingView style={styles.keyboardContainer}>
            <View style={styles.container} >
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='enter your email'
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                    />
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='enter your password'
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry
                        onChangeText={(text) => setPassword(text)}
                        value={password}
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