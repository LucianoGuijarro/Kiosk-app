import React, { useState } from 'react';
import { Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { styles } from './styles';
const Maps = ({ navigation, route }) => {
  const coords = route.params;
  console.log(coords)
  const initialRegion = {
    latitude: coords?.lat,
    longitude: coords?.lng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }
  const [selectedLocation, setSelectedLocation] = useState(null)

  const onHandleSaveLocation = (event) => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    })
  }
  return (
    <MapView
      initialRegion={initialRegion}
      onPress={onHandleSaveLocation}
      style={styles.container}
      minZoomLevel={14}
    >
      {selectedLocation && (
        <Marker
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
          title='Ubication selected'
        />
      )}
    </MapView>
  )
}

export default Maps