import React from 'react';
import { Button, Text, View } from 'react-native';
import { colors } from '../../constant';
import { styles } from './styles';

const Products = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Products!</Text>
        <Button
        title='Go to Products Details'
        color={colors.primary}
        onPress={() => navigation.navigate('ProductsDetails')}
        />
    </View>
  )
}

export default Products