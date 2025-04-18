import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import { s } from "react-native-wind";
import StackNavigator from './helper/StackNavigator';

export default function App() {
  return (
  <StackNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
