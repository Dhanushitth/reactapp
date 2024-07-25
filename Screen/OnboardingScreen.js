import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const OnboardingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../image/job.png')} 
        style={styles.image} 
      />
      <Text style={styles.title}>Welcome to SeekJob</Text>
      <Text style={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('Login')}      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonRegister} onPress={()=> navigation.navigate('Register')}>
        <Text style={styles.registerbuttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
    height:'100%'
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 30,
  },
  title: {
    fontSize: 40,
    fontWeight: 'light',
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    color: '#888',
    marginBottom: 30,
    fontSize:16
  },
  buttonLogin: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonRegister: {
    backgroundColor: '#ccc',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },

  registerbuttonText: {
    color: '#000',
    fontSize: 20,
  },
});

export default OnboardingScreen;
