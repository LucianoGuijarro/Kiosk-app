import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { CART } from '../../constant/index';
import { CartItems } from '../../components/index';
const Cart = () => {
  const total = 2000
  const renderItem = ({ item }) => <CartItems item={item} />;
  const keyExtractor = (item) => item.id.toString();
  return (
    <View style={styles.container}>
      <FlatList
        data={CART}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.contentList}
      />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.confrim}>Confirm</Text>
          <View style={styles.containerTotal}>
            <Text style={styles.total}>Total:</Text>
            <Text style={styles.totalPrice}>${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Cart