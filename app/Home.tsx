// HomeScreen.js
import React from 'react';
import { StyleSheet, View, Text, Pressable, Image } from 'react-native';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const Home = ({ }) => {
    const navigation = useNavigation();
    const handleChooseImage = () => {
        // Implement choose from gallery logic
        navigation.navigate("ChooseImage")
    };


    const handleHistory = () => {
        navigation.navigate("History")
    };

    const handleChangePassword = () => {
        navigation.navigate("ChangePassword")
    };

    const handleLogout = () => {
        navigation.navigate("StartUp")
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../assets/images/logo.png')} // Replace with your logo path
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.buttonContainer}>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? '#4CAF50' : '#388E3C',
                        },
                        styles.button,
                    ]}
                    onPress={handleChooseImage}
                >
                    {({ pressed }) => (
                        <>
                            <FontAwesome name="photo" size={24} color="white" />
                            <Text style={styles.buttonText}>Choose Image</Text>
                        </>
                    )}
                </Pressable>
                
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? '#4CAF50' : '#388E3C',
                        },
                        styles.button,
                    ]}
                    onPress={handleHistory}
                >
                    {({ pressed }) => (
                        <>
                            <FontAwesome name="history" size={24} color="white" />
                            <Text style={styles.buttonText}>History</Text>
                        </>
                    )}
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? '#4CAF50' : '#388E3C',
                        },
                        styles.button,
                    ]}
                    onPress={handleChangePassword}
                >
                    {({ pressed }) => (
                        <>
                            <FontAwesome name="lock" size={24} color="white" />
                            <Text style={styles.buttonText}>Change Password</Text>
                        </>
                    )}
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? '#4CAF50' : '#388E3C',
                        },
                        styles.button,
                    ]}
                    onPress={handleLogout}
                >
                    {({ pressed }) => (
                        <>
                            <FontAwesome name="sign-out" size={24} color="white" />
                            <Text style={styles.buttonText}>Logout</Text>
                        </>
                    )}
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
    },
    header: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 20,
    },
    logo: {
        width: 150,
        height: 150,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 60,
        marginBottom: 20,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        marginLeft: 10,
    },
});

export default Home;
