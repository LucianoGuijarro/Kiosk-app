import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from './styles';
import { colors, PRODUCTS } from '../../constant/index'

const ProductsDetails = ({ route }) => {
  const { productId, title } = route.params;
  const product = PRODUCTS.find((product) => product.id === productId)
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}></View>
      <Text style={styles.title} >{product.description}</Text>
      <Button 
      title='Add to cart'
      color={colors.primary}
      />
    </View>
  )
}

export default ProductsDetails