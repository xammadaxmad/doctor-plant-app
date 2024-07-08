// MainPage.js
import React from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Index = ({ }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#4CAF50' : '#388E3C',
            },
            styles.button,
          ]}
          onPress={() => navigation.navigate('Login')}
        >
          {({ pressed }) => (
            <>
              <Text style={styles.buttonText}>Login</Text>
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
          onPress={() => navigation.navigate('Register')}
        >
          {({ pressed }) => (
            <>
              <Text style={styles.buttonText}>Register</Text>
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
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
  logo: {
    width: 150,
    height: 150,
  },
  content: {
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
    elevation: 3, // For Android elevation
    shadowColor: '#000', // For iOS shadow
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

export default Index;
