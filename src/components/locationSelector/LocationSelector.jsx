import React, { useState } from 'react';
import { Alert, Button, Text, View } from 'react-native';
import { styles } from './styles';
import { colors } from '../../constant/index';
import * as Location from 'expo-location';
const LocationSelector = ({ onLocation }) => {
    const [pickerLocation, setPickerLocation] = useState(null);
    const verifyPermissions = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('There are not enough permissions to enter the device location', [{ text: 'Okey' }])
            return false
        }
        return true
    }
    const onHandleLocation = async () => {
        const hasPermission = await verifyPermissions();
        if(!hasPermission) return;
        const location = await Location.getCurrentPositionAsync({
            timeout: 5000,
        });

        const { latitude, longitude  } = location.coords;
        setPickerLocation({ lat: latitude, lng: longitude });
        onLocation({ lat: latitude, lng: longitude });
    };
  return (
    <View style={styles.container}>
        <View style={styles.preview}>
            {
                !pickerLocation ? (
                    <Text style={styles.text}>You haven't selected any address yet</Text>
                ) : (
                    <Text style={styles.text}>{`Latitude: ${pickerLocation.lat}, Longitude: ${pickerLocation.lng}`}</Text>
                )
            }
        </View>
        <Button 
        title='Selected location'
        onPress={onHandleLocation}
        color={colors.primary}
        />
    </View>
  )
}

export default LocationSelector