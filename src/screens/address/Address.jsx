import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { LocationSelector } from '../../components/index';
import { styles } from './styles';

const Address = () => {
  const onLocation = (location) => {
    console.warn(location)
  };
  return (
    <ScrollView style={styles.container}>
        <Text style={styles.title}>Shipping Address</Text>
        <LocationSelector onLocation={onLocation}/>
    </ScrollView>
  )
}

export default Address