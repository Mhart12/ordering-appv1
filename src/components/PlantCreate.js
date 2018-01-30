import React, { Component } from 'react';
import { connect } from 'react-redux';
import { plantUpdate, plantCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import PlantForm from './PlantForm';

class PlantCreate extends Component {

  onButtonPress() {
    const { type, name, variety_name, pot_size, amount, phone, day } = this.props;

    this.props.plantCreate({
      type, name, variety_name, pot_size, amount, phone, day: day || 'Monday' });
  }

  render() {
    return (
      <Card>
        <PlantForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { type, name, variety_name, pot_size, amount, phone, day } = state.plantForm;

  return { type, name, variety_name, pot_size, amount, phone, day };
};

export default connect(mapStateToProps, {
  plantUpdate, plantCreate
 })(PlantCreate);
