import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import HomeScreen from './src/container/Home'
import SecondScreen from './src/container/SecondScreen'

const RootStack = createStackNavigator(
 {
   Home:HomeScreen,
   Second:SecondScreen
 },
 {
  initialRouteName:'Home'
 }
);

export default class App extends React.Component {
  render() {
    return (
      <RootStack/>
    );
  }
}
