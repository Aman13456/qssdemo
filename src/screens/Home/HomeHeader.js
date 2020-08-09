import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import {SearchInput} from '../../components';
import SearchOptions from './SearchOptions';

function HomeHeader({
  onDrawerIconClick,
  onNotificationIconClick,
  searchText,
  onChangeSearchValue,
  searchByField,
  onChangeSearchBy,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconContainerStyle}
        onPress={onDrawerIconClick}>
        <Icon name="menu-outline" color="#000" size={30} />
      </TouchableOpacity>
      <View style={styles.searchBarContainer}>
        <SearchInput
          value={searchText}
          onChange={onChangeSearchValue}
          icon={
            searchByField === 'name'
              ? 'document-text-outline'
              : 'location-outline'
          }
          placeholder={
            searchByField === 'name' ? 'Search by name' : 'Located within (kms)'
          }
          inputProps={searchByField === 'name' ? {} : {keyboardType: 'numeric'}}
        />
      </View>
      <SearchOptions
        searchOptions={{
          name: {label: 'Name', icon: 'document-text-outline'},
          location: {label: 'Location', icon: 'location-outline'},
        }}
        selectedSearchBy={searchByField}
        onChangeSearchBy={onChangeSearchBy}>
        <View style={styles.iconContainerStyle}>
          <Icon name="options-outline" color="#000" size={30} />
        </View>
      </SearchOptions>
      <TouchableOpacity
        style={styles.iconContainerStyle}
        onPress={onNotificationIconClick}>
        <Icon name="notifications-outline" color="#000" size={30} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 8,
  },
  iconContainerStyle: {
    padding: 8,
  },
  searchBarContainer: {
    flex: 1,
    padding: 4,
  },
});

HomeHeader.propTypes = {
  onDrawerIconClick: PropTypes.func,
  onNotificationIconClick: PropTypes.func,
  searchText: PropTypes.string,
  onChangeSearchValue: PropTypes.func,
  searchByField: PropTypes.string,
  onChangeSearchBy: PropTypes.func,
};

export default HomeHeader;
