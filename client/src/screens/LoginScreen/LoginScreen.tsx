import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/users/login', {
        email,
        password,
      });
      // Assuming the response contains a token or some indication of successful login
      if (response.data) {
        // Navigate to the main app screen or dashboard
        navigation.navigate('Main');
      } else {
        Alert.alert('Login Failed', 'Invalid email or password');
      }
    } catch (error) {
      if (error.response.status === 401) {
        Alert.alert('Login Failed', 'Invalid email or password');
      } else {
        Alert.alert('Login Failed', error.message);
      }
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
    </View>
  );
};

export default LoginScreen;
