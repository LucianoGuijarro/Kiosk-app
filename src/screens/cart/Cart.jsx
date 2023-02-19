import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { removeFromCart, confirmOrder } from '../../store/actions/index'
import { CartItems } from '../../components/index';
import { useSelector, useDispatch } from 'react-redux';
const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.items)
  const total = useSelector((state) => state.cart.total)
  const onDelete = (id) => {
    dispatch(removeFromCart(id))
  }
  const onConfirmOrder = () => {
    dispatch(confirmOrder(cart, total))
  }
  const renderItem = ({ item }) => <CartItems item={item} onDelete={onDelete} />;
  const keyExtractor = (item) => item.id.toString();
  const Header = () =>
    cart.length === 0 && (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Cart is empty</Text>
      </View>
    )
  const Footer = () =>
    cart.length > 0 && (
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={onConfirmOrder} >
          <Text style={styles.confrim}>Confirm</Text>
          <View style={styles.containerTotal}>
            <Text style={styles.total}>Total:</Text>
            <Text style={styles.totalPrice}>${total.toFixed(2)}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.contentList}
      />
      <Footer />
    </View>
  )
}

export default Cart