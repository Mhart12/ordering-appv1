import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { plantUpdate } from '../actions';
import { CardSection, Input } from './common';

class PlantForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Type"
            placeholder="Ex. Annual, Perennial"
            value={this.props.type}
            onChangeText={value => this.props.plantUpdate({ prop: 'type', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Variety Name"
            placeholder="Ex. Jester Red, Sunburst Yellow"
            value={this.props.variety_name}
            onChangeText={value => this.props.plantUpdate({ prop: 'variety_name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={value => this.props.plantUpdate({ prop: 'phone', value })}
          />
        </CardSection>

        <CardSection>
          <Text style={styles.pickerTextStyle}>
            Select Day
          </Text>
          <View style={{ flex: 2 }}>
            <Picker
              style={{ flex: 1 }}
              selectedValue={this.props.shift}
              onValueChange={value => this.props.plantUpdate({ prop: 'shift', value })}
            >
              <Picker.Item label="Monday" value="Monday" />
              <Picker.Item label="Tuesday" value="Tuesday" />
              <Picker.Item label="Wednesday" value="Wednesday" />
              <Picker.Item label="Thursday" value="Thursday" />
              <Picker.Item label="Friday" value="Friday" />
              <Picker.Item label="Saturday" value="Saturday" />
              <Picker.Item label="Sunday" value="Sunday" />
            </Picker>
          </View>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { type, variety_name, phone, shift } = state.plantForm;

  return { type, variety_name, phone, shift };
};

export default connect(mapStateToProps, { plantUpdate })(PlantForm);
