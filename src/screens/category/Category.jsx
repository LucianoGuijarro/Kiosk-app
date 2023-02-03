import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from './styles';
import { colors } from '../../constant/index';

const Category = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Category!</Text>
        <Button
        title='Go to products'
        color={colors.primary}
        onPress={() => navigation.navigate('Products')}
        />
    </View>
  )
}

export default Category