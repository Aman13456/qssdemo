import React from 'react';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import styles from './SearchInput.styles';

function SearchInput({value, onChange, placeholder, icon, inputProps}) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name={icon} size={16} color="grey" />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          {...inputProps}
        />
      </View>
    </View>
  );
}

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  inputProps: PropTypes.object,
};

SearchInput.defaultProps = {
  value: '',
  onChange: () => {},
  placeholder: 'Type to search',
  icon: 'search-outline',
};

export default SearchInput;
