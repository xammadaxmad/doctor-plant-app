import { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
const API_BASE_URL = "http://192.168.8.110:3000/api"
const LoginPost = async (email, password) => {
  try {
    const URL = `${API_BASE_URL}/auth/login`
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const resp = await response.json();
    return resp.data
  } catch (error) {
    console.error('Login error:', error);
    Alert.alert('Login Error', 'Failed to log in. Please try again.');
    return null
  }
}




const RegisterPost = async (username, email, password) => {
  try {
    const URL = `${API_BASE_URL}/auth/register`
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (!response.ok) {
      throw new Error('Regiseration Failed! Please try again');
    }

    const resp = await response.json();
    return resp.data
  } catch (error) {
    console.error('Registeration Error:', error);
    Alert.alert('Registeration Error:', 'Failed to register. Please try again.');
    return null
  }
}


const GetHistoryList = async () => {
  try {
    const URL = `${API_BASE_URL}/history/get`
    const token = await GetToken()
    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Could not get history list');
    }

    const resp = await response.json();
    return resp.data
  } catch (error) {
    console.error('History Error:', error);
    Alert.alert('History Error:', 'Could not get history list.');
    return null
  }
}


async function UploadImage(image) {
  try {
  
    let formData = new FormData();
    formData.append('image', {
      uri: image,
      type: 'image/jpeg', // adjust accordingly to the type of file you're uploading
      name: 'image.jpg',
    });

    // Make the API request
    const token = await GetToken()
    const AUTHTOKEN = `Bearer ${token}`
    const URL = `${API_BASE_URL}/history/upload-image`
    let response = await fetch(URL, {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': AUTHTOKEN
      },
    });

    // Handle response
    if (response.ok) {
      Alert.alert('Upload Successful', 'Image uploaded successfully.');
      const resp = await response.json();
      return resp.data
    }
 
  } catch (error) {
    console.log(error.message)
  }
}










async function GetToken() {
  token = await AsyncStorage.getItem('AUTH_TOKEN')
  return token
}

export {
  LoginPost,
  RegisterPost,
  GetHistoryList,
  UploadImage
}