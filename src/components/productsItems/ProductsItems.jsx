import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

const ProductsItems = ({ item, onSelected }) => {
  return (
    <View style={styles.container} >
      <TouchableOpacity style={styles.contentContainer} onPress={() => onSelected(item)}>
        <View style={styles.ImageContainer}>
          <Text style={styles.iamge}>{item.title}</Text>
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.containerPrice}>
          <Text style={styles.price}>${item.price}</Text>
          <Text style={styles.weight}>{item.weight}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ProductsItems