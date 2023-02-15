import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from './styles';
import { colors } from '../../constant/index';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions/index'

const ProductsDetails = ({ route }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selected);

  const onAddToCart = () => {
    dispatch(addToCart(product))
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}></View>
      <Text style={styles.title} >{product?.description}</Text>
      <Button
        title='Add to cart'
        color={colors.primary}
        onPress={onAddToCart}
      />
    </View>
  )
}

export default ProductsDetails