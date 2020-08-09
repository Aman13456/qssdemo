import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {ActivityIndicator} from '../../components';
import Login from '../Login';
import HomeDrawer from './HomeDrawer';
import {isLoggedIn, setLoggedIn, logout} from '../../utils/UserUtils';
import AuthContext from './AuthContext';

const Stack = createStackNavigator();

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    this.authContextValue = {
      login: this.login,
      logout: this.logout,
    };
  }

  componentDidMount() {
    isLoggedIn().then((res) => {
      this.setState({isLoggedIn: res, loading: false});
      SplashScreen.hide();
    });
  }

  login = () => {
    this.setState({loading: true});
    setLoggedIn().then((_) => {
      this.setState({isLoggedIn: true, loading: false});
    });
  };

  logout = () => {
    logout().then((_) => {
      this.setState({isLoggedIn: false, loading: false});
    });
  };

  render() {
    let {loading: loading, isLoggedIn} = this.state;
    if (loading) {
      return <ActivityIndicator />;
    }
    return (
      <NavigationContainer>
        <AuthContext.Provider value={this.authContextValue}>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            {isLoggedIn ? (
              <Stack.Screen name="Home" component={HomeDrawer} />
            ) : (
              <Stack.Screen name="Login" component={Login} />
            )}
          </Stack.Navigator>
        </AuthContext.Provider>
      </NavigationContainer>
    );
  }
}
