import { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
const API_BASE_URL = "http://192.168.240.7:3000/api"


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

const ChangePasswordPost = async (currentPassword, newPassword, confirmPassword) => {
  if (newPassword !== confirmPassword) {
    console.log("New Password and Confirm Password is not same")
    Alert.alert("Failed", "New Password and Confirm Password are not same")
    return;
  }

  try {
    const URL = `${API_BASE_URL}/user/change-password`
    const token = await GetToken()
    const AUTHTOKEN = `Bearer ${token}`
    const response = await fetch(URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": AUTHTOKEN
      },
      body: JSON.stringify({ newPassword, currentPassword }),
    });

    if (!response.ok) {
      throw new Error('Process Failed! Please try again');
    }

    const resp = await response.json();
    Alert.alert('Password', 'Password has been changed successfully');
    return resp.data
  } catch (error) {
    console.error('Updation Error:', error);
    Alert.alert('Updation Error:', 'Failed to change password. Please try again.');
    return null
  }
}


const HistoryListItemRemoveDelete = async (id) => {
  try {
    const URL = `${API_BASE_URL}/history/${id}`
    const token = await GetToken()
    const response = await fetch(URL, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Could not delete list item');
    }

    const resp = await response.json();
    return resp.data
  } catch (error) {
    console.error('History Error:', error);
    return null
  }
}


const ForgetPasswordPost = async (email) => {
  try {
    const URL = `${API_BASE_URL}/auth/forgot-password`
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error('Recovery Failed! Please try again');
    }

    const resp = await response.json();
    return resp.data
  } catch (error) {
    console.error('Recovery Error:', error);
    return null
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
  UploadImage,
  ChangePasswordPost,
  HistoryListItemRemoveDelete,
  ForgetPasswordPost
}