import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import debounce from 'lodash.debounce';
import HomeHeader from './HomeHeader';
import Highlights from './Highlights';
import Categories from './Categories';
import {
  getHighlights,
  getCategories,
  getVendors,
  searchVendorsByName,
  searchVendorsWithinDistance,
} from '../../utils/DataUtils';
import Vendors from './Vendors';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.vendors = getVendors();
    this.state = {
      vendorsToShow: this.vendors,
      searchText: '',
      searchBy: 'name',
    };
    this.categories = getCategories();
    this.highlights = getHighlights();
    this.filterVendorsBySearchText = debounce(
      this.filterVendorsBySearchText,
      100,
    );
  }

  onDrawerIconClick = () => {
    this.props.navigation.toggleDrawer();
  };

  onNotificationIconClick = () => {
    this.props.navigation.navigate('Notification');
  };

  filterVendorsBySearchText = () => {
    let {searchBy, searchText} = this.state;
    searchText = searchText || '';
    searchText = searchText.trim();
    if (searchBy === 'name') {
      let filteredVendors = searchVendorsByName(this.vendors, searchText);
      this.setState({vendorsToShow: filteredVendors});
    } else {
      if (searchText === '') {
        this.setState({vendorsToShow: this.vendors});
      } else {
        let filteredVendors = searchVendorsWithinDistance(
          this.vendors,
          Number(searchText),
        );
        this.setState({vendorsToShow: filteredVendors});
      }
    }
  };

  onChangeSearchValue = (text) => {
    let {searchBy} = this.state;
    if (searchBy === 'location' && isNaN(text)) {
      return;
    }
    this.setState({searchText: text}, () => {
      this.filterVendorsBySearchText();
    });
  };

  onChangeSearchBy = (searchBy) => {
    if (this.state.searchBy !== searchBy) {
      this.setState({searchBy, searchText: ''}, () => {
        this.filterVendorsBySearchText();
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <HomeHeader
          onDrawerIconClick={this.onDrawerIconClick}
          onNotificationIconClick={this.onNotificationIconClick}
          onChangeSearchValue={this.onChangeSearchValue}
          searchText={this.state.searchText}
          searchByField={this.state.searchBy}
          onChangeSearchBy={this.onChangeSearchBy}
        />
        <View style={styles.body}>
          <View style={styles.highlightsContainer}>
            <Highlights
              data={this.highlights}
              listProps={{contentContainerStyle: {paddingHorizontal: 12}}}
            />
          </View>
          <View style={styles.categoriesContainer}>
            <Categories
              data={this.categories}
              listProps={{contentContainerStyle: {paddingHorizontal: 12}}}
            />
          </View>
          <View style={styles.vendorsContainer}>
            <Vendors
              data={this.state.vendorsToShow}
              listProps={{
                contentContainerStyle: {
                  flex: this.state.vendorsToShow.length ? undefined : 1,
                  padding: 10,
                },
                ListEmptyComponent: (
                  <View style={styles.noVendorsContainer}>
                    <Text style={styles.noVendorsText}>No Vendors Found!</Text>
                  </View>
                ),
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
    flex: 1,
  },
  highlightsContainer: {
    marginVertical: 4,
  },
  categoriesContainer: {
    alignItems: 'center',
    marginVertical: 12,
  },
  vendorsContainer: {
    flex: 1,
  },
  noVendorsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noVendorsText: {
    fontSize: 16,
    color: 'grey',
  },
});

export default Home;
