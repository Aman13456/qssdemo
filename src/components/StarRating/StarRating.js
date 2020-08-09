import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './StarRating.styles';

function StarRating({rating, iconSize, fillColor, outlineColor}) {
  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5].map((value) => {
        return (
          <View key={value} style={styles.ratingContainer}>
            {value > rating ? (
              <Icon name="star-outline" size={iconSize} color={outlineColor} />
            ) : (
              <Icon name="star" size={iconSize} color={fillColor} />
            )}
          </View>
        );
      })}
    </View>
  );
}

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  iconSize: PropTypes.number,
  fillColor: PropTypes.string,
  outlineColor: PropTypes.string,
};

StarRating.defaultProps = {
  rating: 0,
  iconSize: 12,
  fillColor: 'orange',
  outlineColor: 'grey',
};

export default StarRating;
