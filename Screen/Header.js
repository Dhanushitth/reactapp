import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

export default function Header() {
    return (
        <View>
          <View style={styles.header}>
            {/* <Image source={require('../image/menu.png')} style={styles.menuIcon}/> */}
            <Image source={require('../image/log-.png')} style={styles.logo} />
            <Image source={require('../image/bell.png')} style={styles.bellIcon} />
          </View> 
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      
      header: {
        width: '100%',
        height: '55%',
        backgroundColor: '#3399FF',
        alignItems: 'center',
        justifyContent: 'center',
      },
      logo: {
        width: '30%',
        height: '60%',
      },
      bellIcon: {
        width: '8%',
        height: '25%',
        position: 'absolute',
        left: '90%', 
        top: '20%',  
      },
      menuIcon: {
        width: '8%',
        height: '25%',
        position: 'absolute',
        right: '90%', 
        top: '20%',  
      },
    });
    