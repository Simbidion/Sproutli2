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

        <Text style={styles.welcome}>
          Sproutli 2.0, search (back to top), menu {'\n'} {'\n'}
        </Text>
        <TextInput
          text={this.props.query}
          placeholder='Search'
          placeholderTextColor={COLOURS.GREY}
          defaultValue={this.props.query}
          style={styles.search}
          onChangeText={this.props.onChangeText}
          onSubmitEditing={this.props.onSubmitEditing}
          autoFocus={false} //Was true in v1.0
         />
        <Text style={styles.instructions}>
          location{'\n'}
        </Text>

        <VeganLevelSlider
          veganLevel={3}
          //veganLevel={this.props.veganLevel}
          //onSlidingComplete={this.props.onVeganLevelChanged.bind(this)}
         />
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
  search: {
    height: 44,
    marginHorizontal: 8,
    fontSize: 14,
    paddingHorizontal: 8,
    //borderColor: 'black',
    //borderWidth: 2,
  },
});

module.exports = Header;
