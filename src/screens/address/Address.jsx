import React, { useEffect, useState } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { LocationSelector } from '../../components/index';
import { colors } from '../../constant';
import { URL_GEOCODING } from '../../utils';
import { styles } from './styles';
import { confirmOrder } from '../../store/actions';

const Address = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.items)
  const total = useSelector((state) => state.cart.total)
  const [coors, setCoors] = useState(null);
  const [address, setAddress] = useState(null)
  const onLocation = (location) => {
    setCoors(location)
  };
  const addAdress = async (coords) => {
    try {
      const response = await fetch(URL_GEOCODING(coords?.lat, coords?.lng)).catch((error) => { console.log(error) });
      if (!response.ok) {
        throw new Error('No se pudo conectar al servidor')
      }
      const data = await response.json();
      if (data.resutls) throw new Error('No se encontro direccion')
      const newAddress = data.results[0].formatted_address;
      setAddress(newAddress)
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  }
  const onConfirmOrder = () => {
    dispatch(confirmOrder(cart, total, address))

  }
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Shipping Address</Text>
      <LocationSelector onLocation={onLocation} addAdress={addAdress} />
      {
        address ?
          <View>
            <View style={styles.containerAddress}>
              <Text style={styles.addressTitle}>Address selected:</Text>
              <Text style={styles.textAddress}>{address}</Text>
            </View>
            <View style={styles.messageContainer}>
              <Text style={styles.important}>Important!</Text>
              <Text style={styles.importantMessage}>Verify that the selected address is correct since the order has been sent to that address.</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title='Confirm order'
                color={colors.secondary}
                onPress={onConfirmOrder}
              />
            </View>
          </View>
          :
          null
      }
    </ScrollView>
  )
}

export default Address