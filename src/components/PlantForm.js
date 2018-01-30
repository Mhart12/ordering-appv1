import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { Calendar } from 'react-native-calendars';
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
            label="Name"
            placeholder="Ex. Poinsettia, Gerber Daisy"
            value={this.props.name}
            onChangeText={value => this.props.plantUpdate({ prop: 'name', value })}
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
            label="Pot Size"
            placeholder="Ex. 3in, 4.5in Black"
            value={this.props.pot_size}
            onChangeText={value => this.props.plantUpdate({ prop: 'pot_size', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Amount"
            placeholder="Ex. 10 flats, 50"
            value={this.props.amount}
            onChangeText={value => this.props.plantUpdate({ prop: 'amount', value })}
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
            <Calendar
              style={{
              }}
              selectedValue={this.props.day}
              onDayPress={value => this.props.plantUpdate({ prop: 'day', value })}
            />
          </View>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { type, name, variety_name, pot_size, amount, phone, day } = state.plantForm;

  return { type, name, variety_name, pot_size, amount, phone, day };
};

export default connect(mapStateToProps, { plantUpdate })(PlantForm);
