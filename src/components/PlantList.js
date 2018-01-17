import React, { Component } from 'react';
import { View, Text } from 'react-native';

class PlantList extends Component {
  render() {
    return (
      <View>
        <Text>Annuals</Text>
        <Text>Perennials</Text>
        <Text>Vegetables</Text>
        <Text>Mums</Text>
        <Text>Tropicals</Text>
        <Text>Gift Plants</Text>
      </View>
    );
  }
}

export default PlantList;
