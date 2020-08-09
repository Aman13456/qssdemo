import React from 'react';
import PropTypes from 'prop-types';
import {FlatList} from 'react-native';

function HorizontalList({data, renderItem, keyExtractor, listProps}) {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      horizontal
      showsHorizontalScrollIndicator={false}
      {...listProps}
    />
  );
}

HorizontalList.propTypes = {
  data: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  keyExtractor: PropTypes.func,
  listProps: PropTypes.object
};

export default HorizontalList;
