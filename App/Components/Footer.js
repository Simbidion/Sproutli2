import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


class Footer extends React.Component {
  render() {
    return(
      <View>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          This is a footer
        </Text>
      </View>
    );
  }
}


var styles = StyleSheet.create({
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = Footer;
