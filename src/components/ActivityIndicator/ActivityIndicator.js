import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import styles from './ActivityIndicator.styles';

function ActivityIndicatorView() {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        animating={true}
        color="white"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
}

export default ActivityIndicatorView;
