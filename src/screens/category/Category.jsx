import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { CategoryItems } from '../../components/index';
import { useSelector } from 'react-redux';

const Category = ({ navigation }) => {
  const categories = useSelector((state) => state.category.categories);
  const onProductSelected = (item) => {
    navigation.navigate('Products', {
      categoryId: item.id,
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