import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


class Header extends React.Component {
  render() {
    return(
      <View>
        <Text style={styles.welcome}>
          Sproutli2, search button (back to top), menu button {'\n'} {'\n'}
        </Text>
        <Text style={styles.instructions}>
          search{'\n'} {'\n'} {'\n'}
          locaction{'\n'} {'\n'} {'\n'}
          Slider {'\n'} {'\n'}
        </Text>
      </View>
    );
  }
}


var styles = StyleSheet.create({
  welcome: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = Header;
