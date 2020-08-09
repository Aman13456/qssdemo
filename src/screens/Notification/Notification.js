import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import NotificationHeader from './NotificationHeader';

class Notification extends React.Component {
  onBackIconClick = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <NotificationHeader onBackIconClick={this.onBackIconClick} />
        <View style={styles.body}>
          <Text>No Data</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default Notification;
