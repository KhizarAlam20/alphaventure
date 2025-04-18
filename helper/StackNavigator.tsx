import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../components/screens/HomeScreen';
import DetailsScreen from '../components/screens/DetailsScreen';
import SplashScreen from '../components/screens/SplashScreen';

import { RootStackParamList } from '../helper/navigationTypes';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown:false}} />
      </Stack.Navigator>

      <StatusBar hidden={true}/>
    </NavigationContainer>
  );
};

export default StackNavigator;
