import React, { useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native';
import { styles } from './styles';
import { colors } from '../../constant/index';

const Account = () => {
    const [isLogin, setIsLogin] = useState(true);
    const title = isLogin ? 'Login' : 'Register';
    const messageButton = isLogin ? 'Login' : 'Register';
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
                    />
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='enter your password'
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry
                    />
                    <View style={styles.containerButton}>
                        <Button color={colors.secondary} title={messageButton} />
                        <View style={styles.containerFooter}>
                            <Text style={styles.textFooter}>You don't have account?</Text>
                            <TouchableOpacity onPress={() => setIsLogin(!isLogin)}><Text style={styles.textRegister}>Register!</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Account