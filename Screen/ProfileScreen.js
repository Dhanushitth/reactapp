import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import Header from './Header'

export default function ProfileScreen({navigation}) {
  return (
    <View>
    <Header navigation={navigation}/>
    <View style={styles.centeredView}>
      <Text style={styles.text}>ProfileScreen</Text>
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
  color:'black'
},
});
