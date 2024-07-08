// ChangePasswordScreen.js
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Image } from 'react-native';

const ChangePassword = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChangePassword = () => {
        // Implement your change password logic here
        if (newPassword !== confirmPassword) {
            alert('New password and confirm password do not match.');
            return;
        }

        // Example: Here you would typically make an API call to change the password
        console.log('Change Password');
        console.log('Current Password:', currentPassword);
        console.log('New Password:', newPassword);
        console.log('Confirm Password:', confirmPassword);
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
                    placeholder="Current Password"
                    placeholderTextColor="#9E9E9E"
                    secureTextEntry={true}
                    value={currentPassword}
                    onChangeText={text => setCurrentPassword(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="New Password"
                    placeholderTextColor="#9E9E9E"
                    secureTextEntry={true}
                    value={newPassword}
                    onChangeText={text => setNewPassword(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirm New Password"
                    placeholderTextColor="#9E9E9E"
                    secureTextEntry={true}
                    value={confirmPassword}
                    onChangeText={text => setConfirmPassword(text)}
                />
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? '#4CAF50' : '#388E3C',
                        },
                        styles.changePasswordButton,
                    ]}
                    onPress={handleChangePassword}
                >
                    {({ pressed }) => (
                        <Text style={styles.buttonText}>Change Password</Text>
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
        width: 100,
        height: 50,
    },
    form: {
        marginTop: 10,
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
    changePasswordButton: {
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

export default ChangePassword;
