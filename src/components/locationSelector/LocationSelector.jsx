import React, { useState } from 'react';
import { Alert, Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { colors } from '../../constant/index';
import * as Location from 'expo-location';
import { MapPreview } from '../index';
const LocationSelector = ({ onLocation, addAdress }) => {
    const navigation = useNavigation();
    const [pickerLocation, setPickerLocation] = useState(null);
    const verifyPermissions = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('There are not enough permissions to enter the device location', [{ text: 'Okey' }])
            return false
        }
        return true
    }
    const onHandleLocation = async (isMaps = false ) => {
        const hasPermission = await verifyPermissions();
        if (!hasPermission) return;
        const location = await Location.getCurrentPositionAsync({
            timeout: 5000,
        });

        const { latitude, longitude } = location.coords;
        setPickerLocation({ lat: latitude, lng: longitude });
        onLocation({ lat: latitude, lng: longitude });
        addAdress({ lat: latitude, lng: longitude });
    };
    return (
        <View style={styles.container}>
            <MapPreview location={pickerLocation} style={styles.preview}>
                <Text style={styles.text}>You haven't selected any address yet</Text>
            </MapPreview>
            <View style={styles.containerButton}>
                <Button
                    title='Selected location'
                    onPress={onHandleLocation}
                    color={colors.primary}
                />
            </View>
        </View>
    )
}

export default LocationSelector

