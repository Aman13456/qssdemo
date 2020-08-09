import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

class SearchOptionsMenuContent extends React.Component {
  render() {
    let {
      searchOptions,
      selectedSearchBy,
      onChangeSearchBy,
      selectedItemColor,
      defaultItemColor,
    } = this.props;
    return (
      <View style={styles.container}>
        {Object.keys(searchOptions).map((searchBy) => {
          return (
            <TouchableOpacity
              key={searchBy}
              style={styles.rowContainer}
              onPress={() => {
                onChangeSearchBy && onChangeSearchBy(searchBy);
              }}>
              <View style={styles.iconContainer}>
                <Icon
                  name={searchOptions[searchBy].icon}
                  size={16}
                  color={
                    selectedSearchBy === searchBy
                      ? selectedItemColor
                      : defaultItemColor
                  }
                />
              </View>
              <View style={styles.labelContainer}>
                <Text
                  style={{
                    fontSize: 16,
                    color:
                      selectedSearchBy === searchBy
                        ? selectedItemColor
                        : defaultItemColor,
                  }}
                  numberOfLines={1}>
                  {searchOptions[searchBy].label}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 6,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: 150,
    padding: 4,
  },
  iconContainer: {
    paddingHorizontal: 2,
  },
  labelContainer: {
    paddingHorizontal: 2,
  },
});

SearchOptionsMenuContent.propTypes = {
  searchOptions: PropTypes.object.isRequired,
  selectedSearchBy: PropTypes.string,
  onChangeSearchBy: PropTypes.func,
  selectedItemColor: PropTypes.string,
  defaultItemColor: PropTypes.string,
};

SearchOptionsMenuContent.defaultProps = {
  onChangeSearchBy: () => {},
  selectedItemColor: 'pink',
  defaultItemColor: '#000',
};

export default SearchOptionsMenuContent;
