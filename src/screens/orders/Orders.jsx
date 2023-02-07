import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from './styles';
import { ORDERS } from '../../constant/index';
import { OrderItems } from '../../components/index';


const Orders = () => {
  const renderItem = ({ item }) => <OrderItems item={item} />;
  const keyExtractor = (item) => item.id;
  return (
    <View style={styles.container}>
        <FlatList 
        data={ORDERS}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        />
    </View>
  )
}

export default Orders