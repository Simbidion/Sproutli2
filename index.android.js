import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './App/Components/App';

export default class Sproutli2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <App />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    borderColor: 'black',
    borderWidth: 3,
  },
});

AppRegistry.registerComponent('Sproutli2', () => Sproutli2);
