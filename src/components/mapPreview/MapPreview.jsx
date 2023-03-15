import React from 'react';
import { Image, View } from 'react-native';
import { styles } from './styles';
import { URL_MAPS } from '../../utils/index';

const MapPreview = ({ children, location, style }) => {
    const { lat, lng } = location || {};
    const mapPreviewUrl = location ? URL_MAPS(lat, lng) : null;
  return (
    <View style={{...styles.container, ...style }}>
        {
            location ? (
                <Image source={{ uri: mapPreviewUrl }} style={styles.img} />
            ) :
            children
        }
    </View>
  )
}

export default MapPreview