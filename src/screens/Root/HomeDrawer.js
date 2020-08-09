import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import Logout from '../Logout';
import HomeStack from './HomeStack';

const Drawer = createDrawerNavigator();

export default class HomeDrawer extends React.Component {
  render() {
    return (
      <Drawer.Navigator drawerType="back" initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeStack}
          options={{
            drawerIcon: () => (
              <Icon name="home-outline" color="#000" size={20} />
            ),
          }}
        />
        <Drawer.Screen
          name="Logout"
          component={Logout}
          options={{
            drawerIcon: () => (
              <Icon name="log-out-outline" color="#000" size={20} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }
}
