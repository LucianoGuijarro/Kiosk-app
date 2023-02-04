import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { styles } from './styles';

const CategotyItems = ({ item, onProductSelected }) => {
  return (
    <View style={styles.container} >
      <TouchableOpacity 
      style={{ ...styles.contentContainer, backgroundColor: item.color }} 
      onPress={() => onProductSelected(item)}
      >
        <View>
          <Text style={styles.title} >{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default CategotyItems;