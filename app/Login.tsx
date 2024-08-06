import React, { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Text, TextInput, Pressable, Image } from 'react-native';
import { LoginPost } from '../providers/apiProvider.mjs';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = () => {
    const [email,setEmail] = useState("test@example.com")
    const [password,setPassword] = useState("test")
    const navigation = useNavigation()

    const handleLogin = async () => {
        navigation.navigate("Home")
    };


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../assets/images/logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="#9E9E9E"
                    onChangeText={text=>setEmail(text)}
                    value={email}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#9E9E9E"
                    secureTextEntry={true}
                    onChangeText={text=>setPassword(text)}
                    value={password}
                />
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? '#4CAF50' : '#388E3C',
                        },
                        styles.loginButton,
                    ]}
                    onPress={handleLogin}
                >
                    {({ pressed }) => (
                        <Text style={styles.buttonText}>Login</Text>
                    )}
                </Pressable>
                <Pressable
                    style={styles.forgotPasswordButton}
                    onPress={() => navigation.navigate("ForgetPassword")}
                >
                    {({ pressed }) => (
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
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
        justifyContent: 'center',
    },
    header: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logo: {
        width: 150,
        height: 150,
    },
    form: {
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
        fontSize: 16,
        color: '#333333',
    },
    loginButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    forgotPasswordButton: {
        alignItems: 'center',
        marginTop: 10,
    },
    forgotPasswordText: {
        color: '#4CAF50',
        fontSize: 16,
    },
});

export default Login;
