import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, Text, TouchableOpacity, Alert } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullNameError, setFullNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const validateInputs = () => {
    let isValid = true;

    if (!fullName) {
      setFullNameError(true);
      isValid = false;
    } else {
      setFullNameError(false);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setEmailError(true);
      isValid = false;
    } else {
      setEmailError(false);
    }

    if (!password) {
      setPasswordError(true);
      isValid = false;
    } else {
      setPasswordError(false);
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError(true);
      isValid = false;
    } else {
      setConfirmPasswordError(false);
    }

    return isValid;
  };

  const handleRegister = () => {
    if (validateInputs()) {
      Alert.alert('Registration Successful');
    } 
    // else {
    //   Alert.alert('Please fix the errors and try again');
    // }
  };

  const getInputContainerStyle = (hasError) => ({
    ...styles.inputContainer,
    borderColor: hasError ? 'red' : '#ccc',
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require('../image/arrow_back.png')} style={styles.backButton} />
      </TouchableOpacity>
      <Text style={styles.title}>Register</Text>

      <View style={getInputContainerStyle(fullNameError)}>
        <Image source={require('../image/profile.webp')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Full name *"
          value={fullName}
          onChangeText={text => { setFullName(text); setFullNameError(false); }}
          placeholderTextColor="#888"
        />
      </View>
      {fullNameError && <Text style={styles.errorText}>Full name is required</Text>}

      <View style={getInputContainerStyle(emailError)}>
        <Image source={require('../image/mail.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="abc@email.com *"
          value={email}
          onChangeText={text => { setEmail(text); setEmailError(false); }}
          keyboardType="email-address"
          placeholderTextColor="#888"
        />
      </View>
      {emailError && <Text style={styles.errorText}>Valid email is required</Text>}

      <View style={getInputContainerStyle(passwordError)}>
        <Image source={require('../image/locks.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password *"
          value={password}
          onChangeText={text => { setPassword(text); setPasswordError(false); }}
          secureTextEntry
          placeholderTextColor="#888"
        />
        <TouchableOpacity>
          <Image source={require('../image/eyes.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      {passwordError && <Text style={styles.errorText}>Password is required</Text>}

      <View style={getInputContainerStyle(confirmPasswordError)}>
        <Image source={require('../image/locks.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password *"
          value={confirmPassword}
          onChangeText={text => { setConfirmPassword(text); setConfirmPasswordError(false); }}
          secureTextEntry
          placeholderTextColor="#888"
        />
        <TouchableOpacity>
          <Image source={require('../image/eyes.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      {confirmPasswordError && <Text style={styles.errorText}>Passwords must match</Text>}

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '5%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    right: '45%',
    height: 20,
    width: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: '5%',
    marginTop: '20%',
    color: 'black',
    fontWeight: 'bold',
    right: '38%',
  },
  input: {
    flex: 1,
    marginLeft: '5%',
    backgroundColor: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: '3%',
    marginVertical: '3%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    marginHorizontal: '5%',
  },
  icon: {
    width: 20,
    height: 20,
  },
  registerButton: {
    backgroundColor: '#CCC',
    paddingVertical: '5%',
    paddingHorizontal: '30%',
    borderRadius: 10,
    marginTop: '10%',
  },
  registerButtonText: {
    color: 'black',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    textAlign: 'left',
    marginLeft: '0%',
    marginVertical: '0%',
    width: '90%',
  },
});

export default RegisterScreen;
