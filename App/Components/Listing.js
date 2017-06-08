import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Platform,
  PixelRatio,
  TouchableOpacity,
} from 'react-native';

import COLOURS from '../Constants/Colours';

var pixelRatio = PixelRatio.get();

class Listing extends React.Component {

  renderedVeganLevel() {
    return <Text style={styles.subTitle}>100% Vegan (except for the cat and dog)</Text>;
  }

  renderedLocation() {
    return <Text style={styles.subTitle}>Moorabbin</Text>;
  }

  renderedRating() {
    return <Text style={styles.subTitle}>4.5/5.0</Text>;
  }

  renderedTags() {
    return  <View style={styles.tagContainer}>
              <Text style={styles.tags}>#dirty</Text>
              <Text style={styles.tags}>#doghair</Text>
              <Text style={styles.tags}>#nachos</Text>
            </View>;
  }

  render() {
    var listing = (
        <View>
          <Text style={styles.title}>Simon's house</Text>
          { this.renderedVeganLevel() }
          { this.renderedRating() }
          { this.renderedLocation() }
          { this.renderedTags() }
        </View>
    );

    return (
      <TouchableOpacity style={styles.card} activeOpacity={0.8}>
        { listing }
      </TouchableOpacity>
    );
  }
}

var styles = StyleSheet.create({
  card: {
    //flex: 1,
    justifyContent: 'center',
    margin: 10,
    borderRadius: 3,
    borderWidth: 0.1,
    borderColor: COLOURS.GREY,
    padding: 10,
    paddingBottom: Platform.OS === 'ios' ? 10 : 0,
    backgroundColor: COLOURS.GREEN,
  },

  title: {
    fontSize: 20,
    textAlign: 'left',
    color: 'white',
    fontWeight: '200'
  },
  subTitle: {
    fontSize: 13,
    color: 'white',
    fontWeight: '300'
  },
  tags: {
    fontSize: pixelRatio === 3 ? 15 : 10,
    fontStyle: 'italic',
    color: 'white',
    paddingTop: 20,
    fontWeight: '200'
  },
  tagContainer: {
    flexDirection: 'row'
  },

});

module.exports = Listing;
