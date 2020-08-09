import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

function NotificationHeader({onBackIconClick}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconContainerStyle}
        onPress={onBackIconClick}>
        <Icon name="arrow-back-outline" color="#000" size={30} />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Notifications</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
  },
  iconContainerStyle: {
    padding: 8,
  },
  titleContainer: {
    flex: 1,
    padding: 8,
  },
  title: {
    color: '#000',
    fontSize: 22,
    lineHeight: 30,
  },
});

NotificationHeader.propTypes = {
  onBackIconClick: PropTypes.func,
};

export default NotificationHeader;
