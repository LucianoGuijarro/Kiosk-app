import React from 'react'
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { Ionicons, MaterialIcons, Octicons } from '@expo/vector-icons';

const PhotoModal = ({ visibleModal, onHandleModal, onHandleCamera }) => {
    return (
        <Modal visible={visibleModal} animationType='slide' transparent>
            <View style={styles.container}>
                <View style={styles.contentModal}>
                    <View style={styles.contentTitlte}>
                        <Text style={styles.titleModal}>Profile picture</Text>
                        <TouchableOpacity onPress={onHandleModal}>
                            <Octicons name="x-circle" style={styles.iconX} size={30} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.contentButton}>
                            <TouchableOpacity style={styles.button} onPress={onHandleCamera}>
                                <Ionicons name="camera-sharp" size={40} color="black" />
                            </TouchableOpacity>
                            <Text style={styles.text}>Camera</Text>
                        </View>
                        <View style={styles.contentButton}>
                            <TouchableOpacity style={styles.button}>
                                <MaterialIcons name="photo" size={40} color="black" />
                            </TouchableOpacity>
                            <Text style={styles.text}>Gallery</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default PhotoModal