import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { CategoryItems } from '../../components/index';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../../store/actions/index';

const Category = ({ navigation }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  const onProductSelected = (item) => {
    dispatch(selectCategory(item.id))
    navigation.navigate('Products', {
      title: item.title,
    })
  }
  const renderItem = ({ item }) => <CategoryItems item={item} onProductSelected={onProductSelected} />;
  const keyExtractor = ( item ) => item.id.toString() ;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
      data={categories}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.containerList}
      contentContainerStyle={styles.contentContainerList}
      />
    </SafeAreaView>
  )
}

export default Category