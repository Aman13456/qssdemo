import React from 'react';
import PropTypes from 'prop-types';
import {HorizontalList} from '../../components';
import HighlightCard from './HighlightCard';

class Highlights extends React.Component {
  renderItem = ({item}) => <HighlightCard key={item._id} data={item} />;

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

Highlights.propTypes = {
  data: PropTypes.array.isRequired,
  listProps: PropTypes.object,
};

export default Highlights;
