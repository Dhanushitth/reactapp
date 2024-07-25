import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const handleLogin = () => {
    let isValid = true;
    const newErrors = { username: '', password: '' };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!username) {
      newErrors.username = 'Username or Email is required.';
      isValid = false;
    } else if (!emailRegex.test(username)) {
      newErrors.username = 'Enter a valid email address.';
      isValid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required.';
      isValid = false;
    } else if (password.length <= 6) {
      newErrors.password = 'Password must be more than 6 characters.';
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
    } else {
      console.log('Logging in with', { username, password });
      navigation.navigate('HomeScreen'); 
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image source={require('../image/arrow_back.png')} style={{ width: 25, height: 20 }} />
      </TouchableOpacity>

      <Text style={styles.title}>Let’s Sign you in.</Text>
      <Text style={styles.subtitle}>Welcome back</Text>
      <Text style={styles.subtitle}>You’ve been missed!</Text>

      <View style={{ paddingVertical: 20 }}>
        <Text>Username or Email</Text>
        <TextInput
          placeholder="Enter Username or Email"
          value={username}
          onChangeText={setUsername}
          style={[styles.input, errors.username && { borderColor: 'red' }]}
        />
        {errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : null}
      </View>

      <View>
        <Text>Password</Text>
        <TextInput
          placeholder="Enter Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={[styles.input, errors.password && { borderColor: 'red' }]}
        />
        {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
      </View>

      <View style={styles.separatorContainer}>
        <View style={styles.separatorLine} />
        <Text style={styles.separatorText}>or</Text>
        <View style={styles.separatorLine} />
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>
          Don’t have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerLink}> Register</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 30,
    right: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 25,
    color: 'gray',
    top: 5,
  },
  input: {
    height: 50,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#CCC',
  },
  separatorText: {
    marginHorizontal: 10,
    color: 'gray',
  },
  loginButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
    top: 30,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
  },
  
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  registerText: {
    color: 'gray',
  },
  registerLink: {
    color: 'black',
  },
});

export default LoginScreen;
