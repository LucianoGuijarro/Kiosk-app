import React from 'react';
import { Text, TextInput, View } from 'react-native';
import Label from '../label/Label';
import { styles } from './styles';

const Input = ({
    editable,
    children,
    value,
    style,
    onChangeText,
    onFocus,
    onBlur,
    maxLength,
    placeholder,
    placeholderTextColor,
    keyboardType,
    hasError,
    error,
    touched,
    ...props
}) => {
    return (
        <View style={styles.container}>
            <Label {...props}>
                <TextInput
                    {...props}
                    editable={editable}
                    value={value}
                    style={{ ...styles.input, ...style }}
                    onChangeText={onChangeText}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    keyboardType={keyboardType}
                />
            </Label>
            {hasError && touched && (
                <View style={styles.containerMessage}>
                    <Text style={styles.message}>{error}</Text>
                </View>
            )}
        </View>
    )
}

export default Input