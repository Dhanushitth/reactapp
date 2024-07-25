import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import Header from './Header'

export default function SettingsScreen({navigation}) {
  return (
    <View>
      <Header navigation={navigation}/>
      <View style={styles.centeredView}>
        <Text style={styles.text}>SettingsScreen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 
  centeredView: {
    top:350,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});
