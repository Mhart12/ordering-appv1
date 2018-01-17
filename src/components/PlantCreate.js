import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { plantUpdate, plantCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class PlantCreate extends Component {

  onButtonPress() {
    const { type, variety_name, phone, shift } = this.props;

    this.props.plantCreate({ type, variety_name, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      <Card>
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

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
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

export default connect(mapStateToProps, {
  plantUpdate, plantCreate
 })(PlantCreate);
