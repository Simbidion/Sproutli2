import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';

import VeganLevelSlider from './VeganLevelSlider';
import COLOURS from '../Constants/Colours';

class SearchOptions extends React.Component {
  render() {
    return(
      <View style={{ borderColor: 'blue', borderWidth: 2 }}>

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

         <TextInput
           placeholder='Place holder for GooglePlacesAutocomplete'
           placeholderTextColor={COLOURS.GREY}
           style={styles.search}
           autoFocus={false}
          />

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
  search: {
    height: 44,
    marginHorizontal: 8,
    fontSize: 14,
    paddingHorizontal: 8,
    //borderColor: 'black',
    //borderWidth: 2,
  },
});

module.exports = SearchOptions;
