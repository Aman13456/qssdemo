import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

function HighlightCard({data: {_id, name, price, image}}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: image}} resizeMode="cover" />
      <View style={styles.overlay}>
        <View style={styles.infoContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.name} numberOfLines={1}>
              {name}
            </Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{`$${price}`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 230,
    borderRadius: 10,
    marginHorizontal: 4,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'grey',
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
    borderRadius: 10,
    justifyContent: 'flex-end',
  },
  infoContainer: {
    padding: 8,
    flexDirection: 'row',
  },
  nameContainer: {
    flex: 1,
    padding: 4,
  },
  priceContainer: {
    padding: 4,
  },
  name: {
    color: '#fff',
    fontSize: 20,
  },
  price: {
    color: '#fff',
    fontSize: 20,
  },
});

HighlightCard.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default HighlightCard;
