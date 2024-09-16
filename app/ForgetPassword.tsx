// ForgotPasswordScreen.js
import { ForgetPasswordPost } from '@/providers/apiProvider.mjs';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Image } from 'react-native';

const ForgotPassword = ({ }) => {
  const navigate = useNavigation()
  const [email, setEmail] = useState("")
  const handleResetPassword = () => {
    ForgetPasswordPost(email).then(response => {
      console.log(response)
    })
  };

  const handleLoginBack = () => {
    navigate.navigate("Login")
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/images/logo.png')} // Replace with your logo path
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.heading}>Forgot Password?</Text>
        <Text style={styles.subHeading}>Enter your email address to reset your password.</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#9E9E9E"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#4CAF50' : '#388E3C',
            },
            styles.resetButton,
          ]}
          onPress={handleResetPassword}
        >
          {({ pressed }) => (
            <Text style={styles.buttonText}>Reset Password</Text>
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
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
    textAlign: 'center',
  },
  subHeading: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 20,
    textAlign: 'center',
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
  resetButton: {
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
});

export default ForgotPassword;
