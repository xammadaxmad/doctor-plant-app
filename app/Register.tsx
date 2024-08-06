// RegisterScreen.js
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Image } from 'react-native';
import { RegisterPost } from '../providers/apiProvider.mjs';

const Register = ({  }) => {
  const [username,setUsername] = useState(null)
  const [email,setEmail] = useState(null)
  const [password,setPassword] = useState(null)
    const navigation = useNavigation();
  const handleRegister = async() => {
    
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
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#9E9E9E"
          onChangeText={(text)=>setUsername(text)}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#9E9E9E"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(text)=>setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#9E9E9E"
          secureTextEntry={true}
          onChangeText={(text)=>setPassword(text)}
          value={password}
        />
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#4CAF50' : '#388E3C',
            },
            styles.registerButton,
          ]}
          onPress={handleRegister}
        >
          {({ pressed }) => (
            <Text style={styles.buttonText}>Register</Text>
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
  registerButton: {
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

export default Register;
