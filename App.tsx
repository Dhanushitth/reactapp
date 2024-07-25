import * as React from 'react';
import { View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import OnboardingScreen from './Screen/OnboardingScreen';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import HomeScreen from './Screen/HomeScreen';
import ProfileScreen from './Screen/ProfileScreen';
import SettingsScreen from './Screen/SettingsScreen';
import Gallery from './Screen/Gallery';
import 'react-native-gesture-handler' 

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? require('./image/home.png')
              : require('./image/home.png');
          } else if (route.name === 'Profile') {
            iconName = focused
              ? require('./image/people.png')
              : require('./image/people.png');
          } else if (route.name === 'Setting') {
            iconName = focused
              ? require('./image/setting.png')
              : require('./image/setting.png');
          } else if (route.name === 'Jobs') {
            iconName = focused
              ? require('./image/work.png')
              : require('./image/work.png');
          }

          return (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image source={iconName} style={{ width: 24, height: 24, tintColor: focused ? '#007AFF' : '#8E8E93' }} />
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Jobs" component={Gallery} options={{ headerShown: false }} />
      <Tab.Screen name="Setting" component={SettingsScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="HomeTab">
      <Drawer.Screen name="HomeTab" component={HomeTabNavigator} options={{ headerShown: false }} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="HomeScreen" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


