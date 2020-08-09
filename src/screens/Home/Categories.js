import React from 'react';
import PropTypes from 'prop-types';
import {HorizontalList} from '../../components';
import CategoryCard from './CategoryCard';

class Categories extends React.Component {
  renderItem = ({item}) => <CategoryCard key={item._id} data={item} />;

  keyExtractor = (item) => item._id;

  render() {
    let {data, listProps} = this.props;
    return (
      <HorizontalList
        data={data}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        listProps={listProps}
      />
    );
  }
}

Categories.propTypes = {
  data: PropTypes.array.isRequired,
  listProps: PropTypes.object,
};

export default Categories;
