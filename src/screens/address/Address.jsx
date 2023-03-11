import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

const Address = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Shipping Address</Text>
        <View style={styles.contentContainer}>
        </View>
    </View>
  )
}

export default Address