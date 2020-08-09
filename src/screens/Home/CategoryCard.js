import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

function CategoryCard({data: {_id, label, icon}}) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name={icon} size={30} color="pink" />
      </View>
      <Text>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 6,
  },
  iconContainer: {
    borderRadius: 50,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: '#fff',
    elevation: 2,
  },
});

CategoryCard.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryCard;
