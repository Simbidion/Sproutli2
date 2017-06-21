import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
} from 'react-native';

import Listing from './Listing';
import Header from './Header';
import Footer from './Footer';


const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = 50;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0),
    };
  }

  render() {

    const headerTranslate = this.state.scrollY.interpolate({
      inputRange: [0, 450],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    });

    return(
      <View style={styles.container}>

        <Animated.View style={[styles.header, { height: headerTranslate }]}>
          <Header />
        </Animated.View>

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
    borderColor: 'black',
    borderWidth: 3,
  },

  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
  },

  scrollView: {
    flex: 1,
  //  marginTop: HEADER_MAX_HEIGHT,
    borderWidth: 2,
    backgroundColor: 'white',
  },
});

module.exports = App;
