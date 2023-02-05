import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { colors } from '../../constant';
import { styles } from './styles';
import { PRODUCTS } from '../../constant/index';
import { ProductsItems } from '../../components/index';

const Products = ({ navigation, route }) => {
  const { categoryId, title } = route.params
  const productsFilter = PRODUCTS.filter((product) => product.categoryId === categoryId);
  const renderItem = ({item}) => <ProductsItems item={item} onSelected={onSelected} />;
  const keyExtractor = (item) => item.id.toString()
  const onSelected = (item) => {
    navigation.navigate('ProductsDetails', {
      productId: item.id,
      title: item.title
    })
  }
  return (
    <SafeAreaView>
      <FlatList 
      data={productsFilter}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.contentList}
      numColumns={3}
      />
    </SafeAreaView>
  )
}

export default Products