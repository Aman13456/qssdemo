import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import AuthContext from '../Root/AuthContext';

class Login extends React.Component {
  static contextType = AuthContext;
  onLoginPress = () => {
    this.context.login();
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.onLoginPress}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  text: {
    color: '#fff',
  },
});

export default Login;
