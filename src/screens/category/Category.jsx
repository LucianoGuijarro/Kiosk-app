import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { CATEGORIES } from '../../constant/index';
import { CategoryItems } from '../../components/index';

const Category = ({ navigation }) => {
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
      data={CATEGORIES}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.containerList}
      />
    </SafeAreaView>
  )
}

export default Category