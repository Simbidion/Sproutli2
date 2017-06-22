import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';

import VeganLevelSlider from './VeganLevelSlider';
import COLOURS from '../Constants/Colours';


class Header extends React.Component {
  render() {
    return(
      <View>

        <Text style={styles.header}>
          Sproutli 2.0, search (back to top), menu {'\n'}
        </Text>

      </View>
    );
  }
}


var styles = StyleSheet.create({
  header: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  },

});

module.exports = Header;
