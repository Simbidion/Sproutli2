import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
} from 'react-native';

import Listing from './Listing';

//note to Simon - use animatebar2 for heading animation

class App extends React.Component {
  render() {
    return(
      <View style={styles.scrollView}>
        <ScrollView>
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
        </ScrollView>
      </View>
    );
  }

}

var styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'grey',
  },
});

module.exports = App;
