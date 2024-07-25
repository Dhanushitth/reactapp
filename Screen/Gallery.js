import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import Header from '../Screen/Header'

export default function Gallery() {
  return (
    <View>
      <Header />
      <View style={styles.centeredView}>
        <Text style={styles.text}>JobsScreen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 
  centeredView: {
    top:'35%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});
