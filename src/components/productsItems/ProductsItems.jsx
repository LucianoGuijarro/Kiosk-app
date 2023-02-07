import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

const ProductsItems = ({ item, onSelected }) => {
  return (
    <View style={styles.container} >
      <TouchableOpacity style={styles.contentContainer} onPress={() => onSelected(item)}>
        <View style={styles.ImageContainer}>
          <Image style={styles.image} />
        </View>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.containerPrice}>
          <Text style={styles.price}>${item.price}</Text>
          <Text style={styles.weight}>{item.weight}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ProductsItems