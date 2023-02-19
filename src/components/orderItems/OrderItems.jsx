import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { formaDate } from '../../utils/index';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../constant';

const OrderItems = ({ item, onDelete }) => {
    return (
        <View style={styles.container} >
            <View>
                <Text style={styles.date}>{formaDate(item.date)}</Text>
                <Text style={styles.total}>${item.total}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <MaterialIcons name='delete-forever' size={22} color={colors.white} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OrderItems