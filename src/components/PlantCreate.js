import React, { Component } from 'react';
import { connect } from 'react-redux';
import { plantUpdate, plantCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import PlantForm from './PlantForm';

class PlantCreate extends Component {

  onButtonPress() {
    const { type, variety_name, phone, shift } = this.props;

    this.props.plantCreate({ type, variety_name, phone, shift: shift || 'Monday' });
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
  const { type, variety_name, phone, shift } = state.plantForm;

  return { type, variety_name, phone, shift };
};

export default connect(mapStateToProps, {
  plantUpdate, plantCreate
 })(PlantCreate);
