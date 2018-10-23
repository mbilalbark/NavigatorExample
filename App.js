import React from 'react';
import {createStackNavigator} from 'react-navigation';
import HomeScreen from './src/container/Home'
import SecondScreen from './src/container/SecondScreen'

const RootStack = createStackNavigator(
 {
   Home:HomeScreen,
   Second:SecondScreen
 },
 {
  initialRouteName:'Home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#89D0DF',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
 }
);

export default class App extends React.Component {
  render() {
    return (
      <RootStack/>
    );
  }
}
