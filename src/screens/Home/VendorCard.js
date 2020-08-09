import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import {StarRating} from '../../components';

function VendorCard({
  data: {_id, name, coverImage, ratings, reviews, distance},
}) {
  return (
    <View style={styles.container}>
      <View style={styles.paddingContainer}>
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <View style={styles.overlay} />
            <Image
              style={styles.image}
              resizeMode="cover"
              source={{uri: coverImage}}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.name} numberOfLines={1}>
              {name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 4,
                alignItems: 'center',
              }}>
              {distance !== undefined && (
                <>
                  <Icon name="location-outline" size={12} color={'pink'} />
                  <Text style={styles.reviews}>{` ${distance} Kms `}</Text>
                </>
              )}
              <Text style={styles.reviews}>({`${reviews || 0} reviews`})</Text>
            </View>
            <View style={styles.ratingContainer}>
              <StarRating rating={ratings || 0} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  paddingContainer: {
    padding: 6,
  },
  content: {
    elevation: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    aspectRatio: 0.9,
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1,
  },
  image: {
    height: '100%',
    width: '100%',
    backgroundColor: 'grey',
  },
  infoContainer: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    elevation: 2,
  },
  name: {
    fontSize: 16,
    lineHeight: 16,
  },
  reviews: {
    color: 'rgb(200, 200, 200)',
    fontSize: 12,
    lineHeight: 12,
  },
  ratingContainer: {
    alignItems: 'flex-start',
  },
});

VendorCard.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    coverImage: PropTypes.string.isRequired,
    ratings: PropTypes.number,
    reviews: PropTypes.number,
    distance: PropTypes.number,
  }).isRequired,
};

export default VendorCard;
