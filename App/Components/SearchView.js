import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
} from 'react-native';

import Listing from './Listing';
import SearchOptions from './SearchOptions'


const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 0;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

class SearchView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0),
    };
  }

  render() {

    const headerTranslate = this.state.scrollY.interpolate({
      inputRange: [0, 2*HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    });

    return(
      <View style={styles.container}>



        <Animated.ScrollView
          style={[styles.scrollView, { marginTop: headerTranslate }]}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
          )} >
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
        </Animated.ScrollView>


        <Animated.View style={[styles.options, { height: headerTranslate }]}>
          <SearchOptions />
        </Animated.View>

      </View>
    );
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    borderColor: 'black',
    borderWidth: 3,
  },

  options: {
    position: 'absolute',
    borderColor:'green',
    borderWidth:5,
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_MAX_HEIGHT,
    overflow: 'hidden',
  },

  scrollView: {
    flex: 1,
  //  marginTop: HEADER_MAX_HEIGHT,
    borderWidth: 2,
//    backgroundColor: 'white',
  },
});

module.exports = SearchView;
