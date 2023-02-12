import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from './styles';
import { colors } from '../../constant/index';
import { useSelector } from 'react-redux';

const ProductsDetails = ({ route }) => {
  const product = useSelector((state) => state.products.selected)
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