import React from 'react';
import { Button, Image, Text, View } from 'react-native';
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

      <Text style={styles.title} >{product?.description}</Text>

      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.containerPrice}>
        <Text style={styles.price}>${product.price}</Text>
      </View>
      <View style={styles.containerButton}>
        <Button
          title='Add to cart'
          color={colors.primary}
          onPress={onAddToCart}
        />
      </View>
    </View>
  )
}

export default ProductsDetails