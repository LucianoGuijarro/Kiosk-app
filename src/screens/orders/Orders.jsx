import React, { useCallback, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from './styles';
import { OrderItems } from '../../components/index';
import { useSelector, useDispatch } from 'react-redux';
import { getOrders, deleteOrder } from '../../store/actions/index';
import { useFocusEffect } from '@react-navigation/native';

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.listOrders)
  useFocusEffect(
    useCallback(() => {
      dispatch(getOrders())
    }, [dispatch])
  )
  const onDelete = (id) => {
    dispatch(deleteOrder(id))
  }
  const renderItem = ({ item }) => <OrderItems item={item} onDelete={onDelete} />;
  const keyExtractor = (item) => item.id;
  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  )
}

export default Orders