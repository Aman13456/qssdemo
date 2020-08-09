import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Home';
import Notification from '../Notification';

const Stack = createStackNavigator();

export default class HomeStack extends React.Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Notification" component={Notification} />
      </Stack.Navigator>
    );
  }
}
