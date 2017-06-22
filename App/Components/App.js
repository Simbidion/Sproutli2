import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Header from './Header';
import Footer from './Footer';
import SearchView from './SearchView';


const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = 50;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

class App extends React.Component {

  render() {
    return(

      <View style={styles.container}>
        <Header />
        <SearchView />
        <Footer />
      </View>
    );
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    borderColor: 'grey',
    borderWidth: 3,
  },

});

module.exports = App;
