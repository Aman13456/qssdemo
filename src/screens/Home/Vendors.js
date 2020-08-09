import React from 'react';
import PropTypes from 'prop-types';
import {FlatList} from 'react-native';
import VendorCard from './VendorCard';

class Vendors extends React.Component {
  renderItem = ({item}) => <VendorCard key={item._id} data={item} />;

  keyExtractor = (item) => item._id;

  render() {
    let {data, listProps} = this.props;
    return (
      <FlatList
        data={data}
        numColumns={2}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        listProps={listProps}
        showsVerticalScrollIndicator={false}
        {...listProps}
      />
    );
  }
}

Vendors.propTypes = {
  data: PropTypes.array.isRequired,
  listProps: PropTypes.object,
};

export default Vendors;
