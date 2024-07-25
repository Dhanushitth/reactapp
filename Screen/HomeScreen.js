import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';

export default function HomeScreen({navigation}) {
  return (
    <View>
      <Header navigation={navigation}/>
      <View style={styles.centeredView}>
        <Text style={styles.text}>HomeScreen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 
  centeredView: {
    top:'10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});
