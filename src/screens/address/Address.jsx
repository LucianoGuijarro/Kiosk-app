import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { LocationSelector } from '../../components/index';
import { URL_GEOCODING } from '../../utils';
import { styles } from './styles';

const Address = () => {
  const [coors, setCoors] = useState(null);
  const [address, setAddress] = useState(null)
  const onLocation = (location) => {
    setCoors(location)
  };
  const addAdress = async (coords) => {
    try {
      const response = await fetch(URL_GEOCODING(coords?.lat, coords?.lng));
      if (!response.ok) {
        throw new Error('No se pudo conectar al servidor')
      }
      const data = await response.json();
      if (data.resutls) throw new Error('No se encontro direccion')
      const newAddress = data.results[0].formatted_address;
      setAddress(newAddress)
    } catch (error) {
      console.log(error)
    }
  }
  console.warn(address)
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Shipping Address</Text>
      <LocationSelector onLocation={onLocation} addAdress={addAdress} />
      {
        address ? <Text>{address}</Text> :
          null
      }
    </ScrollView>
  )
}

export default Address