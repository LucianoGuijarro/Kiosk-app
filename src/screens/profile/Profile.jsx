import React, { useState, useEffect } from 'react';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../constant';
import { PhotoModal } from '../../components/index';
const Profile = () => {
  const [visibleModal, setVisibleModal] = useState(false)
  const userEmail = useSelector((state) => state.auth.email);
  const [pictureProfile, setPictureProfile] = useState(null);
  const onHandleModal = () => {
    setVisibleModal(!visibleModal)
  }
  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync().catch((error) => console.log(error));
    if (status !== "granted") {
      Alert.alert('Permissions insufficient', 'You need to have permissions to use the camera.', [{ text: 'OK' }])
      return false
    }
    return true;
  }
  const onHandleCamera = async () => {
    const hasPermissions = await verifyPermissions().catch((error) => console.log(error))
    if (!hasPermissions) return;
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [12, 7],
      quality: 0.7,
    }).catch((error) => console.log(error));
    setPictureProfile(image.assets[0].uri)
    setVisibleModal(!visibleModal)
  }
  return (
    <View style={styles.container}>
      <View style={styles.imagenContainer}>
        <View style={styles.imageProfile}>
          {
            !pictureProfile ? <FontAwesome name="user-circle-o" size={90} color={colors.black} style={styles.withOutPhoto} /> :
              <Image source={{ uri: pictureProfile }} style={styles.image} />
          }
          <TouchableOpacity onPress={onHandleModal} style={styles.button}>
            <MaterialIcons name="photo-camera" size={28} color={colors.white} style={styles.iconCamera} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.text}>{userEmail}</Text>
      <PhotoModal visibleModal={visibleModal} onHandleModal={onHandleModal} onHandleCamera={onHandleCamera} />
    </View>
  )
}

export default Profile