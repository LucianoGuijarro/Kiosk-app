import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { PRODUCTS } from '../../constant/index'

const ProductsDetails = ({ route }) => {
  const { productId, title } = route.params;
  const product = PRODUCTS.find((product) => product.id === productId)
  return (
    <View style={styles.container}>
      <Text style={styles.title} >{product.description}</Text>
    </View>
  )
}

export default ProductsDetails