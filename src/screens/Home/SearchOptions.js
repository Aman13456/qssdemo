import React from 'react';
import {TouchableOpacity} from 'react-native';
import Popover from 'react-native-popover-view';
import PropTypes from 'prop-types';
import SearchOptionsMenuContent from './SearchOptionsMenuContent';

class SearchOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popoverVisible: false,
    };
  }

  onChangeSearchBy = (searchBy) => {
    this.setState({popoverVisible: false});
    this.props.onChangeSearchBy && this.props.onChangeSearchBy(searchBy);
  };

  openPopover = () => {
    this.setState({popoverVisible: true});
  };

  closePopover = () => {
    this.setState({popoverVisible: false});
  };

  render() {
    return (
      <Popover
        isVisible={this.state.popoverVisible}
        onRequestClose={this.closePopover}
        from={
          <TouchableOpacity onPress={this.openPopover}>
            {this.props.children}
          </TouchableOpacity>
        }>
        <SearchOptionsMenuContent
          searchOptions={this.props.searchOptions}
          onChangeSearchBy={this.onChangeSearchBy}
          selectedSearchBy={this.props.selectedSearchBy}
        />
      </Popover>
    );
  }
}

SearchOptions.propTypes = {
  searchOptions: PropTypes.object.isRequired,
  onChangeSearchBy: PropTypes.func,
  selectedSearchBy: PropTypes.string,
};

export default SearchOptions;
