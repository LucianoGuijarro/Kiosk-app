import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { colors } from '../../constant';
import { styles } from './styles';
import { PRODUCTS } from '../../constant/index';

const Products = ({ navigation, route }) => {
  const { categoryId, title } = route.params
  const productsFilter = PRODUCTS.filter((product) => product.categoryId === categoryId);
  return (
    <SafeAreaView>
    </SafeAreaView>
  )
}

export default Products