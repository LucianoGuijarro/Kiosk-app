import React, { useEffect } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { ProductsItems } from '../../components/index';
import { useSelector, useDispatch } from 'react-redux';
import { filterProducts, selectProduct } from '../../store/actions/products.actions';

const Products = ({ navigation }) => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.selected)
  const filteredProduct = useSelector((state) => state.products.filteredProducts)
  const renderItem = ({item}) => <ProductsItems item={item} onSelected={onSelected} />;
  const keyExtractor = (item) => item.id.toString()
  const onSelected = (item) => {
    dispatch(selectProduct(item.id))
    navigation.navigate('ProductsDetails', {
      title: item.title
    })
  }

  useEffect(() => {
    dispatch(filterProducts(category.id))
  }, []);

  return (
    <SafeAreaView>
      <FlatList 
      data={filteredProduct}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.contentList}
      numColumns={3}
      />
    </SafeAreaView>
  )
}

export default Products