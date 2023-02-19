import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../constant';

const CartItems = ({ item, onDelete }) => {
    return (
        <View style={styles.container} >
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.contentContainer}>
                <View>
                    <Text style={styles.quantity}>{item.quantity}</Text>
                    <Text style={styles.price}>${item.price}</Text>
                </View>
                <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <MaterialIcons name='delete-forever' size={22} color={colors.white}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartItems