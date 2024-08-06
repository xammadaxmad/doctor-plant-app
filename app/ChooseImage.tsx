import React, { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Text, Pressable, Image, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { UploadImage } from '../providers/apiProvider.mjs';


const UploadScreen = () => {
    const [image, setImage] = useState(null);
    const navigation = useNavigation();
    const [inProgress,setInProgress] = useState(false)

    const handleChooseFromGallery = async() => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
          });
          if(!result.cancelled){
            setImage(result.assets[0]?.uri);
          }
    }; 

    const handleOpenCamera = async() => {
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            quality: 1,
          });
          if(!result.cancelled){
            setImage(result.assets[0]?.uri);
          }
    };

    const handleUpload = async() => {
      
    };

    return (
        <View style={styles.container}>
            {image && (
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: image }}
                        style={styles.placeholderImage}
                        resizeMode="contain"
                    />
                </View>
            )}
            <View style={styles.buttonsContainer}>
                <Pressable 
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? '#4CAF50' : '#388E3C',
                        },
                        styles.button,
                    ]}
                    onPress={handleChooseFromGallery}
                >
                    <FontAwesome name="photo" size={24} color="white" style={styles.icon} />
                    <Text style={styles.buttonText}>Choose from Gallery</Text>
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? '#4CAF50' : '#388E3C',
                        },
                        styles.button,
                    ]}
                    onPress={handleOpenCamera}
                >
                    <FontAwesome name="camera" size={24} color="white" style={styles.icon} />
                    <Text style={styles.buttonText}>Open Camera</Text>
                </Pressable>
                {image && (
                    <Pressable disabled={false}
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? '#1565C0' : '#1976D2',
                            },
                            styles.button,
                        ]}
                        onPress={handleUpload}
                    >
                        <FontAwesome name="upload" size={24} color="white" style={styles.icon} />
                        <Text style={styles.buttonText}>{inProgress?"Uploading...":"Upload"}</Text>
                    </Pressable>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    placeholderImage: {
        width: '100%',
        height: 300,
    },
    buttonsContainer: {
        marginBottom: 20,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    icon: {
        marginRight: 10,
    },
});

export default UploadScreen;
